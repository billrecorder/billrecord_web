<template>
  <div class="ske-item">
    <div class="ske-background">
      <div class="ske-padding-top"></div>
      <div class="ske-padding-left"></div>
      <div class="ske-padding-right"></div>
      <div class="ske-padding-bottom"></div>

      <div class="ske-title-after"></div>
      <div class="ske-content-before"></div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.ske-item {
  height: 90px;
  .ske-background {
    .Skeleton_BG();
    position: relative;
    height: 100%;
    border: 1px solid @THEME_BORDER_COLOR_BASE;
    border-radius: 3px;
  }
  .Base() {
    position: absolute;
    background: #fff;
  }
  .ske-padding-top {
    .Base();
    height: @THEME_PADDING_VER;
    width: 100%;
    left: 0; top: 0;
  }
  .ske-padding-left {
    .Base();
    height: 100%;
    width: @THEME_PADDING_HOR;
    left: 0; top: 0;
  }
  .ske-padding-right {
    .Base();
    height: 100%;
    width: @THEME_PADDING_HOR;
    right: 0; top: 0;
  }
  .ske-padding-bottom {
    .Base();
    height: @THEME_PADDING_VER;
    width: 100%;
    bottom: 0; left: 0;
  }

  .ske-title-after {
    .Base();
    width: 20%;
    height: 18px;
    right: @THEME_PADDING_HOR; top: @THEME_PADDING_VER;
  }
  .ske-content-before {
    .Base();
    width: 100%;
    height: 10px;
    top: calc(@THEME_PADDING_VER + 18px); left: 0;
  }
}
</style>
