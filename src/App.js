import './App.css';
import Banners from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';
import {actions, orginals,comedy,horror, romance, documentary} from './urls.js'

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Banners/>
      <RowPost url= {orginals} title = 'Netflix Orginals'/>
      <RowPost url= {actions} title = 'Action' isSmall/>
      <RowPost url= {comedy} title = 'Comedy' isSmall/>
      <RowPost url= {horror} title = 'Horror' isSmall/>
      <RowPost url= {romance} title = 'Romance' isSmall/>
      <RowPost url= {documentary} title = 'Documentaries' isSmall/>


    </div>
  );
}

export default App;
