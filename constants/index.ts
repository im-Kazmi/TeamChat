export const fakeServers = [
  {
    id: 1,
    name: "React Devs",
    image: "/react.jpg",
  },
  {
    id: 2,
    name: "Danger People",
    image: "/danger.jpg",
  },
  {
    id: 3,
    name: "Javascript Devs",
    image: "/js.jpg",
  },
];

export const fakeChannels = [
  {
    id: 1,
    name: "general",
    type: "text",
    image: "https://placekitten.com/200/200",
    users: [
      {
        id: 101,
        username: "User1",
        avatar: "https://placekitten.com/50/50",
      },
      {
        id: 102,
        username: "User2",
        avatar: "https://placekitten.com/51/51",
      },
    ],
  },
  {
    id: 2,
    name: "design-team",
    type: "text",
    image: "https://placekitten.com/201/201",
    users: [
      {
        id: 201,
        username: "User3",
        avatar: "https://placekitten.com/52/52",
      },
      {
        id: 202,
        username: "User4",
        avatar: "https://placekitten.com/53/53",
      },
    ],
  },
  {
    id: 3,
    name: "gaming-voice",
    type: "voice",
    image: "https://placekitten.com/202/202",
    users: [
      {
        id: 301,
        username: "User5",
        avatar: "https://placekitten.com/54/54",
      },
      {
        id: 302,
        username: "User6",
        avatar: "https://placekitten.com/55/55",
      },
    ],
  },
];
