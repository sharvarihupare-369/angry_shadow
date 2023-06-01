import { GET_PRODUCT_SUCCESS_MEN, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./actionTypes"
import axios from 'axios'

export const getProductsMen = (setTotalPages,page) => (dispatch) => {
    dispatch({type:PRODUCT_REQUEST})
    axios.get(`https://rich-gold-boa-fez.cyclic.app/men?_limit=14&_page=${page}`).then((res)=>{
        // console.log(res.headers["x-total-count"])    
        // console.log(res)
        // let pages = res.headers['x-total-count'];
        setTotalPages(res.headers['x-total-count'])
        dispatch({type:GET_PRODUCT_SUCCESS_MEN , payload:res.data})
    }).catch(()=>{
        dispatch({type:PRODUCT_FAILURE})
    })
}



export const getProductsSingleMen = (setsingleData,id) => {
  
    axios.get(`https://rich-gold-boa-fez.cyclic.app/men/${id}`).then((res)=>{
        console.log(res.data)
            setsingleData(res.data)
      
    }).catch(()=>{
       
    })
}
