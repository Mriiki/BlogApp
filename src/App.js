
import './App.css';
import Add from './components/Add';
import Display from './components/Display';
import Header from './components/Header';
import{
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
      <Route  path='/' element={<Display />}></Route>
      <Route  path='/add' element={<Add />}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
