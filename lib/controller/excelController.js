const reader = require('../utils/reader');
const excelServices = require('../services/excelServices')

class excellController {
    static readXlsx(path) {
        return reader.readXlsx(path);
    }
    static getContacts(path) {
        return excelServices.filterContacts(this.readXlsx(path));
    }
    static getFileName(path) {
        return excelServices.getFileName(path);
    }
};

module.exports = excellController;