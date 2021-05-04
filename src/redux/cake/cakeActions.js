import { BUY_CAKE } from "./cakeTypes";

export function buyCake() {
  return {
    type: BUY_CAKE,
    info: "Action to buy a cake",
  };
}
