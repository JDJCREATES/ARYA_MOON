"use client";

import { useState } from "react";
import Image from "next/image";
import { Media } from "@/types";

interface MediaViewerProps {
  media: Media[];
}

export default function MediaViewer({ media }: MediaViewerProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  const currentMedia = media[selectedIndex];
  
  if (!currentMedia) {
    return <div>No media available</div>;
  }
  
  return (
    <div className="space-y-4">
      <div className="relative aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
        {currentMedia.type === "image" ? (
          <Image
            src={currentMedia.url}
            alt={currentMedia.title || "Gallery media"}
            fill
            className="object-contain"
          />
        ) : (
          <video 
            src={currentMedia.url}
            controls
            className="w-full h-full"
          >
            Your browser does not support the video tag.
          </video>
        )}
      </div>
      
      {currentMedia.title && (
        <h3 className="text-lg font-semibold">{currentMedia.title}</h3>
      )}
      {currentMedia.description && (
        <p className="text-gray-600 dark:text-gray-400">{currentMedia.description}</p>
      )}
      
      {media.length > 1 && (
        <div className="grid grid-cols-6 gap-2">
          {media.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setSelectedIndex(index)}
              className={`relative aspect-square rounded overflow-hidden border-2 ${
                index === selectedIndex 
                  ? "border-blue-500" 
                  : "border-transparent hover:border-gray-300"
              }`}
            >
              <Image
                src={item.thumbnailUrl || item.url}
                alt={item.title || "Thumbnail"}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
