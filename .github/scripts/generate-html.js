const fs = require('fs');
const marked = require('marked');
const axios = require('axios');
const path = require('path');

async function fetchAndSaveExternalContent(url, baseDir) {
  try {
    const response = await axios.get(url);
    const content = response.data;
    const fileName = path.basename(url);
    const filePath = path.join(baseDir, fileName);
    fs.writeFileSync(filePath, content);
    return filePath;
  } catch (error) {
    console.error(`Error fetching ${url}: ${error.message}`);
    return null;
  }
}

async function processMarkdown(mdContent, baseDir) {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let match;
  let processedContent = mdContent;

  while ((match = linkRegex.exec(mdContent)) !== null) {
    const [fullMatch, linkText, url] = match;
    if (url.startsWith('http')) {
      const savedFilePath = await fetchAndSaveExternalContent(url, baseDir);
      if (savedFilePath) {
        const relativePath = path.relative(baseDir, savedFilePath);
        processedContent = processedContent.replace(fullMatch, `[${linkText}](${relativePath})`);
      }
    }
  }

  return processedContent;
}

async function generateHTML() {
  const baseDir = '.';
  const mdContent = fs.readFileSync('PRESENTATION.md', 'utf-8');
  const processedContent = await processMarkdown(mdContent, baseDir);
  const htmlContent = marked.parse(processedContent);

  const templatePath = path.join(__dirname, '..', 'templates', 'index.html.template');
  const template = fs.readFileSync(templatePath, 'utf-8');
  const styledHtml = template.replace('${htmlContent}', htmlContent);

  fs.writeFileSync('index.html', styledHtml);
}

generateHTML().catch(console.error);
