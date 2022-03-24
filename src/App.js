
import {Routes, Route} from 'react-router-dom';
import Pokedex from './containers/Pokedex';
import AppNavigator from './components/AppNavigator';

function App() {
  return (
    <>
    <AppNavigator/>
    <Routes>
       <Route path='/' element={<Pokedex/>}/>
    </Routes>
    </>
  );
}

export default App;
