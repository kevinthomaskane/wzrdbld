module.exports = function(app, express, path) {
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/public/index.html"));
  });
};
