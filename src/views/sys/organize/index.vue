<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button preIcon="ant-design:usergroup-add-outlined" type="primary" @click="handleCreate">
          新增组织
        </a-button>
        <a-button preIcon="ant-design:plus-outlined" @click="expandAll">展开全部</a-button>
        <a-button preIcon="ant-design:minus-outlined" @click="collapseAll">折叠全部</a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'clarity:note-edit-line',
                onClick: handleEdit.bind(null, record),
              },
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
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
    <OrganizeModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { sysOrganizePage, sysOrganizeDelete } from '/@/api/sys/organize';

  import { useModal } from '/@/components/Modal';
  import OrganizeModal from './organizeModal.vue';

  import { columns, searchFormSchema } from './organize.data';

  export default defineComponent({
    name: 'OrganizeManagement',
    components: { BasicTable, OrganizeModal, TableAction },
    setup() {
      const [registerModal, { openModal }] = useModal();
      const [registerTable, { reload, expandAll, collapseAll }] = useTable({
        title: '组织列表',
        api: sysOrganizePage,
        columns,
        isTreeTable: true,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
        },
        striped: false,
        useSearchForm: true,
        showTableSetting: true,
        bordered: true,
        showIndexColumn: false,
        actionColumn: {
          width: 80,
          title: '操作',
          dataIndex: 'action',
          fixed: undefined,
        },
      });

      const handleCreate = () => {
        openModal(true, {
          isUpdate: false,
          success: handleSuccess,
        });
      };

      const handleEdit = (record: Recordable) => {
        openModal(true, {
          record,
          isUpdate: true,
          success: handleSuccess,
        });
      };

      const handleDelete = async (record: Recordable) => {
        console.log(record);
        await sysOrganizeDelete(record);
        handleSuccess();
      };

      const handleSuccess = () => {
        reload();
      };

      return {
        registerTable,
        registerModal,
        handleCreate,
        handleEdit,
        expandAll,
        collapseAll,
        handleDelete,
        handleSuccess,
      };
    },
  });
</script>
