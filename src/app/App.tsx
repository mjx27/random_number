import type { JSX } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { Header } from '@/widgets/Header';

import { MainPage } from './pages/Main';
import { ResultPage } from './pages/Results';
import { AppProvider } from './providers/AppProvider';


export const App = (): JSX.Element => {
  return (
    <AppProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/" element={<ResultPage />} />
        </Routes>
      </Router>
    </AppProvider>
  );
};
