import React, {useState, useEffect } from "react";
import "./BackToTop.css";

function BackToTop() {
    const [isVisible, setIsVible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top:0,
            behavior: "smooth"
        });
    };

    const handleScroll = () => {
        if (window.pageYOffset >300) {
            setIsVible(true);
        } else {
            setIsVible(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <button
            className={`back-to-top-button ${isVisible ? "visible" : ""}`}
            onClick={scrollToTop}
            >
                
            </button>
    );

}

export default BackToTop;