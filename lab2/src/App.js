import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MyCounter } from './components/task1/MyCounter';
import { CounterList } from './components/task1/CounterList';
import { Cart } from './components/task2/Cart';

const counters = [
  {id: 1, initial: 6, min: -5, max: 10},
  {id: 1, initial: 5},
  {id: 3},
]

const cartList = [
  {id: 1, name: "Constructor LEGO", price: 300, min: 0, max: 5 },
  {id: 2, name: "Train Station", price: 200, min: 0, max: 4 },
  {id: 3, name: "Hot Wheels Track", price: 150, min: 0, max: 6 },
]

function App() {
  return (
    <div className="App">
      <MyCounter max={6}></MyCounter>
      <CounterList counters={counters}></CounterList>
      
      <Cart cartList={cartList}></Cart>




    </div>
  );
}

export default App;
