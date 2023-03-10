import React, {useState} from 'react';
import BtnSlider from "./btnSlider";
import '../../Styles/Slider.scss'

export default function Slider ({slides}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const prevSlide = () => {
        const firstSlide = currentIndex === 0;
        const newIndex = firstSlide ? slides.length-1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const nextSlide = () => {
        const lastSlide = currentIndex === slides.length-1;
        const newIndex = lastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }

    return(
        <div className="slider">
            <BtnSlider moveSlide={nextSlide} direction={"next"}/>
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
            <div className="slider-content">
                <div className="flag">
                    <div className="flag-wrapper">
                        <div  className="flag-content">
                            <div className="flag-content-header">Over 600 vehicles from the largest tank- building superpowers</div>
                            <div className="flag-content-text">Each model has been recreated with surgical precision</div>
                        </div>
                        <div>
                            <button className="flag-button">Registration</button>
                        </div>
                    </div>
                </div>
                <div className="nation" style={{backgroundImage: `url(${slides[currentIndex].url})`}}>
                    <header>Heavy tanks</header>
                    <div className="nation-content">
                        <div className="nation-content-country">GERMANY</div>
                        <div className="nation-content-vehicles">
                            <div className="nation-content-vehicles-quantity">128</div>
                            <div className="nation-content-vehicles-text">GERMAN VEHICLES IN THE GAME</div>
                       </div>
                    </div>
                    <div className="nation-vehicles">StuG III, Panther, Maus, Tiger, Pz. III</div>
                </div>
            </div>
            <div className="container-dots">
                {slides.map((slide, slideIndex) => {
                    return (
                        <div>
                            <img
                                className={slideIndex === currentIndex + 1 ? "dot active" : "dot"}
                                key={slideIndex}
                                onClick={() => goToSlide(slideIndex)}
                                src={process.env.PUBLIC_URL + `/flagIcons/flag${slideIndex + 1}.svg`}
                            />
                            <p>{slide.title}</p>
                        </div>
                        )
                    }
                )}
            </div>
        </div>
    )
}