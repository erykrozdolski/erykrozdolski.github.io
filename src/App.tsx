import { Routes, Route, Outlet } from 'react-router';
import { BiogramList, NoPage, AboutPage, MapPage, BiogramPage, HomePage } from 'pages';
import './index.scss';
import { Navbar, ScrollToTop } from 'organisms';

export const App = () => (
  <>
    <Outlet />
    <Navbar />
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/biogramy" element={<BiogramList />} />
      <Route path="/biogram/:id" element={<BiogramPage />} />
      <Route path="/projekt" element={<AboutPage />} />
      <Route path="/mapa" element={<MapPage />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  </>
);
