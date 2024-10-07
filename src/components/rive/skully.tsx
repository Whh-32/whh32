"use client";

import { useRive } from "@rive-app/react-canvas";
// import riveWasmUrl from "@rive-app/canvas/rive.wasm";

// Set the WASM URL
// RuntimeLoader.setWasmUrl(riveWasmUrl);

export const RiveDemo = () => {
    const { RiveComponent } = useRive({
        src: "skully.riv",
        stateMachines: "State Machine [Skully]",
        autoplay: true,
    });

    return <RiveComponent className="h-full w-full" />;
};

export default function Skully() {
    return (
        <div className="h-[400px] w-[400px] z-10 md:absolute right-0 mt-20 md:mt-auto">
            <RiveDemo />
        </div>
    );
}
