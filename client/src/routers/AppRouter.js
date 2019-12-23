import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import Home from'../components/Home';
import Portfolio from'../components/Portfolio';
import Contact from  '../components/Contact';
import Education from '../components/Education';
import PortfolioPage from '../components/PortfolioPage';
import Experience from '../components/Experience';
const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/portfolio/:id" component={PortfolioPage}  />
        <Route path="/portfolio" component={Portfolio} exact={true}/>
        <Route path="/Contact" component={Contact}  />
        <Route path="/education" component={Education}  />
        <Route path="/experience" component={Experience}  />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);


export default AppRouter;