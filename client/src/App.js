import logo from './logo.svg';
import './App.css';
import Search from './components/search/search';
import Results from './components/results/results';
import Details from './components/details/details';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// <div className="App">
 {/* <Search></Search> */}
function App() {
  return (
    <Router className="App">
      <Search></Search>
    <Routes>
    {/* <Route exact path="/" component={Search} /> */}
      <Route  path='/items/*' element={<Results/>} />
      <Route path="/items/:id" element={<Details/>} />
    </Routes>
  </Router>
  
 
  );
}

export default App;
