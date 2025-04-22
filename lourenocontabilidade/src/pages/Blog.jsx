import { useState } from "react";
import { allPosts } from "../libs/posts.js";
import { Link } from "react-router-dom";

function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(10); // Começa com 10 posts

  if (!allPosts || allPosts.length === 0) {
    return <p>Nenhum post encontrado.</p>;
  }

  const filteredPosts = allPosts.filter((post) => {
    const lowerSearch = searchTerm.toLowerCase();
    return (
      post.title.toLowerCase().includes(lowerSearch) ||
      post.excerpt.toLowerCase().includes(lowerSearch)
    );
  });

  const visiblePosts = filteredPosts.slice(0, visibleCount); // Mostra até o limite atual

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
          setVisibleCount(10); // Resetar caso mude a busca
        }}
      />
      <ul>
        {visiblePosts.map((post) => (
          <li key={post.slug} className="mb-6">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-sm text-gray-500">
              Data:{" "}
              {post.date
                ? new Date(post.date).toLocaleDateString()
                : "Data não disponível"}
            </p>
            <p>{post.excerpt}</p>
            <Link
              to={`/blog/posts/${post.slug}`}
              className="text-blue-600 hover:underline">
              Ler post
            </Link>
          </li>
        ))}
      </ul>

      {visibleCount < filteredPosts.length && (
        <button
          onClick={() => setVisibleCount((prev) => prev + 10)}>
          Ver mais
        </button>
      )}

      {filteredPosts.length === 0 && <p>Nenhum resultado encontrado.</p>}
    </div>
  );
}

export default Blog;
