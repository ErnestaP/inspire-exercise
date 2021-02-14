import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import { ItemView } from './components/itemView';
import { ListItemView } from './components/listItemView'
import 'antd/dist/antd.css';
import './index.css';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/"  exact={true}>
          <ListItemView />
        </Route>
        <Route path={`/item/:controlNumber`} exact={true}>
          <ItemView />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
