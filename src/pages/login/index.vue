<template>
  <div class="container">
    <i-form
      inline
      :label-width="80"
    >
      <i-form-item label="账号">
        <i-input
          v-model="formData.account"
          placeholder="账号"
        />
      </i-form-item>
      <i-form-item label="密码">
        <i-input
          v-model="formData.pwd"
          placeholder="密码"
          type="password"
        />
      </i-form-item>
      <i-button
        type="primary"
        long
        @click="handleLogin"
      >登录</i-button>
    </i-form>
  </div>
</template>

<script>
import {
  cloneDeep,
} from 'lodash'

import { login } from '@api/login'

export default {
  data () {
    return {
      formData: {
        account: null,
        pwd: null,
      },
    }
  },

  methods: {
    async handleLogin () {
      const formData = cloneDeep(this.formData)

      const { success, data } = await login(formData)
      if (success) {
        console.log(data)
      }
    },
  },
}
</script>

<style lang="less" scoped>
@width: 300px;
@height: 280px;

.container {
  width: @width;
  height: @height;
  position: relative;
  padding: @THEME_PADDING_VER @THEME_PADDING_HOR;
  top: 50%;
  left: 50%;
  margin-left: -@width/2;
  margin-top: -@height/2;
  border: 1px solid @THEME_BORDER_COLOR_BASE;
}
</style>
