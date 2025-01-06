import { defineStore } from 'pinia'

export const useWindowSize = defineStore( 'size' , {
    state: () => {
        return {
            sizex: 0,
            sizey: 0
        }
    },
    actions: {
        getWindowX() {
            this.sizex = window.innerWidth
        },
        getWindowY() {
            this.sizey = window.innerHeight
        }
    }
} )
