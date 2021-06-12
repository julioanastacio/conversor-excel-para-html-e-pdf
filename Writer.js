const fs = require('fs');
const util = require('util');

class Writer {
  constructor() {
    this.Writer = util.promisify(fs.writeFile);
  }

  async Write(filename, data) {
    try {
      await this.Writer(filename, data);
      return true;
    } catch (err) {
      return false;
    }
  }
}

module.exports = Writer;
