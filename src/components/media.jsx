import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const slidedata = [
  {
    id: 1,
    image: "/img/kenya1.jpeg",
    title: "Latest campaign in Mombasa County",
    description:
      "Engaging with local communities to promote democratic values. We believe in the power of grassroots movements to drive change. Join us in our mission to build a better future for all Kenyans.",
    categories: "Campaigns",
  },
  {
    id: 2,
    image: "/img/kenya1.jpeg",
    title: "Community Outreach Program",
    description:
      "Our community outreach program aims to bring together diverse groups of people to discuss and address local challenges. Together, we can create a more inclusive and equitable society.",
    categories: "Outreach",
  },
  {
    id: 3,
    image: "/img/kenya1.jpeg",
    title: "Youth Empowerment Initiative",
    description:
      "Empowering young people through education and leadership development. Our youth empowerment initiative focuses on building skills and confidence to create positive change in their communities.",
    categories: "Youth",
  },
  { id: 4, image: "/img/kenya1.jpeg", title: "Youth Empowerment Initiative", description: "Empowering young people through education and leadership development.", categories: "Youth" },
  { id: 5, image: "/img/kenya1.jpeg", title: "Youth Empowerment Initiative", description: "Empowering young people through education and leadership development.", categories: "Youth" },
  { id: 6, image: "/img/kenya1.jpeg", title: "Youth Empowerment Initiative", description: "Empowering young people through education and leadership development.", categories: "Youth" },
];

const Media = () => {
  const swiperRef = useRef(null);

  function adjustMargin() {
    const screenWidth = window.innerWidth;
    if (swiperRef.current) {
      swiperRef.current.style.marginLeft =
        screenWidth <= 520
          ? "0px"
          : screenWidth <= 650
          ? "-50px"
          : screenWidth <= 800
          ? "-100px"
          : "-150px";
    }
  }

  useEffect(() => {
    adjustMargin();
    window.addEventListener("resize", adjustMargin);
    return () => window.removeEventListener("resize", adjustMargin);
  }, []);

  return (
    <div className="container min-h-screen w-full px-8 py-16">
      <div className="inner-container">
        <Swiper
          modules={[Pagination]}
          grabCursor
          initialSlide={2}
          centeredSlides
          slidesPerView="auto"
          slideToClickedSlide
          speed={800}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { spaceBetween: 40 },
            650: { spaceBetween: 30 },
            1000: { spaceBetween: 20 },
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper.wrapperEl;
          }}
        >
          {slidedata.map((slide) => (
            <SwiperSlide key={slide.id}>
              <img src={slide.image} alt={slide.title} />
              <div className="title">
                <h1>{slide.title}</h1>
              </div>

              <div className="content">
                <div className="text-box">
                  <p>{slide.description}</p>
                </div>

                <div className="footer">
                  <div className="category">
                    <span>{slide.categories}</span>
                  </div>

                  <button className="read-more-btn">
                    <span className="label">Read More</span>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Media;
