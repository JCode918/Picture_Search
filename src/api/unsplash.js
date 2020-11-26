import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
          "Client-ID hVWtle-F9RhMl4XFSLmInrc1iMw-VqnbppVxHX3Q0Pw",
      }
});
