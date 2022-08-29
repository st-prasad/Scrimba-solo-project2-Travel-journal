import './App.css';
import CardComp from './components/CardComp';
import Data from './components/Data';
import Navbar from './components/Navbar';



function App() {

  const cards = Data.map(elem => <CardComp
    key={elem.id}
    elements={elem}
  />)

  return (
    <div>
      <section className="App-header">
        <Navbar />
        {cards}
      </section>
    </div>
  );
}

export default App;
