const pool = require("../../dbconfig/database");
module.exports = {
  create: (data, callBack) => {
    pool.query(
      "INSERT INTO `test`(name`, `user_id`, `password`) VALUES (?,?,?)",
      [data.name, data.userId, data.password],
      (error, result, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, result);
      }
    );
    console.log(pool);
  }
};
