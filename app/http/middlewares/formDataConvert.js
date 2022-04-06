const multiparty = require("multiparty");

function formParser(req, res, next) {
  var form = new multiparty.Form();
  form.parse(req, function (err, fields, files) {
    return err,fields,files
  });
}

module.exports = {
    formParser
}
