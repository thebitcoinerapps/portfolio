import React from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button} from 'react-mdl';

class Aboutme extends React.Component{
    constructor(props){
        super(props);
    }
    state = {activeTab: 0};
    changeCategory = () => {
        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                <Card shadow={0} style={{width: '350px', height: '300px', margin: 'auto'}}>
                    <CardTitle expand style={{color: '#fff',
                    background: 'url(https://g.foolcdn.com/image/?url=https%3A%2F%2Fg.foolcdn.com%2Feditorial%2Fimages%2F502052%2Fbitcoin4.jpg&w=700&op=resize) bottom right 15% no-repeat #46B6AC'}}>
                    Cryptocurrency Monitor</CardTitle>
                        <CardText>
                            Display major cryptocurrency prices with 7-day change
                        </CardText>
                    <CardActions border>
                        <Button colored><a href='https://cryptomonitorapp.herokuapp.com/' target="_blank">LINK</a></Button>
                    </CardActions>
                </Card>
                </div>
            );
        }else if(this.state.activeTab === 1){
            return(
                <Card shadow={0} style={{width: '350px', height: '300px', margin: 'auto'}}>
                    <CardTitle expand style={{color: '#fff',
                    background: 'url(https://lh3.googleusercontent.com/IgToB_toYb14ycY4zqSP95hjOxZLY8B8w_17mAAzks6gocZfugrtvaX3Ra51jrRF9c8=w1536-h754-rw)'}}>
                    Lambo Bitcoin</CardTitle>
                        <CardText>
                            Showing current bitcoin price and what you can buy with it
                        </CardText>
                    <CardActions border>
                        <Button colored><a href='https://play.google.com/store/apps/details?id=pl.thebitcoiner.lambobitcoin&hl=en_US' target="_blank">LINK</a></Button>
                    </CardActions>
                </Card>
            );
        }else{
            return(
                <div></div>
            );
        }
    }

    render(){
        return(
            <div className="category-tabs">
            <Tabs activeTab={this.state.activeTab} onChange={
                (tabId)=>{
                    this.setState({activeTab: tabId});
                    }} ripple>
                <Tab><h5>React</h5></Tab>
                <Tab><h5>Android</h5></Tab>
                <Tab><h5>JavaScript</h5></Tab>
            </Tabs>
                    <Grid>
                        <Cell col={12}>
                        <div className="content">
                        {this.changeCategory()}
                        </div>
                        </Cell>
                        
                    </Grid>
            </div>
        );
    };

}
export default Aboutme;