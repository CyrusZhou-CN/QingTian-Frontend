<template>
  <template v-if="accountdetailShow">
    <PageWrapper :title="getTitle" contentBackground>
      <template #extra>
        <a-button
          class="mr-2"
          type="dashed"
          @click="handleCancel"
          preIcon="ant-design:rollback-outlined"
          >返回</a-button
        >
        <a-button type="primary" danger> 禁用账号 </a-button>
        <a-button type="primary"> 修改密码 </a-button>
      </template>
      <template #footer>
        <a-tabs default-active-key="detail" v-model:activeKey="currentKey">
          <a-tab-pane key="detail" tab="用户资料" />
          <a-tab-pane key="logs" tab="操作日志" />
        </a-tabs>
      </template>
      <template v-if="currentKey == 'detail'">
        <Description
          title="用户信息"
          :bordered="false"
          :column="2"
          :data="personData"
          :schema="personSchema"
        />
      </template>
      <template v-if="currentKey == 'logs'">
        <div v-for="i in 10" :key="i">这是用户{{ userId }}操作日志Tab</div>
      </template>
    </PageWrapper>
  </template>
</template>

<script lang="ts">
  import { computed, defineComponent, ref, unref } from 'vue';
  import { Description } from '/@/components/Description';
  import { useRoute } from 'vue-router';
  import { PageWrapper } from '/@/components/Page';
  import { useTabs } from '/@/hooks/web/useTabs';
  import { Tabs } from 'ant-design-vue';
  import { getAccountDetail } from '/@/api/sys/user';
  import { personSchema } from './account.data';

  export default defineComponent({
    name: 'AccountDetail',
    components: { Description, PageWrapper, ATabs: Tabs, ATabPane: Tabs.TabPane },
    emits: ['detail'],
    setup(_, { emit }) {
      const route = useRoute();
      const accountdetailShow = ref(false);
      // 此处可以得到用户ID
      const userId = ref(route.params?.id);
      const currentKey = ref('detail');
      const { setTitle } = useTabs();
      const personData = ref([]);
      const getTitle = computed(() => '{' + unref(personData).realName + '} 的资料');
      // TODO
      // 本页代码仅作演示，实际应当通过userId从接口获得用户的相关资料
      async function openAccountDetail(userId) {
        accountdetailShow.value = true;
        const res = await getAccountDetail(userId);
        // 设置Tab的标题（不会影响页面标题）
        personData.value = res;
        setTitle('详情：' + res.realName);
      }
      async function handleCancel(record: Recordable) {
        console.log(record);
        accountdetailShow.value = false;
        setTitle('用户管理');
        emit('detail', 'close');
      }
      return {
        openAccountDetail,
        getTitle,
        accountdetailShow,
        userId,
        personSchema,
        personData,
        currentKey,
        handleCancel,
      };
    },
  });
</script>

<style></style>
