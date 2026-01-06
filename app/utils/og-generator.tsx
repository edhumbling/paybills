import { ImageResponse } from 'next/og';

export function generateOgImage(title: string, subtitle: string, imageBuffer?: ArrayBuffer) {
    const bgImage = imageBuffer
        ? `url(data:image/png;base64,${Buffer.from(imageBuffer).toString('base64')})`
        : 'radial-gradient(circle at 25px 25px, #111 2%, transparent 0%), radial-gradient(circle at 75px 75px, #111 2%, transparent 0%)';

    return new ImageResponse(
        (
            <div
                style={{
                    display: 'flex',
                    height: '100%',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    backgroundColor: '#000000',
                    backgroundImage: bgImage,
                    backgroundSize: imageBuffer ? 'cover' : '100px 100px',
                    backgroundPosition: 'center',
                    fontFamily: 'monospace',
                    position: 'relative',
                }}
            >
                {/* Overlay for readability if image is present */}
                {imageBuffer && (
                    <div
                        style={{
                            position: 'absolute',
                            inset: 0,
                            backgroundColor: 'rgba(0, 0, 0, 0.6)',
                            zIndex: 0,
                        }}
                    />
                )}

                {/* Background Accents (optional in new design, keeping for structure) */}
                {!imageBuffer && (
                    <>
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '4px',
                                background: 'linear-gradient(to right, #D7000F, #FFBF00)',
                            }}
                        />
                        <div
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                right: 0,
                                width: '100%',
                                height: '4px',
                                background: 'linear-gradient(to left, #D7000F, #FFBF00)',
                            }}
                        />
                    </>
                )}

                {/* Decorative corner brackets */}
                <div style={{ position: 'absolute', top: '40px', left: '40px', width: '20px', height: '20px', borderTop: '2px solid #D7000F', borderLeft: '2px solid #D7000F' }} />
                <div style={{ position: 'absolute', bottom: '40px', right: '40px', width: '20px', height: '20px', borderBottom: '2px solid #D7000F', borderRight: '2px solid #D7000F' }} />

                {/* Content Container */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        padding: '40px 80px',
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        backdropFilter: 'blur(10px)',
                        zIndex: 10,
                        borderRadius: '12px',
                        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
                    }}
                >
                    {/* Subtitle / Label */}
                    <div
                        style={{
                            color: '#FFBF00',
                            fontSize: 24,
                            letterSpacing: '0.2em',
                            fontWeight: 700,
                            marginBottom: 20,
                            textTransform: 'uppercase',
                        }}
                    >
                        {subtitle}
                    </div>

                    {/* Main Title */}
                    <div
                        style={{
                            color: 'white',
                            fontSize: 64,
                            fontWeight: 900,
                            letterSpacing: '-0.05em',
                            lineHeight: 1.1,
                            textAlign: 'center',
                            textTransform: 'uppercase',
                            textShadow: '0 0 20px rgba(215, 0, 15, 0.8)',
                        }}
                    >
                        {title}
                    </div>

                    {/* Footer Decoration */}
                    <div
                        style={{
                            marginTop: 30,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 10,
                        }}
                    >
                        <div style={{ width: 40, height: 2, backgroundColor: '#D7000F' }} />
                        <div style={{ color: '#aaa', fontSize: 14, letterSpacing: '0.3em' }}>
                            SECURE SYSTEM
                        </div>
                        <div style={{ width: 40, height: 2, backgroundColor: '#D7000F' }} />
                    </div>
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        }
    );
}
