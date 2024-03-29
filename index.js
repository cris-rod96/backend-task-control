import server from "./src/server.js";
import { PORT } from "./src/config/index.js";
import { connectDB } from "./src/database/index.js";

connectDB()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server listening in port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
