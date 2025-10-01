'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import FaultyTerminal from '@/components/FaultyTerminal';
import ScrambledText from '@/components/ScrambledText';
import Folder from '@/components/Folder';
import Carousel from '@/components/Carousel';
import MiniTerminal from '@/components/miniTerminal';
import BlogBrowser from '@/components/BlogBrowser';


export default function Home() {
  const router = useRouter();

  const [showPdf, setShowPdf] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showBlog, setShowBlog] = useState(false);


  useEffect(() => {
    if (typeof window !== 'undefined') {
      const check = () => setIsMobile(window.innerWidth < 768);
      check();
      window.addEventListener('resize', check);
      return () => window.removeEventListener('resize', check);
    }
  }, []);

  return (
    <div style={{ width: '100%', height: '100%', position: 'fixed', top: 0, left: 0 }}>
      {/* Background Terminal */}
      <FaultyTerminal
        scale={1.4}
        gridMul={[2, 1]}
        digitSize={1.2}
        timeScale={0.5}
        pause={false}
        scanlineIntensity={0.5}
        glitchAmount={1}
        flickerAmount={1}
        noiseAmp={1}
        chromaticAberration={0}
        dither={0}
        curvature={0.2}
        tint="#61895c"
        mouseReact={true}
        mouseStrength={0.4}
        pageLoadAnimation={false}
        brightness={1}
        style={{ width: '100%', height: '100%' }}
      />

      {/* Centered Text */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ScrambledText
            radius={100}
            duration={1.2}
            speed={0.5}
            scrambleChars=".:"
            style={{
              fontWeight: 700,
              textAlign: 'center',
              color: 'white',
              textShadow: '0 0 10px #000, 0 0 2px #fff',
              letterSpacing: '0.03em',
              fontSize: '3.5rem',
              margin: 0,
            }}
          >
            Veer Aryan
          </ScrambledText>
          <ScrambledText
            radius={100}
            duration={1.2}
            speed={0.5}
            scrambleChars=".:"
            style={{
              fontWeight: 700,
              textAlign: 'center',
              color: 'white',
              textShadow: '0 0 10px #000, 0 0 2px #fff',
              letterSpacing: '0.03em',
              fontSize: '1.5rem',
              margin: 0,
              marginTop: '1.5rem',
            }}
          >
            whatup
          </ScrambledText>
        </div>
      </div>

      {/* Left-aligned Folders (desktop) */}
      {!isMobile && (
        <div
          style={{
            position: 'absolute',
            top: 40,
            left: 40,
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            zIndex: 3,
            alignItems: 'flex-start',
          }}
        >
          {/* Resume */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ cursor: 'pointer' }} onClick={() => setShowPdf(true)}>
              <Folder size={0.7} color="#2596be" />
            </div>
            <span
              style={{
                marginTop: '0.5rem',
                fontSize: '0.95rem',
                color: 'white',
                fontFamily: 'monospace',
                opacity: 0.8,
                textAlign: 'center',
                fontWeight: 700,
              }}
            >
              Resume
            </span>
          </div>

          {/* Projects */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ cursor: 'pointer' }} onClick={() => setShowProjects(true)}>
              <Folder size={0.7} color="#2596be" />
            </div>
            <span
              style={{
                marginTop: '0.5rem',
                fontSize: '0.95rem',
                color: 'white',
                fontFamily: 'monospace',
                opacity: 0.8,
                textAlign: 'center',
                fontWeight: 700,
              }}
            >
              Projects
            </span>
          </div>

          {/* Blog */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ cursor: 'pointer' }} onClick={() => router.push('/blog')}>
              <Folder size={0.7} color="#2596be" />
            </div>
            <span
              style={{
                marginTop: '0.5rem',
                fontSize: '0.95rem',
                color: 'white',
                fontFamily: 'monospace',
                opacity: 0.8,
                textAlign: 'center',
                fontWeight: 700,
              }}
            >
              Blog
            </span>
          </div>


        </div>
      )}

      {/* Top-right social icons (desktop) */}
      {!isMobile && (
        <div
          style={{
            position: 'absolute',
            top: 53,
            right: 40,
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            zIndex: 3,
            alignItems: 'center',
          }}
        >
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/veeraryan/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: 72,
              height: 72,
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 16px rgba(0,0,0,0.35)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.boxShadow = '0 6px 24px rgba(0,0,0,0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.35)';
            }}
          >
            <img
              src="/linkedin.svg"
              alt="LinkedIn"
              style={{
                width: 36,
                height: 36,
              }}
            />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/jeezburger"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: 72,
              height: 72,
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 16px rgba(0,0,0,0.35)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.boxShadow = '0 6px 24px rgba(0,0,0,0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.35)';
            }}
          >
            <img
              src="/github.svg"
              alt="GitHub"
              style={{
                width: 36,
                height: 36,
              }}
            />
          </a>

        </div>
      )}

      {/* Mobile Dock */}
      {isMobile && (
        <div
          style={{
            position: 'absolute',
            bottom: 20,
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'rgba(255,255,255,0.2)',
            backdropFilter: 'blur(20px)',
            borderRadius: '40px',
            padding: '12px 24px',
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
            zIndex: 5,
          }}
        >
          {/* Resume */}
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" style={{ width: 48, height: 48, flexShrink: 0 }}>
            <img src="/resume.png" alt="Resume" style={{ width: 48, height: 48 }} />
          </a>

          {/* Projects */}
          <div onClick={() => setShowProjects(true)} style={{ width: 48, height: 48, flexShrink: 0, cursor: 'pointer' }}>
            <img src="/project.png" alt="Projects" style={{ width: 48, height: 48 }} />
          </div>

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/veeraryan/" target="_blank" rel="noopener noreferrer" style={{ width: 48, height: 48, flexShrink: 0 }}>
            <img src="/linkedin.svg" alt="LinkedIn" style={{ width: 48, height: 48 }} />
          </a>

          {/* GitHub */}
          <a href="https://github.com/jeezburger" target="_blank" rel="noopener noreferrer" style={{ width: 48, height: 48, flexShrink: 0 }}>
            <img src="/github.svg" alt="GitHub" style={{ width: 48, height: 48 }} />
          </a>
        </div>


      )}

      {isMobile && (
        <a
          href="/blog"
          style={{
            position: 'absolute',
            top: 80,
            left: 20,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            zIndex: 4,
          }}
        >
          <Folder size={0.7} color="#2596be" />
          <span
            style={{
              marginTop: '0.5rem',
              fontSize: '0.85rem',
              color: 'white',
              fontFamily: 'monospace',
              opacity: 0.8,
              textAlign: 'center',
              fontWeight: 700,
            }}
          >
            Blog
          </span>
        </a>
      )}


      {/* MiniTerminal (desktop only) */}
      {!isMobile && <MiniTerminal />}

      {/* PDF Modal */}
      {showPdf && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.7)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => setShowPdf(false)}
        >
          <div
            style={{
              background: '#222',
              padding: '1.5rem',
              borderRadius: '12px',
              boxShadow: '0 0 24px #000',
              maxWidth: '80vw',
              maxHeight: '80vh',
              position: 'relative',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowPdf(false)}
              style={{
                position: 'absolute',
                top: 18,
                right: 18,
                width: 32,
                height: 32,
                background: '#ff5f56',
                border: 'none',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{ color: 'white', fontWeight: 900, fontSize: 18 }}>
                &#10005;
              </span>
            </button>
            <iframe
              src="/resume.pdf"
              style={{ width: '60vw', height: '70vh', border: 'none', borderRadius: 8, background: 'white' }}
              title="Resume PDF"
            />
          </div>
        </div>
      )}

      {/* Projects Modal */}
      {showProjects && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.7)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => setShowProjects(false)}
        >
          <div
            style={{
              background: '#222',
              padding: '2rem',
              borderRadius: '16px',
              boxShadow: '0 0 32px #000',
              width: '90vw',
              maxWidth: '700px',
              maxHeight: '90vh',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              overflow: 'hidden',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowProjects(false)}
              style={{
                position: 'absolute',
                top: 18,
                right: 18,
                width: 32,
                height: 32,
                background: '#ff5f56',
                border: 'none',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <span style={{ color: 'white', fontWeight: 900, fontSize: 18 }}>
                &#10005;
              </span>
            </button>
            <Carousel baseWidth={300} autoplay loop round={false} />
          </div>
        </div>
      )}
    </div>
  );
}
