import { Button, TextInput } from "@mantine/core";

const Subscribe = () => {
    return (
        <div className="m-12 rounded-lg bg-mine-shaft-900 flex items-center justify-around p-6">
            <div className="w-[40%]">
                <p className="text-4xl text-mine-shaft-200 font-bold text-center">
                    Never Wants to Miss Any <span className="text-bright-sun-400">Job News?</span>
                </p>
            </div>
            <div className="flex items-center space-x-4 justify-start bg-mine-shaft-800 w-[40%] h-full p-4 rounded-lg">
                <TextInput
                    variant="unstyled"
                    placeholder="your@email.com"
                    className="flex-1 font-semibold [&_input]:!text-2xl [&_input]:!text-mine-shaft-400"
                />
                <Button variant="filled" color="brightSun.4" size="lg" >Subscribe</Button>;
            </div>
        </div>
    )
}

export default Subscribe;