import { configureStore } from "@reduxjs/toolkit";

import { FLUSH, PAUSE, PURGE, REGISTER, REHYDRATE, persistStore } from "redux-persist";
import { filtersReducer } from "./filterSlice";
import { persistedContactsReducer } from "./contactsSlice";

export const store = configureStore({
    reducer: {
        contacts: persistedContactsReducer,
        filter: filtersReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store);