import React, { useCallback } from "react";
import TrackList from "./TrackList";

function Playlist(props) {
    const handleNameChange = useCallback((event) => {
        props.onNameChange(event.target.value);
    }, [props.onNameChange]);

    return (
        <div>
            <h2>Playlist</h2>
            <input onChange={handleNameChange} defaultValue={"New Playlist"} />
            <TrackList 
                tracks={props.playlistTracks} 
                isRemoval={true} 
                onRemove={props.onRemove} />
            <button className="PlaylistSave" onClick={props.onSave}>SAVE TO SPOTIFY</button>
        </div>
    );
}

export default Playlist;