import { Rating } from "@mantine/core";
import avatar from "../../assets/avatar.png"
import { testimonials } from "../../data/Data";

const Testimonial = () => {
    return (
        <div className="mt-20 text-center space-y-2 pb-2">

            <p className="text-4xl font-semibold text-mine-shaft-100">What<span className="text-bright-sun-400">User</span> say about us?  </p>

            <div className="p-8 flex gap-4">

                {
                    testimonials.map(testimonial => (
                        <div className="w-1/4 flex flex-col gap-2 p-4 text-mine-shaft-200 border border-bright-sun-400 rounded-xl">
                            <div className="flex gap-2">
                                <img className="w-16 h-16 rounded-full" src={avatar} alt="" />
                                <div>
                                    <p className="font-semibold text-lg">{testimonial.name}</p>
                                    <Rating defaultValue={testimonial.rating} />
                                </div>
                            </div>
                            <p className="text-mine-shaft-300 text-sm text-justify">
                                {testimonial.testimonial}</p>
                        </div>

                    ))
                }

            </div>

        </div>
    )
}

export default Testimonial;