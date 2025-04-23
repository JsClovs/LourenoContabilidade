import { useState } from "react";
import { allPosts } from "../libs/posts.js"; // Verifique se a exportação está correta
import { Link } from "react-router-dom";

function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(10); 
  if (!Array.isArray(allPosts) || allPosts.length === 0) {
    return <p>Nenhum post encontrado.</p>;
  }

  const filteredPosts = allPosts.filter((post) => {
    const lowerSearch = searchTerm.toLowerCase();
    const titleMatch = post.title && typeof post.title === 'string' && post.title.toLowerCase().includes(lowerSearch);
    const excerptMatch = post.excerpt && typeof post.excerpt === 'string' && post.excerpt.toLowerCase().includes(lowerSearch);
    return titleMatch || excerptMatch;
  });

  const visiblePosts = filteredPosts.slice(0, visibleCount); 

  return (
    <div>
      <h1>Meu Blog</h1>
      <input
        type="search"
        placeholder="Pesquisar"
        className="w-90 px-4 mx-auto py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 my-4" 
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setVisibleCount(10);
        }}
      />
      <ul className="flex flex-wrap gap-4 justify-center"> 
        {visiblePosts.map((post) => (
          <li key={post.slug || post.id} className="mb-6 w-full sm:w-1/3 md:w-1/4 border p-4 rounded shadow"> 
            {post.img ? ( 
              <img
                src={post.img} 
                alt={`Imagem de ${post.title + (post.img) || 'Post'}`} 
                className="w-full h-48 object-cover mb-2" 
              />
            ) : (
              <div className="w-full h-48 bg-gray-200 mb-2 flex items-center justify-center text-gray-500">Sem Imagem</div> // Placeholder
            )}

            <h2 className="text-xl font-semibold mb-1">{post.title || "Título Indisponível"}</h2>
            <p className="text-sm text-gray-500 mb-2">
              Data:{" "}
              {post.date
                ? new Date(post.date).toLocaleDateString('pt-BR') 
                : "Data não disponível"}
            </p>
            <p className="text-gray-700 mb-3">{post.excerpt || "..."}</p>
            {post.slug && ( 
              <Link
                to={`/blog/posts/${post.slug}`}
                className="text-blue-600 hover:underline font-medium">
                Ler post
              </Link>
            )}
          </li>
        ))}
      </ul>

      {visibleCount < filteredPosts.length && (
        <div className="text-center my-6">
            <button
                onClick={() => setVisibleCount((prev) => prev + 10)}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
                Ver mais
            </button>
        </div>
      )}

      {searchTerm && filteredPosts.length === 0 && ( 
          <p className="text-center my-4 text-gray-600">Nenhum resultado encontrado para "{searchTerm}".</p>
      )}
    </div>
  );
}

export default Blog;