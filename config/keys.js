// module.exports = {
//   mongoURI:
//     "mongodb://administrator:administrator0@ds237563.mlab.com:37563/flex-project",
//   secretOrKey: "secret"
// };

if (process.env.NODE_ENV === "production") {
  module.exports = require("./keys_prod");
} else {
  module.exports = require("./keys_dev");
}