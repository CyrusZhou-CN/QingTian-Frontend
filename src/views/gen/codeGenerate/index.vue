<template>
  <template v-if="isShow">
    <BasicTable class="pointer" @register="registerTable" @row-click="rowClick">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate">新增</a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'ant-design:code-filled',
                tooltip: '开始生成',
                onClick: runLocalCodeGenerate.bind(null, record),
              },
              {
                icon: 'ant-design:setting-outlined',
                tooltip: '配置',
                onClick: handleConfig.bind(null, record),
              },
              {
                icon: 'clarity:note-edit-line',
                tooltip: '编辑',
                onClick: handleEdit.bind(null, record),
              },
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                tooltip: '删除',
                popConfirm: {
                  title: '是否确认删除',
                  confirm: handleDelete.bind(null, record),
                },
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <CodeGenerateModal @register="registerModal" @success="handleSuccess" />
  </template>
  <CodeGenerateDetail @detail="handleCloseDetail" ref="openDetail" />
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import {
    codeGeneratePage,
    codeGenerateDelete,
    codeGenerateRunLocal,
  } from '/@/api/gen/codeGenerate';
  import { useModal } from '/@/components/Modal';
  import { columns, searchFormSchema } from './codeGenerate.data';
  import CodeGenerateModal from './codeGenerateModal.vue';
  import CodeGenerateDetail from './codeGenerateDetail.vue';
  import { message } from 'ant-design-vue';

  export default defineComponent({
    name: 'CodeGenerateManage',
    components: { BasicTable, CodeGenerateModal, CodeGenerateDetail, TableAction },
    emits: ['select'],
    setup(_, { emit }) {
      const [registerModal, { openModal }] = useModal();
      const rowId = ref('');
      const openDetail = ref<any>();
      const isShow = ref(true);
      const [
        registerTable,
        {
          reload,
          updateTableDataRecord,
          deleteTableDataRecord,
          clearSelectedRowKeys,
          setSelectedRowKeys,
        },
      ] = useTable({
        api: codeGeneratePage,
        columns,
        rowKey: 'id',
        useSearchForm: true,
        showIndexColumn: false,
        showTableSetting: true,
        rowClassName: setRowClass,
        bordered: true,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
        },
        actionColumn: {
          width: 120,
          title: '操作',
          dataIndex: 'action',
        },
      });

      const rowClick = (record, index) => {
        clearSelectedRowKeys();
        setSelectedRowKeys([record.name]);
        rowId.value = record.name;
        console.log('row:' + index);
        emit('select', record.name);
      };

      function setRowClass(record: Recordable) {
        return record.name === rowId.value ? 'ant-table-row-selected' : '';
      }

      const handleCreate = () => {
        openModal(true, {
          isUpdate: false,
          success: handleSuccess,
        });
      };

      const handleConfig = (record: Recordable) => {
        console.log(record);
        isShow.value = false;
        openDetail.value.open(record.id);
      };

      const handleEdit = (record: Recordable) => {
        console.log(record);
        openModal(true, {
          record,
          isUpdate: true,
          success: handleSuccess,
        });
      };

      const handleDelete = async (record: Recordable) => {
        console.log(record);
        await codeGenerateDelete([{ id: record.id }]);
        deleteTableDataRecord(record.id); // 不刷新删除行
        reload();
      };

      const runLocalCodeGenerate = async (record: Recordable) => {
        const res = await codeGenerateRunLocal(record);
        console.log(res);
        if (res.success) {
          message.success('生成成功');
        } else {
          message.error('生成失败：' + res.message);
        }
      };

      const handleCloseDetail = (record: Recordable) => {
        console.log(record);
        isShow.value = true;
      };

      const handleSuccess = ({ isUpdate, values }) => {
        if (isUpdate) {
          const result = updateTableDataRecord(values.id, values);
          clearSelectedRowKeys();
          setSelectedRowKeys([values.id]);
          console.log(result);
        } else {
          reload();
        }
      };

      return {
        registerTable,
        registerModal,
        handleCloseDetail,
        runLocalCodeGenerate,
        isShow,
        openDetail,
        handleCreate,
        handleConfig,
        handleEdit,
        handleDelete,
        handleSuccess,
        rowClick,
      };
    },
  });
</script>
