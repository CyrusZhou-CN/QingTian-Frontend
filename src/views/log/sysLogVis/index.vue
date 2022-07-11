<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button color="warning" @click="handleDelete"> 清空访问日志表 </a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'ant-design:profile-outlined',
                onClick: handleDetail.bind(null, record),
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <SysLogVisForm @register="registerModal" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { sysLogVisPage, ClearLog } from '/@/api/log/sysLogVisManage';

  import { useModal } from '/@/components/Modal';
  import SysLogVisForm from './sysLogVisForm.vue';

  import { columns, searchFormSchema } from './sysLogVis.data';

  export default defineComponent({
    name: 'SysLogVisManagement',
    components: { BasicTable, SysLogVisForm, TableAction },
    setup() {
      const [registerModal, { openModal }] = useModal();
      const [registerTable, { reload }] = useTable({
        title: '访问日志表列表',
        api: sysLogVisPage,
        columns,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
        },
        useSearchForm: true,
        showTableSetting: true,
        bordered: true,
        actionColumn: {
          width: 80,
          title: '操作',
          dataIndex: 'action',
          fixed: undefined,
        },
      });

      function handleDetail(record: Recordable) {
        openModal(true, {
          record,
          isUpdate: true,
        });
      }

      async function handleDelete(record: Recordable) {
        console.log(record);
        await ClearLog();
        reload();
      }

      return {
        registerTable,
        registerModal,
        handleDetail,
        handleDelete,
      };
    },
  });
</script>
