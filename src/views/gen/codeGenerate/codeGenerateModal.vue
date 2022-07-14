<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, computed, unref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { formSchema } from './codeGenerate.data';
  import { sysMenuList } from '/@/api/sys/menu';
  import { codeGenerateAdd, codeGenerateEdit } from '/@/api/gen/codeGenerate';

  export default defineComponent({
    name: 'CodeGenerateModal',
    components: { BasicModal, BasicForm },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const id = ref(0);

      const [registerForm, { setFieldsValue, updateSchema, resetFields, validate }] = useForm({
        labelWidth: 100,
        schemas: formSchema,
        showActionButtonGroup: false,
        actionColOptions: {
          span: 23,
        },
      });

      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        resetFields();
        setModalProps({ confirmLoading: false });
        isUpdate.value = !!data?.isUpdate;

        if (unref(isUpdate)) {
          id.value = data?.record?.id;
          setFieldsValue({
            ...data.record,
          });
        }

        const treeData = await sysMenuList();
        treeData.unshift({ id: '0', name: '顶级' });
        updateSchema({
          field: 'menuPid',
          componentProps: { treeData },
        });
      });

      const getTitle = computed(() => (!unref(isUpdate) ? '新增代码生成配置' : '编辑代码生成配置'));

      const handleSubmit = async () => {
        try {
          const values = await validate();
          setModalProps({ confirmLoading: true });
          if (!unref(isUpdate)) {
            await codeGenerateAdd(values);
          } else {
            values.id = unref(id);
            await codeGenerateEdit(values);
          }
          console.log(values);
          closeModal();
          emit('success', { isUpdate: unref(isUpdate), values: { ...values, id: id.value } });
        } finally {
          setModalProps({ confirmLoading: false });
        }
      };

      return { registerModal, registerForm, getTitle, handleSubmit };
    },
  });
</script>
