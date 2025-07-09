// components/ClientSlider.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const clients = [
  {
    name: "Youngone Corporation",
    image: "https://lawvalley.com.bd/wp-content/uploads/2025/03/youngone_corporation_logo.jpeg",
  },
  {
    name: "Dipon Gulf General Contracting LLC (UAE)",
    image: "https://lawvalley.com.bd/wp-content/uploads/2025/03/logo.png",
  },
  {
    name: "Care Bangladesh Limited",
    image: "https://lawvalley.com.bd/wp-content/uploads/2025/03/images.png",
  },
  {
    name: "Reckitt Benckiser",
    image: "https://lawvalley.com.bd/wp-content/uploads/2025/03/Untitled-design.png",
  },
  {
    name: "Rancon Motors Ltd",
    image: "https://lawvalley.com.bd/wp-content/uploads/2025/03/images.jpg",
  },
  {
    name: "United Group",
    image: "https://lawvalley.com.bd/wp-content/uploads/2025/03/Untitled-design-34.jpg",
  },
  {
    name: "Beximco Group",
    image: "https://lawvalley.com.bd/wp-content/uploads/2025/03/images-1.png",
  },
];

const ClientSlider = () => {
  return (
    <div id="clients" className="text-center mb-16 animate-fade-in">
      <h3 className="text-2xl font-bold text-primary mb-8">Our Clients</h3>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={2}
        spaceBetween={20}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
        loop={true}
        className="w-full max-w-5xl mx-auto"
      >
        {clients.map((client, index) => (
          <SwiperSlide key={index}>
            <div className="text-center opacity-80 hover:opacity-100 transition duration-300">
              <img
                src={client.image}
                alt={client.name}
                className="w-20 h-20 object-contain mx-auto mb-2 rounded-full"
              />
              <p className="text-sm font-medium text-primary">{client.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ClientSlider;
