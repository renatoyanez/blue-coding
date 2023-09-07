import { Route, Routes as Switch } from "react-router-dom";
import Home from "./components/Home";

const Routes = () => {
  return (
    <Switch>
      <Route path="/home" element={<Home />} />
    </Switch>
  );
};

export default Routes;
