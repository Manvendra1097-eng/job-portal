import { Link, useLocation } from "react-router-dom";

const NavLinks = () => {

    const links = [{ name: "Find Jobs", url: "/find-jobs" }, { name: "Find Talents", url: "/find-talents" }, { name: "Upload Job", url: "/upload-jobs" }, { name: "About Us", url: "/about-us" }]

    const location = useLocation();

    return (
        <div className="flex gap-5 h-full items-center text-mine-shaft-300">
            {
                links.map((link) => (
                    <div className={`flex items-center h-full border-t-2
                    ${location.pathname === link.url ? ' border-t-bright-sun-400 text-bright-sun-400' : "border-t-mine-shaft-950"} 
                    hover:text-mine-shaft-200 transition-all
                    `}>
                        <Link key={link.name} to={link.url}
                        > {link.name}</Link>
                    </div>
                ))
            }
        </div>
    )
}

export default NavLinks;