import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'arquivos');

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');

  const fullPath = path.join(contentDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  return new Response(JSON.stringify({
    id,
    ...matterResult.data,
    content: matterResult.content,
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
