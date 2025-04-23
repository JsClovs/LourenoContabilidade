import matter from 'gray-matter'; 

/**                          
 * @typedef {object} PostMetadata
 * @property {string} title
 * @property {string} date
 * @property {string} slug
 * @property {string} author
 * @property {string} excerpt
 */

/**                          
 * @typedef {PostMetadata & {content: string}} Post
 */

// 
const postModules = import.meta.glob('../content/posts/*.md', {
  query: '?raw',      
  import: 'default',  
  eager: true         
});
// 

/** @type {Post[]} */            
export const allPosts = Object.entries(postModules)
  .map(([filepath, rawContent]) => {
    try {
      const { data, content } = matter(rawContent);

     
      if (!data.slug || !data.title || !data.date) {
        console.warn(`Metadados faltando ou inválidos no arquivo: ${filepath}. Pulando post.`);
        return null; 
      }

      return {
        img: data.img,
        title: data.title,
        date: data.date,
        slug: data.slug,
        author: data.author ?? 'Anônimo', 
        excerpt: data.excerpt ?? '',
        content: content,
      };
    } catch (error) {
        console.error(`Erro ao processar o arquivo ${filepath}:`, error);
        return null; 
    }
  })
  .filter(post => post !== null); 

allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

/**                             
 * Encontra um post pelo seu slug.
 * @param {string} slug 
 * @returns {Post | undefined} 
 */
export const getPostBySlug = (slug) => {
  return allPosts.find(post => post.slug === slug);
};
