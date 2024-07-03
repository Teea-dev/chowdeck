import { registerRootComponent } from "expo";
import { Router } from "expo-router";
import { RestaurantProvider } from "./components/context/restaurantContext";

const App = () => {
  return (
    // <RestaurantProvider>
    <>
      <Router />
      {/* </RestaurantProvider> */}
    </>
  );
};

export default registerRootComponent(App);
