import { CHANGE_SHOPKEEPER_NAME } from "./shopkeeperTypes";

export function changeShopkeeperName(payload) {
  return {
    type: CHANGE_SHOPKEEPER_NAME,
    info: "Action to change the name of the shopkeeper",
    payload,
  };
}
