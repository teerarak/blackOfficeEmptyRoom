<template lang="html">
  <div class="showHistory">
    <b-table :data="booking" :mobile-cards="true" :narrowed="true" :paginated="true" :per-page="10">
      <template scope="props">
        <b-table-column label="รหัสนักศึกษา" sortable numeric>{{props.row.stdId}}</b-table-column>
        <b-table-column label="ห้อง" sortable>{{props.row.room}}</b-table-column>
        <b-table-column label="วันที่" sortable>{{props.row.date}}</b-table-column>
        <b-table-column label="เวลาเริ่ม" sortable numeric>{{props.row.startTime}}.00</b-table-column>
        <b-table-column label="เวลาหมด" sortable numeric>{{props.row.endTime}}.00</b-table-column>
        <b-table-column label="status" :content="formatStatus(props.row.status)" sortable></b-table-column>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  props: ['booking'],
  name: 'showHistory',
  methods: {
    formatStatus (value, row) {
      if (value === 'active') {
        return `<span class="tag is-success">
        ${value}
        </span>`
      } else {
        return `<span class="tag is-danger  ">
        ${value}
        </span>`
      }
    }
  }
}
</script>
