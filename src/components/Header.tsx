import { Avatar, Indicator } from "@mantine/core";
import { IconBell, IconSettings, IconWebhook } from "@tabler/icons-react";
import avatarImg from "../assets/avatar.png";
import NavLinks from "./NavLinks";

const Header = () => {
    return (
        <div className="w-full h-20 text-white flex justify-between px-6 items-center">
            <div className="flex gap-1 items-center text-bright-sun-400">
                <IconWebhook className="h-8 w-8" stroke={2.25} />
                <div className="text-3xl font-semibold">
                    JobHook </div>
            </div>
            <NavLinks />
            <div className="flex gap-3 items-center">
                <div className="flex gap-2 items-center">
                    <p>Marshel</p>
                    <Avatar src={avatarImg} alt="it's me" />
                </div>
                <div className="bg-mine-shaft-900 p-1 rounded-full">
                    <IconSettings stroke={1.5} />
                </div>
                <div className="bg-mine-shaft-900 p-1 rounded-full">
                    <Indicator offset={7} size={8} processing color="brightSun.4">
                        <IconBell stroke={1.5} />
                    </Indicator>
                </div>
            </div>
        </div >
    )
}

export default Header;