
import {Switch, Route} from 'react-router-dom';
import Pokedex from './containers/Pokedex';
import AppNavigator from './components/AppNavigator';
import PokemonDetail from './containers/PokemonDetail';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './redux/store';
import {store} from './redux/store'
import Favorites from './containers/Favorites';
function App() {
  return (
    <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <AppNavigator/>
      <Switch>
        <Route path='/' component={Pokedex} exact/>
        <Route path='/pokemon/:id' component={PokemonDetail} exact/>
        <Route path='/favorites' component={Favorites} exact/>
      </Switch>    
    </PersistGate>
    </Provider>
    </>
  );
}

export default App;
