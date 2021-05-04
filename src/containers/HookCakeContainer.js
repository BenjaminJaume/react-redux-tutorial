import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";

function HookCakeContainer() {
  const numberOfCakes = useSelector((state) => state.cake.numberOfCakes);
  const [numberCakesToBuy, setNumberCakesToBuy] = useState(1);
  const [payloadCakes, setPayloadCakes] = useState({});

  useEffect(() => {
    setPayloadCakes({ numberCakesToBuy });
  }, [numberCakesToBuy]);

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of cakes: {numberOfCakes}</h2>
      <div>
        <input
          type="number"
          onChange={(event) => setNumberCakesToBuy(event.target.value)}
          defaultValue={numberCakesToBuy}
          min="1"
          max={numberOfCakes}
        />
      </div>
      <button onClick={() => dispatch(buyCake(payloadCakes))}>
        🥧 Buy {numberCakesToBuy} cake{numberCakesToBuy > 1 ? "s" : null}
      </button>
    </div>
  );
}

export default HookCakeContainer;
