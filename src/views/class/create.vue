<template>
  <el-dialog title="添加分类" :visible.sync="getShowCreateDialog" :before-close="handleClose">
    <el-form>
      <el-form-item label="名称" label-width="50">
        <el-input value="bbb" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="活动区域" label-width="50">
        <el-select value="shanghai" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div class="dialog-footer">
      <el-button @click="handleClose">取 消</el-button>
      <el-button type="primary" @click="comfirm">确 定</el-button>
    </div>
  </el-dialog>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    data() {
      return {
      }
    },
    computed: {
      ...mapGetters('clazz', {
        getShowCreateDialog: 'getShowCreateDialog'
      })
    },
    methods: {
      ...mapActions('clazz', [
        'hideCreateDialog',
        'createClazz'
      ]),
      handleClose() {
        this.$store.dispatch('clazz/hideCreateDialog')
      },
      comfirm() {

      }
    }

  }

</script>
<style lang="scss" scoped>


</style>
