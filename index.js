const songs = [
  {
    name: 'Cute Without the "E" (Cut from the team)',
    band: "Taking Back Sunday",
    album: "Tell All Your Friends",
    links: {
      appleMusic:
        "https://music.apple.com/in/album/cute-without-the-e-cut-from-the-team-remastered/1481301025?i=1481301234",
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
  {
    name: "You Know What They Do to Guys Like Us in Prison",
    band: "My Chemical Romance",
    album: "Three Cheers For Sweet Revenge",
    links: {
      appleMusic:
        "https://music.apple.com/in/album/you-know-what-they-do-to-guys-like-us-in-prison/1156311431?i=1156311436",
      spotify: "https://open.spotify.com/track/5bTuwAgYUD5MABOIPH8ZMt",
      primeMusic:
        "https://music.amazon.in/albums/B0011Z5IIC?trackAsin=B0011Z3CPS&ref=dm_sh_06cb-8bf0-1409-3cee-7fcd1",
      ytMusic: "https://music.youtube.com/watch?v=ShQdOf2zAzc",
      ytEmbed: "https://www.youtube.com/embed/ShQdOf2zAzc",
    },
  },
  {
    name: "Pressure",
    band: "Paramore",
    album: "All We Know Is Falling",
    links: {
      appleMusic:
        "https://music.apple.com/in/album/pressure/606661046?i=606661205",
      spotify: "https://open.spotify.com/track/7mG2RbhyzGsjpQOz568d39",
      primeMusic:
        "https://music.amazon.in/albums/B00122S4KS?trackAsin=B00122Q2R0&ref=dm_sh_d3d4-836f-b75d-6bdd-85ea4",
      ytMusic: "https://music.youtube.com/watch?v=y-MaaxgdUT4",
      ytEmbed: "https://www.youtube.com/embed/y-MaaxgdUT4",
    },
  },
  {
    name:
      "Our Lawyer Made Us Change The Name Of This Song So We Wouldn't Get Sued",
    band: "Fall Out Boy",
    album: "From Under the Cork Tree",
    links: {
      appleMusic:
        "https://music.apple.com/in/album/our-lawyer-made-us-change-name-this-song-so-we-wouldnt/1443795428?i=1443795594",
      spotify: "https://open.spotify.com/track/73A0DxzMGDhVGsvHQSaaBq",
      primeMusic:
        "https://music.amazon.in/albums/B073LJJQ9P?trackAsin=B073M7CKVG&ref=dm_sh_43a7-3bf1-3da9-3a46-fb799",
      ytMusic: "https://music.youtube.com/watch?v=3uOGQhGd0M8",
      ytEmbed: "https://www.youtube.com/embed/3uOGQhGd0M8",
    },
  },
  {
    name: "The Mission",
    band: "Thirty Seconds To Mars",
    album: "30 Seconds To Mars",
    links: {
      appleMusic:
        "https://music.apple.com/in/album/the-mission/1440839028?i=1440839044",
      spotify: "https://open.spotify.com/track/1kJprj4EaWuNvbChnW75e2",
      primeMusic:
        "https://music.amazon.in/albums/B000TEMS3O?trackAsin=B000TDYV9O&ref=dm_sh_667a-2855-aa55-7f9b-ef3b3",
      ytMusic: "https://music.youtube.com/watch?v=ck5ajshN2sU",
      ytEmbed: "https://www.youtube.com/embed/ck5ajshN2sU",
    },
  },
  {
    name: "Drowning Lessons",
    band: "My Chemical Romance",
    album: "I Brought You My Bullets, You Brought Me Your Love",
    links: {
      appleMusic:
        "https://music.apple.com/in/album/drowning-lessons/1157609234?i=1157610005",
      spotify: "https://open.spotify.com/track/08VsSDNBuAOwGu8tkpJlSU",
      primeMusic:
        "https://music.amazon.in/albums/B01LZKLBM8?trackAsin=B01LXAQ819&ref=dm_sh_4dec-34cd-121d-c56b-a22ad",
      ytMusic: "https://music.youtube.com/watch?v=c0Z6HyYSYwA",
      ytEmbed: "https://www.youtube.com/embed/c0Z6HyYSYwA",
    },
  },
  {
    name: "Ohio Is For Lovers",
    band: "Hawthorne Heights",
    album: "Midwesterners",
    links: {
      appleMusic:
        "https://music.apple.com/in/album/ohio-is-for-lovers/467083347?i=467083359",
      spotify: "https://open.spotify.com/track/6QfnvcOKsdN4Q6exUWVuzn",
      primeMusic:
        "https://music.amazon.in/albums/B005NVXB8Y?trackAsin=B005NVXBXE&ref=dm_sh_d755-69a4-c413-53b3-07eae",
      ytMusic: "https://music.youtube.com/watch?v=hUO-sRLotOI",
      ytEmbed: "https://www.youtube.com/embed/hUO-sRLotOI",
    },
  },
  {
    name: "Waiting",
    band: "The Red Jumpsuit Apparatus",
    album: "Don't You Fake It",
    links: {
      appleMusic:
        "https://music.apple.com/in/album/waiting/806224598?i=806224705",
      spotify: "https://open.spotify.com/track/2pOnVLhguZdF7Fapwh58HP",
      primeMusic:
        "https://music.amazon.in/albums/B00I165NAC?trackAsin=B00I165QTU&ref=dm_sh_3c96-ac9c-5ef8-4d17-85fd0",
      ytMusic: "https://music.youtube.com/watch?v=sRBE537_UbY",
      ytEmbed: "https://www.youtube.com/embed/sRBE537_UbY",
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
