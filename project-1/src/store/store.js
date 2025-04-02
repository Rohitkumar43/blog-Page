import {configureStore} from '@reduxjs/toolkit' 
import Authslice from './Authslice'

const store = configureStore({
    reducer: {
        auth: Authslice,
        // Add more slices here for the posts
    }
})

export default store
