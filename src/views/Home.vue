<template>
  <div>
    <section class="hero " style="background:#FFFFFF;">
      <div class="hero-body  flex-center">
        <div class="container">
          <h2 class="title has-text-centered">
            Welcome the Cerebro Faculty Page
          </h2>
          <p class="subtitle has-text-centered">
            Members help with verifying, mentoring and coaching developers from the Talent Program
          </p>
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
            You can look for a faculty member below using the search box(s) and/or filters
          </p>
        </div>
      </div>
    </section>
    <section>
      <div class="card">
        <div class="card-content">
          <b-table :data="data" paginated hoverable class="table-container is-fullwidth has"
                   :per-page="'10'">
            <template slot-scope="props">
              <b-table-column field="image" label="" width="100" >
                <img class="avatar"
                     :src="props.row.image.replace('http','https')"
                     v-if="props.row.image.includes('http')">
                <img class="avatar"
                     :src="props.row.image"
                     v-else>
              </b-table-column>
              <b-table-column   field="firstname" label="First Name"  searchable style="padding: 40px!important;">
                <template slot="header" slot-scope="{ column }">
                  <b-tooltip :label="column.label" dashed>
                    {{ column.label }}
                  </b-tooltip>
                </template>
                {{ props.row.firstname }}

              </b-table-column>

              <b-table-column field="lastname" label="Last Name" searchable  style="padding: 40px!important;">
                <template slot="header" slot-scope="{ column }">
                  <b-tooltip :label="column.label" dashed>
                    {{ column.label }}
                  </b-tooltip>
                </template>
                {{ props.row.lastname }}
              </b-table-column>

              <b-table-column field="role" label="Sector of Work" searchable  style="padding: 40px!important;">
                <template slot="header" slot-scope="{ column }">
                  <b-tooltip :label="column.label" dashed>
                    {{ column.label }}
                  </b-tooltip>
                </template>
                <div >
                  <div v-for="tag in props.row.role " class="column" v-if="tag!== 'faculty'">
                    <b-tag type="is-primary" >
                      {{ tag  }}
                    </b-tag>
                  </div>

                </div>

              </b-table-column>
              <b-table-column label="Faculty ID"  style="padding: 40px!important;">
                <template slot="header" slot-scope="{ column }">
                  <b-tooltip :label="column.label" dashed>
                    {{ column.label }}
                  </b-tooltip>
                </template>
                <span>
                    <b-field>
                      <b-input style="max-width: 80px" v-model="props.row.faculty_id" icon=""></b-input>
                      <p class="control">
                        <button  v-clipboard:copy="props.row.faculty_id"
                                 v-clipboard:success="onCopy"
                                 v-clipboard:error="onError"
                                 class="button is-primary"><small>Copy ID</small></button>
                      </p>
                    </b-field>
                </span>
              </b-table-column>
<!--              <b-table-column label="" >-->

<!--                <span>-->
<!--                  <b-button @click="getRow(props.row)"  type="is-dark">View Profile</b-button>-->
<!--                </span>-->
<!--              </b-table-column>-->
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
        data: [],
      }
    },
    methods:{
      getRow(current){
        this.$router.push({
          name: 'single',
          params: {
            items: current
          }
        });
      },
      onCopy (e) {
        this.success('You just copied: ' + e.text)
      },
      onError (e) {
        this.danger('Failed to copy texts')
      },
      success(message) {
        this.$buefy.toast.open({
          message: message,
          type: 'is-success'
        })
      },
      danger() {
        this.$buefy.toast.open({
          duration: 5000,
          message: `Something's not good, also I'm on bottom`,
          position: 'is-bottom',
          type: 'is-danger'
        })
      }
    },
    mounted() {
      axios.get('https://api.cerebro.work/v1/faculty')
              .then(res => {
                res.data.data.forEach(data =>{
                  this.data.push({
                    "image" : data.profile_url,
                    "firstname" : data.firstname,
                    "lastname" : data.lastname,
                    "role" : data.role,
                    "linked_in" : data.faculty.data.linked_in,
                    "about" : data.faculty.data.about,
                    "faculty_id" : data.faculty.data.faculty_id,
                  })
                })

              })
              .catch()

    }
  };
</script>
<style lang="css" >
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
