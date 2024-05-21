import React, { useCallback } from "react";
import TrackList from "../TrackList/TrackList";
import styles from "./Playlist.module.css";

function Playlist(props) {
    const handleNameChange = useCallback((event) => {
        props.onNameChange(event.target.value);
    }, [props.onNameChange]);

    return (
        <div className={styles.Playlist}>
            <input onChange={handleNameChange} defaultValue={"New Playlist"} />
            <TrackList 
                tracks={props.playlistTracks} 
                isRemoval={true} 
                onRemove={props.onRemove} />
            <button className={styles.PlaylistSave} onClick={props.onSave}>SAVE TO SPOTIFY</button>
        </div>
    );
}

export default Playlist;