module.exports = (req, res, next) => {
  // next is like a done call back
  if (!req.user) {
    return res.status(401).send({ error: "You must login in!" });
    // send response back to user
  }
  next();
};
