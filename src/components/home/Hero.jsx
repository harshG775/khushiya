// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Hero() {
    const imageUrl =[
        "./ban1.png",
        "./beauty.jpg",
        "./civil.jpg",
    ]
	return (
		<header className="mx-auto max-w-7xl">
			<Swiper
				spaceBetween={0}
				centeredSlides={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: true,
				}}
				pagination={{
					clickable: true,
				}}
                loop= {true}
				navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
				className="mySwiper">
                {imageUrl.map((url,i)=>(
                    <SwiperSlide key={i}>
                        <img src={url} alt="" />
                    </SwiperSlide>
                ))}
			</Swiper>
		</header>
	);
}
