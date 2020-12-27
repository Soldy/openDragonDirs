const nanoTest  = new (require('nanoTest')).test({
    'debugPrint' : 'short'
});
const openDragonDirs = (require('./index.js')).dirs;

nanoTest.add(
    'db',
    {
        'function':openDragonDirs.db
    },
    'j==',
    [
        '.db',
    ]
);
nanoTest.add(
    'cdn',
    {
        'function':openDragonDirs.cdn
    },
    'j==',
    [
        'cdn',
    ]
);

nanoTest.add(
    'www',
    {
        'function':openDragonDirs.www
    },
    'j==',
    [
        'www'
    ]
);

nanoTest.add(
    'extension',
    {
        'function':openDragonDirs.extension
    },
    'j==',
    [
        'extension'
    ]
);

nanoTest.add(
    'components',
    {
        'function':openDragonDirs.components
    },
    'j==',
    [
        'css',
        'html',
        'js',
        'svg'
    ]
);


nanoTest.add(
    'all',
    {
        'function':openDragonDirs.all
    },
    'j==',
    [
        '.db',
        'cdn',
        'www',
        'www/css',
        'www/html',
        'www/js',
        'www/svg',
        'extension'
    ]
);

nanoTest.run();
