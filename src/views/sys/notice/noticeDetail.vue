<template>
  <template v-if="isShow">
    <PageWrapper contentBackground>
      <template #extra>
        <a-button
          class="mr-2"
          type="dashed"
          @click="handleCancel"
          preIcon="ant-design:rollback-outlined"
          >返回</a-button
        >
      </template>
      <Description
        title="用户信息"
        :bordered="false"
        :column="2"
        :data="noticeData"
        :schema="descSchema"
      />
    </PageWrapper>
  </template>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Description } from '/@/components/Description';
  import { descSchema } from './notice.data';
  import { sysNoticeDetail } from '/@/api/sys/notice';
  import { PageWrapper } from '/@/components/Page';

  export default defineComponent({
    name: 'NoticeDetail',
    components: { Description, PageWrapper },
    emits: ['detail'],
    setup(_, { emit }) {
      const isShow = ref(false);
      // 此处可以得到用户ID
      const noticeData = ref([]);
      // TODO
      // 本页代码仅作演示，实际应当通过userId从接口获得用户的相关资料
      const openDetail = async (Id: any) => {
        isShow.value = true;
        const res = await sysNoticeDetail({ Id });
        // 设置Tab的标题（不会影响页面标题）
        noticeData.value = res;
      };
      const handleCancel = (record: Recordable) => {
        console.log(record);
        isShow.value = false;
        emit('detail', 'close');
      };
      return {
        openDetail,
        isShow,
        descSchema,
        noticeData,
        handleCancel,
      };
    },
  });
</script>

<style></style>
