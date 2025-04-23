import { Upgrades } from "../../data/upgrades";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  upgrades: Upgrades.map((upgrade) => ({
    ...upgrade,
    locked: true,
    count: 0,
    currentPrice: upgrade.basePrice,
    canAfford: false,
  })),
  stats: {
    donuts: 0,
    clickPower: 1,
    dps: 0,
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
        upgrade.canAfford = state.stats.donuts >= upgrade.currentPrice;
      });
    },
    increaseClickPower: (state) => {
      const upgrade = state.upgrades[0];
      upgrade.count += 1;
      upgrade.currentPrice = Math.floor(
        upgrade.basePrice * Math.pow(upgrade.priceMultiplier, upgrade.count)
      );
      state.stats.clickPower += 1;
    },
    spendDonuts: (state, action) => {
      const amount = action.payload;

      if (state.stats.donuts >= amount) {
        state.stats.donuts -= amount;
      } else {
        console.error("Not enough donuts to spend.");
      }

      state.upgrades.forEach((upgrade) => {
        upgrade.canAfford = state.stats.donuts >= upgrade.currentPrice;
      });
    },
    updateUpgradeAffordability: () => {
      //TODO WHEN PASSIVE INCOME IS ADDED
    },
    addDonutsFromDps: (state, action) => {
      const amount = action.payload;
      state.stats.donuts += amount;
    }
  },
});

export const { unlockUpgrade, clickDonut, increaseClickPower, spendDonuts } =
  playerSlice.actions;
export default playerSlice.reducer;
