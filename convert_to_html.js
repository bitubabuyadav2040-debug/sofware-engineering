const fs = require('fs');
const marked = require('marked');

const mdContent = fs.readFileSync('Report.md', 'utf-8');
const htmlContent = marked.parse(mdContent);

const finalHtml = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Assessment Report</title>
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 800px; margin: 0 auto; padding: 2rem; color: #333; }
        img { max-width: 100%; border: 1px solid #ddd; box-shadow: 0 4px 8px rgba(0,0,0,0.1); margin-top: 10px; margin-bottom: 20px; }
        h1, h2 { color: #2c3e50; border-bottom: 1px solid #eee; padding-bottom: 5px; }
        code { background: #f4f4f4; padding: 2px 5px; border-radius: 4px; }
    </style>
</head>
<body>
    ${htmlContent}
</body>
</html>
`;

fs.writeFileSync('Report.html', finalHtml);
console.log('Report.html generated successfully.');
