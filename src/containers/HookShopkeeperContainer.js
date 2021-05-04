import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeShopkeeperName } from "../redux";
import { ProgressBar, Form } from "react-bootstrap";

function HookShopkeeperContainer() {
  const shopkeeperName = useSelector(
    (state) => state.shopkeeper.shopkeeperName
  );
  const age = useSelector((state) => state.shopkeeper.age);

  const [newShopkeeperName, setNewShopkeeperName] = useState(shopkeeperName);
  const [newAge, setNewAge] = useState(age);
  const [progress, setProgress] = useState(50);
  const colors = ["primary", "success", "warning"];
  const [variant, setVariant] = useState(colors[0]);
  const dispatch = useDispatch();
  const [payloadShopkeeper, setPayloadShopkeeper] = useState({});

  useEffect(() => {
    setPayloadShopkeeper({ shopkeeperName: newShopkeeperName, age: newAge });
  }, [newShopkeeperName, newAge]);

  const progressInstance = (
    <ProgressBar variant={variant} now={progress} label={`${progress}%`} />
  );

  return (
    <div>
      <div>
        <h1>Shopkeeper</h1>
        <h2>Name: {shopkeeperName}</h2>
        <h2>Age: {age}</h2>

        <div>
          <label htmlFor="newNameField">New name: </label>
          <input
            onChange={(event) => setNewShopkeeperName(event.target.value)}
            placeholder="New name"
            defaultValue={shopkeeperName}
          />
        </div>
        <div>
          <label htmlFor="newAgeField">New age: </label>
          <input
            type="number"
            id="newAgeField"
            onChange={(event) => setNewAge(event.target.value)}
            placeholder="New age"
            defaultValue={age}
          />
        </div>
        <div>
          <label htmlFor="progress">Progress: </label>
          <input
            type="number"
            onChange={(event) => setProgress(event.target.value)}
            name="progress"
            id="progress"
            min="0"
            max="100"
            step="10"
            defaultValue={progress}
          />
        </div>
        <div>
          {colors.map((color, index) => (
            <Form.Check
              key={index}
              inline
              label={color}
              name="colorSelectorGroup"
              type="radio"
              id={`inline-radio-${index}`}
              onChange={() => setVariant(color)}
            />
          ))}
        </div>
        <button
          onClick={() => dispatch(changeShopkeeperName(payloadShopkeeper))}
        >
          Submit
        </button>
      </div>

      <div className="mt-5">{progressInstance}</div>
    </div>
  );
}

export default HookShopkeeperContainer;
