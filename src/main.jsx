import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { AppContextProvider } from './context/Context.jsx';
import { DataProvider } from './context/Data.jsx';
import { BrowserRouter } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'
import { SearchContext } from './context/Search.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <AppContextProvider>
    <DataProvider>
      <SearchContext>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SearchContext>
    </DataProvider>
  </AppContextProvider>
)
