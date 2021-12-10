import {fetchData} from "../../services/fetchData";
import {loaderAction} from "../actions/loaderAction";
import {LOAD_MEME} from "../constants/constants";
import {setMemeAction} from "../actions/setMemeAction";

let stateMeme = {
    dataMeme: {

    },
    fetch: true
}


export let memeReducer = (state = stateMeme, action)  => {

    switch (action.type) {
        case LOAD_MEME:
            state = {
                    ...state, dataMeme: {...action.payload}
                }
                return state;

        case "LOADER_CHANGER":
            return  {
                ...state, fetch: !state.fetch
            }

        default:
            return state;

    }

}

export let fetchUsersThunk = () => async dispatch => {


    dispatch(loaderAction());
     setTimeout(async()=> {
        let data = await fetchData();
        let newMeme = data.memes;
        let mem = newMeme[Math.round(Math.random() * 100)]
        dispatch(setMemeAction(mem));
        dispatch(loaderAction());
    },500);

}
