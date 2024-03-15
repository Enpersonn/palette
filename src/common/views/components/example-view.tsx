'use client'

import ShowCaseCard from "@/common/components/ShowCaseCard";
import Clock from "@/common/components/website/giantClock/clock";

export default function ComponentsExampleView() {
    return (
        <div className=" h-[100vh] w-[100vw] bg-[#101418]">
            <h1>Components Example View</h1>
            <p>
                This is a view for the Components Example Page.
            </p>
            <div className=" p-10 grid grid-cols-3 gap-5">
                <ShowCaseCard>
                    <Clock width={400} height={400} />
                </ShowCaseCard>
                <ShowCaseCard>
                    <Clock width={400} height={400} />
                </ShowCaseCard>

            </div>
        </div>
    );
}