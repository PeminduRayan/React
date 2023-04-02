import logo from './logo.svg';
import './App.css';
import FoodTypeTile from './components/FoodTypeTile/FoodTypeTile';
import FoodTileContainer from './components/FoodTypeTile/FoodTileContainer';
import MainLogo from './components/NavBar/MainLogo';
import SearchBar from './components/NavBar/SearchBar/SearchBar';
import UpperNavBar from './components/NavBar/UpperNavBar';
import OrderBar from './components/NavBar/OrderBar/RecentOrdersContainer';
import SingleItem from './components/ItemTiles/SingleItem';



function App() {
  return (
    <div className="App">
      <UpperNavBar/>
      <OrderBar/>
      <FoodTileContainer/>
      <SingleItem/>
      
        
        
    </div>
  );
}

export default App;

