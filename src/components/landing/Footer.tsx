import { IconBrandInstagram, IconBrandTelegram, IconBrandYoutube, IconWebhook } from "@tabler/icons-react";

const Footer = () => {
    return (
        <div className="flex justify-between  w-11/12 m-auto pb-10">
            <div className="w-1/4 space-y-4">

                <div className="flex text-bright-sun-400 items-center  gap-1">
                    <div>
                        <IconWebhook className="h-8 w-8" stroke={2.25} />
                    </div>
                    <p className="font-semibold text-lg">JobHook</p>
                </div>

                <p className="text-mine-shaft-300 text-sm">
                    Job portal with user profiles, skill updates, certifications, work experience and admin job postings.
                </p>
                <div className="flex text-bright-sun-400 gap-2">
                    <div className="bg-mine-shaft-900 hover:bg-mine-shaft-800 p-2 rounded-full">
                        <IconBrandInstagram className="h-6 w-6" stroke={2.25} />
                    </div>
                    <div className="bg-mine-shaft-900 hover:bg-mine-shaft-800 p-2 rounded-full">
                        <IconBrandTelegram className="h-6 w-6" stroke={2.25} />
                    </div>
                    <div className="bg-mine-shaft-900 hover:bg-mine-shaft-800 p-2 rounded-full">
                        <IconBrandYoutube className="h-6 w-6" stroke={2.25} />
                    </div>
                </div>
            </div>

            <div className=" space-y-4">

                <div className=" text-bright-sun-400">
                    <p className="font-semibold text-lg">Product</p>
                </div>
                <div className="flex flex-col text-mine-shaft-300 text-sm  gap-1">
                    <p className="hover:text-bright-sun-400 hover:translate-x-2 transition-all duration-300">Find Job</p>
                    <p className="hover:text-bright-sun-400 hover:translate-x-2 transition-all duration-300">Find Company</p>
                    <p className="hover:text-bright-sun-400 hover:translate-x-2 transition-all duration-300">Find Employee</p>
                </div>
            </div>

            <div className=" space-y-4">

                <div className=" text-bright-sun-400">
                    <p className="font-semibold text-lg">Company</p>
                </div>
                <div className="flex flex-col text-mine-shaft-300 text-sm  gap-1">
                    <p className="hover:text-bright-sun-400 hover:translate-x-2 transition-all duration-300">About Us</p>
                    <p className="hover:text-bright-sun-400 hover:translate-x-2 transition-all duration-300">Contact Us</p>
                    <p className="hover:text-bright-sun-400 hover:translate-x-2 transition-all duration-300">Privacy Policy</p>
                    <p className="hover:text-bright-sun-400 hover:translate-x-2 transition-all duration-300">Terms & Conditions</p>
                </div>
            </div>

            <div className=" space-y-4">

                <div className=" text-bright-sun-400">
                    <p className="font-semibold text-lg">Support</p>
                </div>
                <div className="flex flex-col text-mine-shaft-300 text-sm  gap-1">
                    <p className="hover:text-bright-sun-400 hover:translate-x-2 transition-all duration-300">Help & Support</p>
                    <p className="hover:text-bright-sun-400 hover:translate-x-2 transition-all duration-300">Feedback</p>
                    <p className="hover:text-bright-sun-400 hover:translate-x-2 transition-all duration-300">FAQs</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;