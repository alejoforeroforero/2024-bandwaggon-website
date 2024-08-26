import { configureStore } from '@reduxjs/toolkit';
import globalReducer from '@/redux/states/globalSlice';

const store = configureStore({
    reducer: {
        global: globalReducer,
    },
});

export default store;
