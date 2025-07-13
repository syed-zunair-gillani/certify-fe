import { Carousel } from 'antd'
import Image from 'next/image'
import Testimonial, { type TestimonialProps } from './TestimonialItem'
import styles from './styles.module.css'

interface TestimonialsCarouselProps {
  data: TestimonialProps[]
  bgColor?: string
}

const Arrow: React.FC<{ type: string }> = ({ type }) => (
  <Image src={'/arrow-right30x15.svg'} width={18} height={36} alt={type} />
)

const TestimonialsCarousel: React.FC<TestimonialsCarouselProps> = ({
  data = [],
  bgColor,
}) => {
  return (
    <section
      className={styles.carousel}
      style={{ backgroundColor: bgColor ?? '#f3c948' }}
    >
      <Carousel
        dots={false}
        fade={true}
        arrows={data.length > 1}
        infinite={true}
        prevArrow={<Arrow type="prev" />}
        nextArrow={<Arrow type="next" />}
      >
        {data.map((item, index) => (
          <Testimonial key={index} {...item} />
        ))}
      </Carousel>
    </section>
  )
}

export default TestimonialsCarousel
