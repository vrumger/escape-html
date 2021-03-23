const htmlEntities = {
    '<': `&lt;`,
    '>': `&gt;`,
    '&': `&amp;`,
    '"': `&quot;`,
};

const escapeHtml = html => {
    return html.replace(
        new RegExp(`[${Object.keys(htmlEntities).join(``)}]`, `g`),
        char => htmlEntities[char]
    );
};

module.exports = escapeHtml;