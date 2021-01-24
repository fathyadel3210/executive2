import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {Link,  BrowserRouter as Router} from 'react-router-dom';


const SliderEventsCard = () => {
    const theme = useTheme();
    const matchesXS= useMediaQuery(theme.breakpoints.down("xs"));
    return(
        <React.Fragment>
            <Router>

            <Card style={{maxWidth:"30em", minWidth:matchesXS ? "20em" : "28em"}}>
                    <CardContent>
                        <Grid item container direction="column">
                            <Grid item container direction={matchesXS ? "column" :"row"} alignItems={matchesXS ? "center" : undefined}>
                                <Grid item container direction="column" style={{backgroundColor:'#ebedff', width:"4em", borderRadius:7}}>
                                    <Typography style={{color:theme.palette.primary.main, fontSize:'1.2rem', marginTop:'.4em'}} align="center">23</Typography>
                                    <Typography style={{color:theme.palette.primary.main, fontSize:'1.2rem', marginTop:'-.2em'}} align="center">Dec</Typography>
                                </Grid>
                                <Grid item style={{maxWidth:"15em", marginLeft:"1em"}}>
                                    <Typography style={{color:theme.palette.common.black, marginTop:'.4em'}} align={matchesXS ? "center" : undefined}>Macquarie University, Sydney, Australia</Typography>
                                </Grid>
                            </Grid>
                            <Grid container direction="row">
                                <Typography style={{marginTop:"1em", color:theme.palette.common.greyDark}}>Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur dolorem dicta accusantium fugiat.</Typography>
                            </Grid>
                            <Grid item container justify="space-between" style={{marginTop:"1.2em"}}>
                                <Grid item>
                                    <Typography component={Link} to="/" style={{textDecoration:'none', color:theme.palette.primary.main}}>Learn More <i className="fas fa-arrow-right" style={{marginLeft:".2em"}}></i></Typography>
                                </Grid>
                                <Grid item>
                                    <Typography style={{color:theme.palette.common.black}}><i className="fas fa-clock"></i>10:00 AM - 2:00 PM</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Router>
        </React.Fragment>
    )
}


export default SliderEventsCard;