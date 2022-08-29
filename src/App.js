import './App.css';
import CardComp from './components/CardComp';
import Data from './components/Data';



function App() {

  const cards = Data.map(elem => <CardComp
    key={elem.id}
    elements={elem}
  />)

  return (
    <div>
      <section className="App-header">
        {cards}
      </section>
    </div>
  );
}

export default App;
