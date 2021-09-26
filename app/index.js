const config = require('config');
const {exec} = require('child_process');
const fs = require('fs');
const alert = require('alert');


exec('audtool current-song-filename', (error, stdout, stderr) => {

  if (error) {
    console.error(`error: ${error.message}`);
  }

  if (stderr) {
    console.error(`strerr: ${stderr}`);
  }




  // Song name
  console.log(`File: ${stdout}`);

  let filePath = stdout.replace(/^\s*/, '');
  filePath = filePath.replace(/\s*$/, '');
  let fileName = filePath.split('/').pop();


  console.log(`fileName: ${fileName}`);

  let linkPath = config.folder + fileName;

  if (!fs.existsSync(linkPath)) {
    fs.symlinkSync(filePath, linkPath);
  }


  
});
