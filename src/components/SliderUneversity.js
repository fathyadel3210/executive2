import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import SwiperCore, { Pagination,A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import charles from '../images/charles.png';
import latrobe from '../images/latrobre.png';
import macquire from '../images/macquire.png';
import newCastl from '../images/newCastl.png';

SwiperCore.use([Pagination,A11y]);








const SliderUniversity = () => {
    const theme = useTheme();
    const matchesSM= useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS= useMediaQuery(theme.breakpoints.down("xs"));
    return(
        <React.Fragment>
            <Swiper
                spaceBetween={matchesXS ? 120 : 100}
                slidesPerView={matchesSM ? 2 : 3}
                pagination={{ clickable: true }}
                style={{paddingBottom:"1em"}}
                >
                <SwiperSlide>
                    <img src={charles} alt="charles" style={{width:matchesXS ? "11em" : undefined}}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={latrobe} alt="latrobre" style={{width:matchesXS ? "11em" : undefined}}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={macquire} alt="macquire" style={{width:matchesXS ? "11em" : undefined}}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={newCastl} alt="newCastl" style={{width:matchesXS ? "11em" : undefined}}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={charles} alt="charles" style={{width:matchesXS ? "11em" : undefined}}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={latrobe} alt="latrobre" style={{width:matchesXS ? "11em" : undefined}}/>
                </SwiperSlide>
            </Swiper>
        </React.Fragment>
    )
}
 



export default SliderUniversity;