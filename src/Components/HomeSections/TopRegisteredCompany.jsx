import PrimaryTitle from "../UI/PrimaryTitle";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import CompanyCard from "../UI/CompanyCard";

export default function TopRegisteredCompany() {
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
      <PrimaryTitle lgText={'Top Company Registered'} style={'text-center'} />
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
            <CompanyCard
              companyInfo={review}
            />
          </SwiperSlide>

          )
        }

      </Swiper>
    </div >
  )
}
