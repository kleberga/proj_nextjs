import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'arquivos');

export function getAllPosts() {
  const fileNames = fs.readdirSync(contentDirectory);
  const allPostsData = fileNames.map(fileName => {
    const fullPath = path.join(contentDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    return {
      fileName,
      ...matterResult.data,
    };
  });
  return allPostsData;
}

export function getPostData(id) {
  const fullPath = path.join(contentDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  return {
    id,
    ...matterResult.data,
    content: matterResult.content,
  };
}
