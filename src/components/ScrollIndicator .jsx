import React, { useState, useEffect } from 'react';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import { IconButton } from '@mui/material';
import { CircularProgress } from '@mui/joy';

const ScrollIndicator = () => {
    const [scrollPercentage, setScrollPercentage] = useState(0);
    const [showScrollIndicator, setShowScrollIndicator] = useState(false); // Add state to control visibility

    useEffect(() => {
        const updateScrollPercentage = () => {
            const scrolled = window.scrollY;
            const windowHeight = window.innerHeight;
            const fullHeight = document.documentElement.scrollHeight;

            const percentage = (scrolled / (fullHeight - windowHeight)) * 100;
            setScrollPercentage(percentage);

            // Update the showScrollIndicator state based on scroll position
            setShowScrollIndicator(scrolled > 300);
        };

        window.addEventListener('scroll', updateScrollPercentage);
        return () => {
            window.removeEventListener('scroll', updateScrollPercentage);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        // Render the component only if showScrollIndicator is true
        <>
        {showScrollIndicator && (
            <div className={`fixed bottom-10 right-10 grid place-content-center z-[1000] rounded-full ${showScrollIndicator ? 'animate-fade-in' : 'opacity-0'}`}>
                <IconButton onClick={scrollToTop}>
                    <CircularProgress determinate value={scrollPercentage.toFixed(2)} color="warning" size="lg" variant="plain" thickness={1}>
                        <KeyboardArrowUpRoundedIcon color="warning" />
                    </CircularProgress>
                </IconButton>
            </div>
        )}
        </>
    );
};

export default ScrollIndicator;
