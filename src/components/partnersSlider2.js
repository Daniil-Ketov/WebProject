import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TopYog from "../Images/logo_0_0_0.png.png"
import Estee from "../Images/logo-estee.svg_.png.png"
import Art from "../Images/artzacepka_ru.png.png"
import Roskom from "../Images/logo.ru_.png.png"
import Ayurveda from"../Images/ayurvedadom_com.png.png"
import DobDoc from"../Images/dobdoctor_ru.png.png"
import JapTrav from "../Images/japantravel_ru.png.png"
import Arsa from "../Images/arsa_su.png.png"
import "./partnersSliderStyle.css"
export default class PartnersSlider2 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const settings = {
            infinite: true,
            dots: false,
            arrows: false,
            autoplay: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '2%',
            autoplaySpeed: 3500,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {slidesToShow: 4,centerPadding: '1%',
                    }

                },
                {
                    breakpoint:600,
                    settings: {slidesToShow: 2}
                }
            ]
        };

        return (
            <div>
                <Slider ref={c => (this.slider = c)} {...settings} className="work-with-us-slider-2" id="wwu-slider-2">
                    <div key={1} className="work-with-us-slide">
                        <div><img src={TopYog} alt="TopYog" /></div>
                    </div>
                    <div key={2} className="work-with-us-slide">
                        <div><img src={Roskom} alt="Roskim" /></div>
                    </div>
                    <div key={3} className="work-with-us-slide">
                        <div><img src={Estee} alt="Estee" /></div>
                    </div>
                    <div key={4} className="work-with-us-slide">
                        <div><img src={Art} alt="Art" /></div>
                    </div>
                    <div key={5} className="work-with-us-slide">
                        <div><img src={Ayurveda} alt="Ayurveda" /></div>
                    </div>
                    <div key={6} className="work-with-us-slide">
                        <div><img src={DobDoc} alt="DobDoc" /></div>
                    </div>
                    <div key={7} className="work-with-us-slide">
                        <div><img src={JapTrav} alt="JapTrav" /></div>
                    </div>
                    <div key={8} className="work-with-us-slide">
                        <div><img src={Arsa} alt="Arsa" /></div>
                    </div>
                </Slider>

            </div>
        );
    }
}


