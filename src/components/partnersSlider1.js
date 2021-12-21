import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GB from "../Images/gamebuy_ru.png.png"
import HappyJB from "../Images/happy-job_ru.png.png"
import Intuit from "../Images/intuit.png.png"
import TimeSQ from "../Images/logo (1)_0.png.png"
import BuyELPH from "../Images/logo_bg4.png.png"
import Rosinka from "../Images/rosinka_ru.png.png"
import Tukan from "../Images/scantukan-logo.png.png"
import Kramola from "../Images/kramola_info.png.png"
import "./partnersSliderStyle.css"
export default class PartnersSlider1 extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const settings = {
            infinite: true,
            dots: false,
            arrows: false,
            autoplay: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '10%',
            autoplaySpeed: 3500,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {slidesToShow: 3,centerPadding: '12%',
                    }
                },
                {
                    breakpoint: 600,
                    settings: {slidesToShow: 2}
                }
            ]
        };

        return (
            <div>
                <Slider ref={c => (this.slider = c)} {...settings} className="work-with-us-slider-1" id="wwu-slider-1">
                    <div key={1} className="work-with-us-slide">
                        <div ><img src={GB} alt="GameBuy" /></div>
                    </div>
                    <div key={2} className="work-with-us-slide">
                        <div><img src={Intuit} alt="Intuit" /></div>
                    </div>
                    <div key={3} className="work-with-us-slide">
                        <div><img src={TimeSQ} alt="TimeSquare" /></div>
                    </div>
                    <div key={4} className="work-with-us-slide">
                        <div><img src={Kramola} alt="Kramola" /></div>
                    </div>
                    <div key={5} className="work-with-us-slide">
                        <div><img src={BuyELPH} alt="КупиСлона" /></div>
                    </div>
                    <div key={6} className="work-with-us-slide">
                        <div><img src={Tukan} alt="Tukan" /></div>
                    </div>
                    <div key={7} className="work-with-us-slide">
                        <div><img src={Rosinka} alt="Rosinka" /></div>
                    </div>
                    <div key={8} className="work-with-us-slide">
                        <div><img src={HappyJB} alt="HappyJob" /></div>
                    </div>
                </Slider>

            </div>
        );
    }
}


