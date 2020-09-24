<template>
    <grid :cols="cols" :rows="rows" :search="true" :sort="true"></grid>
</template>

<script>
import Grid from "gridjs-vue";
import controller from "../controller"

export default {
    data() {
        return {
            cols: ["name", "checkout"],
            rows: []
        };
    },
    components: {
        Grid,
    },
    mounted() {
        const jwt = controller.storage.readData("token");
        if (jwt) {
            this.token = jwt;
        } else {
            this.$router.push({ name: "Login" });
        }
        const response = controller.api.audData("/audiences", { headers: { Authentication: jwt } })
        this.rows = response.then(resp => this.rows = resp.data.data)
    }
};
</script>

<style scoped>
</style>
