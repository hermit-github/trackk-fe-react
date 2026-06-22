import {api} from "./api";

export const usersApi = api.injectEndpoints({
    endpoints: (build) => ({
        getUsers: build.query<any,void>({
            query: () => "/users",
            providesTags: ["Users"]
        })
    })
})

export const {useLazyGetUsersQuery} = usersApi;