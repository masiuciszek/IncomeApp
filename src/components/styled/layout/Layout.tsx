import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../../utils/theme';
import GlobalStyles from '../GlobalStyles';

interface P {
  children: React.ReactNode;
}

const Layout: React.FC<P> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <main className="MainApp">
      {children}
    </main>
  </ThemeProvider>
);
export default Layout;
