import {proxy} from 'valtio'

const state = proxy({
    intro: true,
    color: '#efbd48',
    islogoTexture: true,
    isFullTexture: false,
    logoDecal: './threejs.png',
    fullDecal: './threeJs.png'
})

export default state