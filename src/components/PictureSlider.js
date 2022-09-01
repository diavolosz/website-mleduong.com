import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import AnimationStyles from 'react-awesome-slider/src/styled/fall-animation/fall-animation.scss';
 
export default function PictureSlider() {
  return (
    <AwesomeSlider animation="fallAnimation" cssModule={[CoreStyles, AnimationStyles]}>
      <div data-src="img/aboutme/science.jpg" />
      <div data-src="img/aboutme/front.jpg" />
      <div data-src="img/aboutme/Van.jpg" />
      <div data-src="img/aboutme/Sing.jpg" />
    </AwesomeSlider>
  )
}