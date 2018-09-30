const fs = require('fs');

const hasBuildArtifacts = fs.existsSync('package-artifact.json');
if (hasBuildArtifacts) {
  const package = fs.readFileSync('package-artifact.json', 'utf8');
  const packageLock = fs.readFileSync('package-lock-artifact.json', 'utf8');

  fs.writeFileSync('package.json', package);
  fs.writeFileSync('package-lock.json', packageLock);

  fs.unlinkSync('package-artifact.json');
  fs.unlinkSync('package-lock-artifact.json');
}