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
            <Route path="/people" element={<TablePage type="people" />} />
            <Route path="/starships" element={<TablePage type="starships" />} />
          </Routes>
        </UserNameProvider>
      </HashRouter>
    </div>
  );
};

export default App;
