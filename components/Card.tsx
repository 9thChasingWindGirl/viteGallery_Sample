
import React from 'react';
import { motion } from 'framer-motion';
import { Artwork } from '../types';
import { Play, MapPin } from 'lucide-react';

interface CardProps {
  artwork: Artwork;
  onClick: (id: string) => void;
  isSelected: boolean;
}

const Card: React.FC<CardProps> = ({ artwork, onClick, isSelected }) => {
  const firstMedia = artwork.media[0];
  const isVideo = firstMedia.type === 'video';
  // If it's a video but has no poster, we must render the video element to see a frame.
  // If it has a poster, we prefer the image tag for performance.
  const useVideoTag = isVideo && !firstMedia.poster;
  const posterOrImageUrl = isVideo ? firstMedia.poster : firstMedia.url;

  return (
    <motion.div
      layoutId={`card-container-${artwork.id}`}
      onClick={() => onClick(artwork.id)}
      className="group relative cursor-pointer break-inside-avoid mb-6 rounded-2xl overflow-hidden"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-slate-800 rounded-2xl">
        {useVideoTag ? (
             <motion.video
             layoutId={`media-${artwork.id}`}
             src={firstMedia.url}
             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
             muted
             playsInline
             loop
             />
        ) : (
            <motion.img
            layoutId={`media-${artwork.id}`}
            src={posterOrImageUrl}
            alt={artwork.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
        )}
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {isVideo && (
          <div className="absolute top-4 right-4 bg-black/50 p-2 rounded-full backdrop-blur-sm z-10">
             <Play size={16} className="fill-white text-white" />
          </div>
        )}

        {/* Hover Content */}
        <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 w-full">
          <div className="flex items-center gap-1 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-2">
            <MapPin size={10} />
            <span>{artwork.location}</span>
          </div>
          <h3 className="text-white text-xl font-serif font-semibold leading-tight">
            {artwork.title}
          </h3>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
