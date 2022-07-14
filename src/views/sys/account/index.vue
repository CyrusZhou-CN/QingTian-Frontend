<template>
  <template v-if="accountIndexShow">
    <BasicTable @register="registerTable" :searchInfo="searchInfo">
      <template #toolbar>
        <a-button preIcon="ant-design:user-add-outlined" type="primary" @click="handleCreate"
          >新增账号</a-button
        >
        <a-button preIcon="ant-design:cloud-download-outlined" @click="handleUserExport"
          >导出</a-button
        >
        <a-upload name="file" :multiple="false" @change="handleUserImport">
          <a-button preIcon="ant-design:cloud-upload-outlined"> 导入 </a-button>
        </a-upload>
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
  import { getAccountList, sysUserDelete, sysUserExport, sysUserImport } from '/@/api/sys/user';
  import { useModal } from '/@/components/Modal';
  import AccountModal from './accountModal.vue';
  import { columns, searchFormSchema } from './account.data';
  import AccountDetail from './accountDetail.vue';
  import { message } from 'ant-design-vue';

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

      const handleCreate = () => {
        openModal(true, {
          isUpdate: false,
          success: handleSuccess,
        });
      };

      const handleEdit = (record: Recordable) => {
        console.log(record);
        openModal(true, {
          record,
          isUpdate: true,
          success: handleSuccess,
        });
      };

      const handleDelete = async (record: Recordable) => {
        console.log(record);
        await sysUserDelete(record);
        reload();
      };

      const handleSuccess = ({ isUpdate, values }) => {
        if (isUpdate) {
          // 演示不刷新表格直接更新内部数据。
          // 注意：updateTableDataRecord要求表格的rowKey属性为string并且存在于每一行的record的keys中
          const result = updateTableDataRecord(values.id, values);
          console.log(result);
        } else {
          reload();
        }
      };

      const handleOpenDetail = (record: Recordable) => {
        console.log(record);
        accountIndexShow.value = false;
        openDetail.value.openAccountDetail(record.id);
      };
      const handleCloseDetail = (record: Recordable) => {
        console.log(record);
        accountIndexShow.value = true;
      };

      const handleUserExport = async () => {
        const res = await sysUserExport(searchInfo);
        downLoadFile(res);
      };

      const downLoadFile = (res: any) => {
        var blob = new Blob([res.data], {
          type: 'application/octet-stream;charset=UTF-8',
        });
        var contentDisposition = res.headers['content-disposition'];
        var patt = new RegExp('filename=([^;]+\\.[^\\.;]+);*');
        var result = patt.exec(contentDisposition);
        var filename = result ? result[1] : '666.xlsx';
        var downloadElement = document.createElement('a');
        var href = window.URL.createObjectURL(blob); // 创建下载的链接
        var reg = /^["](.*)["]$/g;
        downloadElement.style.display = 'none';
        downloadElement.href = href;
        downloadElement.download = decodeURI(filename.replace(reg, '$1')); // 下载后文件名
        document.body.appendChild(downloadElement);
        downloadElement.click(); // 点击下载
        document.body.removeChild(downloadElement); // 下载完成移除元素
        window.URL.revokeObjectURL(href);
      };
      const handleUserImport = async (info: any) => {
        await sysUserImport(info);
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
          message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      };
      return {
        registerTable,
        registerModal,
        handleCreate,
        handleEdit,
        handleDelete,
        handleSuccess,
        handleCloseDetail,
        handleOpenDetail,
        handleUserExport,
        handleUserImport,
        sysUserImport,
        accountIndexShow,
        openDetail,
        searchInfo,
      };
    },
  });
</script>
