<template>
  <div class="app-container">
    <nav class="nav-left"></nav>
    <div class="app-content">
      <header class="app-header">
        <div class="user-info">
          <i-icon type="ios-contact" class="icon" />
          <span class="user-name">闰土</span>
        </div>
      </header>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
}
</script>

<style lang="less" scoped>
.app-container {
  display: flex;
  position: absolute;
  width: 100%; height: 100%;
  background: #fff;

  .nav-left {
    width: @LAYOUT_NAV_LEFT_WIDTH;
    border-right: 1px solid @THEME_BORDER_COLOR_BASE;
  }
  .app-content {
    flex: 1;
  }
  .app-header {
    display: flex;
    height: @LAYOUT_HEADER_HEIGHT;
    border-bottom: 1px solid @THEME_BORDER_COLOR_BASE;
  }

  .user-info {
    height: @LAYOUT_HEADER_HEIGHT;
    line-height: @LAYOUT_HEADER_HEIGHT;
    font-size: 16px;
    .icon {
      position: relative;
      top: (16px - 24px)/2;
      font-size: 24px;
    }
  }
}
</style>
