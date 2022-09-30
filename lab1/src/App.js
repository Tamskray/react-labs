import './App.css';
import Table from './components/Table';
import Welcome from './components/Welcome';
import Cards from './components/Task4/Cards';
import Cities from './components/Cities';
import Color from './components/Color';

const nameList = [
  { firstName: "John",
    lastName: "Silver",
    occupation: "Pirate Captain"},
]

const productsList = [
  {sourceImage: require('./components/Task4/images/videoCard.jpg'), name: "ASUS ROG STRIX-GTX1070-8G-GAMING", price: "16 669 ₴" },
  {sourceImage: require('./components/Task4/images/videoCard.jpg'), name: "Ноутбук ASUS TUF Gaming F15", price: "43 999 ₴" },
  {sourceImage: require('./components/Task4/images/asus.jpg'), name: "Ноутбук ASUS ROG Strix SCAR 15", price: "88 299 ₴" },
  {sourceImage: require('./components/Task4/images/3.jpg'), name: "Ноутбук Lenovo V14 G2 ITL", price: "17 777 ₴" },
]

const cities = [
  {id: 1, name: "Chicago", image: "chicago.jpg"},
  {id: 2, name: "Los Angelos", image: "los-angelos.jpg"},
  {id: 3, name: "New York", image: "new-york.jpg"},
]

const colorsList =["red", "blue", "green", "yellow", "black"]

function HelloWorldElement(){
  return (
    <div>
      <h1>Добрий день everybody</h1>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <HelloWorldElement />
      <Table nameList={nameList} />
      <Welcome name="Vlad" labName="lab1" />
      <Cards productsList={productsList} />
      <Cities cities={cities} />
      <Color colors={colorsList} />
    </div>
  );
}

export default App;
