import axios from "axios";
import {userItemType} from "../redux/reducers/users-reducer";
import {profileInfoType} from "../redux/state";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '2fb059af-d1d5-4375-a272-54a52b66ff13', 'Content-Type': 'application/json'},
})


type getUsersType = {
    error: string | null
    items: Array<userItemType>
    totalCount: number
}

type ResponseType<T = {}> = {
    resultCode: number
    messages: string[]
    data: T
}

type loginDataType = {
    email: string
    password: string
    rememberMe?: boolean
    captcha?: boolean
}


export const usersAPI = {
    getUsers: (pageNumber: number = 1, pageSize: number = 10) => {
        return instance.get<getUsersType>(`users?count=${pageSize}&page=${pageNumber}`)
            .then(response => response.data)
    },
    followUser: (userId: number) => {
        return instance.post<ResponseType>(`follow/${userId}`)
            .then(response => response.data)
    },
    unfollowUser: (userId: number) => {
        return instance.delete<ResponseType>(`follow/${userId}`)
            .then(response => response.data)
    }
}

export const profileAPI = {
    getProfileData: (userId: number) => {
        return instance.get<profileInfoType>(`profile/${userId}`)
            .then(response => response.data)
    },
    getStatus: (userId: number) => {
        return instance.get<string>(`profile/status/${userId}`)
            .then(response => response.data)
    },
    setStatus: (status: string) => {
        return instance.put<ResponseType>('profile/status/', {status})
            .then(response => response.data)
    }
}

export const authAPI = {
    getAuth: () => {
        return instance.get<ResponseType<{ id: number, email: string, login: string }>>('auth/me')
            .then(response => response.data)
    },
    login: (loginData: loginDataType) => {
        return instance.post<ResponseType<{userId: number}>>('auth/login', loginData)
            .then(response => response.data)
    },
    logout: () => {
        return instance.delete<ResponseType>('auth/login')
            .then(response => response.data)
    }
}
