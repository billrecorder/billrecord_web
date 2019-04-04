<template>
  <Layout>
    <div class="container">
      <BillList />
    </div>
  </Layout>
</template>

<script>
import Layout from '../../components/Layout'
import BillList from './BillList'

export default {
  components: {
    Layout,
    BillList,
  },

  data () {
    return {
    }
  },
}
</script>

<style lang="less" scoped>
.container {
  padding: @THEME_PADDING_VER @THEME_PADDING_HOR;
}
</style>
