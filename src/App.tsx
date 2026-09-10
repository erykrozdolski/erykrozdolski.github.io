import { Routes, Route, Outlet } from 'react-router';
import { BiogramList, NoPage, AboutPage, MapPage, BiogramPage, HomePage } from 'pages';
import './index.scss';
import { Navbar, ScrollToTop } from 'organisms';
import { Container } from './ui/atoms/Container/Container';

export const App = () => (
  <>
    <Outlet />
    <Navbar />
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/biogramy"
        element={
          <Container>
            <BiogramList />
          </Container>
        }
      />
      <Route path="/biogram/:id" element={<BiogramPage />} />
      <Route path="/projekt" element={<AboutPage />} />
      <Route path="/mapa" element={<MapPage />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  </>
);
