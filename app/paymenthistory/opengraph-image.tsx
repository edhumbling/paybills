
import { generateOgImage } from '../utils/og-generator';

export const runtime = 'edge';

export default async function Image() {
    const imageBuffer = await fetch(new URL('./og-bg-history.png', import.meta.url)).then((res) =>
        res.arrayBuffer()
    );
    return generateOgImage('Payment History', 'Transaction Archive', imageBuffer);
}
