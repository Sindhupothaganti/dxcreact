import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
    <Greet name = "raj"  college = "IIT">
      <p> this is children property</p>
      <h1>this is h1</h1>
    </Greet>
    <Greet name = "ram" college = "Oxford"/>
    <Greet name ="sindhu"/>

    <Welcome/>

    </div>
  );
}

export default App;
