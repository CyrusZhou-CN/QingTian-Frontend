<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <Divider plain orientation="left">数据表信息</Divider>
    <BasicForm @register="registerForm" />
    <Divider plain v-if="!isUpdate" orientation="left">数据列信息</Divider>
    <ColumnTable v-if="!isUpdate" ref="columnTableRef" />
  </BasicModal>
</template>
<script lang="ts">
  import { BasicForm, useForm } from '/@/components/Form';
  import { defineComponent, ref, computed, unref } from 'vue';
  import ColumnTable from './columnTable.vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { formSchema } from './table.data';
  import { Card, Divider } from 'ant-design-vue';
  import { tableAdd, tableEdit } from '/@/api/gen/database';

  export default defineComponent({
    name: 'TableAddEditPage',
    components: { Divider, BasicForm, ColumnTable, BasicModal, [Card.name]: Card },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const tableName = ref('');
      const [registerForm, { resetFields, setFieldsValue, validate }] = useForm({
        labelWidth: 100,
        schemas: formSchema,
        showActionButtonGroup: false,
      });

      const [registerModal, { setModalProps, closeModal }] = useModalInner((data) => {
        resetFields();
        isUpdate.value = !!data?.isUpdate;
        tableName.value = data?.record?.name;
        console.log('data:');
        console.log(data);
        setModalProps({ confirmLoading: false });
        if (unref(isUpdate)) {
          setModalProps({ width: 520 });
          setFieldsValue({
            ...data.record,
          });
        } else {
          setModalProps({ width: 1200 });
        }
      });

      const columnTableRef = ref<any>();
      const getTitle = computed(() => (!unref(isUpdate) ? '新增数据表' : '编辑数据表'));

      const handleSubmit = async () => {
        try {
          setModalProps({ confirmLoading: true });
          // TODO custom api
          const values = await validate();
          if (!unref(isUpdate)) {
            values.dbColumnInfoList = columnTableRef.value.getDataSource();
            await tableAdd(values);
            columnTableRef.value?.removeAll();
            emit('success', { isUpdate: unref(isUpdate), values: values });
          } else {
            const editValues = {
              oldName: tableName.value,
              name: values.name,
              description: values.description,
            };
            await tableEdit(editValues);
            emit('success', { isUpdate: unref(isUpdate), values: editValues });
          }
          closeModal();
        } finally {
          setModalProps({ confirmLoading: false });
        }
      };

      return {
        isUpdate,
        registerForm,
        getTitle,
        registerModal,
        handleSubmit,
        columnTableRef,
        tableName,
      };
    },
  });
</script>
<style lang="less" scoped>
  .high-form {
    padding-bottom: 48px;
  }
</style>
