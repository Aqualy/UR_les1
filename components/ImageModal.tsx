'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ImageModalProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export function ClickableImage({ src, alt, width = 800, height = 600 }: ImageModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="group relative overflow-hidden cursor-pointer transition-all duration-200 ease-out hover:shadow-md active:scale-95 rounded-lg bg-gray-50"
        style={{
          transformOrigin: 'center',
        }}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-auto border border-gray-200 transition-all duration-200 group-hover:border-gray-300 rounded-lg"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/3 transition-colors duration-200 rounded-lg" />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 animate-fade-in"
          style={{ animation: 'fadeIn 150ms ease-out' }}
          onClick={() => setIsOpen(false)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
            className="absolute top-4 right-4 z-51 text-white hover:text-gray-200 transition-colors"
            aria-label="Close modal"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div
            className="relative max-w-4xl max-h-[90vh] animate-zoom-in" 
            style={{ animation: 'zoomIn 150ms ease-out' }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={src}
              alt={alt}
              className="w-full h-auto object-contain border border-gray-300 shadow-2xl rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
}
