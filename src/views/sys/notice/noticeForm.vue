<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle">
    <template #footer>
      <a-button type="primary" danger @click="handleSubmit(0)">存为草稿</a-button>
      <a-button type="primary" @click="handleSubmit(1)">发布</a-button>
      <a-button @click="handleCancel">取消</a-button>
    </template>
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, computed, unref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { formSchema } from './notice.data';

  import { sysNoticeAdd, sysNoticeDetail, sysNoticeEdit } from '/@/api/sys/notice';
  export default defineComponent({
    name: 'SysNoticeModal',
    components: { BasicModal, BasicForm },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const id = ref(0);

      const [registerForm, { resetFields, setFieldsValue, validate }] = useForm({
        labelWidth: 100,
        schemas: formSchema,
        showActionButtonGroup: false,
      });

      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        resetFields();
        setModalProps({ confirmLoading: false, width: 1200 });
        isUpdate.value = !!data?.isUpdate;

        if (unref(isUpdate)) {
          id.value = data?.record?.id;
          const values = await sysNoticeDetail({ id: id.value });
          setFieldsValue({
            ...values,
          });
        }
      });

      const getTitle = computed(() => (!unref(isUpdate) ? '新增通知消息' : '编辑通知消息'));

      async function handleSubmit(status: number) {
        try {
          const values = await validate();
          setModalProps({ confirmLoading: true });
          // TODO custom api
          if (!unref(isUpdate)) {
            values.status = 1;
            await sysNoticeAdd(values);
          } else {
            values.id = unref(id);
            values.status = status;
            await sysNoticeEdit(values);
          }
          console.log(values);
          closeModal();
          emit('success');
        } finally {
          setModalProps({ confirmLoading: false });
        }
      }
      function handleCancel() {
        closeModal();
        emit('success');
      }

      return {
        handleCancel,
        registerModal,
        registerForm,
        getTitle,
        handleSubmit,
      };
    },
  });
</script>
