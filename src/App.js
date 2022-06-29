import { Route, Routes } from 'react-router-dom';
import NavBar from './components/Header/NavBar';
import SideBar from './components/SideBar/SideBar';
import Settings from './pages/Settings';
import Demos from './pages/Demos';
import DemoScript from './pages/DemoScript';
import Products from './pages/Products';
import Customers from './pages/Customers';
import SalesTeam from './pages/SalesTeam';

function App() {
  return (
    <div className="App">
      <NavBar />
      <SideBar />
      <div className="relative top-10 ml-52">
        <Routes>
          <Route path="/products" exact element={<Products />} />
          <Route path="/demo-script" exact element={<DemoScript />} />
          <Route path="/customers" exact element={<Customers />} />
          <Route path="/sales-team" exact element={<SalesTeam />} />
          <Route path="/demo" exact element={<Demos />} />
          <Route path="/settings" exact element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
