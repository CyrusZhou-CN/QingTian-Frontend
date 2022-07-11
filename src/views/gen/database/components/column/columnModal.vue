<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <Divider plain orientation="left">数据列信息</Divider>
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script lang="ts">
  import { BasicForm, useForm } from '/@/components/Form';
  import { defineComponent, ref, computed, unref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { addFormSchema, editFormSchema } from './column.data';
  import { Card, Divider } from 'ant-design-vue';
  import { columnAdd, columnEdit } from '/@/api/gen/database';

  export default defineComponent({
    name: 'ColumnEditPage',
    components: { Divider, BasicForm, BasicModal, [Card.name]: Card },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const oldName = ref('');
      const tableName = ref('');
      const [registerForm, { resetFields, setFieldsValue, validate, resetSchema }] = useForm({
        labelWidth: 100,
        showActionButtonGroup: false,
      });

      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        resetFields();
        isUpdate.value = !!data?.isUpdate;
        tableName.value = data?.tableName;
        oldName.value = data?.record?.dbColumnName;
        console.log('data:');
        console.log(data);
        setModalProps({ confirmLoading: false });
        if (unref(isUpdate)) {
          resetSchema(editFormSchema);
          setFieldsValue({
            ...data.record,
          });
        } else {
          resetSchema(addFormSchema);
        }
      });

      const getTitle = computed(() => (!unref(isUpdate) ? '新增数据列' : '编辑数据列'));

      async function handleSubmit() {
        try {
          setModalProps({ confirmLoading: true });
          // TODO custom api
          const values = await validate();
          if (!unref(isUpdate)) {
            values.tableName = tableName.value;
            await columnAdd(values);
            emit('success', { isUpdate: unref(isUpdate), values: values });
          } else {
            values.tableName = tableName.value;
            values.oldName = oldName.value;
            await columnEdit(values);
            emit('success', { isUpdate: unref(isUpdate), values: values });
          }
          closeModal();
        } finally {
          setModalProps({ confirmLoading: false });
        }
      }

      return {
        isUpdate,
        registerForm,
        getTitle,
        registerModal,
        handleSubmit,
        oldName,
      };
    },
  });
</script>
<style lang="less" scoped>
  .high-form {
    padding-bottom: 48px;
  }
</style>
