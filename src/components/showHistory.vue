<template lang="html">
  <div class="showHistory">
    <b-table :data="booking" :mobile-cards="true" :narrowed="false" :pagination-simple="false" :striped="true" :paginated="true" :per-page="10">
      <template scope="props">
          <b-table-column label="รหัสนักศึกษา" sortable>{{props.row.stdId}}</b-table-column>
          <b-table-column label="ห้อง" sortable>{{props.row.room}}</b-table-column>
          <b-table-column label="วันที่" sortable>{{props.row.date}}</b-table-column>
          <b-table-column label="เวลาเริ่มต้น" sortable>{{props.row.startTime}}.00</b-table-column>
          <b-table-column label="เวลาสิ้นสุด" sortable>{{props.row.endTime}}.00</b-table-column>
          <b-table-column label="สถานะ" :content="formatStatus(props.row.status)" sortable ></b-table-column>
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
<style>
  .th-wrap{
    float: left;
  }
  td{
    text-align: left;
  }
</style>
