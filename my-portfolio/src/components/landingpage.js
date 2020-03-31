import React, { Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src='/LinhandBo.jpg'  alt="image"
                            className="my-image"/>
                        <div className="banner-text">
                            <h1>Full Stack Software Engineer</h1>
                        <hr/>

                    <p>Python | Flask | Django | Javascript | React | SQL | PostgresSQL | Boostrap | HTML/CSS | R</p>                                  
                    
                    <div className="social-links">
                        {/* Linkdedln */}
                        <a href="https://www.linkedin.com/in/linh-t-pham/" rel="noopener noreeferrer" target="_blank">
                        <i className="fa fa-linkedin-square"  aria-hidden="true" />
                        </a>
                        {/* github */}
                        <a href="https://github.com/thuytpham" rel="noopener noreeferrer" target="_blank">
                        <i className= "fa fa-github"  aria-hidden="true" />
                        </a>
                    </div>
                    
                    
                    </div>
                    </Cell>
                </Grid>               
            </div>
        )
    }
}

export default Landing; 
