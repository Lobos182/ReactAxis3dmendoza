import logo from './logo.svg';
import './App.css';

const Avatarjsx = (props) => {
  const src = `https://randomuser.me/api/portraits/lego/${props.id}.jpg`
 
  return (
    <picture>
      <img src={src} alt='lego1' />
      {props.name}
    </picture>
  ) 
  }

function App() {
  return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Avatarjsx id={2} name={"seba"}/>
      <Avatarjsx id={3} name={"dani"}/>
      <Avatarjsx id={4} name={"nico"}/>
      <Avatarjsx id={5} name={"pepe"}/>
    </header>
  </div>
  );
}

export default App;
