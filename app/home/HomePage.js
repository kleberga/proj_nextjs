import React from 'react';
import Home from './Home';
import { getAllPosts } from '@/lib/arquivos';

export default async function HomePage() {
  const posts = getAllPosts();
  return <Home posts={posts} />;
}
