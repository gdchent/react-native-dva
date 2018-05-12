import axios from 'axios'

/**
 * axios的Get请求
 */
export async function axiosGet(url, params) {

    return new Promise((resolve, reject) => {
		let instance = axios.create();
		//instance.defaults.baseURL = 'https://api.example.com';
instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
        instance.get(url, {
            params: params,
        }).then((response) => {
            
            let data = response.data;
            if (data) {
                console.log(data.data);
                resolve(data.data)
            }

        })
            .catch((error) => {
                console.log(error);
            });
    })
}



export async function axiosPost(url, params) {

    return new Promise((resolve, reject) => {
		let instance = axios.create();
		instance.defaults.baseURL = 'https://api.example.com';
instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
       axios.post(url,params)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
    })
}




export async function fetchGet(url, ) {
    return new Promise(
        function (resolve, reject) {
            fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then((response) => {//1
                if (response.ok) {
                    return response.json()
                } else {
                    reject({ status: response.status })
                }
            }).then((response) => {
                console.log(response);
                console.log(response.data)
                resolve(response.data);
            }).catch((err) => {//2
                console.error(err);
            });
        }
    )
}

