const fs = require("fs");

// URL base do site
const BASE_URL = "https://cncprime.com.br";

// Importa os produtos
const { produtos } = require("./js/produtos.js");

// Cabeçalho do sitemap
let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n\n`;

// Página principal
sitemap += `  <url>\n`;
sitemap += `    <loc>${BASE_URL}/</loc>\n`;
sitemap += `    <changefreq>weekly</changefreq>\n`;
sitemap += `    <priority>1.0</priority>\n`;
sitemap += `  </url>\n\n`;

// Produtos
produtos.forEach(p => {
  sitemap += `  <url>\n`;
  sitemap += `    <loc>${BASE_URL}/produto.html?id=${p.id}</loc>\n`;
  sitemap += `    <changefreq>monthly</changefreq>\n`;
  sitemap += `    <priority>0.9</priority>\n`;
  sitemap += `  </url>\n\n`;
});

// Fecha sitemap
sitemap += `</urlset>`;

// Salva arquivo
fs.writeFileSync("sitemap.xml", sitemap);

console.log("✅ sitemap.xml gerado com sucesso!");
