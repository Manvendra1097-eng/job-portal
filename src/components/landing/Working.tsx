import girlImg from "../../assets/Girl.png"
import { work } from "../../data/Data";

const Working = () => {
    return (
        <div className="mt-20 text-center space-y-2">
            <p className="text-4xl font-semibold text-mine-shaft-100">How it <span className="text-bright-sun-400">Works</span>  </p>
            <p className="text-lg text-mine-shaft-300 w-1/2 mx-auto mb-10">Effortlessly navigate through the process and land your dream job.</p>


            <div className="flex justify-around items-center">
                <div className="w-[30rem] relative">
                    <img src={girlImg} alt="Girl" />

                    <div className="w-40 p-2 rounded-xl  flex flex-col items-center text-mine-shaft-200
                     border border-bright-sun-300 absolute top-16 -right-10 backdrop-blur-lg">
                        <img className="h-16 w-16 rounded-full" src="./working/avatar1.png" alt="" />
                        <p className="font-semibold text-sm">Complete your profile</p>
                        <p className="text-mine-shaft-300 text-xs">70% completed</p>
                    </div>

                </div>
                <div className="flex flex-col gap-5">


                    {
                        work.map(w => (
                            <div key={w.name} className="flex items-center gap-2">
                                <div className="bg-bright-sun-300 rounded-full p-2.5">
                                    <img className="h-12 w-12" src={`./working/${w.name}.png`} alt={w.name} />
                                </div>
                                <div className="text-justify text-mine-shaft-200">
                                    <h3 className="text-xl font-semibold">{w.name}</h3>
                                    <p className="text-mine-shaft-300">{w.desc}</p>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>

        </div>
    )
}

export default Working;