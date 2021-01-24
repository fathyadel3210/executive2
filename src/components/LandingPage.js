import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import graduate from '../images/graduate-girl.png';
import twitter from '../images/twitter.png';
import instagram from '../images/instagram.png';
import facebook from '../images/facebook.png';



const useStyles = makeStyles(theme => ({
    gridContainer:{
        padding:"0 5em",
        [theme.breakpoints.down("sm")]:{
            padding:"0 2em",
        }
    },
    graduatedImage:{
        maxWidth:470,
        maxHeight:565,
        [theme.breakpoints.down("md")]:{
            maxWidth:"25em"
        },
        [theme.breakpoints.down("sm")]:{
            maxWidth:"18em"
        }
    }
}))


const LandingPage = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD= useMediaQuery(theme.breakpoints.down("md"));
    const matchesXS= useMediaQuery(theme.breakpoints.down("xs"));
    return(
        <React.Fragment>
            <Grid item container  direction="column" style={{maxWidth:"40em"}} alignItems={matchesMD ? "center" : undefined}>
                    <Typography variant={matchesXS ? "h4" :"h3"} gutterBottom align={matchesMD ? "center" : undefined} style={{color:'#373737'}}>We Help To <span style={{color:theme.palette.primary.main}}>Build</span><br/> Your Dream</Typography>
                    <Typography variant="subtitle1" align={matchesMD ? "center" : undefined} style={{fontSize:matchesXS ? "1.2em" : undefined}}>We are  always availed to consult on taking your higher education to the next level so you can stay competitive in the global world. We welcome the opportunity to work with you "today" for "tomorrow's" better career solutions.</Typography>
                    <Grid item style={{marginTop:"2em"}}>
                        <Button variant="contained" color="primary">Apply Online <i className="fas fa-arrow-right" style={{marginLeft:matchesXS ? ".2em" : "1em", padding: matchesXS ? ".7em" :"1em"}}></i></Button>
                    </Grid>
                    <Grid item style={{marginTop:"3em"}}>
                        <Grid container direction="row" style={{maxWidth:"10em"}}>
                            <Grid item><img src={facebook} alt="facebook"/></Grid>
                            <Grid item style={{marginTop:".1em", marginRight:"2em", marginLeft:"2em"}}><img src={twitter} alt="twitter"/></Grid>
                            <Grid item><img src={instagram} alt="instagram"/></Grid>
                        </Grid>
                    </Grid>      
                </Grid>
                <Grid item style={{marginTop:matchesMD ? "4em":undefined}}>
                    <img src={graduate} alt="graduate" className={classes.graduatedImage}/>
                </Grid>
        </React.Fragment>
    )
}

export default LandingPage;