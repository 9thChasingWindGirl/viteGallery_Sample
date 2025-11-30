
import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { Artwork } from '../types';

interface DetailViewProps {
  artwork: Artwork;
  onClose: () => void;
}

const DetailView: React.FC<DetailViewProps> = ({ artwork, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  // Strict audio management: pause all videos in the container whenever the index changes.
  // This ensures exiting videos stop playing immediately.
  useEffect(() => {
    if (containerRef.current) {
        const videos = containerRef.current.querySelectorAll('video');
        videos.forEach(video => {
            video.pause();
        });
    }
  }, [currentIndex]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    const newIndex = currentIndex + newDirection;
    if (newIndex < 0) {
        setCurrentIndex(artwork.media.length - 1);
    } else if (newIndex >= artwork.media.length) {
        setCurrentIndex(0);
    } else {
        setCurrentIndex(newIndex);
    }
  };

  const currentMedia = artwork.media[currentIndex];
  const isVideo = currentMedia.type === 'video';

  // Date parsing
  const dateObj = new Date(artwork.date);
  const displayYear = dateObj.getFullYear();
  const fullDate = artwork.date;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-6 bg-black/90 backdrop-blur-xl"
      onClick={onClose}
    >
      <motion.div
        ref={containerRef}
        className="relative w-full max-w-5xl h-full md:h-[85vh] bg-black rounded-none md:rounded-3xl overflow-hidden shadow-2xl border-0 md:border border-slate-800 group"
        layoutId={`card-container-${artwork.id}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 p-2 bg-black/40 hover:bg-black/70 rounded-full text-white transition-colors backdrop-blur-md border border-white/10"
        >
          <X size={24} />
        </button>

        {/* Media Carousel Section */}
        <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-zinc-900">
           <AnimatePresence initial={false} custom={direction} mode="popLayout">
             <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute inset-0 w-full h-full flex items-center justify-center"
             >
                {currentMedia.type === 'video' ? (
                    <video
                      src={currentMedia.url}
                      className="w-full h-full object-contain"
                      controls
                      loop
                      playsInline
                      muted={false}
                      autoPlay={false}
                      poster={currentMedia.poster}
                    />
                ) : (
                    <motion.img
                      layoutId={currentIndex === 0 ? `media-${artwork.id}` : undefined}
                      src={currentMedia.url}
                      alt={artwork.title}
                      className="w-full h-full object-contain"
                    />
                )}
             </motion.div>
           </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        {artwork.media.length > 1 && (
          <>
            <button 
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/30 hover:bg-black/60 rounded-full text-white backdrop-blur-sm transition-colors z-20 border border-white/10"
              onClick={(e) => { e.stopPropagation(); paginate(-1); }}
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/30 hover:bg-black/60 rounded-full text-white backdrop-blur-sm transition-colors z-20 border border-white/10"
              onClick={(e) => { e.stopPropagation(); paginate(1); }}
            >
              <ChevronRight size={24} />
            </button>

            {/* Dots - Positioned at top to avoid conflict with video controls */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 z-30 pointer-events-auto">
              <div className="flex gap-2 bg-black/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/5">
                {artwork.media.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setDirection(idx > currentIndex ? 1 : -1);
                      setCurrentIndex(idx);
                    }}
                    className={`h-1.5 rounded-full transition-all shadow-sm ${
                      idx === currentIndex ? 'bg-white w-6' : 'bg-white/40 hover:bg-white/80 w-1.5'
                    }`}
                  />
                ))}
              </div>
            </div>
          </>
        )}

        {/* Info Overlay - Appears on Hover, BUT hidden for videos */}
        {/* We only render this block if isVideo is false */}
        {!isVideo && (
          <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/95 via-black/80 to-transparent pt-32 pb-24 px-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out pointer-events-none">
            <div className="pointer-events-auto max-w-3xl mx-auto">
               <motion.div
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 transition={{ delay: 0.1 }}
               >
                 {/* Metadata */}
                 <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-400 mb-3">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight w-full mb-2">
                      {artwork.title}
                    </h2>

                    <div className="flex items-center gap-2">
                      <User size={16} className="text-indigo-400" />
                      <span>{artwork.artist}</span>
                    </div>

                    {/* Date Pill - Tooltip on hover */}
                    <div className="group/date relative cursor-default">
                      <span className="px-2 py-0.5 bg-white/10 rounded text-xs font-mono text-slate-300">
                        {displayYear}
                      </span>
                      {/* Tooltip Bubble */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-white text-slate-900 text-xs font-bold rounded opacity-0 group-hover/date:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-lg z-50">
                        {fullDate}
                        {/* Tiny arrow pointing down */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-white"></div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-indigo-400" />
                      <span>{artwork.location}</span>
                    </div>
                 </div>

                 <p className="text-lg text-slate-300 leading-relaxed">
                   {artwork.description}
                 </p>
               </motion.div>
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default DetailView;
