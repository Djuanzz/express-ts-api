import passport from "passport";
import { Strategy as DiscordStrategy } from "passport-discord";

export default passport.use(
  new DiscordStrategy(
    {
      clientID: process.env.DISCORD_CLIENT_ID as string,
      clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
      callbackURL: process.env.DISCORD_CALLBACK_URL as string,
      scope: ["identify", "email"],
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(profile);
    }
  )
);
