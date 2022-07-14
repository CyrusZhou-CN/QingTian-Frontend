<template>
  <div>
    <BasicTable @register="registerTable" @edit-change="handleEditChange">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'ant-design:delete-outlined',
                label: '删除',
                onClick: remove.bind(null, record.dbColumnName),
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <Card dense contentFullHeight fixedHeight contentClass="flex">
      <a-button class="w-1/4" type="dashed" @click="addPrimaryColumn"> 新增主键字段 </a-button>
      <a-button class="w-1/4" type="dashed" @click="addColumn"> 新增普通字段 </a-button>
      <a-button class="w-1/4" type="dashed" @click="addBaseColumn"> 新增基础字段 </a-button>
      <a-button class="w-1/4" type="dashed" @click="removeAll"> 清空字段 </a-button>
    </Card>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable, TableAction, EditRecordRow } from '/@/components/Table';
  import { Card } from 'ant-design-vue';
  import { columnEditColumns } from '../column/column.data';

  export default defineComponent({
    components: { BasicTable, Card, TableAction },
    setup() {
      const columnInfo: EditRecordRow[] = [];
      const [registerTable, { getDataSource }] = useTable({
        dataSource: columnInfo,
        rowKey: 'dbColumnName',
        columns: columnEditColumns,
        showIndexColumn: false,
        canResize: true,
        maxHeight: 285,
        actionColumn: {
          width: 160,
          title: '操作',
          dataIndex: 'action',
        },
        pagination: false,
      });

      const handleEditChange = (data: Recordable) => {
        console.log(data);
        data.record[data.column.dataIndex] = data.value;
      };

      const addPrimaryColumn = () => {
        const data = getDataSource();
        const addRow: EditRecordRow = {
          columnDescription: '主键Id',
          dataType: 'bigint',
          dbColumnName: 'Id',
          decimalDigits: 0,
          isIdentity: 0,
          isNullable: 0,
          isPrimarykey: 1,
          length: 0,
          editable: true,
          isNew: true,
        };
        data.push(addRow);
      };

      function addColumn() {
        const data = getDataSource();
        const addRow: EditRecordRow = {
          columnDescription: '',
          dataType: '',
          dbColumnName: '',
          decimalDigits: 0,
          isIdentity: 0,
          isNullable: 1,
          isPrimarykey: 0,
          length: 0,
          editable: true,
          isNew: true,
        };
        data.push(addRow);
      }

      function addBaseColumn() {
        const data = getDataSource();
        const fileds = [
          {
            dataType: 'datetime',
            name: 'CreatedTime',
            desc: '创建时间',
          },
          {
            dataType: 'datetime',
            name: 'ModifyTime',
            desc: '更新时间',
          },
          {
            dataType: 'bigint',
            name: 'CreatedUserId',
            desc: '创建者Id',
          },
          {
            dataType: 'nvarchar',
            name: 'CreatedUserName',
            desc: '创建者名称',
            length: 20,
          },
          {
            dataType: 'bigint',
            name: 'ModifyUserId',
            desc: '修改者Id',
          },
          {
            dataType: 'nvarchar',
            name: 'ModifyUserName',
            desc: '修改者名称',
            length: 20,
          },
          {
            dataType: 'bit',
            name: 'IsDeleted',
            desc: '软删除',
            isNullable: 0,
          },
        ];

        fileds.forEach((m) => {
          const addRow: EditRecordRow = {
            columnDescription: m.desc,
            dataType: m.dataType,
            dbColumnName: m.name,
            decimalDigits: 0,
            isIdentity: 0,
            isNullable: m.isNullable === 0 ? 0 : 1,
            isPrimarykey: 0,
            length: m.length || 0,
            editable: true,
            isNew: true,
          };
          data.push(addRow);
        });
      }
      function removeAll() {
        const data = getDataSource();
        data.splice(0);
      }

      function remove(key) {
        const data = getDataSource();
        data.forEach((value, index) => {
          if (key === value.dbColumnName) {
            console.log(value);
            data.splice(index, 1);
            return;
          }
        });
      }
      return {
        registerTable,
        addColumn,
        addBaseColumn,
        addPrimaryColumn,
        getDataSource,
        handleEditChange,
        remove,
        removeAll,
      };
    },
  });
</script>
