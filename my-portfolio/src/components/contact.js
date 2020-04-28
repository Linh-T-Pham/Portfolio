import React, { Component } from 'react'
import {Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h3>Linh Pham</h3>
                        <p> Thank you for visiting my website! <br/><br/>
                        I am a software engineer with a background
                        in business/finance and I've worked in different analytical
                        positions for 3 + years. I have been curious about techologies and enjoy learning them.
                        I believe that coding can help solving many problems in the world.
                        My goal in next 5 years is to continue building
                        skills and knowledge as a software engineer. <br/><br/>

                        I like to dance salsa, zumba, meet new people and explore new food recipes. 
                        I love traveling to different countries especially where there are tropical beaches and street foods. National parks are also my favorite. 
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h3>Contact Me</h3>
                        <hr/>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '18px', color: "white"}}>
                                        <i className='fa fa-phone-square' aria-hidden="true"/>
                                        (415) 702-8593
                                    </ListItemContent>
                                </ListItem>
                            
                                <ListItem>
                                    <ListItemContent style={{fontSize: '18px', color: "white"}}>
                                        <i className='fa fa-envelope' aria-hidden="true"/>
                                        linh.pham0920@gmail.com
                                    </ListItemContent>
                                </ListItem>
                            
                            </List>        
                        </div>                                   
                    </Cell>
            
                </Grid>
            </div>
        )
    }
}

export default Contact; 