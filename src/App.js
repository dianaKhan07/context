
import './App.css';
import Header from './components/header/Header';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <div>
   <Header/>
   <div id="detail">
          <Outlet/>
          
        </div>
    </div>
  );
}

export default App;
