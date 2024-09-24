import logo from './logo.svg';
import './App.css';
import Product from './components/Product';
import Category from './components/Category/Category'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to react </h1>
        <p>
          let's start.
        </p>
        
      </header>

      <Product/>
        <Category/>
        
    </div>
  );
}

export default App;
