const passport = require("passport");

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get("/auth/google/callback", passport.authenticate("google"));

  app.get("/api/logout", (req, res) => {
    req.logout(); // req.logout() is a function that attached to automatically to the request object by passportjs. it takes a cookie that contains a user id and it kills the id in the user
    res.send(res.user);
  });

  // get access to user
  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
