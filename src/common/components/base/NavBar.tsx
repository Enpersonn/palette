'use client'
import Iconify from "../iconify";
import IconLogo from "../icons/IconLogo";


const NavBar = () => {

    return (
        <div className=" absolute top-5 left-5">
            <div className=" bg-slate-400/20 rounded-full p-1 py-5 flex flex-col gap-3">
                <Iconify icon="ic:baseline-home" className=" h-6 w-6" />
                <Iconify icon="ic:baseline-search" className=" h-6 w-6" />
            </div>
        </div>
    )
}

export default NavBar;