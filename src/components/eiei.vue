<template lang="html">
  <b-table
      :data="tableData"
      :mobile-cards="true"
      :paginated="isPaginated"
      :per-page="perPage">

      <template scope="props">
          <b-table-column field="id" label="ID" width="40" sortable numeric>
              {{ props.row.id }}
          </b-table-column>

          <b-table-column field="user.first_name" label="First Name" sortable>
      </b-table-column>

          <b-table-column field="user.last_name" label="Last Name" sortable>
              {{ props.row.user.last_name }}
          </b-table-column>

          <b-table-column field="date" label="Date" sortable
              :content="formatDate(props.row.date)">
          </b-table-column>

          <b-table-column field="gender" label="Gender">
              <b-icon
                  pack="fa"
                  :icon="props.row.gender === 'Male' ? 'mars' : 'venus'">
              </b-icon>
              {{ props.row.gender }}
          </b-table-column>
      </template>
  </b-table>
</template>
<script type="text/javascript">
export default {
  data () {
    return {
      tableData: [
        {'id': 1, 'user': {'first_name': 'Jesse', 'last_name': 'Simmons'}, 'date': '2016-10-15 13:43:27', 'gender': 'Male'},
        {'id': 2, 'user': {'first_name': 'John', 'last_name': 'Jacobs'}, 'date': '2016-12-15 06:00:53', 'gender': 'Male'},
        {'id': 3, 'user': {'first_name': 'Tina', 'last_name': 'Gilbert'}, 'date': '2016-04-26 06:26:28', 'gender': 'Female'},
        {'id': 4, 'user': {'first_name': 'Clarence', 'last_name': 'Flores'}, 'date': '2016-04-10 10:28:46', 'gender': 'Male'},
        {'id': 5, 'user': {'first_name': 'Anne', 'last_name': 'Lee'}, 'date': '2016-12-06 14:38:38', 'gender': 'Female'}
      ],
      hasMobileCards: true,
      isPaginated: true,
      perPage: 10
    }
  },
  methods: {
    formatDate (value, row) {
      return `<span class="tag is-success">
      ${new Date(value).toLocaleDateString()}
      </span>`
    },
    clearSelected () {
      this.selected = {}
    },
    clearCheckedRows () {
      this.checkedRows = []
    }
  }
}
</script>
