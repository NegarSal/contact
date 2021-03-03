<template>
  <v-app>
    <v-content class="mx-5 my-5">
        <router-view>
          <AddContact/>
          <UpdateContact/>
        </router-view>
      </v-content>
  </v-app>
</template>

<script>
import AddContact  from '@/components/AddContact'
import UpdateContact from '@/components/UpdateContact'

export default {
  name: 'App',
  components:{ 
  AddContact, 
  UpdateContact,
  },

  data: () => ({
    //
  }),
};
</script>
