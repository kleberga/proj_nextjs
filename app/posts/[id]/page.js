import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { getPostData, getAllPosts } from '../../../lib/arquivos';
import PrivateRoute from '@/components/privateRoute';
import ClientComponent from './ClientComponent';

export default async function Post({ params }) {
  const { id } = await params;
  const postData = await getPostData(id);

  return (
    <PrivateRoute>
      <div>
        <h1 className="text-lg font-bold">{postData.title}</h1>
        <h2 className="text-base">{postData.description}</h2>
        <p className="text-xs">Publicado em: {Intl.DateTimeFormat('pt-BR').format(new Date(postData.date))}</p>
        <br />
        {postData.featuredImage && <Image src={postData.featuredImage} alt={postData.title} width={700} height={700} />}
        <br />
        <ReactMarkdown>{postData.content}</ReactMarkdown>
        <br />
        <ClientComponent id={id} />
        <br/>

      </div>
    </PrivateRoute>
  );
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map(post => ({
    id: post.fileName.replace('.md', ''),
  }));
}
