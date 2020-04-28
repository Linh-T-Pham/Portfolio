import React, { Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class About extends Component {
    render() {
        return(
            <div className="aboutme">
                <Grid className="myinfo">
                {/* <h1>About Page</h1> */}
                <p> Thank you for visiting my website! <br/><br/>
                    I am a software engineer with a background
                    in business/finance and I've worked in different analytical<br/>
                    positions for 3 + years. I have been curious about technologies,  
                    data analytics and enjoy learning them a lot.<br/>
                    I believe that technologies can help to solve many problems in the world.<br/>
                    My goal in the next 5 years is to continue building
                    skills and knowledge as a software engineer. <br/><br/>

                    I like to dance salsa, zumba, meet new people and explore different food recipes. 
                    I love traveling to different countries<br/>
                    especially where there are tropical beaches and street foods. National Parks are also my favorite. 
                </p>
                </Grid>
            </div>

        )
    }
}

export default About; 