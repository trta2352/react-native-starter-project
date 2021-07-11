import { applyMiddleware, createStore } from 'redux'
import {rootReducer} from './reducers/rootReducer'

import ThunkMiddleware from 'redux-thunk'
//import { GET_FLOWERS } from '../utils/apiConstants'
//import { fetchFlowersError, fetchFlowersRequest, fetchFlowersSuccess } from './actions'
import axios, { AxiosResponse } from 'axios'

/*
export const fetchFlowers = (page: number) => {
  return function(dispatch: any){
    dispatch(fetchFlowersRequest()); 
    return axios(GET_FLOWERS, {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json',
      }, 
      params: {
        "page": page
      }
    }).then((response: AxiosResponse) =>{
      let flowers = response.data.flowers; 
      let nextPage = response.data.meta.pagination.next_page || -1
      return dispatch(fetchFlowersSuccess(flowers, nextPage))
    })
    .catch((error)=>{
      console.log(error)
      dispatch(fetchFlowersError('Flowers can not be fetched at this momemnt. Please try again later. '))
    })
  }
}*/

const store = createStore(rootReducer, applyMiddleware(ThunkMiddleware))
export default store; 