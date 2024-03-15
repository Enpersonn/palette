'use client'

import Clock from "@/common/components/website/giantClock/clock";

export default function ComponentsExampleView() {
    return (
        <>
            <h1>Components Example View</h1>
            <p>
                This is a view for the Components Example Page.
            </p>
            <div className=" grid col-span-3">
                <div>
                    <h2>Example Component 1</h2>
                    <Clock width={450} height={450} />
                </div>

            </div>
        </>
    );
}