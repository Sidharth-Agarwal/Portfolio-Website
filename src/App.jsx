import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import router from './router';
import CustomCursor from './components/common/CustomCursor';

const App = () => {
  return (
    <ThemeProvider>
      <CustomCursor />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;