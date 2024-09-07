import Slider from "react-slick";
import { TestimonialsData } from "../mockData/data";

const Testimional = () => {
    const setting = {
        dots: true,
        arrow: false,
        autoplay: true,
        // autoplaySpeed: 500,
        cssEase: "linear",
        speed: 500,
        pauseOnHover: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
    }

    return (
        <div className="mx-20">
            <div>
                <h2 className="text-4xl font-bold" >What Are The Costumer <br /> Saying About Us</h2>
            </div>
            <div className="overflow-hidden my-10">
                <Slider {...setting}>
                    {TestimonialsData.map((data) =>(
                        <div key={data.id}>
                            <div className="px-4 my-6">
                                <div className="  bg-purple-100 rounded-md p-4 shadow-lg shadow-slate-600 cursor-pointer">
                                    <div className="flex items-center gap-4 px-4 py-2">
                                        <img src={data.img} alt="" className="w-16 rounded-full" />
                                        <h3 className="text-xl font-bold">{data.name}</h3>
                                    </div>
                                    <div className="px-4 pb-4">
                                        <p className="text-gray-600 pb-3">{data.text}</p>
                                        <p>⭐⭐⭐⭐⭐</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Testimional