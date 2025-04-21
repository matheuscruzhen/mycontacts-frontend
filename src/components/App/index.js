import { ThemeProvider } from 'styled-components';

import { Container } from './styles';
import Routes from '../../routes';
import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';

import Header from '../Header';
import ToastContainer from '../Toast/ToastContainer';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ToastContainer />
      <GlobalStyles />

      <Container>
        <Header />
        <Routes />
      </Container>
    </ThemeProvider>
  );
}

export default App;
