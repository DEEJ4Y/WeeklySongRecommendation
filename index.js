const songUI = (song) => {
  if (song.name !== "") {
    return (
      '<div class="row song">' +
      '<div class="col-md-6 song-details">' +
      "<h1><strong>" +
      song.name +
      "</strong></h1>" +
      "<h3>" +
      song.band +
      "</h3>" +
      '<p class="album">' +
      song.album +
      "</p>" +
      "<div>" +
      '<a href="' +
      song.links.appleMusic +
      '" target="_blank">' +
      (song.links.appleMusic
        ? '<img class="link-img" src="./images/apple-music.png" alt="apple-music-img">'
        : "") +
      "</a>" +
      '<a href="' +
      song.links.spotify +
      '" target="_blank">' +
      (song.links.spotify
        ? '<img class="link-img" src="./images/spotify.png" alt="spotify-img">'
        : "") +
      "</a>" +
      '<a href="' +
      song.links.primeMusic +
      '" target="_blank">' +
      (song.links.primeMusic
        ? '<img class="link-img" src="./images/prime-music.png" alt="prime-music-img">'
        : "") +
      "</a>" +
      '<a href="' +
      song.links.ytMusic +
      '" target="_blank">' +
      (song.links.ytMusic
        ? '<img class="link-img" src="./images/youtube-music.png" alt="youtube-music-img">'
        : "") +
      "</a>" +
      "</div>" +
      "</div>" +
      '<div class="col-md-6">' +
      '<div class="embed-responsive embed-responsive-1by1">' +
      '<iframe class="embed-responsive-item" src="' +
      song.links.ytEmbed +
      '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' +
      "</div>" +
      "</div>" +
      "</div>" +
      "<hr>"
    );
  } else {
    return "";
  }
};

// Display all songs
const showSongs = () => {
  $(".song-container").html("");

  songs.map((song, index) => {
    const uiElement = songUI(song);
    $(".song-container").prepend(uiElement);
    if (songs.length === index + 1) {
      $(".album").hide();
    }
  });
};

// Display one song: Last song in the JSO
const showSong = () => {
  const uiElement = songUI(songs[songs.length - 1]);
  $(".song-container").prepend(uiElement);
};

// Event handler for toggling the visibility of the respective song's album name
const toggleAlbumView = (value) => {
  if (value === "off" || value === true) {
    $(".album").show();
    $("#showAlbumToggler").attr("value", "on").prop("checked", true);
    localStorage.setItem("isAlbumRequired", true);
  } else if (value === "on" || value === false) {
    $(".album").hide();
    $("#showAlbumToggler").attr("value", "off").prop("checked", false);
    localStorage.setItem("isAlbumRequired", false);
  }
};

// Get the album display preference
const setAlbumView = () => {
  let albumPreference = localStorage.getItem("isAlbumRequired");
  console.log("Album preference: " + albumPreference);
  if (albumPreference === "null" || albumPreference === "false") {
    toggleAlbumView(false);
  } else if (albumPreference === "true") {
    toggleAlbumView(true);
  }
};

// Getting the current year for the copyright text
const year = new Date().getFullYear();
$("#year").html(year);

// Display all the songs from the songs object
showSong();

// Show/Hide albums
setAlbumView();
