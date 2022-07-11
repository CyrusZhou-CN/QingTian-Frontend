<template>
  <BasicModal
    :width="900"
    v-bind="$attrs"
    @register="registerModal"
    :title="getTitle"
    @ok="handleSubmit"
  >
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, computed, unref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { formSchema } from './sysLogOp.data';
  import { sysLogOpDetail } from '/@/api/log/sysLogOpManage';

  export default defineComponent({
    name: 'SysLogOpModal',
    components: { BasicModal, BasicForm },
    setup() {
      const isUpdate = ref(true);
      const id = ref(0);

      const [registerForm, { resetFields, setFieldsValue, validate }] = useForm({
        labelWidth: 100,
        schemas: formSchema,
        showActionButtonGroup: false,
      });

      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        resetFields();
        setModalProps({ confirmLoading: false });
        isUpdate.value = !!data?.isUpdate;

        if (unref(isUpdate)) {
          id.value = data?.record?.id;
          const values = await sysLogOpDetail({ Id: id.value });

          setFieldsValue({
            ...values,
          });
        }
      });

      const getTitle = computed(() => (!unref(isUpdate) ? '新增操作日志表' : '编辑操作日志表'));

      async function handleSubmit() {
        try {
          const values = await validate();
          setModalProps({ confirmLoading: true });
          // TODO custom api
          if (!unref(isUpdate)) {
          } else {
            values.id = unref(id);
          }
          console.log(values);
          closeModal();
        } finally {
          setModalProps({ confirmLoading: false });
        }
      }

      return { registerModal, registerForm, getTitle, handleSubmit };
    },
  });
</script>
