import React from 'react';
import { Grid, Cell} from 'react-mdl';
import img from '../img/avatar.png'
class Main extends React.Component{

    render(){
        return(
            <div style={{width:'100%', margin: 'auto'}}>
                <Grid className="main-grid">
                    <Cell col={12}>
                        <img src={img} alt="avatar"></img>
                        <div className="banner-text">
                        <h1>An Wannabe Full Stack Web Developer</h1>
                        <p>JavaScript | NodeJs | HTML | CSS | React | Redux | Android</p>
                        <div className="social">
                        <a href='https://github.com/thebitcoinerapps' target="_blank">
                        <i className="fab fa-github"></i></a>
                        <a href='https://www.linkedin.com/authwall?trk=ripf&trkInfo=AQGmXrGbkbWfEAAAAWoQ4XRghiePuxwkNfB_yXSWPqo9iaTYAa_LbwZ3brq9ySxiD4uYMSE5RnOnyZ8kDpHXSvjGvDv4avSxAa7eRCXOg7x5EGiGaiWGgD0KX_qCl_5sFMZA6sU=&originalReferer=https://www.google.com/&sessionRedirect=https%3A%2F%2Fpl.linkedin.com%2Fin%2Fmarek-gasiulewicz-7bb523aa' target="_blank">
                        <i className="fab fa-linkedin-in"></i>
                        </a>
                        </div>
                        </div>
                    </Cell>
                
                </Grid>
            
            </div>
        );
    };

}
export default Main;