import React, { Suspense, lazy } from 'react';
import {
  Container, Nav, Row, Col, ButtonGroup, Button
} from 'react-bootstrap';
import { HashRouter, Router, Route, Link, Switch } from 'react-router-dom';
const Battle = lazy(() => import('@/pages/Battle.jsx'))
import Popular from '@/pages/Popular.jsx';

import { hot } from 'react-hot-loader/root'


 class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { route: 'Popular' };
  }
  render() {
    
    return (
      <Container>
        <HashRouter>
          <br />
          <ButtonGroup aria-label="Basic example">
            <Button className='button' variant="primary">
              <Link className="button text-white" to="/Popular/All">
                Popular
              </Link>
            </Button>
            <Button className='button text-white' variant="primary">
              <Link className="button text-white" to="/Battle/">
                Battle
              </Link>
            </Button>
          </ButtonGroup>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/" component={Popular}></Route>
              <Route exact path="/Popular/:name" component={Popular}></Route>
              <Route path="/Battle" component={Battle}></Route>
            </Switch>
          </Suspense>
        </HashRouter>
      </Container>
    );
  }
}
export default hot(App);
