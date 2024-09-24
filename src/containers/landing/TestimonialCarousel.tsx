import Slider from 'react-slick';

import Testimonial from '@/components/Testimonial';
import { TESTIMONIALS } from '@/lib/constants';

const TestimonialCarousel = () => {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Slider {...settings}>
      {TESTIMONIALS.map((testimonial) => (
        <Testimonial
          key={testimonial.authorName}
          quote={testimonial.quote}
          authorName={testimonial.authorName}
          authorPosition={testimonial.authorPosition}
          authorImageSrc={testimonial.authorImageSrc}
        />
      ))}
    </Slider>
  );
};

export default TestimonialCarousel;
