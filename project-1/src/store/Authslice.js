import { createSlice } from "@reduxjs/toolkit";
//this slice is used  to check that the user is authentitcated or not 
const intialState = {
    status: false,
    userData: false,
}

const authSlice = createSlice({
    name: "auth",
    intialState,
    reducers:{ // reducer have always state and action
        login: (state , action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
    }
});

export const{login , logout} = authSlice.actions;

export default authSlice.reducer // taki reducer apna kaam kar paye to make the state changes