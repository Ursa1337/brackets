module.exports = function check(str, bracketsConfig) {
  const bracketRegEx = new RegExp(bracketsConfig.map(el => el.join("").replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")).join("|"), "g")
  while (str != str.replace(bracketRegEx, "")) str = str.replace(bracketRegEx, "")

  return str.length === 0
}
