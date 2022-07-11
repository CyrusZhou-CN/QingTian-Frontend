<template>
  <template v-if="accountIndexShow">
    <BasicTable @register="registerTable" :searchInfo="searchInfo">
      <template #toolbar>
        <a-button preIcon="ant-design:user-add-outlined" type="primary" @click="handleCreate"
          >新增账号</a-button
        >
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'ant-design:profile-outlined',
                tooltip: '查看用户详情',
                onClick: handleOpenDetail.bind(null, record),
              },
              {
                icon: 'clarity:note-edit-line',
                tooltip: '编辑用户资料',
                onClick: handleEdit.bind(null, record),
              },
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                tooltip: '删除此账号',
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
    <AccountModal @register="registerModal" @success="handleSuccess" />
  </template>
  <AccountDetail @detail="handleCloseDetail" ref="openDetail" />
</template>
<script lang="ts">
  import { defineComponent, reactive, ref } from 'vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getAccountList, sysUserDelete } from '/@/api/sys/user';

  import { useModal } from '/@/components/Modal';
  import AccountModal from './accountModal.vue';

  import { columns, searchFormSchema } from './account.data';
  import AccountDetail from './accountDetail.vue';

  export default defineComponent({
    name: 'AccountManagement',
    components: { BasicTable, AccountDetail, AccountModal, TableAction },
    setup() {
      const accountIndexShow = ref(true);
      const openDetail = ref<any>();
      const [registerModal, { openModal }] = useModal();
      const searchInfo = reactive<Recordable>({});
      const [registerTable, { reload, updateTableDataRecord }] = useTable({
        title: '账号列表',
        api: getAccountList,
        rowKey: 'id',
        columns,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
          autoSubmitOnEnter: true,
        },
        useSearchForm: true,
        showTableSetting: true,
        bordered: true,
        handleSearchInfoFn(info) {
          console.log('handleSearchInfoFn', info);
          return info;
        },
        actionColumn: {
          width: 120,
          title: '操作',
          dataIndex: 'action',
        },
      });

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

      async function handleDelete(record: Recordable) {
        console.log(record);
        await sysUserDelete(record);
        reload();
      }

      function handleSuccess({ isUpdate, values }) {
        if (isUpdate) {
          // 演示不刷新表格直接更新内部数据。
          // 注意：updateTableDataRecord要求表格的rowKey属性为string并且存在于每一行的record的keys中
          const result = updateTableDataRecord(values.id, values);
          console.log(result);
        } else {
          reload();
        }
      }

      function handleOpenDetail(record: Recordable) {
        console.log(record);
        accountIndexShow.value = false;
        openDetail.value.openAccountDetail(record.id);
      }
      function handleCloseDetail(record: Recordable) {
        console.log(record);
        accountIndexShow.value = true;
      }

      return {
        registerTable,
        registerModal,
        handleCreate,
        handleEdit,
        handleDelete,
        handleSuccess,
        handleCloseDetail,
        handleOpenDetail,
        accountIndexShow,
        openDetail,
        searchInfo,
      };
    },
  });
</script>
