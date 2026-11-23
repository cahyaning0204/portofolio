import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function getPortofolioData() {
    const filePath = path.join(process.cwd(), 'content', 'portofolio.md');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
        data,
        content,
    };
}