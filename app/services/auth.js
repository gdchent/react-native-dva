import { delay } from '../utils'
import axios from 'axios'


import { axiosGet, fetchGet } from '../utils/httpUtil'
export const login = async () => {
    await delay(2000)
    return true
}

//请求
export async function axiosGdGet(params) {

    const data = await axiosGet('http://guangdiu.com/api/gethots.php', params);
    console.log(data);
    return data;

   

    //   Promise.race(
    //         [
    //             fetch('http://guangdiu.com/api/gethots.php'),
    //             new Promise(
    //                 function (resolve, reject) {
    //                     setTimeout(()=>{
    //                         reject(new Error('requrest error'),20000)
    //                     })
    //                 }
    //             )
    //         ])
    //         .then((response)=>{
    //                 console.log(response);
    //              //   console.log(response.json());
    //         })
    //         .catch((error)=>{
    //                 console.log(error);
    //         })



}




export async function axiosGdGet(params) {

    const data = await axiosGet('http://guangdiu.com/api/gethots.php', params);
    console.log(data);
}
export async function axiosGdGet(params) {

    const data = await axiosGet('http://guangdiu.com/api/gethots.php', params);
    console.log(data);
}



export async function fetchGdGet() {
    console.log('fetchGet');
    const data = await fetchGet('http://guangdiu.com/api/gethots.php')
    console.log(data);
    console.log('fetchGet');
    return data;
}
