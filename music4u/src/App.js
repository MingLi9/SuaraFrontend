import './App.css';
import Navbar from './components/MainParts/Navbar';
import AllSongs from './components/Song/AllSongs';
import CreatSong from './components/Song/CreateSong';

function App() {
  return (
    <>
      <Navbar/>
      <AllSongs/>
      <CreatSong/>
    </>
  );
}

export default App;
