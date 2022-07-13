<template>
  <template v-if="indexShow">
    <BasicTable @register="registerTable">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'ant-design:eye-outlined',
                onClick: handleDetail.bind(null, record),
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
  </template>
  <NoticeDetail @detail="handleCloseDetail" ref="openDetail" />
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { sysNoticeReceived } from '/@/api/sys/notice';
  import NoticeDetail from './noticeDetail.vue';
  import { columns, searchFormSchema } from './notice.data';

  export default defineComponent({
    name: 'UnreadNoticeManagement',
    components: { BasicTable, TableAction, NoticeDetail },
    setup() {
      const openDetail = ref<any>();
      const indexShow = ref(true);
      const [registerTable, { reload }] = useTable({
        title: '通知消息列表',
        api: sysNoticeReceived,
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
        indexShow.value = false;
        openDetail.value.openDetail(record.id);
      }
      function handleCloseDetail(record: Recordable) {
        console.log(record);
        indexShow.value = true;
      }
      function handleSuccess() {
        reload();
      }

      return {
        registerTable,
        handleDetail,
        handleSuccess,
        handleCloseDetail,
        openDetail,
        indexShow,
      };
    },
  });
</script>
