// No seu componente Blog.jsx
import { allPosts } from '../libs/posts.js'; // Confirme se o caminho está certo!
import { Link } from 'react-router-dom'; // Adicione se quiser links depois

function Blog() {
  console.log("Posts carregados:", allPosts); // Mantenha este log para depuração

  if (!allPosts || allPosts.length === 0) {
    return <p>Nenhum post encontrado. Verifique os arquivos .md e seus metadados (title, slug, date).</p>;
  }

  return (
    <div>
      <h1>Meu Blog</h1>
      <ul>
        {allPosts.map(post => (
          <li key={post.slug}>
            <h2>{post.title}</h2>
            <p>
               Data: {post.date ? new Date(post.date).toLocaleDateString() : 'Data não disponível'}
            </p>
            <p>{post.excerpt}</p>
             <Link to={`/blog/posts/${post.slug}`} className="text-blue-600 hover:underline">
                Ler post
             </Link>

          </li>
        ))}
      </ul>
    </div>
  );
}

export default Blog;