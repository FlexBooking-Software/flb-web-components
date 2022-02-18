
<template>
  <div class="flbSearch" >
    
    <v-form ref="form">
    <v-card
      class="pa-4 mt-6"
      width="600px"
    >
      <v-card-title class="pa-3">
        {{ title }}
      </v-card-title>
      
      <v-container  class="pa-3">
        <v-row>
          <v-col cols="12" sm="10">
            <v-text-field  prepend-icon="article" dense label="What" class="pa-0" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field prepend-icon="place" dense label="Where" class="pa-0" />
          </v-col>
          <v-col cols="4">
            <v-btn
              outlined
              small
              class="mt-1"
            >
            Use my position
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6">
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="date"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  dense
                  v-model="date"
                  label="When"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="date"
                no-title
                scrollable
              >
                <v-spacer></v-spacer>
                <v-btn
                  text
                  color="primary"
                  @click="menu = false"
                >
                  Cancel
                </v-btn>
                <v-btn
                  text
                  color="primary"
                  @click="$refs.menu.save(date)"
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
          </v-col>
          <v-col
            class="d-flex"
            cols="12"
            sm="6"
          >
            <v-select
              :items="intervalItems"
              label="Interval"
              small
              dense
            ></v-select>
          </v-col>
        </v-row>
      </v-container>

        <v-card-actions>
          <v-btn class="mr-4">
            Reset
          </v-btn>
          <v-btn type="submit" color="primary">
            Search
          </v-btn>
        </v-card-actions>
 
      </v-card>
    </v-form>
    

  </div>
</template>



<script>
// import { VContainer, VCol, VRow, VForm, VCard, VCardTitle, VCardActions, VBtn, VMenu, VDatePicker, VSelect, VTextField, VSpacer} from 'vuetify/lib'
// import {VBtn, VIcon} from 'vuetify/lib'

export default {
  name: 'flbSearch',
  // components: {
  //    VBtn, VIcon
  // },
  props: {
    title:  {
      type: String,
      default: 'Search'
    },
    // apiUrl: {
    //   type: String,
    //   default: 'https://www.flexbook.cz/test/api/v1'
    // }
  },
  data: () => ({
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      menu: false,
      intervalItems: ['specified term only', '+ next day', '+ next 2 days', '+ next 3 days', '+ next 4 days', '+ next 5 days', '+ next 5 days', '+ next 6 days', '+ next week', '+ next two weeks', '+ next month'],
  }),
}
</script>


