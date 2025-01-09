import { createSlice,  PayloadAction } from "@reduxjs/toolkit";
interface UploadeState{
    isUploaded:boolean
}
const initialState : UploadeState={
    isUploaded:false
}
const uploadSlice= createSlice({
    name:"upload",
    initialState,
    reducers:{
        setImageUploaded:(state, action :PayloadAction<boolean>)=>{
            console.log(action.payload)
            state.isUploaded=action.payload
        },
        resetImageUpload:(state)=>{
            state.isUploaded=false
        }
    }
})
export const {setImageUploaded,resetImageUpload}=uploadSlice.actions
export default uploadSlice.reducer