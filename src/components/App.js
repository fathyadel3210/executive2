import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Header from './Header';
import LandingPage from './LandingPage';
import Typography from '@material-ui/core/Typography';
import SliderUneversity from './SliderUneversity';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import career from '../images/career.png';
import university from '../images/university.png';
import visa from '../images/visa.png';
import accomodation from '../images/accomodation.png';
import flight from '../images/flight.png';
import woman from '../images/woman.png';
import puzzle from '../images/puzzle.png';
import people from '../images/people.png';
import Button from '@material-ui/core/Button';
import SliderEvents from './SliderEvents';
import SliderCountry from './SliderCountry';
import {Link,  BrowserRouter as Router} from 'react-router-dom';
import executivewhite from '../images/executive-white.png';


const useStyles = makeStyles(theme => ({
    gridContainer:{
        padding:"0 5em",
        [theme.breakpoints.down("sm")]:{
            padding:"0 2em",
        }
    }
}))


const App = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD= useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM= useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS= useMediaQuery(theme.breakpoints.down("xs"));
    return(
        <Router>
            <Grid container direction="column">
            <Grid item container style={{marginBottom:"7em"}}  className={classes.gridContainer}>
                <Header/>
            </Grid>
            <Grid item container direction={matchesMD ? "column" : "row"}  alignItems="center" style={{marginTop:"2em"}}  className={classes.gridContainer}>
                <LandingPage/>
            </Grid>
            <Grid item container  style={{height:"23em", backgroundColor:"#fafafa", marginTop:"5em", paddingBottom:"2em"}}>
               <Grid item container direction="row" justify="center">
                   <Grid item style={{marginTop:"3em"}}>
                       <Typography variant="subtitle1" style={{color:'#373737'}}>Featured Universities</Typography>
                   </Grid>
               </Grid>
               <Grid item container className={classes.gridContainer}>
                    <SliderUneversity/>
                </Grid>
            </Grid>
            <Grid container direction="row" justify="center" className={classes.gridContainer} style={{marginTop:"5em"}}>
                <Typography variant="h4" gutterBottom style={{color:'#373737'}}>Our Services</Typography>
            </Grid>
            <Grid item container direction="row" justify="center">
                <Grid item style={{maxWidth:"50em", padding:matchesXS ? 15 : undefined}}>
                    <Typography variant="subtitle1" align="center" style={{fontSize:matchesXS ? "1.1em" : undefined}}>Executive Trade International is an University Application Centre, guiding Bangladeshi students to Australian, British, Canadian and Irish universities!</Typography>
                </Grid>
            </Grid>
            <Grid container direction={matchesSM ? "column" : "row"} style={{marginTop:"5em"}} className={classes.gridContainer} justify={matchesSM ? "center" : "space-between"} alignItems="center">
                <Grid item style={{maxWidth:344, maxHeight:351}} md >
                    <Card>
                        <CardContent>
                            <Grid item container direction="column" alignItems={matchesSM ? "center" : undefined}>
                                <Grid item>
                                    <img src={career} alt="career" style={{maxWidth:76, maxHeight:76}}/>
                                </Grid>
                                <Grid item>
                                    <Typography variant="subtitle1" gutterBottom style={{color:'#373737'}}>Career Counselling</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography style={{color:"#8a8a8a"}} align={matchesSM ? "center" : undefined} >Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum </Typography>
                                </Grid>
                                <Grid item style={{marginTop:"1em"}}>
                                    <Typography component={Link} to="/" style={{textDecoration:'none', color:theme.palette.primary.main}}>Learn More <i className="fas fa-arrow-right" style={{marginLeft:".2em"}}></i></Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                {matchesSM ? (<div style={{marginTop:"2em"}}></div>) : undefined}
                {matchesMD ? (<div style={{marginRight:"3em"}}></div>) : undefined}
                <Grid item style={{maxWidth:344, maxHeight:351}} md>
                    <Card>
                        <CardContent>
                            <Grid item container direction="column" alignItems={matchesSM ? "center" : undefined}>
                                <Grid item>
                                    <img src={university} alt="univerrsity" style={{maxWidth:76, maxHeight:76}}/>
                                </Grid>
                                <Grid item>
                                    <Typography variant="subtitle1" style={{color:'#373737'}} gutterBottom>University Admissions</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography style={{color:"#8a8a8a"}} align={matchesSM ? "center" : undefined}>Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum </Typography>
                                </Grid>
                                <Grid item style={{marginTop:"1em"}}>
                                    <Typography component={Link} to="/" style={{textDecoration:'none', color:theme.palette.primary.main}}>Learn More <i className="fas fa-arrow-right" style={{marginLeft:".2em"}}></i></Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                {matchesSM ? (<div style={{marginTop:"2em"}}></div>) : undefined}
                {matchesMD ? (<div style={{marginRight:"3em"}}></div>) : undefined}
                <Grid item style={{maxWidth:344, maxHeight:351}} md>
                    <Card>
                        <CardContent>
                            <Grid item container direction="column" alignItems={matchesSM ? "center" : undefined}>
                                <Grid item>
                                    <img src={visa} alt="visa" style={{maxWidth:76, maxHeight:76}}/>
                                </Grid>
                                <Grid item>
                                    <Typography variant="subtitle1" style={{color:'#373737'}} gutterBottom>Career Counselling</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography style={{color:"#8a8a8a"}} align={matchesSM ? "center" : undefined}>Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum </Typography>
                                </Grid>
                                <Grid item style={{marginTop:"1em"}}>
                                    <Typography  component={Link} to="/" style={{textDecoration:'none', color:theme.palette.primary.main}}>Learn More <i className="fas fa-arrow-right" style={{marginLeft:".2em"}}></i></Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Grid item container direction={matchesSM ? "column" :"row"}  className={classes.gridContainer} style={{marginTop:"5em"}} justify="center" alignItems="center">
                <Grid item style={{maxWidth:344, maxHeight:351, marginRight:matchesSM ? undefined : "2em", marginBottom:matchesSM ? "2em" : undefined}}>
                    <Card>
                        <CardContent>
                            <Grid item container direction="column" alignItems={matchesSM ? "center" : undefined}>
                                <Grid item>
                                    <img src={accomodation} alt="accomodation" style={{maxWidth:76, maxHeight:76}}/>
                                </Grid>
                                <Grid item>
                                    <Typography variant="subtitle1" style={{color:'#373737'}} gutterBottom>Accommodation</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography style={{color:"#8a8a8a"}} align={matchesSM ? "center" : undefined}>Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum </Typography>
                                </Grid>
                                <Grid item style={{marginTop:"1em"}}>
                                    <Typography  component={Link} to="/" style={{textDecoration:'none', color:theme.palette.primary.main}}>Learn More <i className="fas fa-arrow-right" style={{marginLeft:".2em"}}></i></Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item style={{maxWidth:344, maxHeight:351}}>
                    <Card>
                        <CardContent>
                            <Grid item container direction="column" alignItems={matchesSM ? "center" : undefined}>
                                <Grid item>
                                    <img src={flight} alt="flight" style={{maxWidth:76, maxHeight:76}}/>
                                </Grid>
                                <Grid item>
                                    <Typography variant="subtitle1" style={{color:'#373737'}} gutterBottom>Pre-Departure Briefing</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography style={{color:"#8a8a8a"}} align={matchesSM ? "center" : undefined}>Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum </Typography>
                                </Grid>
                                <Grid item style={{marginTop:"1em"}}>
                                    <Typography  component={Link} to="/" style={{textDecoration:'none', color:theme.palette.primary.main}}>Learn More <i className="fas fa-arrow-right" style={{marginLeft:".2em"}}></i></Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Grid item container style={{backgroundColor:"#fafafa", marginTop:"5em", paddingBottom:"3em"}}>
            <Grid item container direction="row" justify="center" style={{marginTop:"7em"}}>
                <Typography variant="h4" style={{color:'#373737'}}>News</Typography>
            </Grid>
            <Grid item container direction="row" justify="center" style={{marginTop:"2em"}} className={classes.gridContainer}>
                <Grid item style={{maxWidth:"50em"}}>
                    <Typography variant="subtitle1" align="center" style={{fontSize:matchesXS ? "1.1em" : undefined,}}>Sunt autem nusquam hoc epicurus in gravissimo bello animadversionis metu degendae praesidia firmissima. Torquatos nostros? quos tu paulo ante cum teneam sententiam, quid bonum esse vult.</Typography>
                </Grid>
            </Grid>
            <Grid item container direction={matchesSM ? "column" :"row"}  style={{marginTop:"5em"}} className={classes.gridContainer} justify="space-between" alignItems="center">
                <Grid item style={{maxWidth:"20em"}}>
                    <Card style={{borderRadius:10}}>
                        <Grid item container direction="column">
                            <Grid item>
                                <img src={people} alt="people"/>
                            </Grid>
                        </Grid>
                        <CardContent>
                            <Grid item container direction="column">
                                <Typography style={{color:'grey'}} gutterBottom><i className="fas fa-calendar-week" style={{marginRight:".5em"}}></i>17 Apr 2020</Typography>
                                <Typography>Come On In. The Water’s Fine</Typography>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item style={{maxWidth:"20em", marginTop:matchesSM ? "3em" : undefined, marginBottom: matchesSM ? "3em" : undefined}}>
                    <Card style={{borderRadius:10}}>
                        <Grid item container direction="column">
                            <Grid item>
                                <img src={woman} alt="woman"/>
                            </Grid>
                        </Grid>
                        <CardContent>
                            <Grid item container direction="column">
                                <Typography style={{color:'grey'}} gutterBottom><i className="fas fa-calendar-week" style={{marginRight:".5em"}}></i>17 Apr 2020</Typography>
                                <Typography>Trump Lays Plans to Reverse</Typography>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item style={{maxWidth:"20em"}}>
                    <Card style={{borderRadius:10}}>
                        <Grid item container direction="column">
                            <Grid item>
                                <img src={puzzle} alt="puzzle"/>
                            </Grid>
                        </Grid>
                        <CardContent>
                            <Grid item container direction="column">
                                <Typography style={{color:'grey'}} gutterBottom><i className="fas fa-calendar-week" style={{marginRight:".5em"}}></i>17 Apr 2020</Typography>
                                <Typography>How a Little Bit of Hydra</Typography>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Grid item container direction="row" justify="center" style={{marginTop:"5em"}}>
                <Button variant="contained" color="primary">Join Here <i className="fas fa-arrow-right" style={{marginLeft:matchesXS ? ".2em" : ".4em", padding: matchesXS ? ".7em" :"1em"}}></i></Button>
            </Grid>
            </Grid>
            <Grid item container direction="row" justify="center" className={classes.gridContainer} style={{marginTop:"5em"}}>
                <Typography variant={matchesXS ? "h5" : "h4" } style={{color:theme.palette.common.black}} gutterBottom align={matchesXS ? "center" : undefined}>Upcoming University Events</Typography>  
            </Grid>
            <Grid item container direction="row" justify="center">
                <Grid item style={{maxWidth:"55em"}}>
                    <Typography style={{color:theme.palette.common.greyDark, fontSize:matchesXS ? "1.1em" : undefined, padding:matchesXS ? 15: undefined}} align="center" variant="subtitle1">Sunt autem nusquam hoc epicurus in gravissimo bello animadversionis metu degendae praesidia firmissima. Torquatos nostros? quos tu paulo ante cum teneam sententiam, quid bonum esse vult.</Typography>
                </Grid>
            </Grid>
            <Grid item container direction="row" justify="center" className={classes.gridContainer} style={{marginTop:"5em"}}>
                <SliderEvents/>
            </Grid>
            <Grid item container direction="row" style={{backgroundColor:theme.palette.common.greyLight, marginTop:"5em", paddingBottom:"2em"}}>
                <Grid item container direction="row" justify="center" style={{marginTop:"5em"}} className={classes.gridContainer}>
                    <Typography variant={matchesXS ? "h5" : "h4"} style={{color:theme.palette.common.black}} align="center">Countries We Covered</Typography>
                </Grid>
                <Grid item container direction="row" justify="center" style={{marginTop:"1em"}}>
                    <Grid item style={{maxWidth:"60em"}}>
                        <Typography  style={{color:theme.palette.common.greyDark, padding:matchesXS ? 10 : undefined}} align="center">Sunt autem nusquam hoc epicurus in gravissimo bello animadversionis metu degendae praesidia firmissima. Torquatos nostros? quos tu paulo ante cum teneam sententiam, quid bonum esse vult.</Typography>
                    </Grid>        
                </Grid>
                <Grid item container direction="row" style={{marginTop:"3em"}} className={classes.gridContainer}>
                    <SliderCountry/>
                </Grid>
            </Grid>
            <Grid container direction={matchesSM ? "column" : "row"} justify= "space-between" alignItems="center" style={{marginTop:"5em"}} className={classes.gridContainer}>
                <Grid item>
                    <Typography align={matchesSM ? "center" : undefined} variant="h4" style={{color:theme.palette.common.black}}>Ready to chase your dreams?</Typography>
                </Grid>
                <Grid item style={{marginTop:matchesSM ? "2em" : undefined}}>
                    <Button variant="contained" color="primary">Apply Online <i className="fas fa-arrow-right" style={{marginLeft:matchesXS ? ".2em" : ".4em", padding: matchesXS ? ".7em" :"1em"}}></i></Button>
                </Grid>
            </Grid>
            <Grid item container direction="row"  style={{height:matchesSM ? "50em" :  "25em", backgroundColor:theme.palette.primary.main, marginTop:"5em"}}>
                <Grid item container direction={matchesSM ? "column" :"row"} alignItems={matchesSM ? "center" : undefined} justify="space-between" style={{paddingTop:"5em", paddingLeft:matchesSM ? undefined : "3em"}}>
                    <Grid item container direction="column" style={{maxWidth:"20em"}} alignItems={matchesSM ? "center" : undefined}>
                        <Grid item>
                            <img src={executivewhite} alt="executive"/>
                        </Grid>
                        <Grid item  style={{marginTop:"1em"}}>
                            <Typography style={{color:"#fff"}}>Concord Royal Court (3rd floor)</Typography>
                        </Grid>
                        <Grid item>
                            <Typography style={{color:"#fff"}}>Dhanmondi, Dhaka 1209, Bangladesh.</Typography>
                        </Grid>
                        <Grid item style={{marginTop:"3em"}}>
                            <Typography style={{color:"#fff"}}>© 2020 Executive Trade International.</Typography>
                        </Grid>
                    </Grid>
                    <Grid item container direction="column" style={{maxWidth:"10em"}} alignItems={matchesSM ? "center" : undefined}>
                        <Grid item>
                            <Typography style={{color:"#fff"}}>About Us</Typography>
                        </Grid>
                        <Grid item>
                            <Typography style={{color:"#fff", marginTop:"1em"}}>Responsibilities</Typography>
                        </Grid>
                        <Grid item>
                            <Typography style={{color:"#fff", marginTop:"1em"}}>Our Services</Typography>
                        </Grid>
                        <Grid item>
                            <Typography style={{color:"#fff", marginTop:"1em"}}>Contact</Typography>
                        </Grid>
                    </Grid>
                    <Grid item container direction="column" style={{maxWidth:"10em"}} alignItems={matchesSM ? "center" : undefined}> 
                        <Grid item>
                            <Typography style={{color:"#fff"}}>Disclaimer</Typography>
                        </Grid>
                        <Grid item>
                            <Typography style={{color:"#fff", marginTop:"1em"}}>Testimonials</Typography>
                        </Grid>
                        <Grid item>
                            <Typography style={{color:"#fff", marginTop:"1em"}}>Privacy Policy</Typography>
                        </Grid>
                        <Grid item>
                            <Typography style={{color:"#fff", marginTop:"1em"}}>Terms of Service</Typography>
                        </Grid>
                    </Grid>
                    <Grid item container direction="row" style={{maxWidth:"10em", marginBottom:"2em"}} alignItems={matchesSM ? "center" : "flex-end"} justify={matchesSM ? "center" : undefined}>
                        <Grid item>
                            <i className="fab fa-facebook-f fa-2x" style={{color:"#fff"}}></i>
                        </Grid>
                        <Grid item>
                            <i className="fab fa-instagram fa-2x" style={{color:"#fff", marginRight:".5em", marginLeft:".5em"}}></i>
                        </Grid>
                        <Grid item>
                            <i className="fab fa-twitter fa-2x" style={{color:"#fff"}}></i>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Router>
        
    )
}


export default App;