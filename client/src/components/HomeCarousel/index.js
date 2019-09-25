import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './Carousel.css'
import Photo1 from '../../images/investigate.gif'
import Photo2 from '../../images/pinapple.png'
import Photo3 from '../../images/quizNick.png'
class NewCarousel extends React.Component{
    render(){
return(
<div className="carouselCSS">
<Carousel>
  <Carousel.Item>
    <img
      className="carouselIMG"
      src={Photo1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className="QHead" style={{fontSize: 60}}>Taking Care of Quizness...</h3>
      {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="carouselIMG"
      src={Photo2}
      alt="Second slide"
      
    />

    <Carousel.Caption>
      <h3 className="QHead" style={{fontSize: 60}}>Everyday!</h3>
      <p className="QText"style={{fontSize: 30}}>Fresh Quizzes Below</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="carouselIMG"
      src={Photo3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 className="QHead" style={{fontSize: 60}}>Or Create Your Own!</h3>
      <p className="QText" style={{fontSize: 30}}>Use the "Create a Quiz" button above <br></br> or feel free to register to save your data! </p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
)
    }
    }

export default NewCarousel;