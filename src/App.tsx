import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import { ItemView } from './components/itemView';
import { ListItemView } from './components/listItemView'

function App() {
  return (
    <>
      <Switch>
        <Route path="/"  exact={true}>
          <ListItemView />
        </Route>
        <Route path="/item" exact={true}>
          <ItemView />
        </Route>
      </Switch>
    </>
  );
}

export default App;
