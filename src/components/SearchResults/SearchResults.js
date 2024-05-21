import React from "react";
import TrackList from "../TrackList/TrackList";
import styles from "./SearchResults.module.css";

function SearchResults(props) {
    return (
        <div className={styles.SearchResults}>
            <h2>Results</h2>
            <TrackList tracks={props.searchResults} onAdd={props.onAdd}/>
        </div>
    );
};

export default SearchResults;