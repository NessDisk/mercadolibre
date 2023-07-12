import logo from './logo.svg';
import './App.css';
import Search from './components/search/search';
import Results from './components/results/results';
import Details from './components/details/details';


function App() {
  return (
    <div className="App">
     <Search></Search>
     <Results></Results>
     <Details></Details>
    </div>
  );
}

export default App;
