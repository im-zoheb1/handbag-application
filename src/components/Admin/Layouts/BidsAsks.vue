<template>
  <div>
    <div class="admin-section__inner" style="margin-top: -20px;">
      <div class="admin-section__content">
        <md-tabs>
          <md-tab id="bids" :md-label="$t('bidsasks.bids')">
            <md-table v-model="searched" md-card @md-selected="onSelect" md-fixed-header>
              <md-table-toolbar>
                <md-field md-clearable class="md-toolbar-section-start">
                  <md-input placeholder="Search by id..." v-model="search" @input="searchOnTable" />
                </md-field>
              </md-table-toolbar>

              <md-table-empty-state
                md-label="No users found"
                :md-description="`No user found for this '${search}' query. Try a different search.`"
              ></md-table-empty-state>

              <md-table-row slot="md-table-row" slot-scope="{ item }" md-auto-select>
                <md-table-cell md-label="ID" md-numeric>{{ item.id }}</md-table-cell>
                <md-table-cell md-label="Name">{{ item.name }}</md-table-cell>
                <md-table-cell md-label="Email">{{ item.email }}</md-table-cell>
                <md-table-cell md-label="Gender">{{ item.gender }}</md-table-cell>
                <md-table-cell md-label="Job Title">{{ item.title }}</md-table-cell>
              </md-table-row>
            </md-table>
            <ProductsPagination />
          </md-tab>
          <md-tab id="asks" :md-label="$t('bidsasks.asks')">
            <md-table v-model="searched" md-card @md-selected="onSelect" md-fixed-header>
              <md-table-toolbar slot="md-table-alternate-header" slot-scope="{ count }">
                <div class="md-toolbar-section-start">{{ getAlternateLabel(count) }}</div>

                <div class="md-toolbar-section-end">
                  <md-button class="md-icon-button">
                    <md-icon>delete</md-icon>
                  </md-button>
                </div>
              </md-table-toolbar>

              <md-table-toolbar>
                <md-field md-clearable class="md-toolbar-section-start">
                  <md-input placeholder="Search by id..." v-model="search" @input="searchOnTable" />
                </md-field>
              </md-table-toolbar>

              <md-table-empty-state
                md-label="No users found"
                :md-description="`No user found for this '${search}' query. Try a different search.`"
              ></md-table-empty-state>

              <md-table-row
                slot="md-table-row"
                slot-scope="{ item }"
                :md-disabled="item.name.includes('Stave')"
                md-selectable="multiple"
                md-auto-select
              >
                <md-table-cell md-label="ID" md-numeric>{{ item.id }}</md-table-cell>
                <md-table-cell md-label="Name">{{ item.name }}</md-table-cell>
                <md-table-cell md-label="Email">{{ item.email }}</md-table-cell>
                <md-table-cell md-label="Gender">{{ item.gender }}</md-table-cell>
                <md-table-cell md-label="Job Title">{{ item.title }}</md-table-cell>
              </md-table-row>
            </md-table>
            <ProductsPagination />
          </md-tab>
        </md-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import ProductsPagination from "@/components/utilities/Pagination";
const toLower = text => {
  return text.toString().toLowerCase();
};

const searchByName = (items, term) => {
  if (term) {
    return items.filter(item => toLower(item.name).includes(toLower(term)));
  }

  return items;
};

export default {
  name: "TableSearch",
  components: {
    ProductsPagination
  },
  data: () => ({
    search: null,
    searched: [],
    selected: [],
    users: [
      {
        id: 4,
        name: "Lonnie Izkovitz",
        email: "lizkovitz3@youtu.be",
        gender: "Female",
        title: "Operator"
      },
      {
        id: 6,
        name: "Karim Chipping",
        email: "kchipping5@scribd.com",
        gender: "Female",
        title: "Safety Technician II"
      },
      {
        id: 7,
        name: "Helge Holyard",
        email: "hholyard6@howstuffworks.com",
        gender: "Female",
        title: "Internal Auditor"
      },
      {
        id: 8,
        name: "Rod Titterton",
        email: "rtitterton7@nydailynews.com",
        gender: "Male",
        title: "Technical Writer"
      },
      {
        id: 9,
        name: "Gawen Applewhite",
        email: "gapplewhite8@reverbnation.com",
        gender: "Female",
        title: "GIS Technical Architect"
      }
    ]
  }),
  methods: {
    newUser() {
      window.alert("Noop");
    },
    searchOnTable() {
      this.searched = searchByName(this.users, this.search);
    },
    onSelect(items) {
      this.selected = items;
    },
    getAlternateLabel(count) {
      let plural = "";

      if (count > 1) {
        plural = "s";
      }

      return `${count} user${plural} selected`;
    }
  },
  created() {
    this.searched = this.users;
  }
};
</script>