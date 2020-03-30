import React, { Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src='/Me with Bo.png' width="200" height="200" alt="image"
                            className="my-image"
                        />
                        <div className="banner-text">
                            <h1>Full Stack Software Engineer</h1>
                    <p>Python | Javascript | React | SQL | PostgresSQL | R | Boostrap | HTML/CSS</p>

                    
                    <hr/> 
                    </div>
                    </Cell>
                </Grid>               
            </div>
        )
    }
}

export default Landing; 
