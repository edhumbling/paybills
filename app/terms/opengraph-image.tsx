
import { generateOgImage } from '../utils/og-generator';

export const runtime = 'edge';

export default async function Image() {
    const imageBuffer = await fetch(new URL('./og-bg-terms.png', import.meta.url)).then((res) =>
        res.arrayBuffer()
    );
    return generateOgImage('Terms & Conditions', "Hannah's Legacy Home", imageBuffer);
}
