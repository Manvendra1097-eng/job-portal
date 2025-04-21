import { Avatar, TextInput } from "@mantine/core";
import boyImg from "../../assets/Boy.png"
import { IconSearch } from "@tabler/icons-react";
import avatar1 from "../../assets/avatar-1.png";
import avatar2 from "../../assets/avatar-2.png";
import avatar3 from "../../assets/avatar-3.png";
import googleLogo from "../../assets/Google.png";

const avatarBorder = { border: '2px solid #2d2d2d' }

const DreaMJob = () => {

    return (
        <div className="flex items-center px-20">
            {/* left */}
            <div className="flex flex-col w-[45%] gap-3">
                <div className="text-6xl font-bold text-mine-shaft-100 leading-tight">Find your <span className="text-bright-sun-400">dream job</span> with us</div>
                <div className="text-lg text-mine-shaft-200">Good life begins with a good company. Start explore thousands of jobs in one place.</div>
                <div className="flex gap-3 mt-5">
                    <TextInput
                        className="text-mine-shaft-200 bg-mine-shaft-900 rounded-lg py-1 px-2 [&_input]:!text-mine-shaft-100"
                        label="Job Title"
                        placeholder="Software engineer"
                        variant="unstyled"
                    />
                    <TextInput
                        className="text-mine-shaft-200 bg-mine-shaft-900 rounded-lg py-1 px-2 [&_input]:!text-mine-shaft-100"
                        label="Job Type"
                        placeholder="Full time"
                        variant="unstyled"
                    />
                    <div className="h-full w-16 flex items-center justify-center bg-bright-sun-400 hover:bg-bright-sun-500 p-1 rounded-lg cursor-pointer">
                        <IconSearch className="h-full w-full text-mine-shaft-600" />
                    </div>
                </div>
            </div>
            {/* right */}
            <div className="w-[55%] flex items-center justify-center relative">
                <div>
                    <img className="w-[30rem]" src={boyImg} alt="boy in background" />
                </div>
                <div className="border-bright-sun-400 border p-2 rounded-lg absolute top-1/2 right-20 backdrop-blur-md space-y-1">
                    <p className="text-mine-shaft-100 text-sm text-center">10K+ got job</p>
                    <Avatar.Group>
                        <Avatar style={avatarBorder} src={avatar1} />
                        <Avatar style={avatarBorder} src={avatar2} />
                        <Avatar style={avatarBorder} src={avatar3} />
                        <Avatar style={avatarBorder} bg={"mineShaft.9"} color="mineShaft.1"
                        >+9K</Avatar>
                    </Avatar.Group>
                </div>

                <div className="border-bright-sun-400 border p-2 rounded-lg absolute top-1/2 -translate-y-full left-24 backdrop-blur-md space-y-1">

                    <div className="space-y-2">
                        <div className="flex gap-2">
                            <div className="w-8 h-8 bg-mine-shaft-900 p-1 rounded-md">
                                <img src={googleLogo} alt="google logo" />
                            </div>
                            <div >
                                <p className="text-sm text-mine-shaft-100">Software Engineer</p>
                                <p className="text-xs text-mine-shaft-200">New York</p>
                            </div>
                        </div>

                        <div className="text-xs text-mine-shaft-100 flex justify-between">
                            <span>1 day ago</span>
                            <span>120 Applicants</span>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default DreaMJob;