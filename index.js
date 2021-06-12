const fs = require('fs');
let Reader = require('./Reader');
let Processor = require('./Processor');
let Table = require('./Table');
let HtmlParser = require('./HtmlParser');
let Writer = require('./Writer');
let PdfWriter = require('./PdfWriter');

let reader = new Reader();
let writer = new Writer();

async function main() {
  let data = await reader.Read('./users.csv');
  let dataProcessed = Processor.Process(data);
  let users = new Table(dataProcessed);
  let html = await HtmlParser.Parse(users);

  writer.Write(Date.now() + '.html', html);
  PdfWriter.WritePDF(Date.now() + '.pdf', html);
}

main();
