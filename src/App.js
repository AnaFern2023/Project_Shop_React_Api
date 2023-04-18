import './App.css';
import { Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import Nav from './components/Nav';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<ProductList />} />
        <Route path='/details/:id' element={<ProductDetail />} />
        {/* /details/:id sieht aus wie in der Pfadleiste der Website --> localhost:3000/details/1 */}
      </Routes>
    </div>
  );
}

export default App;
