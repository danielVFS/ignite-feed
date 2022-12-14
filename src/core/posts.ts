import { PostProps } from "../components/Post";

export const posts: PostProps[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/danielVFS.png",
      name: "Daniel Vitor",
      role: "Dev Frontend at @Amazon",
    },
    content: [
      { type: "paragraph", content: "Fala galera 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-10-03 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/danielVFS.png",
      name: "Vitor Daniel",
      role: "UX Designer at @Google",
    },
    content: [
      { type: "paragraph", content: "Fala galera 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-10-15 20:00:00"),
  },
];
