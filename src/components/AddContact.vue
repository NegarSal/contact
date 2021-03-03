<template>
 <div class="add" >
   <h1 class="pink--text" >Add Contact</h1>
     <v-card class="overflow-hidden mx-auto" color="pink lighten-1" dark max-width="450"  >
       <v-toolbar flat color="pink lighten-1">
         <v-icon>mdi-account</v-icon>
           <v-toolbar-title class="font-weight-light">
             New Contact
           </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-3" fab small @click="isEditing = !isEditing">
              <v-icon v-if="isEditing">
                mdi-close
              </v-icon>
              <v-icon v-else>
                mdi-pencil
              </v-icon>
            </v-btn>
        </v-toolbar>
    <v-card-text>
      <v-text-field :disabled="!isEditing" color="white" label="Name" ></v-text-field>
      <v-text-field :disabled="!isEditing" color="white" label="mobile"></v-text-field>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn :disabled="!isEditing" color="blue" @click="save">
        Save
      </v-btn>
    </v-card-actions>
    <v-snackbar  v-model="hasSaved" :timeout="2000" absolute bottom left>
      Your new contact has been added
    </v-snackbar>
  </v-card>
</div>
    
</template>
<script>
  export default {
    data: () => ({
      hasSaved: false,
        isEditing: null,
        model: null,
    }),
    methods: {
      save () {
        this.isEditing = !this.isEditing
        this.hasSaved = true
      },
    },
  }
</script>

<style>
.add{
  border: 2px solid palevioletred;
}
</style>
