import { configureStore } from "@reduxjs/toolkit";
import { contactsApi } from "../services/api";
import { filterSlice } from "services/filterSlice";

export const store = configureStore({
    reducer: {
        [contactsApi.reducerPath]: contactsApi.reducer,
        [filterSlice.name]: filterSlice.reducer
    },

    middleware: getDefaultMiddleware => [
        ...getDefaultMiddleware().concat(contactsApi.middleware),
    ],

});
