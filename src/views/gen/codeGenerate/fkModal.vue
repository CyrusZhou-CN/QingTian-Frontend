<template>
  <BasicModal v-bind="$attrs" @register="registerModal" title="选择外键关系" @ok="handleSubmit">
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { columnNameComponentProps, fkformSchema } from './codeGenerate.data';
  import { Recordable } from 'vite-plugin-mock';
  import { codeGenerateColumnList } from '/@/api/gen/codeGenerate';

  export default defineComponent({
    name: 'FkModal',
    components: { BasicModal, BasicForm },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      let record: Recordable;
      const [registerForm, { resetFields, validate, setFieldsValue, updateSchema }] = useForm({
        labelWidth: 100,
        schemas: fkformSchema,
        showActionButtonGroup: false,
      });

      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        resetFields();
        setModalProps({ confirmLoading: false });
        record = data.record;

        if (data.record.fkEntityName && data.record.fkColumnName) {
          setFieldsValue({
            ...{
              columnName: data.record.fkColumnName,
              entityName: data.record.fkEntityName,
              netType: data.record.fkColumnNetType,
            },
          });

          const optionsData = await codeGenerateColumnList({
            entityName: data.record.fkEntityName,
          });
          updateSchema({
            field: 'columnName',
            ...columnNameComponentProps(optionsData),
          });
        }
      });

      const handleSubmit = async () => {
        try {
          const values = await validate();
          setModalProps({ confirmLoading: true });

          console.log(values);
          record.fkColumnName = values.columnName;
          record.fkEntityName = values.entityName;
          record.fkColumnNetType = values.netType;

          closeModal();
          emit('success', { record });
        } finally {
          setModalProps({ confirmLoading: false });
        }
      };

      return { registerModal, registerForm, handleSubmit };
    },
  });
</script>
