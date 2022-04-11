import { configureStore } from "@reduxjs/toolkit";
import { ResturantApi } from "./services/Api";
import ResturantReducer from "./slice/ResturantSlice";
import ItemReducer from "./slice/ItemSlice";

export const store = configureStore({
  reducer: {
    [ResturantApi.reducerPath]: ResturantApi.reducer,
    ResturantReducer,
    ItemReducer,
  },
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(ResturantApi.middleware),
});

export default store;
