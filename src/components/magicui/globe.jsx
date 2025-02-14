"use client";

import createGlobe from "cobe";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const GLOBE_CONFIG = {
    width: 800,
    height: 800,
    onRender: () => { },
    devicePixelRatio: 1.5,
    phi: 0,
    theta: 0.3,
    dark: 0,
    diffuse: 1,
    mapSamples: 2000,
    mapBrightness: 3.5,
    baseColor: [1, 1, 1],
    markerColor: [251 / 255, 100 / 255, 21 / 255],
    glowColor: [1, 1, 1],
    scale: 1,
    offset: [0, 0],
    markers: [
        { location: [14.5995, 120.9842], size: 0.03 },
        { location: [19.076, 72.8777], size: 0.1 },
        { location: [23.8103, 90.4125], size: 0.05 },
        { location: [30.0444, 31.2357], size: 0.07 },
        { location: [39.9042, 116.4074], size: 0.08 },
        { location: [-23.5505, -46.6333], size: 0.1 },
        { location: [19.4326, -99.1332], size: 0.1 },
        { location: [40.7128, -74.006], size: 0.1 },
        { location: [34.6937, 135.5022], size: 0.05 },
        { location: [41.0082, 28.9784], size: 0.06 },
    ],
};

export function Globe({ className, config = GLOBE_CONFIG }) {
    const canvasRef = useRef(null);
    const pointerInteracting = useRef(null);
    const pointerInteractionMovement = useRef(0);
    const [rotation, setRotation] = useState(0);
    const [canvasSize, setCanvasSize] = useState(800);
    let phi = 0;

    const updatePointerInteraction = (value) => {
        pointerInteracting.current = value;
        if (canvasRef.current) {
            canvasRef.current.style.cursor = value ? "grabbing" : "grab";
        }
    };

    const updateMovement = (clientX) => {
        if (pointerInteracting.current !== null) {
            const delta = clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            setRotation(delta / 200);
        }
    };

    const onRender = useCallback(
        (state) => {
            phi += pointerInteracting.current ? 0 : 0.001;
            state.phi = phi + rotation;
            state.width = canvasSize;
            state.height = canvasSize;
        },
        [rotation, canvasSize]
    );

    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                setCanvasSize(canvasRef.current.offsetWidth * 1.5);
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        const dpr = Math.min(window.devicePixelRatio, 1.5);
        const globe = createGlobe(canvasRef.current, {
            ...config,
            width: canvasSize * dpr,
            height: canvasSize * dpr,
            onRender,
            devicePixelRatio: dpr,
        });

        setTimeout(() => {
            if (canvasRef.current) {
                canvasRef.current.style.opacity = "1";
            }
        }, 500);

        return () => {
            globe.destroy();
            window.removeEventListener("resize", handleResize);
        };
    }, [canvasSize]);

    return (
        <div className={cn("relative", className)}>
            <canvas
                className={cn("")}
                ref={canvasRef}
                onPointerDown={(e) =>
                    updatePointerInteraction(e.clientX - pointerInteractionMovement.current)
                }
                onPointerUp={() => updatePointerInteraction(null)}
                onPointerOut={() => updatePointerInteraction(null)}
                onMouseMove={(e) => updateMovement(e.clientX)}
                onTouchMove={(e) =>
                    e.touches[0] && updateMovement(e.touches[0].clientX)
                }
            />
        </div>
    );
}
