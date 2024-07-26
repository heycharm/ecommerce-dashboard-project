import { BrowserRouter, Route, Routes} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Dashboard from './pages/Dashboard/index'
import Header from './components/Header'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path= "/" exact={true} element={<Dashboard/>}/>
      <Route path= "/dashboard" exact={true} element={<Dashboard/>}/>
      <Route path= "/header" exact={true} element={<Header/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
