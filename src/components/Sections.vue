<template>
<v-layout class="main">
    <v-layout row wrap class="mt-6">
        <v-flex class="item"><router-link to="/sections" class="link">resume</router-link></v-flex>
        <v-flex class="item"><router-link to="/projects" class="link">projects</router-link></v-flex>
        <v-flex class="item"><router-link to="/" class="link">contact</router-link></v-flex>
    </v-layout>
</v-layout>
</template>

<style scoped>
.main {
    margin: 0 auto;
    height: 100%;
    background-image: linear-gradient(to right, #43e97b 0%, #38f9d7 100%);
}

.link {
    text-decoration: none;
    color: white
}
.item {
    font-size: 20px;
    font-family: 'Montserrat', sans-serif;
}
</style>

