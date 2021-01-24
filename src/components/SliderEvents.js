import React from 'react';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import SwiperCore, { Pagination,A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import SliderEventsCard from '../ui/SliderEventsCard';



SwiperCore.use([Pagination,A11y]);








const SliderUniversity = () => {
    const theme = useTheme();    
    const matchesXS= useMediaQuery(theme.breakpoints.down("xs"));
    const matchesSM= useMediaQuery(theme.breakpoints.down("sm"));
    const matchesMD= useMediaQuery(theme.breakpoints.down("md"));
    const [valueCard, setValueCard] = React.useState(-10)
    React.useEffect(() => {
        if(matchesMD) {
            setValueCard(150)
        }
        if(matchesSM){
            setValueCard(380)
        }
        if(matchesXS){
            setValueCard(100)
        }

    }, [matchesMD, matchesSM, matchesXS])
    
    return(
        <React.Fragment>
            <Swiper
                spaceBetween={valueCard}
                slidesPerView={matchesXS ? 1 : 2}
                pagination={{ clickable: true }}
                style={{paddingBottom:"5em"}}
                >
                <SwiperSlide> 
                    <SliderEventsCard/>
                </SwiperSlide>
                <SwiperSlide>
                    <SliderEventsCard/>
                </SwiperSlide>
                <SwiperSlide>
                    <SliderEventsCard/>
                </SwiperSlide>
                <SwiperSlide>
                    <SliderEventsCard/>
                </SwiperSlide>
                <SwiperSlide>
                    <SliderEventsCard/>
                </SwiperSlide>
                <SwiperSlide>
                    <SliderEventsCard/>
                </SwiperSlide>
            </Swiper>
        </React.Fragment>
    )
}
 



export default SliderUniversity;