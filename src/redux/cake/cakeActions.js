import { BUY_CAKE } from "./cakeTypes";

export const buyCake = (payload = { numberCakesToBuy: 1 }) => {
  return {
    type: BUY_CAKE,
    info: "Action to buy a cake",
    payload,
  };
};
