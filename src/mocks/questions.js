const AVATAR_URL = `https://api.adorable.io/avatars`;

export default [
  {
    type: `genre`,
    genre: `rock`,
    answers: [{
      src: `https://mp3minusovki.com/music/fhvndfjwserjgt/1156a4faab98e5be6bff5b7620d56ceb/e9c4875a00b812b4843181f9b8701e71.mp3`,
      genre: `rock`,
    }, {
      src: `https://mp3minusovki.com/music/fhvndfjwserjgt/445bfc786a687f3373a7763be5d60c3f/19ad3bd0ea9ccfba26cf7c7d0090912d.mp3`,
      genre: `rock`,
    }, {
      src: `https://mp3minusovki.com/music/fhvndfjwserjgt/445bfc786a687f3373a7763be5d60c3f/c02dc0451b994c08daca9c16234ebc3c.mp3`,
      genre: `rock`,
    }, {
      src: `https://mp3minusovki.com/music/fhvndfjwserjgt/247bab1c312b2335afe3f5c9b496a3d3/7d52425ca7e4fc3e094be35e838c2f2a.mp3`,
      genre: `rock`,
    }]
  }, {
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `https://mp3minusovki.com/music/fhvndfjwserjgt/1156a4faab98e5be6bff5b7620d56ceb/e9c4875a00b812b4843181f9b8701e71.mp3`,
    },
    answers: [{
      picture: `${AVATAR_URL}/${100}`,
      artist: `John Snow`,
    }, {
      picture: `${AVATAR_URL}/${128}`,
      artist: `Jack Daniels`,
    }, {
      picture: `${AVATAR_URL}/${120}`,
      artist: `Jim Beam`,
    }],
  }
];
