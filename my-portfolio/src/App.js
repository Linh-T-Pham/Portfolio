import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render () {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: "none", color: "white" }} 
                to="/">MyPortfolio</Link>} scroll>
            <Navigation>
            <a href="SWE Resume 03.2020.pdf" download>Resume</a>
                <Link to="/contact">About Me</Link>
                <a href="https://github.com/thuytpham" rel="noopener noreeferrer" target="_blank">Projects</a>          
            </Navigation>
        </Header>
        <Drawer className="drawer-color" title={<Link style={{textDecoration: "none", color: "orange" }} 
                to="/">MyPortfolio</Link>} scroll>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/contact">About Me</Link>
                <a href="https://github.com/thuytpham" rel="noopener noreeferrer" target="_blank">Projects</a>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
</div>
    );
    

  }
    
}

export default App;
