import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="app">

      <Manufature title="Mobile Operating System" list="Android" list1="Blackberry" list2="Iphone" list3="Windows Phone" />
      <Manufature title="Mobile Manufactures" list="Samsung" list1="HTC" list2="Micromax" list3="Apple" />

    </div>

  );
}

function Manufature(props) {
  return (
    <div className="app">
      <h1>{props.title}</h1>
      <ul>
        <li>{props.list}</li>
        <li>{props.list1}</li>
        <li>{props.list2}</li>
        <li>{props.list3}</li>
      </ul>
    </div>
  );
}

export default App;
