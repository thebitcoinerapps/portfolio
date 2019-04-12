import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Routing from './components/route';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-background" title="My Portfolio" scroll>
            <Navigation>
                <Link to="/">MAIN</Link>
                <Link to="/cv">RESUME</Link>
                <Link to="/aboutme">PROJECTS</Link>
                <Link to="/contact">CONTACT</Link>
            </Navigation>
        </Header>
        <Drawer title="Menu">
            <Navigation>
                <Link to="/cv">RESUME</Link>
                <Link to="/aboutme">PROJECTS</Link>
                <Link to="/contact">CONTACT</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Routing />
        </Content>
    </Layout>
</div>
    );
  }
}

export default App;
