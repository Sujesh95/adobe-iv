import { Provider, defaultTheme} from '@adobe/react-spectrum';

import CustomHeader from './components/customHeader';
import CustomFooter from './components/customFooter';
import MainContent from './containers/mainContent';

import './App.css';

function App() {

  return (
    <Provider theme={defaultTheme}>
      <CustomHeader />
      <MainContent />
      <CustomFooter />
    </Provider>
  );
}

export default App;
