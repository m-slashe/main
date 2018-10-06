/*
Used to keep docker cache fresh despite package.json version bumps.

In this script
- copy package.json to package-artifact.json
- zero package.json version

In Docker
- copy package.json
- run npm install normal
- copy package-artifact.json to package.json (undo-build-artifacts.js accomplishes this with a conditional check that package-artifact exists)
*/

const fs = require('fs');
const package = fs.readFileSync('package.json', 'utf8');
fs.writeFileSync('package-artifact.json', package);
const modifiedPackage = { ...JSON.parse(package), version: '0.0.0', scripts: {} };
fs.writeFileSync('package.json', JSON.stringify(modifiedPackage));

const packageLock = fs.readFileSync('package-lock.json', 'utf8');
fs.writeFileSync('package-lock-artifact.json', packageLock);
const modifiedPackageLock = { ...JSON.parse(packageLock), version: '0.0.0', scripts: {} };
fs.writeFileSync('package-lock.json', JSON.stringify(modifiedPackageLock));