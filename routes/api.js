const User = require("../models/User");
const Work = require("../models/Work");

module.exports = app => {
  app.post("/login", (req, res) => {
    User.find({
      where: {
        username: req.body.username,
        password: req.body.password
      }
    })
      .then(success => {
        res.json("success");
      })
      .catch(err => {
        console.log(err);
      });
  });

  app.get("/disc", (req, res) => {
    Work.find({})
      .then(disc => {
        res.json(disc);
      })
      .catch(err => console.log(err));
  });

  app.post("/update", (req, res) => {
    Work.findOneAndUpdate(
      { _id: req.body.id },
      {
        $set: {
          artist: req.body.edits.artist,
          album: req.body.edits.album,
          role: req.body.edits.role
        }
      },
      { new: true }
    )
      .then(update => {
        Work.find({}).then(disc => {
          res.json(disc);
        });
      })
      .catch(err => console.log(err));
  });
};
