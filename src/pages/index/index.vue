<template>
  <Layout>
    <div class="container">
      <!-- <BillList /> -->
      <i-button @click="handleApiTest">测试接口</i-button>
    </div>
  </Layout>
</template>

<script>
import Layout from '../../components/Layout'
// import BillList from './BillList'

import {
  test,
} from '@api/bill'

export default {
  components: {
    Layout,
    // BillList,
  },

  data () {
    return {
    }
  },

  methods: {
    async handleApiTest () {
      const { success } = await test()
      console.log(success)
    },
  },
}
</script>

<style lang="less" scoped>
.container {
  padding: @THEME_PADDING_VER @THEME_PADDING_HOR;
}
</style>
