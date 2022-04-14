import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';

function App() {
  const personName = {
    first: 'Sarah',
    last: 'Simorangkir',
  }
  const nameList = [
    {
      first: "Sarah",
      last: "Simorangkir"
    },
    {
      first: "Chloe ",
      last: "Wijaya"
    },
    {
      first: "Michael",
      last: "Christ"
    }
  ]
  return (
    <div className="App">
      <Greet name= 'Sarah' messageCount={20} isLoggedIn={false}/>
      <Person name={personName}/>
      <PersonList names={nameList}/>
    </div>
  );
}

export default App;
