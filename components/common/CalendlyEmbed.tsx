"use client";
import React, { useEffect } from "react";

interface CalendlyEmbedProps {
    url: string;
    title?: string;
}

const CalendlyEmbed: React.FC<CalendlyEmbedProps> = ({ url }) => {
    useEffect(() => {
        const link = document.createElement("link");
        link.href = "https://assets.calendly.com/assets/external/widget.css";
        link.rel = "stylesheet";
        document.head.appendChild(link);


        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);
        
        return () => {
            document.head.removeChild(link);
            document.body.removeChild(script);
        };
    }, []);

    return (
                <div
                    className="calendly-inline-widget rounded-lg"
                    data-url={url}
                    style={{ minWidth: "320px", height: "700px" }}
                />
    );
};

export default CalendlyEmbed;
