"use client";
import { useEffect } from "react";

export default function BackgroundMusic() {
    useEffect(() => {
    const audio = new Audio("/bg-music.mp3");
    audio.loop = true;

    
    audio.play().catch(() => {
        const playAudio = () => {
        audio.play();
        document.removeEventListener("click", playAudio);
        };
        document.addEventListener("click", playAudio);
    });
    }, []);

    return null; 
}

