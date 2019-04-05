<template>
  <div class="bill-list-wrapepr">
    <SkeItem v-if="skeLoading" />
    <div class="bill-list">
      <BillItem
        v-for="(bill) in listData" :key="bill._id"
        :value="bill"
      />
    </div>
  </div>
</template>

<script>
import SkeItem from './SkeItem'
import BillItem from './BillItem'

export default {
  components: {
    SkeItem,
    BillItem,
  },

  data () {
    return {
      skeLoading: true,
      listData: [
        {
          _id: '001',
          amount: 10.00,
          desc: '午餐',
        },
      ],
    }
  },
}
</script>
