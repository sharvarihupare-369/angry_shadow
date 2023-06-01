import { GET_PRODUCT_SUCCESS_MEN, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./actionTypes"

const initialState = {
    isLoading : false,
    isError : false,
    products : [],
    men : [],
    women:[]
}

export const reducer = (state=initialState,{type,payload}) => {
    switch(type){
        case PRODUCT_REQUEST : {
             return{
                ...state,
                isLoading:true,
                isError : false
             } 
        }
        case PRODUCT_FAILURE :{
            return{
                ...state,
                isLoading:false,
                isError : true
             } 
        }
        case GET_PRODUCT_SUCCESS_MEN : {
            return {
              
                    ...state,
                    isLoading:false,
                    isError : false,
                    men:payload
                 } 
            
        }
        default : {
            return state
        }
    }
}
