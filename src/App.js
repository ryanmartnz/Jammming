import './App.css';
import React, { useCallback, useState } from 'react';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';
import Spotify from './util/authCode';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);
  
  const search = useCallback((term) => {
    Spotify.search(term).then(setSearchResults);
  }, []);

  const addTrack = useCallback((track) => {
    if(playlistTracks.some(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    setPlaylistTracks((prev) => [...prev, track]);
  }, [playlistTracks]);

  const removeTrack = useCallback((track) => {
    setPlaylistTracks((prevTracks) => prevTracks.filter(curTrack => curTrack.id !== track.id));
  }, []);

  const updatePlaylistName = useCallback((name) => {
    setPlaylistName(name);
  }, []);

  const savePlaylist = useCallback(() => {
    const trackUris = playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName('New Playlist');
      setPlaylistTracks([]);
    });
  }, [playlistName, playlistTracks]);

  return (
    <div className="App">
      <header>
        <h1>Ja<span>mmm</span>ing</h1>
      </header>
      <body>
        <SearchBar onSearch={search} />
        <div>
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <Playlist 
            playlistName={playlistName}
            playlistTracks={playlistTracks} 
            onNameChange={updatePlaylistName} 
            onRemove={removeTrack}
            onSave={savePlaylist}/>
        </div>
      </body>
    </div>
  );
}

export default App;
