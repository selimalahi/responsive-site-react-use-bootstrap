import logo from './logo.svg';
import './App.css';
import { Button,  Spinner } from 'react-bootstrap';
import GridGroup from './components/CardGroup/GridGroup';
import NavBar from './components/CardGroup/NavBar/NavBar';
import PlacementExample from './components/Toast/PlacementExample';



function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
     <button>normal html button</button>,
     <Button variant='danger'>React-button</Button>
     <Spinner animation="border" variant="primary" />

     <GridGroup></GridGroup>
     <PlacementExample></PlacementExample>
  

     
     

    </div>
  );
}

export default App;
