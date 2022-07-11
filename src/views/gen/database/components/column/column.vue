<template>
  <BasicTable @register="registerTable" :searchInfo="searchInfo">
    <template #toolbar>
      <a-button type="primary" v-if="searchInfo.tableName" @click="handleCreate"
        >新增({{ searchInfo.tableName }})数据列</a-button
      >
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
          ]"
        />
      </template>
    </template>
  </BasicTable>
  <ColumnModal @register="registerModal" @success="handleSuccess" />
</template>
<script lang="ts">
  import { defineComponent, reactive } from 'vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getColumnInfoList, columnDelete } from '/@/api/gen/database';
  import { useModal } from '/@/components/Modal';

  import ColumnModal from './columnModal.vue';
  import { columns } from './column.data';

  export default defineComponent({
    name: 'DataBaseColumn',
    components: { ColumnModal, BasicTable, TableAction },
    setup() {
      const searchInfo = reactive<Recordable>({});
      const onTableName = (tableName: string) => {
        searchInfo.tableName = tableName;
        searchInfo.pagination = false;
        reload();
      };
      const [registerModal, { openModal }] = useModal();
      const [registerTable, { reload, updateTableDataRecord, deleteTableDataRecord }] = useTable({
        api: getColumnInfoList,
        rowKey: 'dbColumnName',
        columns,
        useSearchForm: false,
        showIndexColumn: false,
        showTableSetting: true,
        bordered: true,
        pagination: false,
        actionColumn: {
          width: 120,
          title: '操作',
          dataIndex: 'action',
        },
      });

      function handleCreate() {
        openModal(true, {
          tableName: searchInfo.tableName,
          isUpdate: false,
        });
      }

      function handleEdit(record: Recordable) {
        console.log(record);
        openModal(true, {
          tableName: searchInfo.tableName,
          record,
          isUpdate: true,
        });
      }

      async function handleDelete(record: Recordable) {
        console.log(record);
        console.log(searchInfo.tableName);
        const values = {
          tableName: searchInfo.tableName,
          dbColumnName: record.dbColumnName,
        };
        await columnDelete(values);
        deleteTableDataRecord(record.dbColumnName);
      }

      function handleSuccess({ isUpdate, values }) {
        if (isUpdate) {
          const result = updateTableDataRecord(values.oldName, values);
          console.log(result);
        } else {
          reload();
        }
      }

      return {
        registerTable,
        registerModal,
        handleCreate,
        handleEdit,
        handleDelete,
        handleSuccess,
        searchInfo,
        onTableName,
      };
    },
  });
</script>
