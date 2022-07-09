import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '2fb059af-d1d5-4375-a272-54a52b66ff13'},
})


export const usersAPI = {
    getUsers: (pageNumber: number = 1, pageSize: number = 10) => {
        return instance.get(`users?count=${pageSize}&page=${pageNumber}`).then(response => response.data)
    },
    followUser: (userId: number) => {
        return instance.post(`follow/${userId}`)
    },
    unFollowUser: (userId: number) => {
        debugger
        return instance.delete(`follow/${userId}`)
    }
}

export const profileAPI = {
    getProfileData: (userId: number) => {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },
}

export const authAPI = {
    getAuth: () => {
        return instance.get('auth/me')
            .then(response => response.data)
    }
}
