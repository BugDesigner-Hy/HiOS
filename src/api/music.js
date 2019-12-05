import http from '../plugins/request'
const proxy = '/music'
export function login() {
    return new Promise((resolve, reject) => {
        const params = {
            phone: '18811435711',
            password: 'haiyang123'
        }
        http.get('/login/cellphone?phone=18811435711&password=haiyang123').then(res => {
            resolve(res)
        }).catch(err => reject(err))
    })
}

export function topsong() {
    return new Promise((resolve, reject) => {
        const params = {
            type: '96',
        }
        http.get(proxy+'/top/song', { params }).then(res => {
            resolve(res)
        }).catch(err => reject(err))
    })
}

export function search() {
    return new Promise((resolve, reject) => {
        const params = {
            keywords: 'happy'
        }
        http.get('/search', { params }).then(res => {
            resolve(res)
        }).catch(err => reject(err))
    })
}

export function userplaylist(userId) {
    return new Promise((resolve, reject) => {
        const params = {
            uid: userId
        }
        http.get('/user/playlist', { params }).then(res => {
            resolve(res)
        }).catch(err => reject(err))
    })
}

export function userlikelist(userId) {
    return new Promise((resolve, reject) => {
        const params = {
            uid: userId
        }
        http.get('/likelist', { params }).then(res => {
            resolve(res)
        }).catch(err => reject(err))
    })
}

export function songUrl(songId) {
    return new Promise((resolve, reject) => {
        const params = {
            id: songId
        }
        http.get(proxy+'/song/url', { params }).then(res => {
            resolve(res)
        }).catch(err => reject(err))
    })
}

export function lyric(songId) {
    return new Promise((resolve, reject) => {
        const params = {
            id: songId
        }
        http.get('/lyric', { params }).then(res => {
            resolve(res)
        }).catch(err => reject(err))
    })
}

export function songDetail(songId) {
    return new Promise((resolve, reject) => {
        const params = {
            ids: songId
        }
        http.get(proxy+'/song/detail', { params }).then(res => {
            resolve(res)
        }).catch(err => reject(err))
    })
}