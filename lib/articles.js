import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
 
const articlesDirectory = path.join(process.cwd(), 'public/blog');
 
//fetch all articles

export function getArticles() {
    const yamlPath = path.join(articlesDirectory, '/articles.yaml');
    const fileContents = fs.readFileSync(yamlPath, 'utf8');
    const articles = yaml.load(fileContents);
  
    return articles.map((article) => ({
      ...article,
      imagePath: path.join('/blog/images', path.basename(article.image)),
      imageThumb: path.join('/blog/images', path.basename(article.thumb)),
    }));
}

//fetch a limited number of articles

export function getLimitedArticles(limit = 4) {
  const allArticles = getArticles();
  console.log("Total articles found:", allArticles.length);

  const limitedArticles = allArticles.slice(0, limit);
  
  console.log("Articles being returned:");
  limitedArticles.forEach((article, index) => {
    console.log(`Article ${index + 1}:`, article);
  });

  return limitedArticles;
}

