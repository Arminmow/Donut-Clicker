import { Upgrades } from "../../data/upgrades";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  upgrades: Upgrades.map((upgrade) => ({
    ...upgrade,
    locked: true,
    count: 0,
    currentPrice: upgrade.basePrice,
  })),
  stats: {
    donuts: 0,
  },
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    clickDonut: (state) => {
      state.stats.donuts += 1;

      state.upgrades.forEach((upgrade) => {
        if (upgrade.locked && state.stats.donuts >= upgrade.currentPrice) {
          upgrade.locked = false;
        }
      });
    },
  },
});

export const { unlockUpgrade, clickDonut } = playerSlice.actions;
export default playerSlice.reducer;
