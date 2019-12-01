module.exports = {
  fix: function (str) {
    return str.replace(/([^'])([td])([ae])([\s\n,.])/gm, '$1 d$3$4')
  }
}
