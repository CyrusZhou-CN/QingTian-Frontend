<template>
  <PageWrapper dense contentFullHeight fixedHeight contentClass="flex">
    <div class="w-1/2 xl:w-1/3">
      <DataBaseTable @select="handleSelect" />
    </div>
    <div class="w-1/2 xl:w-2/3">
      <DataBaseColumn ref="columnRef" />
    </div>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { DataBaseTable, DataBaseColumn } from './components';
  import { PageWrapper } from '/@/components/Page';

  export default defineComponent({
    name: 'DatabaseManagement',
    components: { PageWrapper, DataBaseTable, DataBaseColumn },
    setup() {
      const columnRef = ref<any>();
      function handleSelect(key) {
        columnRef.value.onTableName(key);
      }
      return {
        handleSelect,
        columnRef,
      };
    },
  });
</script>
