import {createSlice} from '@reduxjs/toolkit'

const userSlice= createSlice({
    name: 'user', //this parameter is only for internal use
    initialState: {
        isAuthenticated: false,
        username: null,
    },
    reducers: {

        //this state variable tht comes as argument in our action function is
        //the state of this particular slice
        
        addUser(state, action){
           
            state.isAuthenticated=true;
            state.username= action.payload; 
        },
        removeUser(state, action){
            state={};
        }
    }
})

console.log(userSlice);

export const {addUser, removeUser}= userSlice.actions;
export default userSlice.reducer;


