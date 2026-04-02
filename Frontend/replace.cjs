const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'assets', 'css', 'style.css');
let content = fs.readFileSync(cssPath, 'utf8');

// The replacement mapping
const replacements = [
    { target: /#66451c/gi, replacement: '#b8860b' },
    { target: /rgb\(\s*118\s*,\s*69\s*,\s*8\s*\)/gi, replacement: '#b8860b' },
    { target: /rgb\(\s*64\s*,\s*52\s*,\s*6\s*\)/gi, replacement: '#8b6508' },
    { target: /rgb\(\s*90\s*,\s*60\s*,\s*7\s*\)/gi, replacement: '#b8860b' },
    { target: /rgb\(\s*89\s*,\s*60\s*,\s*7\s*\)/gi, replacement: '#b8860b' },
    { target: /rgb\(\s*89\s*60\s*7\s*\)/gi, replacement: '#b8860b' },
    { target: /rgb\(\s*100\s*,\s*76\s*,\s*35\s*\)/gi, replacement: '#b8860b' },
    { target: /rgb\(\s*102\s*,\s*69\s*,\s*28\s*\)/gi, replacement: '#b8860b' },
    { target: /rgb\(\s*37\s*,\s*24\s*,\s*8\s*\)/gi, replacement: '#553e05' },
    { target: /rgb\(\s*38\s*23\s*3\s*\)/gi, replacement: '#553e05' },
    { target: /rgb\(\s*169\s*,\s*114\s*,\s*31\s*\)/gi, replacement: '#b8860b' },
    { target: /#80551f/gi, replacement: '#c59b08' },
    { target: /#b57f3e/gi, replacement: '#daa520' },
    { target: /#c48c46/gi, replacement: '#ffd700' }
];

let matchCount = 0;

replacements.forEach(({ target, replacement }) => {
    const matches = content.match(target);
    if (matches) {
        matchCount += matches.length;
    }
    content = content.replace(target, replacement);
});

fs.writeFileSync(cssPath, content, 'utf8');

console.log(`Successfully replaced ${matchCount} occurrences of brown colors with dark golden ones in style.css`);
