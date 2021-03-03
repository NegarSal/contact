<template>
  <div class="home">
    <h1 class="pink--text ">Phone</h1>
    <template>
  <v-card max-width="450" class="mx-auto my-2">
    <v-toolbar color="pink" dark>

      <v-toolbar-title>Contact</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon  to="../AddContact">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-btn icon to="../UpdateContact">
        <v-icon>mdi-cached</v-icon>
      </v-btn>
        <v-menu bottom left >
            <template v-slot:activator="{ on, attrs }">
              <v-btn dark icon v-bind="attrs" v-on="on">
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item v-for="(item, i) in links" :key="i" >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

      
    </v-toolbar>

    <v-list three-line>
      <template v-for="(item, index) in items">
        <v-subheader
          v-if="item.header"
          :key="item.header"
          v-text="item.header"
        ></v-subheader>

        <v-divider
          v-else-if="item.divider"
          :key="index"
          :inset="item.inset"
        ></v-divider>

        <v-list-item
          v-else
          :key="item.title"
        >
          <v-list-item-avatar>
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="item.title"></v-list-item-title>
            <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-card>
    </template>
  </div>
  </template>

<script>
  export default {
    data: () => ({
       links: [
        { title: 'Delete' },
        { title: 'Share' },
        { title: 'Settings' },
        { title: 'Contact us' },
      ],
      items: [
        {
          avatar: '/Magnus.jpg',
          title: 'Magnus Carlsen',
          subtitle: `<span class="text--primary">mobile:</span> 0987654321`,
        },
        { divider: true, inset: true },
        {
          avatar: '/Fabiano.jpg',
          title: 'Fabiano Caruana',
          subtitle: `<span class="text--primary">mobile:</span>  0987654321`,
        },
        { divider: true, inset: true },
        {
          avatar: '/Ding.jpg',
          title: 'Ding Liren',
          subtitle: '<span class="text--primary">mobile:</span> 0987654321',
        },
        { divider: true, inset: true },
        {
          avatar: '/Ian.jpg',
          title: 'Ian Nepomniachtchi',
          subtitle: '<span class="text--primary">mobile:</span> 0987654321',
        },
        { divider: true, inset: true },
        {
          avatar: '/Maxime.jpg',
          title: 'Maxime Vachier-Lagrave',
          subtitle: '<span class="text--primary">mobile:</span> 0987654321',
        },
      ],
    }),
  }
</script>
<style>
.home{
  border: 2px solid palevioletred;
}
</style>