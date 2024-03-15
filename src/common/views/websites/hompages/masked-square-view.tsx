import { clsx } from "@/common/utils/classes";
import Image from "next/image";


export default function MaskedSquareView() {
    const buttonProps = 'transition-all hover:font-bold '

    return (

        <div className=" bg-black w-[100vw] h-[100vh] grid gap-5 grid-cols-10">
            <div className=" absolute w-[100vw] h-[100vh]">
                <Image src="/images/mars-background.jpg" width={1920} height={1080} alt="planet" />
            </div>
            <div className=" col-start-7 relative col-span-2 h-full shadow-xl items-center border-x border-[#494949] bg-gradient-to-bl from-[#222222] to-[#181818]">
                <div className=" w-full top-0 left-0 absolute grid grid-rows-2 ">
                    <div className=" flex flex-col row-start-2 gap-3 text-9xl ">
                        <p className=" font-thin text-7xl">The</p>
                        <p className=" font-thin text-8xl ">Last</p>
                        <p className=" font-bold">STEP</p>
                    </div>
                </div>
                <div className=" grid grid-rows-3 gap-10">

                    <div className=" row-start-3 flex flex-col items-start px-2 gap-5 pt-16 font-thin">
                        <button className={clsx(" text-3xl ", buttonProps)}>Join the leap</button>
                        <div className=" w-full flex flex-col gap-5 items-end">
                            <button className={clsx(buttonProps)}>Mission</button>
                            <button className={clsx(buttonProps)}>Launches</button>
                            <button className={clsx(buttonProps)}>Careers</button>
                            <button className={clsx(buttonProps)}>Updates</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Photo by <a href="https://unsplash.com/@planetvolumes?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Planet Volumes</a> on <a href="https://unsplash.com/photos/a-red-planet-with-a-black-background-4IrVnSpwk48?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
// Photo by <a href="https://unsplash.com/@weirick?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jake Weirick</a> on <a href="https://unsplash.com/photos/the-night-sky-is-filled-with-stars-Q_RBVFFXR_g?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
