import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App" style = {{height: "100vh", width: "98.45vw"}}>
      <Navbar />
      <Sidebar />
    </div>
  );
}

export default App;
