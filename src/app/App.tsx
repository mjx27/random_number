import type { JSX } from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';

import { AppProvider } from './providers/AppProvider';

export const App = (): JSX.Element => {
  return (
    <AppProvider>
      <Router>
        <Routes></Routes>
      </Router>
    </AppProvider>
  );
};
