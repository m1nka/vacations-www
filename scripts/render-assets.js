'use strict';
const fs = require('fs');
const upath = require('upath');
const sh = require('shelljs');

module.exports = function renderAssets() {
    const sourcePath = upath.resolve(upath.dirname(__filename), '../src/assets');
    const destPath = upath.resolve(upath.dirname(__filename), '../dist/.');
    
    sh.cp('-R', sourcePath, destPath);

    // Copy root files (robots.txt, CNAME, etc.)
    const rootFiles = ['robots.txt', 'CNAME'];
    rootFiles.forEach(file => {
        const src = upath.resolve(upath.dirname(__filename), '../src', file);
        if (sh.test('-f', src)) {
            sh.cp(src, destPath);
        }
    });
};