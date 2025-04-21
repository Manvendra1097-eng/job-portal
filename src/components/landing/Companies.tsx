import Marquee from "react-fast-marquee";
import { companies } from "../../data/Data";

const Companies = () => {

    return (
        <div className="mt-20">
            <p className="text-4xl font-semibold text-mine-shaft-100 text-center mb-10">Trusted By <span className="text-bright-sun-400">1000+ Companies</span> </p>
            <Marquee pauseOnHover>
                {
                    companies.map((company, index) => (
                        <div key={index} className="mx-8 px-2 py-1 hover:bg-mine-shaft-900 rounded-xl cursor-pointer">
                            <img className="h-14" src={`/companies/${company}.png`} alt={company} />
                        </div>
                    ))
                }
            </Marquee>
        </div>
    )
}

export default Companies;