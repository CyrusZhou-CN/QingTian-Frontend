<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate"> 新增角色 </a-button>
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
    <RoleDrawer @register="registerDrawer" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { sysRoleListByPage, sysRoleDelete } from '/@/api/sys/role';

  import { useDrawer } from '/@/components/Drawer';
  import RoleDrawer from './roleDrawer.vue';

  import { columns, searchFormSchema } from './role.data';

  export default defineComponent({
    name: 'RoleManagement',
    components: { BasicTable, RoleDrawer, TableAction },
    setup() {
      const [registerDrawer, { openDrawer }] = useDrawer();
      const [registerTable, { reload }] = useTable({
        title: '角色列表',
        api: sysRoleListByPage,
        columns,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
        },
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
        openDrawer(true, {
          isUpdate: false,
        });
      };

      const handleEdit = (record: Recordable) => {
        openDrawer(true, {
          record,
          isUpdate: true,
        });
      };

      const handleDelete = async (record: Recordable) => {
        console.log(record);
        await sysRoleDelete(record);
        handleSuccess();
      };

      const handleSuccess = () => {
        reload();
      };

      return {
        registerTable,
        registerDrawer,
        handleCreate,
        handleEdit,
        handleDelete,
        handleSuccess,
      };
    },
  });
</script>
