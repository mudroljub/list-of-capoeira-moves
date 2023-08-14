const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const prettier = require('prettier');

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

      // Find the first h1 tag's content
      const h1Element = $('h1:first-child');
      const h1Content = h1Element.contents().not('i').text().trim();
      const iContent = h1Element.find('i').text().trim();

      // Wrap i content in brackets and create a new title element
      const titleContent = iContent ? `${h1Content} (${iContent})` : h1Content;
      const newTitleElement = $('<title>').text(titleContent);

      // Insert the new title element into the head section
      $('head').prepend(newTitleElement);

      // Prettify the HTML content using prettier
      const formattedHtml = prettier.format($.html(), {
        parser: 'html',
        printWidth: 80,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: 'es5',
      });

      // Save the modified and formatted HTML back to the file
      fs.writeFile(filePath, formattedHtml, 'utf8', writeErr => {
        if (writeErr) {
          console.error('Error writing file:', writeErr);
          return;
        }
        console.log(`File '${filename}' processed and formatted successfully.`);
      });
    });
  });
});
