import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import CartList from './pages/CartList';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' exact={true} element={<Home />} />
        <Route path='/cart' exact={true} element={<CartList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
