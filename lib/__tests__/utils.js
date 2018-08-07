const utils = require('../utils');

test('file exists', async () => {
    const fileName = 'aa.json';
    //await expect(utils.fileExists(fileName)).rejects.toThrow('Error: ENOENT: no such file or directory, access \'aa.json\'');
});
