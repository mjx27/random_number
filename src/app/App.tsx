import type { JSX } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { Header } from '@/widgets/Header';

import { AppProvider } from './providers/AppProvider';
import { CRoutes } from './routes';

export const App = (): JSX.Element => {
  return (
    <AppProvider>
      <Router>
        <Header />
        <Routes>
          {CRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </Router>
    </AppProvider>
  );
};
