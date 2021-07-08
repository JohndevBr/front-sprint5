import { useState } from 'react';

function useLoading<S>(initialState: S | (() => S)): (() => boolean)[] {

    const [liveRequests, setLiveRequests] = useState(0);

    function addRequest():boolean {
        setLiveRequests(liveRequests => {
            return liveRequests + 1;
        });
        return liveRequests > 0;
    }

    function removeRequest():boolean {
        setLiveRequests(liveRequests => {
            return liveRequests - 1;
        });
        return liveRequests > 0;
    }

    function isLoading():boolean {
        return liveRequests > 0;
    }

    return [addRequest, removeRequest, isLoading];
}

export default useLoading;