import React, { createContext, useContext, useState, useEffect } from 'react';

const ProgressContext = createContext();

export const ProgressProvider = ({ children }) => {
    const [completedDays, setCompletedDays] = useState(() => {
        const saved = localStorage.getItem('completedDays');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('completedDays', JSON.stringify(completedDays));
    }, [completedDays]);

    const toggleComplete = (dayId) => {
        setCompletedDays(prev => {
            if (prev.includes(dayId)) {
                return prev.filter(id => id !== dayId);
            } else {
                return [...prev, dayId];
            }
        });
    };

    const isComplete = (dayId) => {
        return completedDays.includes(dayId);
    };

    return (
        <ProgressContext.Provider value={{ completedDays, toggleComplete, isComplete }}>
            {children}
        </ProgressContext.Provider>
    );
};

export const useProgress = () => useContext(ProgressContext);
