<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, computed, unref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { formSchema } from './organize.data';

  import { sysOrganizeTree, sysOrganizeAdd, sysOrganizeEdit } from '/@/api/sys/organize';
  export default defineComponent({
    name: 'OrganizeModal',
    components: { BasicModal, BasicForm },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const id = ref(0);

      const [registerForm, { resetFields, setFieldsValue, updateSchema, validate }] = useForm({
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
          setFieldsValue({
            ...data.record,
          });
        }
        const treeData = await sysOrganizeTree();
        treeData.unshift({ id: '0', name: '顶级' });
        updateSchema({
          field: 'pid',
          componentProps: { treeData },
        });
      });

      const getTitle = computed(() => (!unref(isUpdate) ? '新增组织' : '编辑组织'));

      const handleSubmit = async () => {
        try {
          const values = await validate();
          setModalProps({ confirmLoading: true });
          // TODO custom api
          if (!unref(isUpdate)) {
            await sysOrganizeAdd(values);
          } else {
            values.id = unref(id);
            await sysOrganizeEdit(values);
          }
          console.log(values);
          closeModal();
          emit('success');
        } finally {
          setModalProps({ confirmLoading: false });
        }
      };

      return { registerModal, registerForm, getTitle, handleSubmit };
    },
  });
</script>
