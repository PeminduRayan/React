import logo from './logo.svg';
import './App.css';
import FoodTypeTile from './components/FoodTypeTile/FoodTypeTile';
import FoodTileContainer from './components/FoodTypeTile/FoodTileContainer';
import MainLogo from './components/NavBar/MainLogo';


function App() {
  return (
    <div className="App">
      <MainLogo/>
        <FoodTileContainer/>
    </div>
  );
}

export default App;
