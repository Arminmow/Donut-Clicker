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
    clickPower: 1,
  },
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    clickDonut: (state) => {
      state.stats.donuts += state.stats.clickPower;

      state.upgrades.forEach((upgrade) => {
        if (upgrade.locked && state.stats.donuts >= upgrade.currentPrice) {
          upgrade.locked = false;
        }
      });
    },
    increaseClickPower: (state) => {
      console.log("increaseClickPower called");
      const upgrade = state.upgrades[0];
      upgrade.count += 1;
      upgrade.currentPrice = Math.floor(
        upgrade.basePrice * Math.pow(upgrade.priceMultiplier, upgrade.count)
      );
      state.stats.clickPower += 1;
    },
  },
});

export const { unlockUpgrade, clickDonut, increaseClickPower } =
  playerSlice.actions;
export default playerSlice.reducer;
