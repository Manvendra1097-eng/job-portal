import { Carousel } from "@mantine/carousel";
import { jobCategory } from "../../data/Data";

const JobCategory = () => {
    return (
        <div className="mt-20 text-center space-y-2 pb-2">
            <p className="text-4xl font-semibold text-mine-shaft-100">Browse <span className="text-bright-sun-400">Job</span> Category </p>
            <p className="text-lg text-mine-shaft-300 w-1/2 mx-auto mb-10">Explore diverse job opportunities tailored to your skills. Start your career journey today!</p>


            <Carousel slideSize="22%" slideGap="md" loop className="focus-visible:[&_button]:!outline-none [&_button]:!bg-bright-sun-400 
            [&_button]:!border-none [&_button]:!opacity-0 hover:[&_button]:!opacity-75 
            ">
                {
                    jobCategory.map((category) => (
                        <Carousel.Slide>

                            <div key={category.name} className="w-64 my-5 flex flex-col items-center  border border-bright-sun-400 p-5 rounded-xl text-mine-shaft-200
                        hover:shadow-[0_0_5px_2px_black] hover:cursor-pointer transition duration-300 ease-in-out !shadow-bright-sun-300
                        gap-2
                        ">
                                <div className=" h-12 w-12 bg-bright-sun-400 rounded-full flex items-center justify-center">
                                    <img className="h-8 w-8" src={`/category/${category.name}.png`} alt={category.name} />
                                </div>
                                <h3 className="font-semibold text-xl">{category.name}</h3>
                                <p className="text-mine-shaft-300 text-sm">{category.desc}</p>
                                <p className="text-bright-sun-300 text-lg">{category.jobs}+ new jobs posted</p>

                            </div>
                        </Carousel.Slide>
                    ))
                }
            </Carousel>






        </div>
    )
}

export default JobCategory;