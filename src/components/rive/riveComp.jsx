"use client";

import { useRive } from "@rive-app/react-canvas";
// import riveWasmUrl from "@rive-app/canvas/rive.wasm";

// Set the WASM URL
// RuntimeLoader.setWasmUrl(riveWasmUrl);

export const RiveDemo = () => {
    const {rive ,RiveComponent } = useRive({
        src: "skully.riv",
        stateMachines: "State Machine [Skully]",
        autoplay: true,
    });


    return <RiveComponent />;
};

export default function RiveEXE() {
    return (
        <div className="h-[400px] w-[400px] z-10">
            <RiveDemo />
        </div>
    );
}
