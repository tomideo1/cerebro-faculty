<template>
  <div>
    <b-navbar class="is-dark" fixed-top>
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img
                  style="max-height: 50px"
                  src="https://res.cloudinary.com/dldd8ucby/image/upload/v1587851649/cerebro/cerebrologo_2x.png"
                  alt="Cerebro Faculty"
          />
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img
                  style="max-height: 50px"
                  src="@/assets/eic-logo.png"
                  alt="Cerebro Faculty"
          />
        </b-navbar-item>
      </template>
      <template slot="end">
        <b-navbar-dropdown label="EN">
          <b-navbar-item href="#">
            EN
          </b-navbar-item>
          <b-navbar-item href="#">
            PR
          </b-navbar-item>
          <b-navbar-item href="#">
            FT
          </b-navbar-item>
        </b-navbar-dropdown>
      </template>
    </b-navbar>
    <section class="hero " style="background:#FFFFFF;">
      <div class="hero-body  flex-center">
        <div class="container">
          <h4 class="subtitle has-text-centered">
            Find List of Verified Faculty Members on Cerebro
          </h4>
        </div>
      </div>
    </section>
    <section class="hero is-light">
      <div class="hero-body flex-center">
        <div class="container">
          <h2 class="title is-bold">
            Faculty Members ({{data.length}})
          </h2>
          <p class="subtitle is-left">
            You can search for a faculty member below using the find box and/or filters
          </p>
        </div>
      </div>
    </section>
    <section>
      <div class="card">
        <div class="card-content">
          <b-table :data="data" paginated hoverable
                   :per-page="'4'">
            <template slot-scope="props">
              <b-table-column field="image" label="" width="100"  >
                <img class="avatar" :src="props.row.image">

              </b-table-column>
              <b-table-column field="firstname" label="First Name"  searchable>
                <template slot="header" slot-scope="{ column }">
                  <b-tooltip :label="column.label" dashed>
                    {{ column.label }}
                  </b-tooltip>
                </template>
                {{ props.row.firstname }}

              </b-table-column>

              <b-table-column field="lastname" label="Last Name" searchable>
                <template slot="header" slot-scope="{ column }">
                  <b-tooltip :label="column.label" dashed>
                    {{ column.label }}
                  </b-tooltip>
                </template>
                {{ props.row.lastname }}
              </b-table-column>

              <b-table-column field="role" label="Role" searchable >
                <template slot="header" slot-scope="{ column }">
                  <b-tooltip :label="column.label" dashed>
                    {{ column.label }}
                  </b-tooltip>
                </template>
                <b-tag type="is-success">
                  {{ props.row.role }}

                </b-tag>
              </b-table-column>
              <b-table-column label=" " >
                <span>
                  <b-button type="is-dark">View</b-button>
                </span>
              </b-table-column>
            </template>
          </b-table>
        </div>
        <footer class="card-footer">
        </footer>
      </div>

    </section>
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    data() {
      return {
        data: [
        ]
      }
    },
    methods:{

    },
    mounted() {
      axios.get('https://api.cerebro.work/v1/faculty')
              .then(res => {
                res.data.data.forEach(data =>{
                  this.data.push({
                    "image" : data.profile_url,
                    "firstname" : data.firstname,
                    "lastname" : data.lastname,
                    "role" : data.role.join()
                  })
                })

              })
              .catch()

    }
  };
</script>
<style lang="css" scoped>
  .avatar {
    width: 80px;
    height: 80px;
    border-radius: 40px; /* половина ширины и высоты */
    margin: 10px;
  }
  .topbar{
    z-index: -2;
    transition: -webkit-filter .5s;
    transition: filter .5s,-webkit-filter .5s;
    height: 70px;
    pointer-events: none;
    bottom: -35px;
    -webkit-filter: brightness(100);
    filter: brightness(100);
    background-repeat: repeat-x;
    background-position: 172px 0;
    background-image: url('../assets/brush-yellow.png');
  }

</style>
