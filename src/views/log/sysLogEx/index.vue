<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button color="warning" @click="handleDelete"> 清空异常日志 </a-button>
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
    <SysLogExForm @register="registerModal" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { sysLogExPage, ClearLog } from '/@/api/log/sysLogExManage';

  import { useModal } from '/@/components/Modal';
  import SysLogExForm from './sysLogExForm.vue';

  import { columns, searchFormSchema } from './sysLogEx.data';

  export default defineComponent({
    name: 'SysLogExManagement',
    components: { BasicTable, SysLogExForm, TableAction },
    setup() {
      const [registerModal, { openModal }] = useModal();
      const [registerTable, { reload }] = useTable({
        title: '异常日志列表',
        api: sysLogExPage,
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
