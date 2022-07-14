<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate"> 新增通知消息 </a-button>
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
    <SysNoticeForm @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { sysNoticePage, sysNoticeDelete } from '/@/api/sys/notice';

  import { useModal } from '/@/components/Modal';
  import SysNoticeForm from './noticeForm.vue';

  import { columns, searchFormSchema } from './notice.data';

  export default defineComponent({
    name: 'SysNoticeManagement',
    components: { BasicTable, SysNoticeForm, TableAction },
    setup() {
      const [registerModal, { openModal }] = useModal();
      const [registerTable, { reload }] = useTable({
        title: '通知消息列表',
        api: sysNoticePage,
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
        await sysNoticeDelete(record);
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
        handleDelete,
        handleSuccess,
      };
    },
  });
</script>
