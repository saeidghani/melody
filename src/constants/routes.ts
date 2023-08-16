export const routes = {
  home: "/",
  auth: {
    signin: "/signin",
    signup: "/signup",
  },
  music: {
    musics: "/musics",
    playlist: {
      index: "/playlists",
      view: (playlistId: number) => `/playlists/${playlistId}`,
    },
  },
};
