import { createAction, NavigationActions, Storage } from '../utils'
import * as authService from '../services/auth'
import { effects } from 'redux-saga';

export default {
    namespace: 'home',
    state:{
        axiosGdData:[],
        fetchGdGetData:[],
    },
    reducers: {
        updateState(state, { payload }) {
            return { ...state, ...payload }
        },
    },

    effects:{
        *axiosGdGet(action,{call,put}){
            const data=yield call(authService.axiosGdGet,{
               
            })
            console.log(data);
            yield put(createAction('updateState')({ axiosGdData:data,login: false }))
        },
        *fetchGdGet(action,{call,put}){
            const data=yield call(authService.fetchGdGet,action.payload);
            if(!data){
                return ;
            }
            console.log(data);
            yield put(createAction('updateState')({fetchGdGetData:data,}))
        }
    },
    
}