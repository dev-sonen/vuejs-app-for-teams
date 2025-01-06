<script setup lang="ts">
    
    import { RouterLink } from 'vue-router'

</script>

<template>

    <main class="p-5">
        
        <div class="grid p-1">
            <h1 class='text-gray-800 text-3xl font-thin'>404 page not found</h1>
            <div class="w-max">
                <RouterLink
                    to="/"
                    class="text-gray-950 text-xs font-thin italic"
                >
                    back to home page
                </RouterLink>
            </div>
        </div>

    </main>

</template>

<style scoped>
    /* custom styles here */
</style>
