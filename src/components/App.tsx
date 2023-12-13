import { HashRouter, Routes, Route } from "react-router-dom";

import UserNameProvider from "./context/UserNameProvider";
import Login from "./pages/Login";
import TablePage from "./pages/TablePage";

const App = () => {
  return (
    <div className="App">
      <HashRouter>
        <UserNameProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/candidate-react-starwars-db" element={<Login />} />
            <Route
              path="/candidate-react-starwars-db/people"
              element={<TablePage type="people" />}
            />
            <Route
              path="/candidate-react-starwars-db/starships"
              element={<TablePage type="starships" />}
            />
          </Routes>
        </UserNameProvider>
      </HashRouter>
    </div>
  );
};

export default App;
