import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), "env") });

export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  jwt: {
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
    access_token_expires_in: process.env.ACCESS_TOKEN_EXP,
    refresh_token_secret: process.env.REFRESH_TOKEN_SECRET,
    refresh_token_expires_in: process.env.REFRESH_TOKEN_EXP,
  },
};

//"postgresql://postgres:718278@localhost:5432/my_portfolio?schema=public"
//postgresql://postgres:dwqUMMjhVLCbEIqmySMqKwkkanHlIyKg@roundhouse.proxy.rlwy.net:54905/railway
