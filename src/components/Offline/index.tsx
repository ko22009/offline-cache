import React, {useEffect, useState} from "react";
import Requester from "./Requester";

type Props = {
    total: number
}

const Offline: React.FC<Props> = ({total}) => {
    const [offline, setOffline] = useState(false);
    useEffect(() => {
        offline && alert('we download all pages');
    }, [offline]);
    return <>
        <button disabled={offline} onClick={() => setOffline(true)}>offline</button>
        {offline && Array.from({length: total}, (_, i) => i + 1).map(page => <Requester key={page} page={page}/>)}
    </>
}

export default Offline