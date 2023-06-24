import { ALL_SHIRT_REQUEST,ALL_SHIRT_SUCCESS,ALL_SHIRT_FAIL } from "../Constants/ProductConstants";

import axios from "axios"

export const getShirt = () => async (dispatch) =>{
    try{

        dispatch({ type:ALL_SHIRT_REQUEST})

        const {data} = await axios.get('https://fuzzy-tan-frog.cyclic.app/api/v2/shirt')

        dispatch({
            type:ALL_SHIRT_SUCCESS,
            payload: data
        })
    } catch(error){
        dispatch({
            type:ALL_SHIRT_FAIL,
            payload:error.response.data.message
        })
    }
}