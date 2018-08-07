const version = require('../version');


test('change version', () => {
    expect(() => version.changeVersion('1.0')).toThrow('Version 1.0 is not valid, valid format is \\d+.\\d+.\\d+');
    expect(version.changeVersion('1.0.0')).toBe('1.0.1');
    expect(version.changeVersion('1.0.0', version.constants.type.BUILD)).toBe('1.0.1');
    expect(version.changeVersion('1.1.0', version.constants.type.MINOR)).toBe('1.2.0');
    expect(version.changeVersion('29.1.0', version.constants.type.MAJOR)).toBe('30.1.0');
});

test('check version', () => {
    expect(version.checkVersion('1.0.0')).toBe(true);
    expect(version.checkVersion('11.0.123')).toBe(true);
    expect(version.checkVersion('11.x.123')).toBe(false);
    expect(version.checkVersion('11.1')).toBe(false);
});

test('get version', async () => {
    const versionTmp = await version.getVersion('./package.json');

    expect(typeof versionTmp).toBe('string');
});
