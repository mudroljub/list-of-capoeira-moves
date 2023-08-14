const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const directoryPath = __dirname; // Current directory

// Load all HTML files from the current folder
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  // Filter HTML files
  const htmlFiles = files.filter(file => path.extname(file) === '.html');

  htmlFiles.forEach(filename => {
    const filePath = path.join(directoryPath, filename);

    fs.readFile(filePath, 'utf8', (readErr, data) => {
      if (readErr) {
        console.error('Error reading file:', readErr);
        return;
      }

      // Parse HTML using Cheerio
      const $ = cheerio.load(data);

      // Find the first h1 tag's value
      const firstH1Value = $('h1:first-child').text();

      // Create a new title tag with the first h1 value
      const newTitleTag = `<title>${firstH1Value}</title>`;

      // Modify the HTML content
      const modifiedHtml = newTitleTag + $.html();

      // Save the modified HTML back to the file
      fs.writeFile(filePath, modifiedHtml, 'utf8', writeErr => {
        if (writeErr) {
          console.error('Error writing file:', writeErr);
          return;
        }
        console.log(`File '${filename}' processed successfully.`);
      });
    });
  });
});
