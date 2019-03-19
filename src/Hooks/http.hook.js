import { useEffect, useState } from 'react';

export default function useHttp(url, watch = []) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (url) {
            setLoading(true);
            fetch(url)
                .then(res => res.json())
                .then(res => {
                    setData(res);
                    setLoading(false);
                })
        }
    }, [url, ...watch]);

    return [loading, data];
}
