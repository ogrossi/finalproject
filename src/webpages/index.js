//file: src/webpages/index.js
import React from 'react';


import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './home';
import Page2 from './page2';
import Page3 from './page3';
    export default function App(){
    return(
            <Container>
            <Router>
              <div>
                <ButtonGroup>
                  <Button variant="outline-secondary">
                  <Link to="/">Home</Link> 
                  </Button>
                </ButtonGroup>
                <ButtonGroup>
                  <Button variant="outline-secondary">
                  <Link to="/page2">House Design</Link>
                  </Button>
                </ButtonGroup>
                <ButtonGroup>
                  <Button variant="outline-secondary">
                  <Link to="/page3">Movie Reviews</Link>
                  </Button>
                </ButtonGroup>
                <Switch>
          <Route path='/page2'>
            <Page2 page2={Page2} />
          </Route>
          <Route path="/page3">
            <Page3 page3={Page3} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </Container>
  );
    }

    
 
