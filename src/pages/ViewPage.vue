<script setup lang="ts">
    
    import { ref , onMounted } from 'vue'
    import { RouterLink } from 'vue-router'
    
    import CloseCircleIcon from '@/assets/icons/CloseCircleIcon.vue'

    const lists = ref<string[]> ( [] )
    const task = ref<string> ( '' )

    const addTask = () => task.value.trim() !== '' && ( lists.value.push( task.value ) , task.value = '' )
    const clearList = () => lists.value = []
    const deleteList = ( ind: number ) => lists.value.splice( ind , 1 )

    onMounted ( async () => {
        try {

            const res = await fetch( 'https://jsonplaceholder.typicode.com/todos' )
            const data = await res.json()

            lists.value = ( data.map( ( list: { title: string } ) => list.title ) ).slice( 0 , 10 )
            
        } catch ( err ) {
            console.log( ( err as Error ).message )
        }
    } )

</script>

<template>

    <main class="p-5">
        
        <div class="grid p-1">
            <h1 class='text-gray-800 text-3xl font-thin'>this is the view page.</h1>
            <div class="w-max">
                <RouterLink
                    to="/"
                    class="text-gray-950 text-xs font-thin italic"
                >
                    back to home page
                </RouterLink>
            </div>
        </div>

        <br>

        <div class="grid gap-2">
            <form v-on:submit.prevent="addTask" class="grid gap-1">
                <div class="flex space-x-2">
                    <input
                        class="bg-gray-200 border-gray-200 text-gray-950 border-2 text-xs outline-none cursor-auto rounded-sm py-0.5 px-2 transition ease-in-out duration-300 hover:border-gray-500 focus:border-gray-500"
                        type="text"
                        id="newTask"
                        name="newTask"
                        placeholder="ADD TASK"
                        v-model="task"
                    >
                    <button type="button" v-on:click="clearList" class="flex items-center justify-center bg-red-500 border-red-500 text-white text-xs uppercase border-2 rounded-sm outline-none cursor-pointer px-2 h-full w-max transition ease-in-out duration-300 hover:border-red-400 focus:border-red-400">
                        clear all
                    </button>
                </div>
            </form>
    
            <ul>
                <li v-for="( list , ind ) in lists" :key="ind">
                    <div class="flex space-x-2">
                        <button v-on:click="deleteList ( ind )" class="cursor-pointer">
                            <CloseCircleIcon class="text-red-500" />
                        </button>
                        <div class="text-gray-950 text-sm font-thin">{{ list }}</div>
                    </div>
                </li>
            </ul>
        </div>

    </main>

</template>

<style scoped>
    /* custom styles here */
</style>
