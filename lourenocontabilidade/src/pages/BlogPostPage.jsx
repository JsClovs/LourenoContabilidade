import React from "react";
import {useParams, Navigate, Link} from "react-router-dom";
import ReactMarkdown from "react-markdown";

import {getPostBySlug} from "../libs/posts.js";

function BlogPostPage() {
  const {slug} = useParams();

  if (!slug) {
    console.error("Slug não encontrado nos parâmetros da rota.");
    return <Navigate to="/404" replace />;
  }

  const post = getPostBySlug(slug);

  console.log("Conteúdo do Post:", post.content);
  console.log("Tipo do Conteúdo:", typeof post.content);

  if (!post) {
    return (
      <div className="text-center py-10">
        <h1 className="text-2xl font-bold text-red-600 mb-4">
          Post Não Encontrado
        </h1>
        <p className="text-gray-700 mb-6">
          Desculpe, o post com o slug "{slug}" não existe ou foi removido.
        </p>
        <Link
          to="/blog" // Link de volta para a lista
          className="mt-6 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
          Voltar para o Blog
        </Link>
      </div>
    );
  }

  return (
    <div>
      <article className="prose text-[20px] prose-img:rounded-xl prose-a:text-blue-600 m-auto my-6
      ">
        
      <img
        src={`/${post.img}`}
        alt={`Imagem de ${post.img}`}
        className="w-full h-48 object-cover mb-2"
      />
      <Link className="" to="/blog">← Voltar</Link>
        <h1 className="text-4xl font-extrabold mb-3">{post.title}</h1>
        <p className="text-md text-gray-500 mb-8 -mt-2">
          Por {post.author} em{" "}
          {post.date ? new Date(post.date).toLocaleDateString() : "Data inválida"}
        </p>
        <ReactMarkdown>{post.content}</ReactMarkdown>
        <div className=" mt-10 pt-6 border-t">
          <Link to="/blog" className="text-blue-600 hover:underline">
            ← Voltar para todos os posts
          </Link>
        </div>
      </article>
    </div>
    
  );
}

export default BlogPostPage;
