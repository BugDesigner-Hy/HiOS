import http from '../plugins/request'
const proxy = '/weather'
export function getfuture(city){
    return new Promise((resolve, reject) => {
        const params = {
            version:'v9',
            appid:'63516561',
            appsecret:'4CFblzCd',
            city: city,
        }
        http.get(proxy+'/api/', { params }).then(res => {
            resolve(res)
        }).catch(err => reject(err))
    })
}