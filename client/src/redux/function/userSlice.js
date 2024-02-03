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

        }
    }
})

export const {signInFail,signInStart,signInSucess} = userSlice.actions;
export default userSlice.reducer;