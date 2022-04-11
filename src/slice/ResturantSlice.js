import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { useGetResturantItemsQuery } from "../services/Api";
// import Loading from "./Loading";

// const { data, isLoading } = useGetResturantItemsQuery();

const initialState = {
  //const { data, isLoading } = useGetResturantItemsQuery()
  ResturantItem: [
    {
      id: 1,
      name: "美式1",
      avatar: "/images/avatars/a1.png",
      price: 550,
      isFollowing: false,
      type: "America",
    },
    {
      id: 2,
      name: "日式2",
      avatar: "/images/avatars/a2.png",
      price: 550,
      isFollowing: false,
      type: "Japan",
    },
    {
      id: 3,
      name: "歐式3",
      avatar: "/images/avatars/a3.png",
      price: 550,
      isFollowing: false,
      type: "Europe",
    },
    {
      id: 4,
      name: "台式4",
      avatar: "/images/avatars/a4.png",
      price: 550,
      isFollowing: false,
      type: "Taiwan",
    },
    {
      id: 5,
      name: "美式5",
      avatar: "/images/avatars/a5.png",
      price: 550,
      isFollowing: false,
      type: "America",
    },
    {
      id: 6,
      name: "歐式6",
      avatar: "/images/avatars/a6.png",
      price: 550,
      isFollowing: false,
      type: "Europe",
    },
    {
      id: 7,
      name: "日式7",
      avatar: "/images/avatars/a7.png",
      price: 550,
      isFollowing: false,
      type: "Japan",
    },
    {
      id: 8,
      name: "台式8",
      avatar: "/images/avatars/a8.png",
      price: 550,
      isFollowing: false,
      type: "Taiwan",
    },
    {
      id: 9,
      name: "台式9",
      avatar: "/images/avatars/a9.png",
      price: 550,
      isFollowing: false,
      type: "Taiwan",
    },
    {
      id: 10,
      name: "歐式10",
      avatar: "/images/avatars/a10.png",
      price: 550,
      isFollowing: false,
      type: "Europe",
    },
  ],
};

export const ResturantSlice = createSlice({
  name: "ResturantSlice",
  initialState,
  //TODO: 這邊是reducers!!
  reducers: {
    follow: (state, action) => {
      const resturants = state.ResturantItem;
      for (let i = 0; i < resturants.length; i++) {
        const resturant = resturants[i];
        if (resturant.id === action.payload) {
          resturant.isFollowing = true;
        }
      }
    },
    unfollow: (state, action) => {
      const resturants = state.ResturantItem;
      for (let i = 0; i < resturants.length; i++) {
        const resturant = resturants[i];
        if (resturant.id === action.payload) {
          resturant.isFollowing = false;
        }
      }
    },
  },
});

export const { follow, unfollow } = ResturantSlice.actions;

export default ResturantSlice.reducer;
