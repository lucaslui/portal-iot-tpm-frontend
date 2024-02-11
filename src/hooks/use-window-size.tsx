'use client'

import React, { useEffect, useState } from 'react';

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize({ width: window?.innerWidth, height: window?.innerHeight, });
        };

        window.addEventListener('resize', handleWindowResize);

        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return windowSize;
}

export default useWindowSize;