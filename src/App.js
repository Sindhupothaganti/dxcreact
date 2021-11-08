import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
 

function App() {
  return (
    <div className="App">
    <Message/>

    <Greet name = "ram"  college = "IIT">
      <p> this is children property</p>
    </Greet>

    <Greet name = "sham" college = "Oxford">
      <button>click me</button>
    </Greet>
    <Greet />

    <Welcome name ="sindhu" alias = "sind"/>

    </div>
  );
}

export default App;