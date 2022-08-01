function changeBackground(aesthetic) {
  if (aesthetic === 'city') {
    document.body.style.backgroundImage = "url(background/city.jpg";
  }
  else if (aesthetic === 'cafe') {
    document.body.style.backgroundImage = "url(background/cafe.jpg)";
  }
  else if (aesthetic === 'beach') {
    document.body.style.backgroundImage = "url(background/beach.jpg)";
  }
  else if (aesthetic === 'library') {
    document.body.style.backgroundImage = "url(background/library.jpg)";
  }
  else if (aesthetic === 'forest') {
    document.body.style.backgroundImage = "url(background/forest.jpg)";
  };
}

function changePlaylist(aesthetic){
  const playlistWidget = document.getElementById("spotifyPlaylist");
  console.log(playlistWidget);
  if (aesthetic === 'city') {
    playlistWidget.src = "https://open.spotify.com/embed-legacy/playlist/2EUaq48Csc6zyqj1SIKM5r?utm_source=generator";
  }
  else if (aesthetic === 'cafe') {
    playlistWidget.src = "https://open.spotify.com/embed-legacy/playlist/7K6fVGUcL6ChCsRMJP4oOC?utm_source=generator";
  }
  else if (aesthetic === 'beach') {
    console.log("yes");
    playlistWidget.src = "https://open.spotify.com/embed-legacy/playlist/1jmwDOny8FTPIONpherFav?utm_source=generator";
  }
  else if (aesthetic === 'library') {
    playlistWidget.src = "https://open.spotify.com/embed-legacy/playlist/6M9dSsweuTY7mftpQfMmPo?utm_source=generator";
  }
  else if (aesthetic === 'forest') {
    playlistWidget.src = "https://open.spotify.com/embed-legacy/playlist/69WnTHKnVPSPcyhOowI3Ag";
  };
}