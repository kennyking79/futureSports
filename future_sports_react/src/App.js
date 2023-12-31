
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './Home/Home'
import AdminPage from './Admin/Admin';
import NotFoundPage from './NotFoundPage';
import PlayerPage from './Players/Players';
import ShopPage from './Shop/Shop';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="players" element={<PlayerPage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="admin" element={<AdminPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;

