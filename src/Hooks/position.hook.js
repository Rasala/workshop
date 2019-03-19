import { useEffect, useState } from 'react';

export default function usePosition(watch = []) {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [position, setPosition] = useState(null);

    useEffect(() => {
        setLoading(true);
        navigator.geolocation.getCurrentPosition((position) => {
            setPosition(position.coords);
            setLoading(false);
        }, (error) => setError(error));
    }, watch);

    return [error, loading, position];
}
