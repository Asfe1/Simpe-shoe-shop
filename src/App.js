import './App.css';
import Header from './component/Header/Header';
import Shop from './component/Shop/Shop';

function App({ cart }) {
  return (
    <div >
      <Header></Header>
      <Shop></Shop>
    </div>
  );
}

export default App;
