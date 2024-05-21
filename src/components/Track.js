import React, { useCallback } from "react";

function Track(props) {
    const addTrack = useCallback((event) => {
        props.onAdd(props.track);
    }, [props.onAdd, props.track]);

    const removeTrack = useCallback((event) => {
        props.onRemove(props.track);
    }, [props.onRemove, props.track]);

    const renderAction = () => {
        if(props.isRemoval) {
            return <button className="Track-action" onClick={removeTrack}>-</button>;
        } else {
            return <button className="Track-action" onClick={addTrack}>+</button>;
        }
    };

    return (
        <div className="Track">
            <div className="TrackInformation">
                <h3>{props.track.name}</h3>
                <p>{props.track.artist} | {props.track.album}</p>
            </div>
            {renderAction()}
        </div>
    );
}

export default Track;