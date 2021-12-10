import {LOAD_MEME} from "../constants/constants";


export function setMemeAction(data) {
    return {
        type: LOAD_MEME,
        payload: data
    }
}