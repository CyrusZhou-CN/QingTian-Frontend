<template>
  <BasicTable
    class="pointer"
    @register="registerTable"
    @row-click="rowClick"
    @columns-change="handleColumnsChange"
  >
    <template #toolbar>
      <a-button type="primary" @click="handleCreate">新增数据表</a-button>
    </template>
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'action'">
        <TableAction
          :actions="[
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
            {
              icon: 'ant-design:thunderbolt-outlined',
              tooltip: '生成实体',
              onClick: handleCreateEntity.bind(null, record),
            },
          ]"
        />
      </template>
    </template>
  </BasicTable>
  <TableModal @register="registerModal" @success="handleSuccess" />
  <CreateEntityModal @register="registerCreateEntityModal" @success="handleCreateEntitySuccess" />
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getTableInfoList, tableDelete } from '/@/api/gen/database';
  import { useModal } from '/@/components/Modal';
  import TableModal from './tableModal.vue';
  import CreateEntityModal from './createEntityModal.vue';

  import { columns } from './table.data';
  import { DbTableInfo } from '/@/api/gen/model/DbTableInfo';

  export default defineComponent({
    name: 'DataBaseTable',
    components: { BasicTable, TableModal, CreateEntityModal, TableAction },
    emits: ['select', 'register'],
    setup(_, { emit }) {
      const [registerModal, { openModal }] = useModal();
      const [registerCreateEntityModal, { openModal: openCreateEntityModal }] = useModal();
      const rowId = ref('');
      const [
        registerTable,
        {
          reload,
          updateTableDataRecord,
          // deleteTableDataRecord,
          clearSelectedRowKeys,
          setSelectedRowKeys,
        },
      ] = useTable({
        api: getTableInfoList,
        columns,
        rowKey: 'name',
        useSearchForm: false,
        showIndexColumn: false,
        showTableSetting: true,
        rowClassName: setRowClass,
        bordered: true,
        pagination: { pageSizeOptions: ['15', '30', '60', '120'], pageSize: 15 },
        actionColumn: {
          width: 120,
          title: '操作',
          dataIndex: 'action',
        },
      });

      function rowClick(record, index) {
        clearSelectedRowKeys();
        setSelectedRowKeys([record.name]);
        rowId.value = record.name;
        console.log(index);
        emit('select', record.name);
      }

      function setRowClass(record: any) {
        return record.name === rowId.value ? 'ant-table-row-selected' : '';
      }

      function handleCreate() {
        openModal(true, {
          isUpdate: false,
          success: handleSuccess,
        });
      }

      function handleEdit(record: Recordable) {
        console.log(record);
        openModal(true, {
          record,
          isUpdate: true,
          success: handleSuccess,
        });
      }

      async function handleDelete(record: DbTableInfo) {
        console.log(record);
        await tableDelete(record);
        // deleteTableDataRecord(record.name); // 不刷新删除行
        reload();
      }
      function handleSuccess({ isUpdate, values }) {
        if (isUpdate) {
          const result = updateTableDataRecord(values.oldName, values);
          clearSelectedRowKeys();
          setSelectedRowKeys([values.name]);
          console.log(result);
        } else {
          reload();
        }
      }

      function handleCreateEntity(record: Recordable) {
        openCreateEntityModal(true, {
          record,
          success: handleCreateEntitySuccess,
        });
      }
      function handleCreateEntitySuccess({ values }) {
        console.log(values);
        reload();
      }
      function handleColumnsChange(record: any) {
        console.log(record);
      }
      return {
        registerTable,
        registerModal,
        handleCreate,
        handleEdit,
        handleDelete,
        handleSuccess,
        handleCreateEntity,
        handleColumnsChange,
        registerCreateEntityModal,
        handleCreateEntitySuccess,
        rowClick,
      };
    },
  });
</script>
