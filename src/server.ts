import app from "./app";
const port = 3000;

const server = () => {
  const server = app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
  });
};

server();
