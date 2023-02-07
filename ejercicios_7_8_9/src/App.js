import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import { Provider } from "react-redux";

import store from "./store";
import "./App.css";
import ContactList from "./components/ContactList";

function App() {
  return (
    <Provider store={store}>
      <div style={{ textAlign: "center" }}>
        <ContactList />
      </div>
    </Provider>
  );
}

export default App;
