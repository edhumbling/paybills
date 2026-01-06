import { generateOgImage } from './utils/og-generator';

export const runtime = 'edge';

export default async function Image() {
    const imageBuffer = await fetch(new URL('./og-bg-home.png', import.meta.url)).then((res) =>
        res.arrayBuffer()
    );
    return generateOgImage("Hannah's Legacy Home", 'Bill Payment Portal', imageBuffer);
}
