<template>
  <template v-if="detailShow">
    <BasicTable class="pointer" @register="registerTable" @edit-change="handleEditChange">
      <template #toolbar>
        <div style="float: right">
          <a-button
            class="mr-2"
            style="float: left"
            type="dashed"
            @click="handleCancel"
            preIcon="ant-design:rollback-outlined"
            >返回</a-button
          >
        </div>
        <div style="float: right">
          <a-button type="primary" preIcon="ant-design:save-outlined" @click="handleSubmit"
            >保存</a-button
          >
        </div>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.customTitle === '按钮' && record.effectType === 'fk'">
          <a-button
            shape="circle"
            type="dashed"
            preIcon="ant-design:api-twotone"
            title="外键关系编辑"
            @click="fkClick(record)"
          />
        </template>
      </template>
    </BasicTable>
    <FkModal @register="registerFkModal" @success="handleFkModalSuccess" />
  </template>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { BasicTable, useTable } from '/@/components/Table';
  import {
    sysCodeGenerateConfigEdit,
    sysCodeGenerateConfigList,
  } from '/@/api/gen/codeGenerateConfig';
  import { codeGenerateEditColumns } from './codeGenerate.data';
  import { message } from 'ant-design-vue';
  import { useModal } from '/@/components/Modal';
  import FkModal from './fkModal.vue';

  export default defineComponent({
    name: 'CodeGenerateDetail',
    components: { BasicTable, FkModal },
    emits: ['detail', 'register'],
    setup(_, { emit }) {
      const detailShow = ref(false);
      const [registerFkModal, { openModal }] = useModal();
      const [registerTable, { getDataSource, updateTableDataRecord }] = useTable({
        rowKey: 'id',
        canResize: false,
        columns: codeGenerateEditColumns,
        tableSetting: { fullScreen: true },
        showIndexColumn: false,
        pagination: false,
      });
      async function open(id: string) {
        detailShow.value = true;
        const datas = await sysCodeGenerateConfigList({ codeGenId: id });
        const columnInfo = getDataSource();
        columnInfo.splice(0);
        datas.forEach((element) => {
          element.editable = true;
          columnInfo.push(element);
        });
      }

      async function handleEditChange(data: Recordable) {
        console.log(data);
        data.record[data.column.dataIndex] = data.value;
        if (data.value == 'fk') {
          fkClick(data.record);
        }
      }

      async function handleSubmit(record: Recordable) {
        console.log(record);
        const columnInfo = getDataSource();
        console.log(columnInfo);
        await sysCodeGenerateConfigEdit(columnInfo);
        message.success('修改成功');
        close('ok');
      }

      async function handleCancel(record: Recordable) {
        console.log(record);
        message.warn('放弃修改');
        close('close');
      }
      async function close(detail: string) {
        emit('detail', detail);
        const columnInfo = getDataSource();
        columnInfo.splice(0);
        detailShow.value = false;
      }
      function handleFkModalSuccess({ record }) {
        updateTableDataRecord(record.id, record);
      }
      function fkClick(record: Recordable) {
        openModal(true, {
          record,
        });
      }
      return {
        open,
        fkClick,
        detailShow,
        registerFkModal,
        handleFkModalSuccess,
        registerTable,
        handleSubmit,
        handleCancel,
        handleEditChange,
      };
    },
  });
</script>
