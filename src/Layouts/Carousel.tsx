import React, { FC } from 'react';
import { Carousel as CarouselModule } from 'antd';

const contentStyle: any = {
  color: '#b3001e',
  lineHeight: '4rem',
  textAlign: 'center',
  height: '200px',
  padding: '1rem',
  fontSize: '36px',
};

const Carousel: FC = () => (
  <CarouselModule autoplay className='home-carousel'>
    <div>
      <h3 style={contentStyle}>Slider content here ...</h3>
    </div>
    <div>
      <h3 style={contentStyle}>Test content by Kiran ...</h3>
    </div>
    <div>
      <h3 style={contentStyle}>Sample content content content</h3>
    </div>
    <div>
      <h3 style={contentStyle}>Sample content content content Sample content content content</h3>
    </div>
  </CarouselModule>
);
export default Carousel;
