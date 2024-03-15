"use client";
import Clock from "@/common/components/website/giantClock/clock";


export default function GiantClockView() {
    return (
        <div className=" w-[100vw] h-[100vh] flex items-center justify-center overflow-hidden">
            <div className="absolute left-0 top-10 inset-0 overflow-hidden">
                <Clock />
            </div>
        </div>
    );
}