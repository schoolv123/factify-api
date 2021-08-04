const { create } = require("../model/users");

const createUser = (req, res) => {
  const body = req.body;
  create(body, (err, result) => {
    if (err) {
      //console.log(err);
      return res.status(500).json({
        success: false,
        err:err,
        message: "Database connection error"
      });
    } else {
      return req.status(200).json({
        success: true,
        message: "user created",
        data: result
      });
    }
  });
};

module.exports = createUser;
