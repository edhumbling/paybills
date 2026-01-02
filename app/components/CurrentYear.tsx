'use client';

import { useEffect, useState } from 'react';

const CurrentYear = () => {
    const [year, setYear] = useState<number | null>(null);

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    if (!year) return null; // Or a fallback/skeleton if needed to prevent layout shift

    return <>{year}</>;
};

export default CurrentYear;
