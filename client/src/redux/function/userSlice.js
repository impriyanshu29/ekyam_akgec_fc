import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    currentUser:null,
    error:null,
    loading:false
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        signInStart:(state)=>{
            state.loading = true;
            state.error = null;
        },
        signInSucess:(state,action)=>{
            state.currentUser = action.payload;
            state.error = null;
            state.loading = false;
        },
        signInFail:(state,action) =>{
            
            state.error = action.payload;
            state.loading = false;

        },
        signOutSucess:(state) =>{
            state.currentUser = null;
            state.error = null;
            state.loading = false;
        },
        updateStart:(state)=>{
            state.loading = true;
            state.error = null;
        },
        updateSucess:(state,action)=>{
            state.currentUser = action.payload;
            state.error = null;
            state.loading = false;
        },
        updateFail:(state,action) =>{
            state.error = action.payload;
            state.loading = false;
        }
    }
})

export const {signInFail,signInStart,signOutSucess,updateFail,updateSucess,updateStart,signInSucess} = userSlice.actions;
export default userSlice.reducer;