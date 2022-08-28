import './App.css';
import CardComp from './components/CardComp';
import Data from './components/Data';
// import Jumbotron from 'react-bootstrap/Jumbotron';
// import { Button } from 'react-bootstrap';



function App() {

  const cards = Data.map(elem => <CardComp
    key={elem.id}
    elements={elem}
  />)

  return (
    <div>
      <section className="App-header">
        <CardComp />
      </section>
    </div>
  );
}

export default App;
