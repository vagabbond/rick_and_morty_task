import { createSlice } from "@reduxjs/toolkit";

interface Hero {
 id: number;
 name: string;
}

type InitialState = {
 heroes: Hero[];
 loading: boolean;
 error: string | null;
};

const initialState: InitialState = {
 heroes: [],
 loading: false,
 error: null,
};

const heroesSlice = createSlice({
 initialState,
 name: "heroes",
 reducers: {
  getHeroesStart(state) {
   state.loading = true;
   state.error = null;
  },
  getHeroesSuccess(state, action) {
   state.heroes = action.payload;
   state.loading = false;
   state.error = null;
  },
  getHeroesFailure(state, action) {
   state.loading = false;
   state.error = action.payload;
  },
 },
});

export default heroesSlice.reducer;
