<template>
  <div>
    <BasicTable @register="registerTable" @fetch-success="onFetchSuccess">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate"> 新增菜单 </a-button>
        <a-button @click="onExpandAll"> 展开 </a-button>
        <a-button @click="onCollapseAll"> 折叠 </a-button>
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
                  placement: 'leftBottom',
                  confirm: handleDelete.bind(null, record),
                },
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <MenuDrawer @register="registerDrawer" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { defineComponent, nextTick } from 'vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { sysMenuList, sysMenuDelete } from '/@/api/sys/menu';

  import { useDrawer } from '/@/components/Drawer';
  import MenuDrawer from './menuDrawer.vue';

  import { columns, searchFormSchema } from './menu.data';

  export default defineComponent({
    name: 'MenuManagement',
    components: { BasicTable, MenuDrawer, TableAction },
    setup() {
      const [registerDrawer, { openDrawer }] = useDrawer();
      const [registerTable, { reload, expandAll, collapseAll }] = useTable({
        title: '菜单列表',
        api: sysMenuList,
        columns,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
        },
        isTreeTable: true,
        pagination: false,
        striped: false,
        useSearchForm: true,
        showTableSetting: true,
        bordered: true,
        showIndexColumn: false,
        canResize: false,
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
          success: handleSuccess,
        });
      };

      const handleEdit = (record: Recordable) => {
        openDrawer(true, {
          record,
          isUpdate: true,
          success: handleSuccess,
        });
      };

      const handleDelete = async (record: Recordable) => {
        console.log(record);
        await sysMenuDelete(record);
        handleSuccess();
      };

      const handleSuccess = () => {
        reload();
      };

      const onFetchSuccess = () => {
        // 演示默认展开所有表项
        // onExpandAll();
      };
      const onExpandAll = () => {
        nextTick(expandAll);
      };
      const onCollapseAll = () => {
        nextTick(collapseAll);
      };
      return {
        registerTable,
        registerDrawer,
        handleCreate,
        handleEdit,
        handleDelete,
        handleSuccess,
        onFetchSuccess,
        onExpandAll,
        onCollapseAll,
      };
    },
  });
</script>
