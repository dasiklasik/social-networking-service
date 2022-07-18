import axios from "axios";
import {userItemType} from "../redux/usersReducer";
import {profileInfoType} from "../redux/state";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '2fb059af-d1d5-4375-a272-54a52b66ff13'},
})



type getUsersType = {
    error: string | null
    items: Array<userItemType>
    totalCount: number
}

type followUserType = {
    resultCode: number
    messages: string[]
    data: {}
}

type unfollowUserType = {
    resultCode: number
    messages: string[]
    data: {}
}

type setStatusType = {
    resultCode: number
    messages: string[]
    data: {}
}

type getAuthType = {
    resultCode: number
    messages: string[]
    data: {
        id: number
        email: string
        login: string
    }
}


export const usersAPI = {
    getUsers: (pageNumber: number = 1, pageSize: number = 10) => {
        return instance.get<getUsersType>(`users?count=${pageSize}&page=${pageNumber}`)
            .then(response =>  response.data)
    },
    followUser: (userId: number) => {
        return instance.post<followUserType>(`follow/${userId}`)
            .then(response => response.data)
    },
    unfollowUser: (userId: number) => {
        return instance.delete<unfollowUserType>(`follow/${userId}`)
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
        return instance.put<setStatusType>('status', {status})
            .then(response => response.data)
    }
}

export const authAPI = {
    getAuth: () => {
        return instance.get<getAuthType>('auth/me')
            .then(response => response.data)
    }
}
