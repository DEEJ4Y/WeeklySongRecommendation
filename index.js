const songs = [
  {
    name: 'Cute Without the "E" (Cut from the team)',
    band: "Taking Back Sunday",
    album: "Tell All Your Friends",
    appleMusic:
      "https://music.apple.com/us/album/cute-without-the-e-cut-from-the-team-remastered/1481301025?i=1481301234",
    spotify: "https://open.spotify.com/track/4lrEOsjmbKG6mf0buc7eny",
    primeMusic:
      "https://music.amazon.in/albums/B07586LYHQ?trackAsin=B075868P7W&ref=dm_sh_5f5c-bcca-dmcp-0d83-5f637&musicTerritory=IN&marketplaceId=A21TJRUUN4KGV",
    ytMusic: "https://music.youtube.com/watch?v=l_Pj32HujgQ&feature=share",
    ytEmbed: "https://www.youtube.com/embed/xnaFpQaGFCA",
  },
  {
    name: "On My Own",
    band: "The Used",
    album: "The Used",
    appleMusic:
      "https://music.apple.com/in/album/on-my-own/283074453?i=283074542",
    spotify: "https://open.spotify.com/track/3hccRLElirZOGOTHfCbg9p",
    primeMusic:
      "https://music.amazon.in/albums/B001B85QG8?trackAsin=B001B83MOQ&ref=dm_sh_287c-a9fa-9798-5476-4e0c4",
    ytMusic: "https://music.youtube.com/watch?v=jdPeR3jr6ek",
    ytEmbed: "https://www.youtube.com/embed/jdPeR3jr6ek",
  },
  // {
  //   name: "",
  //   band: "",
  //   album: "",
  //   appleMusic: "",
  //   spotify: "",
  //   primeMusic: "",
  //   ytMusic: "",
  //   ytEmbed: "",
  // },
];

const songUI = (song) => {
  return (
    '<div class="row song">' +
    '<div class="col-md-6 song-details">' +
    "<h1><strong>" +
    song.name +
    "</strong></h1>" +
    "<h3>" +
    song.band +
    "</h3>" +
    "<p>" +
    song.album +
    "</p>" +
    "<div>" +
    '<a href="' +
    song.appleMusic +
    '" target="_blank">' +
    '<img class="link-img" src="./images/apple-music.png" alt="apple-music-img">' +
    "</a>" +
    '<a href="' +
    song.spotify +
    '" target="_blank">' +
    '<img class="link-img" src="./images/spotify.png" alt="spotify-img">' +
    "</a>" +
    '<a href="' +
    song.primeMusic +
    '" target="_blank">' +
    '<img class="link-img" src="./images/prime-music.png" alt="prime-music-img">' +
    "</a>" +
    '<a href="' +
    song.ytMusic +
    '" target="_blank">' +
    '<img class="link-img" src="./images/youtube-music.png" alt="youtube-music-img">' +
    "</a>" +
    "</div>" +
    "</div>" +
    '<div class="col-md-6">' +
    '<div class="embed-responsive embed-responsive-1by1">' +
    '<iframe class="embed-responsive-item" src="' +
    song.ytEmbed +
    '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' +
    "</div>" +
    "</div>" +
    "</div>" +
    "<hr>"
  );
};

const showSongs = () => {
  songs.map((song) => {
    const ui = songUI(song);
    $(".song-container").prepend(ui);
  });
};

showSongs();
