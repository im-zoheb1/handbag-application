<template>
  <div class="dashboard__right">
    <div class="dashboard__right--inner">
      <div class="d-trade">
        <div class="d-trade__nos">
          <div class="d-trade__s">
            <div class="d-trade__s--icon">
              <div class="material-icons">equalizer</div>
            </div>
            <div class="d-trade__s--content">
              <div class="d-trade__s--text">{{$t("buying.purchasing")}}</div>
              <div class="d-trade__s--nos">--</div>
            </div>
          </div>
          <div class="d-trade__no">
            <div class="d-trade__no--icon">
              <span class="material-icons">escalator</span>
            </div>
            <div class="d-trade__no--content">
              <div class="d-trade__s--text">{{$t("buying.purchasing")}} (#)</div>
              <div class="d-trade__s--nos">--</div>
            </div>
          </div>
        </div>
        <div class="divider"></div>
        <div class="d-trade--search-bar">
          <input type="text" class="d-trade--search-bar__input" />
          <div class="d-trade--search-bar__button">Search</div>
        </div>
        <div class="d-trade__table">
          <md-table
            style="height: 380px; border: 1px solid rgba(0,0,0,.2); padding-top: 1rem;"
            v-model="users"
            md-sort="name"
            md-sort-order="asc"
            md-card
            md-fixed-header
          >
            <md-table-row slot="md-table-row" slot-scope="{ item }">
              <md-table-cell md-label="Item" md- md-numeric>{{ item.id }}</md-table-cell>
              <md-table-cell md-label="Ask Price">{{ item.name }}</md-table-cell>
              <md-table-cell md-label="Highest Bid">{{ item.email }}</md-table-cell>
              <md-table-cell md-label="Lowest Ask">{{ item.gender }}</md-table-cell>
              <md-table-cell md-label="Expires">{{ item.title }}</md-table-cell>
              <md-table-cell md-label="Status">Pending</md-table-cell>
            </md-table-row>
          </md-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        {
          id: 1,
          name: "Shawna Dubbin",
          email: "sdubbin0@geocities.com",
          gender: "Male",
          title: "Assistant Media Planner"
        },
        {
          id: 2,
          name: "Odette Demageard",
          email: "odemageard1@spotify.com",
          gender: "Female",
          title: "Account Coordinator"
        },
        {
          id: 3,
          name: "Vera Taleworth",
          email: "vtaleworth2@google.ca",
          gender: "Male",
          title: "Community Outreach Specialist"
        },
        {
          id: 4,
          name: "Lonnie Izkovitz",
          email: "lizkovitz3@youtu.be",
          gender: "Female",
          title: "Operator"
        },
        {
          id: 5,
          name: "Thatcher Stave",
          email: "tstave4@reference.com",
          gender: "Male",
          title: "Software Test Engineer III"
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
        },
        {
          id: 10,
          name: "Nero Mulgrew",
          email: "nmulgrew9@plala.or.jp",
          gender: "Female",
          title: "Staff Scientist"
        },
        {
          id: 11,
          name: "Cybill Rimington",
          email: "crimingtona@usnews.com",
          gender: "Female",
          title: "Assistant Professor"
        },
        {
          id: 12,
          name: "Maureene Eggleson",
          email: "megglesonb@elpais.com",
          gender: "Male",
          title: "Recruiting Manager"
        },
        {
          id: 13,
          name: "Cortney Caulket",
          email: "ccaulketc@cbsnews.com",
          gender: "Male",
          title: "Safety Technician IV"
        },
        {
          id: 14,
          name: "Selig Swynfen",
          email: "sswynfend@cpanel.net",
          gender: "Female",
          title: "Environmental Specialist"
        },
        {
          id: 15,
          name: "Ingar Raggles",
          email: "iragglese@cbc.ca",
          gender: "Female",
          title: "VP Sales"
        },
        {
          id: 16,
          name: "Karmen Mines",
          email: "kminesf@topsy.com",
          gender: "Male",
          title: "Administrative Officer"
        },
        {
          id: 17,
          name: "Salome Judron",
          email: "sjudrong@jigsy.com",
          gender: "Male",
          title: "Staff Scientist"
        },
        {
          id: 18,
          name: "Clarinda Marieton",
          email: "cmarietonh@theatlantic.com",
          gender: "Male",
          title: "Paralegal"
        },
        {
          id: 19,
          name: "Paxon Lotterington",
          email: "plotteringtoni@netvibes.com",
          gender: "Female",
          title: "Marketing Assistant"
        },
        {
          id: 20,
          name: "Maura Thoms",
          email: "mthomsj@webeden.co.uk",
          gender: "Male",
          title: "Actuary"
        }
      ]
    };
  }
};
</script>