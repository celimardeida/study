import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Catalog from './components/Catalog';
import FindClassroom from './components/Recommender';
import Profile from './components/Profile';
import Header from './components/Header';
import './App.css';
import "./Fonts/monday-sans.regular.ttf";
import SignUp from './components/SignUp';


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/signup" element={<SignUp/>}></Route>
          <Route path="/" element= {<Catalog/>}></Route>
          <Route path="/recommender" element={<FindClassroom/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
