import React from 'react';

import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import SwiperCore, { Pagination,A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import people from '../images/people.png';
import canada from '../images/canada.png';
import Card from '@material-ui/core/Card';
import uk from '../images/uk.png';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


SwiperCore.use([Pagination,A11y]);










const SliderUniversity = () => {
 
    const theme = useTheme();
 
    const matchesSM= useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS= useMediaQuery(theme.breakpoints.down("xs"));
    const [slideView, setSlideView] = React.useState(3);

    React.useEffect(() => {
        if(matchesSM) {
            setSlideView(2)
        }
        if(matchesXS){
            setSlideView(1)
        }
    }, [matchesSM, matchesXS])
    return(
        <React.Fragment>
            <Swiper
                spaceBetween={matchesSM ? 200 : 50}
                slidesPerView={slideView}
                pagination={{ clickable: true }}
                style={{paddingBottom:"4em", paddingLeft:matchesXS ? "2em" : undefined}}
                >
                <SwiperSlide>
                    <Card style={{backgroundColor:'transparent', boxShadow:theme.shadows[0], maxWidth:348, maxHeight:341, minWidth:348, minHeight:341}}>
                        <Grid item container direction="column">
                            <Grid item>
                                <img src={people} alt="people"  style={{borderRadius:20}} />
                            </Grid>
                        </Grid>
                        <CardContent>
                            <Grid item container direction="column">
                                <Typography style={{color:theme.palette.common.dark}} gutterBottom variant="h6">Study in Australia</Typography>
                                <Typography>Ut aut corporis accusantium illo ullam qui laudantium. Maxime rerum sunt et sequi</Typography>
                            </Grid>
                        </CardContent>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card style={{backgroundColor:'transparent', boxShadow:theme.shadows[0], maxWidth:348, maxHeight:341, minWidth:348, minHeight:341}}>
                        <Grid item container direction="column">
                            <Grid item>
                                <img src={canada} alt="canada"  style={{borderRadius:20}} />
                            </Grid>
                        </Grid>
                        <CardContent>
                            <Grid item container direction="column">
                                <Typography style={{color:theme.palette.common.dark}} gutterBottom variant="h6">Study in Australia</Typography>
                                <Typography>Ut aut corporis accusantium illo ullam qui laudantium. Maxime rerum sunt et sequi</Typography>
                            </Grid>
                        </CardContent>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card style={{backgroundColor:'transparent', boxShadow:theme.shadows[0], maxWidth:348, maxHeight:341, minWidth:348, minHeight:341}}>
                        <Grid item container direction="column">
                            <Grid item>
                                <img src={uk} alt="uk"  style={{borderRadius:20}} />
                            </Grid>
                        </Grid>
                        <CardContent>
                            <Grid item container direction="column">
                                <Typography style={{color:theme.palette.common.dark}} gutterBottom variant="h6">Study in Australia</Typography>
                                <Typography>Ut aut corporis accusantium illo ullam qui laudantium. Maxime rerum sunt et sequi</Typography>
                            </Grid>
                        </CardContent>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card style={{backgroundColor:'transparent', boxShadow:theme.shadows[0], maxWidth:348, maxHeight:341, minWidth:348, minHeight:341}}>
                        <Grid item container direction="column">
                            <Grid item>
                                <img src={people} alt="people"  style={{borderRadius:20}} />
                            </Grid>
                        </Grid>
                        <CardContent>
                            <Grid item container direction="column">
                                <Typography style={{color:theme.palette.common.dark}} gutterBottom variant="h6">Study in Australia</Typography>
                                <Typography>Ut aut corporis accusantium illo ullam qui laudantium. Maxime rerum sunt et sequi</Typography>
                            </Grid>
                        </CardContent>
                    </Card>
                </SwiperSlide>
            </Swiper>
        </React.Fragment>
    )
}
 



export default SliderUniversity;