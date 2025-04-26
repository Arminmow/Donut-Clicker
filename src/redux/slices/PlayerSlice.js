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
    dps: 0,
  },
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    clickDonut: (state) => {
      const upgrade = state.upgrades[0];
      state.stats.donuts += upgrade.clickPower;

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
      upgrade.clickPower += 0.5;
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
      const frameTime = action.payload; // should be 1 / 30
      const dps = state.stats.dps || 0;
      const donutsToAdd = dps * frameTime;

      state.stats.donuts += donutsToAdd;
    },
    buyUpgrade: (state, action) => {
      const upgradeId = action.payload;
      const upgrade = state.upgrades.find(
        (upgrade) => upgrade.id === upgradeId
      );
      if (!upgrade) {
        console.error(`Upgrade with id ${upgradeId} not found.`);
        return;
      }

      if (state.stats.donuts >= upgrade.currentPrice) {
        upgrade.count += 1;
        upgrade.currentPrice = Math.floor(
          upgrade.basePrice * Math.pow(upgrade.priceMultiplier, upgrade.count)
        );
        state.stats.dps += upgrade.dps || 0;
      } else {
        console.error("Not enough donuts to buy the upgrade.");
      }
    },
    checkAffordability: (state) => {
      state.upgrades.forEach((upgrade) => {
        upgrade.canAfford = state.stats.donuts >= upgrade.currentPrice;
      });
    },
    addDonutsBasedOnElappsedTime: (state, action) => {
      const elapsedTime = action.payload; // in seconds
      const dps = state.stats.dps || 0;
      const donutsToAdd = dps * elapsedTime;
      console.log(`while you were gone, you earned ${donutsToAdd} donuts`);
      state.stats.donuts += donutsToAdd;
    },
  },
});

export const {
  unlockUpgrade,
  clickDonut,
  increaseClickPower,
  spendDonuts,
  addDonutsFromDps,
  buyUpgrade,
  checkAffordability,
  addDonutsBasedOnElappsedTime
} = playerSlice.actions;
export default playerSlice.reducer;
