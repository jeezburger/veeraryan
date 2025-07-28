'use client';

import { useEffect, useState } from 'react';
import FaultyTerminal from '@/components/FaultyTerminal';
import ScrambledText from '@/components/ScrambledText';
import Folder from '@/components/Folder';
import Carousel from '@/components/Carousel';
import MiniTerminal from '@/components/miniTerminal';


export default function Home() {
  const [showPdf, setShowPdf] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth < 768);
    }
  }, []);

  return (
    <div style={{ width: '100%', height: '100%', position: 'fixed', top: 0, left: 0 }}>
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
      {/* Centered texts */}
      <div
        style={{
          position: 'absolute',
          top: 0, left: 0, width: '100vw', height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ScrambledText
            className="scrambled-text-demo"
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
            className="scrambled-text-demo"
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
      {/* Left-aligned folders */}
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
        {/* Folder 1 with label (Resume, opens PDF modal or link on mobile) */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {isMobile ? (
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <Folder
                size={0.7}
                color="#2596be"
                className="custom-folder"
              />
            </a>
          ) : (
            <div
              style={{ cursor: 'pointer' }}
              onClick={() => setShowPdf(true)}
            >
              <Folder
                size={0.7}
                color="#2596be"
                className="custom-folder"
              />
            </div>
          )}
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
        {/* Projects folder */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div
            style={{ cursor: 'pointer' }}
            onClick={() => setShowProjects(true)}
          >
            <Folder size={0.7} color="#2596be" className="custom-folder" />
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
      </div>
      {/* PDF Modal */}
      {!isMobile && showPdf && (
        <div
          style={{
            position: 'fixed',
            top: 0, left: 0,
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
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setShowPdf(false)}
              style={{
                position: 'absolute',
                top: 18,
                right: 18,
                width: '32px',
                height: '32px',
                background: '#ff5f56',
                border: 'none',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                zIndex: 1,
                padding: 0,
              }}
              aria-label="Close"
            >
              <span
                style={{
                  display: 'block',
                  width: '16px',
                  height: '16px',
                  color: 'white',
                  fontWeight: 900,
                  fontSize: '18px',
                  lineHeight: '16px',
                  textAlign: 'center',
                  userSelect: 'none',
                }}
              >
                &#10005;
              </span>
            </button>
            <iframe
              src="/resume.pdf"
              style={{
                width: '60vw',
                height: '70vh',
                border: 'none',
                borderRadius: '8px',
                background: 'white',
              }}
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
            top: 0, left: 0,
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
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setShowProjects(false)}
              style={{
                position: 'absolute',
                top: 18,
                right: 18,
                width: '32px',
                height: '32px',
                background: '#ff5f56',
                border: 'none',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                zIndex: 1,
                padding: 0,
              }}
              aria-label="Close"
            >
              <span
                style={{
                  display: 'block',
                  width: '16px',
                  height: '16px',
                  color: 'white',
                  fontWeight: 900,
                  fontSize: '18px',
                  lineHeight: '16px',
                  textAlign: 'center',
                  userSelect: 'none',
                }}
              >
                &#10005;
              </span>
            </button>
            <div style={{ width: '100%', height: '600px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Carousel
                baseWidth={300}
                autoplay={true}
                autoplayDelay={3000}
                pauseOnHover={true}
                loop={true}
                round={false}
              />
            </div>
          </div>
        </div>
      )}
      <MiniTerminal />
      {/* Top-right social app-style icons aligned with folders */}
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
            backgroundColor: '#0077b5',
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
              filter: 'brightness(1.4) saturate(1.2) drop-shadow(0 0 1px #0f0) drop-shadow(0 0 2px #0f0)',
              imageRendering: 'pixelated',
              mixBlendMode: 'screen',
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
            backgroundColor: '#333',
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
              filter: 'brightness(1.4) saturate(1.2) drop-shadow(0 0 1px #0f0) drop-shadow(0 0 2px #0f0)',
              imageRendering: 'pixelated',
              mixBlendMode: 'screen',
            }}
          />

        </a>
      </div>

    </div>
  );
}
