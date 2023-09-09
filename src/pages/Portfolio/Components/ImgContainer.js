import styled from 'styled-components';
import logo from '../../../images/logo2.png'
import lexi from '../../../images/Lexi.jpg'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '80vh',
}


function ImgContainer() {
    //#8cad49
    const slideImages  =[
      {
        url: lexi,
        caption: 'Slide 1'
      },
      {
        url: lexi,
        caption: 'Slide 2'
      },
      {
        url: lexi,
        caption: 'Slide 3'
      },
    ];
    return(
        <div className="slide-container" style={{marginTop: '8%', zIndex: 1}}>
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle}}>
                <img src={slideImage.url} style={{height: '100%', boxShadow: '12px 12px 2px 1px #D2B55B'}}/>
                {/* //<span style={spanStyle}>{slideImage.caption}</span> */}
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default ImgContainer;