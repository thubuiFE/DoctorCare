import { createSlice } from "@reduxjs/toolkit";
import { dataMenu } from "../dataSources/menuData";
import { cardContent } from "../dataSources/cardContent";

export const fetchData = createSlice({
  name: "fetchData",
  initialState: {
    dataMenu: [],
    dataContent: [],
  },
  reducers: {
    fetchDataMenu: (state) => {
      console.log("1234");
      state.dataMenu = dataMenu;
    },
    fetchDataContent: (state) => {
      state.dataContent = cardContent;
    },
  },
});

export const { fetchDataMenu, fetchDataContent } = fetchData?.actions;

export default fetchData.reducer;
