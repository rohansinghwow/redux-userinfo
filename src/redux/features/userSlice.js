import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    userInfo : [],
    isLoading : true,
    error : '',
}

const URL = `https://reqres.in/api/users?page=2`

export const getUser = createAsyncThunk(
    'user/getUser',
    async ()=>{
        try{
           return fetch(URL).then((res)=>res.json()).then(data=>data.data)
        }
        catch(error){
            return error
        }
    }
)


const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers:{

    },
    extraReducers:{
        [getUser.pending] : (state)=>{
            state.isLoading = true
        },
        [getUser.fulfilled] : (state,action)=>{
            state.isLoading = false;
            state.userInfo = action.payload;
        },
        [getUser.rejected] : (state)=>{
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export default userSlice.reducer