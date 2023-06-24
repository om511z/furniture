import { ALL_SHIRT_REQUEST,ALL_SHIRT_SUCCESS,ALL_SHIRT_FAIL } from "../Constants/ProductConstants";


export const shirtReducer = (state = { products:[] },action) =>{
    switch(action.type){

        case ALL_SHIRT_REQUEST:
          
            return{
                loading:true,
                products: []
            }

            case ALL_SHIRT_SUCCESS:
                return{
                    loading:false,
                    products: action.payload.products
                }

             
                
            case ALL_SHIRT_FAIL:
             
                return{
                    loading:false,
                    error:action.payload
                }  

        default :
        return state;
    }
}
