const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    sgpa:''
}

const sgpaSlice = createSlice({
    name: 'sgpa',
    initialState,
    reducers:{
        calculateSGPA: (state,action)=>{
            state.sgpa = action.payload
        }
    }
})

export default sgpaSlice;
export const {calculateSGPA} = sgpaSlice.actions;
