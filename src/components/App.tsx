import { Routes, Route } from "react-router-dom";

import UserNameProvider from "./context/UserNameProvider";
import Login from "./pages/Login";
import TablePage from "./pages/TablePage";

const App = () => {
  return (
    <div className="App">
      <UserNameProvider>
        <Routes>
          <Route path="/candidate-react-web-ui" element={<Login />} />
          <Route path="/candidate-react-web-ui/login" element={<Login />} />
          <Route
            path="/candidate-react-web-ui/people"
            element={<TablePage type="people" />}
          />
          <Route
            path="/candidate-react-web-ui/starships"
            element={<TablePage type="starships" />}
          />
        </Routes>
      </UserNameProvider>
    </div>
  );
};

export default App;
