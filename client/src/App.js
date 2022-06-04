


//components
import Header from './components/header/Header';
import Home from './components/home/Home';
import DataProvider from './context/DataProvider';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Cart from './components/cart/cart';
import DetailView from './components/details/DetailView';

import {Box} from '@mui/material';
function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style={{marginTop: 54}}>
          <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/product/:id' element={<DetailView/>} />
          <Route path='/Cart' element={<Cart/>} />

          </Routes> 
        </Box>
      </BrowserRouter>
      
    </DataProvider>
  );
}

export default App;
