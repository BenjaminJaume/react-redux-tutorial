import React, { useState } from "react";
import { connect } from "react-redux";
import { changeShopkeeperName } from "../redux";

function ShopkeeperContainer(props) {
  const [newShopkeeperName, setNewShopkeeperName] = useState(
    props.shopkeeperName
  );
  const [newAge, setNewAge] = useState(props.age);

  return (
    <div>
      <h1>Shopkeeper</h1>
      <h2>Name: {props.shopkeeperName}</h2>
      <h2>Age: {props.age}</h2>

      <div>
        <label htmlFor="newNameField">New name: </label>
        <input
          onChange={(event) => setNewShopkeeperName(event.target.value)}
          placeholder="New name"
          defaultValue={props.shopkeeperName}
        />
      </div>
      <div>
        <label htmlFor="newAgeField">New age: </label>
        <input
          type="number"
          onChange={(event) => setNewAge(event.target.value)}
          placeholder="New age"
          defaultValue={props.age}
        />
      </div>
      <button
        onClick={() => props.changeShopkeeperName(newShopkeeperName, newAge)}
      >
        Submit
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    shopkeeperName: state.shopkeeper.shopkeeperName,
    age: state.shopkeeper.age,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeShopkeeperName: (newShopkeeperName, newAge) =>
      dispatch(changeShopkeeperName(newShopkeeperName, newAge)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopkeeperContainer);
