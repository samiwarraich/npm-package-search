import { Provider } from "react-redux";
import { store } from "../state";
import RepositoriesList from "./RepositoriesList";

const App = () => {
  return (
    <Provider store={store}>
      <div className="d-flex flex-column align-items-center">
        <h1 className="display-5">Search NPM Package</h1>
        <RepositoriesList />
      </div>
    </Provider>
  );
};

export default App;
