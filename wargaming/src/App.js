import './App.scss';
import Slider from "./Components/Slider/Slider";

function App() {
    const slides = [
      {url: "http://localhost:3000/img/img1.png", title: "germany"},
      {url: "http://localhost:3000/img/img2.png", title: "ussr"},
      {url: "http://localhost:3000/img/img3.jpg", title: "uss"},
      {url: "http://localhost:3000/img/img4.jpg", title: "france"},
      {url: "http://localhost:3000/img/img5.jpg", title: "united kingdom"},
      {url: "http://localhost:3000/img/img6.jpg", title: "czechoslovakia"}
    ];

  return (
    <div className="slider-container">
       <Slider slides={slides}/>
    </div>
  );
}

export default App;
