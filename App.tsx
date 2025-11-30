
import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { artworks } from './utils/mockData';
import Card from './components/Card';
import DetailView from './components/DetailView';
import { Aperture, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { config } from './config';

const ITEMS_PER_PAGE = 8;

const App: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const selectedArtwork = artworks.find(a => a.id === selectedId);

  // Pagination Logic
  const totalPages = Math.ceil(artworks.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentArtworks = artworks.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100 selection:bg-indigo-500/30">
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#0f172a]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-indigo-600 rounded-lg">
              <Aperture className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">{config.APP_TITLE}</h1>
              <p className="text-xs text-slate-400 font-medium">{config.APP_SUBTITLE}</p>
            </div>
          </div>
          
          <a href={config.GITHUB_URL} className="p-2 hover:bg-white/5 rounded-full transition-colors text-slate-400 hover:text-white">
            <Github size={20} />
          </a>
        </div>
      </header>

      {/* Main Grid */}
      <main className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-500">
            {config.GALLERY_NAME}
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            {config.GALLERY_DESCRIPTION}
          </p>
          
          {/* Back to previous page shortcut */}
          {currentPage > 1 && (
            <button
              onClick={handlePrevPage}
              className="mt-6 flex items-center gap-2 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors group"
            >
              <div className="p-1 rounded-full bg-indigo-500/10 group-hover:bg-indigo-500/20 transition-colors">
                <ChevronLeft size={16} />
              </div>
              回到第 {currentPage - 1} 页
            </button>
          )}
        </div>

        {/* Standard Grid Layout (Left-to-Right, Top-to-Bottom) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentArtworks.map((artwork) => (
            <Card
              key={artwork.id}
              artwork={artwork}
              isSelected={selectedId === artwork.id}
              onClick={setSelectedId}
            />
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-6 mt-16">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`p-3 rounded-full border border-slate-700 transition-all ${
                currentPage === 1 
                  ? 'text-slate-700 cursor-not-allowed border-slate-800' 
                  : 'text-white hover:bg-white/10 hover:border-white/30'
              }`}
            >
              <ChevronLeft size={24} />
            </button>
            
            <span className="text-slate-400 font-medium">
              Page <span className="text-white">{currentPage}</span> of <span className="text-white">{totalPages}</span>
            </span>

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`p-3 rounded-full border border-slate-700 transition-all ${
                currentPage === totalPages 
                  ? 'text-slate-700 cursor-not-allowed border-slate-800' 
                  : 'text-white hover:bg-white/10 hover:border-white/30'
              }`}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        )}
      </main>

      {/* Detail Overlay */}
      <AnimatePresence>
        {selectedId && selectedArtwork && (
          <DetailView
            artwork={selectedArtwork}
            onClose={() => setSelectedId(null)}
          />
        )}
      </AnimatePresence>
      
      {/* Footer */}
      <footer className="py-8 text-center text-slate-600 text-sm">
        <p>{config.COPYRIGHT_TEXT}</p>
      </footer>
    </div>
  );
};

export default App;
