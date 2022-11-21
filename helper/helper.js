const { v4: uuidv4 } = require("uuid");
const fs = require("node:fs");

const uuid = () => uuidv4();

const writeJSONFile = (fileName, content) => {
  fs.writeFileSync(fileName, JSON.stringify(content), "utf-8", (error) => {
    error && console.log(`${error} => Make changes to file name ${fileName}`);
  });
};

module.exports = {
  uuid,
  writeJSONFile,
};
