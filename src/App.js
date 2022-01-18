import './App.css';
import Navbar from './components/MainParts/Navbar';
import Homepage from './components/MainParts/Homepage';
import Song from './components/MainParts/Song';
import Album from './components/MainParts/Album';
import Playlist from './components/MainParts/Playlist';
import User from './components/MainParts/User';
import LoginRegister from './components/MainParts/Login-register';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' caseSensitive={true} element={<Homepage />} />
        <Route path='/song/*' caseSensitive={true} element={<Song />} />
        <Route path='/album/*' caseSensitive={true} element={<Album />} />
        <Route path='/playlist/*' caseSensitive={true} element={<Playlist />} />
        <Route path='/user/*' caseSensitive={true} element={<User />} />
        <Route path='/loginregister/*' caseSensitive={true} element={<LoginRegister />} />
      </Routes>
    </>
  );
} 

export default App;
