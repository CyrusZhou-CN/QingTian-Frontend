<template>
  <BasicModal v-bind="$attrs" @register="registerModal" title="配置实体名" @ok="handleSubmit">
    <span style="color: red">会覆盖同一路径下的同名文件，慎重。生成完需要重新编译！</span>
    <br />
    <span style="color: red">基类不知道什么意思的去看项目里面这四个类！</span>
    <Divider plain orientation="left">配置实体名</Divider>
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script lang="ts">
  import { BasicForm, useForm } from '/@/components/Form';
  import { defineComponent, ref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { createEntitySchema } from './table.data';
  import { Card, Divider } from 'ant-design-vue';
  import { createEntity } from '/@/api/gen/database';

  export default defineComponent({
    name: 'CreateEntityModal',
    components: { Divider, BasicForm, BasicModal, [Card.name]: Card },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const tableName = ref('');
      const [registerForm, { resetFields, setFieldsValue, validate }] = useForm({
        labelWidth: 100,
        schemas: createEntitySchema,
        showActionButtonGroup: false,
      });

      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        resetFields();
        tableName.value = data?.record.name;
        console.log(ToHump(data?.record.name));
        setModalProps({ confirmLoading: false });
        setFieldsValue({
          ...ToHump(data?.record.name),
        });
      });

      const handleSubmit = async () => {
        try {
          setModalProps({ confirmLoading: true });
          // TODO custom api
          const values = await validate();
          values.tableName = tableName.value;
          await createEntity(values);
          emit('success', { values: values });
          closeModal();
        } finally {
          setModalProps({ confirmLoading: false });
        }
      };

      const ToHump = (value: string) => {
        const strs = value.split('_');
        let str = '';
        for (let j = 0; j < strs.length; j++) {
          var temp = strs[j];
          var temp1 = temp[0].toUpperCase();
          var temp2 = '';
          temp2 = temp1 + temp.substring(1, temp.length);
          str += temp2;
        }
        return { entityName: str };
      };

      return {
        registerForm,
        registerModal,
        handleSubmit,
      };
    },
  });
</script>
