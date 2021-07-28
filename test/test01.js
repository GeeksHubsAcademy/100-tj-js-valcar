function geekshubs(index) {
  let output = "";
  for (var i = 1; i <= index; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      output += "GeeksHubs\n";
    } else if (i % 3 === 0) {
      output += "Geeks\n";
    } else if (i % 5 === 0) {
      output += "Hubs\n";
    } else {
      output += `${i}\n`;
    }
  }
  return output;
}
module.exports = geekshubs;
