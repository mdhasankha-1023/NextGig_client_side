import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import PrimaryTitle from "../UI/PrimaryTitle";
import { useEffect, useState } from "react";
import SlideCard from "../UI/SlideCard";

export default function Testimonials() {
  const [reviews, setReviews] = useState([]);


  useEffect(() => {
    fetch('http://localhost:3000/reviews')
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        setReviews(data)
      })
  }, [])

  return (
    <div className="w-full xl:w-4/5 mx-auto px-4">
      <PrimaryTitle lgText={'Testimonials'} style={'text-center'} />
      <Swiper
        slidesPerView={3}
        spaceBetween={60}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-20"
      >

        {
          reviews.map(review => <SwiperSlide key={review.id} className="mb-20">
            <SlideCard
              review={review}
            />
          </SwiperSlide>

          )
        }

      </Swiper>
    </div >
  )
}
