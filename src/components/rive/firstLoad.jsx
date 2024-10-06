"use client";

import { useRive } from "@rive-app/react-canvas";
import { useEffect, useState } from "react";

export const RiveDemo = () => {
    const [state, setState] = useState("State Machine 1")
    const { rive, RiveComponent } = useRive({
        src: "map_loadingscreen.riv",
        stateMachines: "State Machine 1",
        autoplay: true,
    });

    useEffect(() => {
        console.log(rive?.stateMachineNames)
    }, [rive?.stateMachineNames])

    console.log(rive?.stateMachineNames)


    return <RiveComponent className="w-screen h-screen z-40" />;
};

export default function RiveEXE() {
    return (
        <div className="h-screen w-full z-40 absolute top-0 flex justify-center items-center">
            <RiveDemo />
        </div>
    );
}