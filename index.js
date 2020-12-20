module.exports = {
  fix: function (str) {
    let questionFix = str.replace(/([^\s])(m(ı|i|u|ü))/gm, "$1 $2")
    return questionFix.replace(/([^'])([td])([ae])([\s\n,.])/gm, "$1 d$3$4")
  }
}
