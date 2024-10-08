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

async function processMarkdown(mdContent, baseDir, processedFiles = new Set()) {
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
    } else if (url.endsWith('.md') && !processedFiles.has(url)) {
      const linkedMdPath = path.join(baseDir, url);
      if (fs.existsSync(linkedMdPath)) {
        await generateHTML(linkedMdPath, baseDir, processedFiles);
        const htmlFileName = url.replace('.md', '.html');
        processedContent = processedContent.replace(fullMatch, `[${linkText}](${htmlFileName})`);
      }
    }
  }

  return processedContent;
}

async function generateHTML(mdFilePath, baseDir, processedFiles = new Set()) {
  if (processedFiles.has(mdFilePath)) return;
  processedFiles.add(mdFilePath);

  const mdContent = fs.readFileSync(mdFilePath, 'utf-8');
  const processedContent = await processMarkdown(mdContent, baseDir, processedFiles);
  const htmlContent = marked.parse(processedContent);

  const templatePath = path.join(__dirname, '..', 'templates', 'index.html.template');
  const template = fs.readFileSync(templatePath, 'utf-8');
  const styledHtml = template.replace('${htmlContent}', htmlContent);

  const htmlFilePath = mdFilePath.replace('.md', '.html');
  fs.writeFileSync(htmlFilePath, styledHtml);
}

async function main() {
  const baseDir = '.';
  const outputDir = path.join(baseDir, 'docs');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  const mainMdPath = path.join(baseDir, 'PRESENTATION.md');
  await generateHTML(mainMdPath, baseDir, new Set(), outputDir);
}

async function generateHTML(mdFilePath, baseDir, processedFiles = new Set(), outputDir) {
  if (processedFiles.has(mdFilePath)) return;
  processedFiles.add(mdFilePath);

  const mdContent = fs.readFileSync(mdFilePath, 'utf-8');
  const processedContent = await processMarkdown(mdContent, baseDir, processedFiles, outputDir);
  const htmlContent = marked.parse(processedContent);

  const templatePath = path.join(__dirname, '..', 'templates', 'index.html.template');
  const template = fs.readFileSync(templatePath, 'utf-8');

  const relativePath = path.relative(baseDir, mdFilePath);
  let htmlFilePath;
  let backButton = '';
  if (path.basename(mdFilePath) === 'PRESENTATION.md') {
    htmlFilePath = path.join(outputDir, 'index.html');
  } else {
    htmlFilePath = path.join(outputDir, relativePath.replace('.md', '.html'));
    backButton = '<a href="index.html" style="display: inline-block; margin-bottom: 20px; padding: 10px 20px; background-color: #f0f0f0; color: #333; text-decoration: none; border-radius: 4px;">Tilbage</a>';
  }

  const styledHtml = template
    .replace('${htmlContent}', htmlContent)
    .replace('${backButton}', backButton);

  const htmlDir = path.dirname(htmlFilePath);
  if (!fs.existsSync(htmlDir)) {
    fs.mkdirSync(htmlDir, { recursive: true });
  }
  fs.writeFileSync(htmlFilePath, styledHtml);
}

async function processMarkdown(mdContent, baseDir, processedFiles, outputDir) {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let match;
  let processedContent = mdContent;

  while ((match = linkRegex.exec(mdContent)) !== null) {
    const [fullMatch, linkText, url] = match;
    if (url.startsWith('http')) {
      const savedFilePath = await fetchAndSaveExternalContent(url, outputDir);
      if (savedFilePath) {
        const relativePath = path.relative(outputDir, savedFilePath);
        processedContent = processedContent.replace(fullMatch, `<a href="${relativePath}" target="_blank">${linkText}</a>`);
      } else {
        processedContent = processedContent.replace(fullMatch, `<a href="${url}" target="_blank">${linkText}</a>`);
      }
    } else if (url.endsWith('.md') && !processedFiles.has(url)) {
      const linkedMdPath = path.join(baseDir, url);
      if (fs.existsSync(linkedMdPath)) {
        await generateHTML(linkedMdPath, baseDir, processedFiles, outputDir);
        const htmlFileName = url.replace('.md', '.html');
        processedContent = processedContent.replace(fullMatch, `[${linkText}](${htmlFileName})`);
      }
    }
  }

  return processedContent;
}

async function fetchAndSaveExternalContent(url, outputDir) {
  try {
    const response = await axios.get(url);
    const content = response.data;
    const fileName = path.basename(url);
    const filePath = path.join(outputDir, fileName);
    fs.writeFileSync(filePath, content);
    return filePath;
  } catch (error) {
    console.error(`Error fetching ${url}: ${error.message}`);
    return null;
  }
}

main().catch(console.error);
