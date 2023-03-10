import React from "react";
import "../../Styles/Slider.scss";
import leftArrow from "../icons/arrowIcoms/arrow-left-solid.svg";
import rightArrow from "../icons/arrowIcoms/arrow-right-solid.svg";

export default function BtnSlider({direction, moveSlide}) {
    console.log("btn:", direction, moveSlide);
    return (
        <button
            onClick={moveSlide}
            className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
        >
            <img src={direction === "next" ? rightArrow : leftArrow} />
        </button>
    );
}