<template>
  <Layout>
    <div class="container">hello world</div>
  </Layout>
</template>

<script>
import Layout from '../../components/Layout'

export default {
  components: { Layout },

  data () {
    return {
    }
  },
}
</script>

<style lang="less" scoped>
.container {
  padding: @THEME_PADDING_HOR @THEME_PADDING_VER;
}
</style>
