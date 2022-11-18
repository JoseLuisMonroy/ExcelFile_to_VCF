const fileController = require('./lib/controller/fileController');
const excelController = require('./lib/controller/excelController');
const file = "file.xlsx";

fileController.createFile();
fileController.addInfo(file);
fileController.moveFile(excelController.getFileName(file));
