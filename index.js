const songs = [
  {
    name: 'Cute Without the "E" (Cut from the team)',
    band: "Taking Back Sunday",
    album: "Tell All Your Friends",
    links: {
      appleMusic:
        "https://music.apple.com/us/album/cute-without-the-e-cut-from-the-team-remastered/1481301025?i=1481301234",
      spotify: "https://open.spotify.com/track/4lrEOsjmbKG6mf0buc7eny",
      primeMusic:
        "https://music.amazon.in/albums/B07586LYHQ?trackAsin=B075868P7W&ref=dm_sh_5f5c-bcca-dmcp-0d83-5f637&musicTerritory=IN&marketplaceId=A21TJRUUN4KGV",
      ytMusic: "https://music.youtube.com/watch?v=l_Pj32HujgQ&feature=share",
      ytEmbed: "https://www.youtube.com/embed/xnaFpQaGFCA",
    },
  },
  {
    name: "On My Own",
    band: "The Used",
    album: "The Used",
    links: {
      appleMusic:
        "https://music.apple.com/in/album/on-my-own/283074453?i=283074542",
      spotify: "https://open.spotify.com/track/3hccRLElirZOGOTHfCbg9p",
      primeMusic:
        "https://music.amazon.in/albums/B001B85QG8?trackAsin=B001B83MOQ&ref=dm_sh_287c-a9fa-9798-5476-4e0c4",
      ytMusic: "https://music.youtube.com/watch?v=jdPeR3jr6ek",
      ytEmbed: "https://www.youtube.com/embed/jdPeR3jr6ek",
    },
  },
  // {
  //   name: "",
  //   band: "",
  //   album: "",
  //   links: {
  //     appleMusic: "",
  //     spotify: "",
  //     primeMusic: "",
  //     ytMusic: "",
  //     ytEmbed: "",
  //   },
  // },

  // To Add:
  // 1. Ohio is for Lovers,
  // 2. Until the Day I die,
  // 3. Ocean Avenue,
  // 4. Dear Maria Count me in,
  // 5. Tell that Mick he just made my list of things to do today,
  // 6. False Pretense
  // 7. All we know
  // 8. Drowning Lessons
  // 9. The Mission
  // 10. Our Lawyer Made Us Change the name of this song so we wouldn't get sued
  // 11. Waiting
  // 12. Pressure
  // 13. You know what they do to guys like us in prison
];

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
