import { Upgrades } from "../../data/upgrades";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    upgrades: Upgrades.map(upgrade => ({ ...upgrade, locked: true, count: 0 })),
    stats: {
        donuts: 0
    }
};

const playerSlice = createSlice({
    name: "player",
    initialState,
    reducers: {
        unlockUpgrade: () => {
            //TODO
        },
        clickDonut: (state) => {
            state.stats.donuts += 1;
        }
    }
});

export const { unlockUpgrade , clickDonut } = playerSlice.actions;
export default playerSlice.reducer;