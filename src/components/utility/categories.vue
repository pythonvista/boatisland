<template>
    <div class="categories px-2">
        <v-chip-group multiple active-class="primary--text">
            <v-chip v-for="tag in tags" :key="tag">
                {{ tag }}
            </v-chip>
        </v-chip-group>
    </div>
</template>

<script>
export default {
    name: 'categories',
    data: () => ({
        tags: [
            'Work',
            'Home Improvement',
            'Vacation',
            'Food',
            'Drawers',
            'Shopping',
            'Art',
            'Tech',
            'Creative Writing',
        ],
    }),

}
</script>

<style>

</style>