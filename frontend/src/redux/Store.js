import {configureStore} from "@reduxjs/toolkit";
import { adminReducer } from "./reducers/adminReducer.js";
import { courseReduce } from "./reducers/courseReducer.js";
import { otherReducer } from "./reducers/otherReducer.js";
import { profileReducer, subscriptionReducer, userReducer } from "./reducers/userReducer.js";



const store = configureStore({
    reducer: {
        user: userReducer,
        profile: profileReducer,
        course: courseReduce,
        subscription: subscriptionReducer,
        admin: adminReducer,
        other: otherReducer,
    }
})


export default store;



export const server= "http://localhost:3000/api/v1/";
