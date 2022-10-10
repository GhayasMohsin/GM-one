import { Route } from 'react-router-dom';
import './App.css';
import MainHeader from './header/MainHeader';
import Contact from './pages/Contact';
import Home from './pages/Home';
import SignUp from './pages/SignUp';

function App() {
  return (
    <div className="App">
      <MainHeader/>
      <h1>Ghayas Mohsin</h1>
      <Route path='/' exact>
        <Home/>
      </Route>
      <Route path='/contact'>
        <Contact/>
      </Route>
      <Route path='/signup'>
        <SignUp/>
      </Route>
    </div>
  );
}

export default App;
