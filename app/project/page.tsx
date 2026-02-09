'use client';

import { ClickableImage } from '@/components/ImageModal';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 px-4 pb-24 pt-24">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-gray-900">Projects</h1>
        <p className="text-gray-600">
          A selection of projects made through study and personal work.
        </p>
      </div>

      <div className="space-y-10">
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">Postcard</h2>
          <div className="w-48">
            <ClickableImage src="/Postcard.webp" alt="Postcard" />
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">Leporello</h2>
          <div className="flex flex-col gap-6">
            <ClickableImage src="/leporello_page-0001.webp" alt="leporello page 1" />
            <ClickableImage src="/leporello_page-0002.webp" alt="leporello page 2" />
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">Poster</h2>
          <div className="w-full max-w-2xl">
            <ClickableImage src="/2425_XDL2_BaertenT_opdr1_posterLres_page-0001.webp" alt="Poster" />
          </div>
        </div>
      </div>
    </div>
  )
}
