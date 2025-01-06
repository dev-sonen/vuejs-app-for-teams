<script setup lang="ts">
    
    import { onMounted } from 'vue'
    import { useWindowSize } from '@/stores/window'
    import { RouterLink } from 'vue-router'
    
    const window = useWindowSize()

    onMounted( () => {
        window.getWindowX()
        window.getWindowY()
    } )

</script>

<template>

    <main class="p-5">
        
        <div class="grid p-1">
            <div class="flex items-center space-x-1">
                <h1 class="text-gray-800 text-3xl font-thin">welcome to</h1>
                    <img src="/img/vuejs-logo.png" alt="logo" class="h-8 w-8">
                <h1 class="text-[#41b883] text-3xl font-bold">vuejs</h1>
            </div>
            <div class="w-max">
                <RouterLink
                    to="/view"
                    class="text-gray-950 text-xs font-thin italic"
                >
                    go to view page
                </RouterLink>
            </div>
        </div>

        <br>

        <div class="grid gap-3">
            <div class="grid gap-1">
                <code class="text-black text-xs font-mono">window x: {{ window.sizex }} px</code>
                <code class="text-black text-xs font-mono">window y: {{ window.sizey }} px</code>
            </div>
            <button
                type="button"
                @click="() => {
                    window.getWindowX()
                    window.getWindowY()
                }"
                :class="[
                    'bg-[#41b883] border-[#41b883] text-white' ,
                    'text-xs border-2 uppercase',
                    'cursor-pointer outline-none rounded-sm py-1 px-3 w-max',
                    'transition ease-in-out duration-300',
                    'hover:border-green-300'
                ]"
                :disabled="false"
            >
                get window size
            </button>
        </div>

    </main>

</template>

<style scoped>
    /* custom styles here */
</style>
