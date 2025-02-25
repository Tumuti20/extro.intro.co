import React from "react";
import Title from "../components/Title";
import { FaCheck, FaStar } from "react-icons/fa6";
import Footer from "../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import user1 from "../assets/testimonials/user1.png";
import user2 from "../assets/testimonials/user2.png";
import user3 from "../assets/testimonials/user3.jpg";
import user4 from "../assets/testimonials/user4.jpg";
import user5 from "../assets/testimonials/user5.jpg";
import user6 from "../assets/testimonials/user6.png";
import product1 from "../assets/product_1.jpg";
import product2 from "../assets/product_2_1.png";
import product3 from "../assets/product_3.png";
import product4 from "../assets/product_4_1.png";

const testimonials = [
  {
    name: "Lynn",
    image: user1,
    review:
      "Extrovert Introvert is such a unique clothing line! Their designs perfectly balance bold, expressive pieces with more relaxed, subtle styles. The quality is fantastic, the fabrics are soft yet durable, and every piece feels thoughtfully designed. I’ve received so many compliments every time I wear their clothes. Shipping was quick, and customer service was super helpful! I can confidently say this is one of my favorite brands now.",
    products: [product1, product2],
  },
  {
    name: "Sammy",
    image: user2,
    review:
      "I absolutely love the vibe of this brand! The clothes feel premium and are incredibly comfortable. Their designs make a statement without being too much, which is exactly what I look for. I’ve been shopping here for a while, and I’ve never been disappointed. Highly recommend! The fabrics are breathable, and the attention to detail is evident in every piece. This brand truly knows how to balance style and comfort!",
    products: [product3, product4],
  },
  {
    name: "Jessica",
    image: user3,
    review:
      "The quality and fit of these clothes are amazing! I was hesitant at first, but after receiving my first order, I knew this would be my go-to brand. Their pieces are stylish, unique, and super versatile. I can dress them up or down easily! Their customer service is also amazing—quick responses and really helpful! Can't wait to shop more!",
    products: [product1, product3],
  },
  {
    name: "Daniel",
    image: user4,
    review:
      "Extrovert Introvert has completely changed my wardrobe for the better. The prints and fabric feel high-end, and every time I wear something from them, I feel confident and stylish. Their designs are fresh and modern! I’ve recommended this brand to so many friends, and they all love it too. The shipping was also super fast!",
    products: [product2, product4],
  },
  {
    name: "Mia",
    image: user5,
    review:
      "This brand truly speaks to my personality! The balance between bold and minimalistic styles is perfect. I’ve gotten so many compliments on my outfits. The quality is unmatched, and I’ll definitely be buying more! The durability of the fabric is fantastic, and the clothes look just as good after multiple washes. A must-have in any wardrobe!",
    products: [product3, product1],
  },
  {
    name: "Ethan",
    image: user6,
    review:
      "Hands down the best clothing brand I’ve discovered this year! The designs are stylish, the material feels premium, and their customer service is top-tier. I highly recommend checking them out! The fit is always perfect, and their styles are trendy yet timeless. Their attention to detail and customer satisfaction is impressive!",
    products: [product4, product2],
  },
];

const Testimonials = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="bg-primary mb-16">
        <div className="max-padd-container py-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-20 mb-16 rounded-2xl">
            <div className="flex items-start justify-between flex-col gap-10">
              <Title
                title1={"What Customers"}
                title2={"Say"}
                title1Styles={"pb-10"}
                paraStyles={"!block"}
              />
              <div className="flex flex-col gap-1 bg-white p-4 rounded-lg shadow-md">
                <div className="flex text-secondary gap-2 text-lg">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <div className="medium-14 font-semibold">
                  more than <b>+1000 reviews</b>
                </div>
              </div>
            </div>

            {/* Testimonials Swiper */}
            <Swiper
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              modules={[Autoplay, Pagination]}
              breakpoints={{
                640: { slidesPerView: 1, spaceBetween: 20 },
                768: { slidesPerView: 2, spaceBetween: 30 },
                1024: { slidesPerView: 3, spaceBetween: 40 },
              }}
              className="w-full h-auto py-5"
            >
              {testimonials.map((user, index) => (
                <SwiperSlide key={index} className="p-8">
                  <div className="flex flex-col gap-2 rounded-lg p-8 bg-white shadow-lg h-[450px] md:h-[500px] lg:h-[550px]">
                    <div className="flexBetween">
                      <div className="flexCenter gap-x-2">
                        <img
                          src={user.image}
                          alt="userImg"
                          height={50}
                          width={50}
                          className="rounded-full"
                        />
                        <h5 className="bold-14 text-lg font-semibold">{user.name}</h5>
                      </div>
                      <div className="bg-secondary text-white rounded-full flexCenter gap-x-2 p-1 px-3 text-sm font-semibold">
                        <FaCheck /> Verified
                      </div>
                    </div>
                    <hr className="h-[1px] w-full my-2" />
                    <div className="flex gap-x-1 text-secondary mt-3 mb-2 text-sm">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                    <p className="text-base leading-relaxed overflow-auto h-[250px]">{user.review}</p>
                    <div className="flex gap-x-2 mt-4">
                      {user.products.map((product, i) => (
                        <img
                          key={i}
                          src={product}
                          alt="prdctImg"
                          height={60}
                          width={60}
                          className="rounded aspect-square object-cover cursor-pointer"
                          onClick={() => navigate(`/collection`)}
                        />
                      ))}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Testimonials;
