<template>
    <form @submit="calculateSequence">
        <input type="text" name="sequence" v-model="sequence">
        <input type="submit" class="btn">
    </form>
</template>

<script>
export default {
    name: "ReverseComplement",
    methods: {
        calculateSequence(){

        }
    }
}
</script>

<style scoped>

</style>


