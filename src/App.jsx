import Navbar from './components/Navbar/Navbar';
import './App.css';
import Reports from './pages/Reports';
import Customers from './pages/Customers';
import Products from './pages/Products';
import Cards from './components/Cards/Cards';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="app">
      <h1>Hello Deploy</h1>
      <Header />
      <Navbar />
      {/* <Reports /> */}
      <Cards />
      {/* <Customers /> */}
      {/* <Products /> */}
    </div>
  );
}

export default App;
