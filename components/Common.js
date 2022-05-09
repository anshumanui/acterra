import { useState, useEffect } from 'react';


export const useFormData = (initFormData) => {
    const [formData, setFormData] = useState(initFormData);

    const iCallback = () => {
        const matchedIndex = formData.findIndex(item => item.iName === event.target.name);
        const updatedFormData = [...formData];
        updatedFormData[matchedIndex].iValue = event.target.value;
        setFormData(updatedFormData);
    };

    return [formData, iCallback];
};


export const useSessionData = () => {
    const [sessionData, setSessionData] = useState(null);

    useEffect(() => {
        const savedSessionData = JSON.parse(sessionStorage.getItem('userSessionData'));
        setSessionData(savedSessionData);
    }, []);

    return sessionData;
}