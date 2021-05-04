import "./App.css";
// import CakeContainer from "./containers/CakeContainer";
// import ShopkeeperContainer from "./containers/ShopkeeperContainer";
// import IceCreamContainer from "./containers/IceCreamContainer";
import HookCakeContainer from "./containers/HookCakeContainer";
import HookShopkeeperContainer from "./containers/HookShopkeeperContainer";
import HookIceCreamContainer from "./containers/HookIceCreamContainer";

// Redux
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <CakeContainer /> */}

        {/* <ShopkeeperContainer /> */}

        {/* <IceCreamContainer /> */}

        <HookIceCreamContainer />

        <HookCakeContainer />

        <HookShopkeeperContainer />
      </div>
    </Provider>
  );
}

export default App;
