import logo from './logo.svg';
import './App.css';
import Text from './Components/Text'
import Logo from './Components/Logo'
import Link from './Components/Link'

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Logo url={logo}/>

        <Text>
          <p>Edit src/App.js and save to reload.</p>
        </Text>

        <Link 
              text="Learn React"
              url="https://reactjs.org/"
        />

        <Link 
              text="Google"
              url="https://www.google.com.br/"
        />
     
      </header>
    </div>
  );
}

export default App;
