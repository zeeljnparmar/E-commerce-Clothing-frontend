import { Provider } from "react-redux";
//store
import store from "./store";
const GlobalStore = ({ children }) => {
  return (
    <>
      <Provider store={store}>{children}</Provider>
    </>
  );
};

export default GlobalStore;
