import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Children } from 'react';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export const MyThemeProvider = (children)=> {
  return (
    <ThemeProvider theme={darkTheme}>
    {Children}
    </ThemeProvider>
  );
}