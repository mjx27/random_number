import type { JSX } from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';

import { Link } from '@/shared/ui/Link';

import { AppProvider } from './providers/AppProvider';

export const App = (): JSX.Element => {
  return (
    <AppProvider>
      <Router>
        <Routes></Routes>
        <Link styleType="DARK" to="/a">
          <div>ss</div>
        </Link>
      </Router>
    </AppProvider>
  );
};
