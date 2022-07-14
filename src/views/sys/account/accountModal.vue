<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <a-divider orientation="left">基本信息</a-divider>
    <BasicForm @register="registerForm">
      <template #sysEmpParam="{ model, field }">
        <a-divider orientation="left">员工信息</a-divider>
        <FormItem
          :wrapper-col="{ span: 14, offset: 4 }"
          style="width: 100%"
          label="机构"
          :rules="{ required: true, message: '请选择机构', trigger: 'change' }"
          hasFeedback
        >
          <a-tree-select
            v-model:value="model[field]"
            style="width: 100%"
            :dropdownStyle="{ maxHeight: '300px', overflow: 'auto' }"
            :tree-data="orgTree"
            placeholder="请选择机构"
            :replaceFields="{ label: 'name', value: 'id' }"
            @change="(e) => initrOrgName(e)"
          />
        </FormItem>
      </template>
    </BasicForm>
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, computed, unref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { accountFormSchema } from './account.data';
  import { sysUserEdit, sysUserAdd, getAccountDetail } from '/@/api/sys/user';
  import { sysOrganizeTree } from '/@/api/sys/organize';
  import { TreeSelect, Card, Divider, Descriptions } from 'ant-design-vue';

  export default defineComponent({
    name: 'AccountModal',
    components: {
      BasicModal,
      [Divider.name]: Divider,
      [Card.name]: Card,
      ATreeSelect: TreeSelect,
      BasicForm,
      [Descriptions.name]: Descriptions,
    },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const id = ref(0);
      const orgTree = ref();
      const [registerForm, { setFieldsValue, updateSchema, resetFields, validate }] = useForm({
        labelWidth: 100,
        schemas: accountFormSchema,
        showActionButtonGroup: false,
        actionColOptions: {
          span: 23,
        },
      });

      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        resetFields();
        setModalProps({ confirmLoading: false });
        isUpdate.value = !!data?.isUpdate;
        orgTree.value = await sysOrganizeTree();
        if (unref(isUpdate)) {
          id.value = data.record.id;
          const accountData = getAccountDetail(data.record.id);
          setFieldsValue({
            ...accountData,
          });
        }

        updateSchema([
          {
            field: 'password',
            ifShow: !unref(isUpdate),
          },
          {
            field: 'confirm',
            ifShow: !unref(isUpdate),
          },
        ]);
      });

      const getTitle = computed(() => (!unref(isUpdate) ? '新增账号' : '编辑账号'));
      const initrOrgName = (value) => {};
      const handleSubmit = async () => {
        try {
          const values = await validate();
          setModalProps({ confirmLoading: true });
          // TODO custom api
          if (!unref(isUpdate)) {
            sysUserAdd(values);
          } else {
            values.id = unref(id);
            sysUserEdit(values);
          }
          console.log(values);
          closeModal();
          emit('success', { isUpdate: unref(isUpdate), values });
        } finally {
          setModalProps({ confirmLoading: false });
        }
      };

      return { orgTree, initrOrgName, registerModal, registerForm, getTitle, handleSubmit };
    },
  });
</script>
