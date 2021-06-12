class Processor {
  static Process(data) {
    let rows = data.split('\r\n');
    let rowsArray = [];

    rows.forEach((row) => {
      let array = row.split(',');
      rowsArray.push(array);
    });
    return rowsArray;
  }
}

module.exports = Processor;
