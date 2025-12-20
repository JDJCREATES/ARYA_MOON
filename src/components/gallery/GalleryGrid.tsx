import { Gallery } from "@/types";
import GalleryCard from "./GalleryCard";

interface GalleryGridProps {
  galleries: Gallery[];
}

export default function GalleryGrid({ galleries }: GalleryGridProps) {
  if (galleries.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 dark:text-gray-400">
          No galleries found
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {galleries.map((gallery) => (
        <GalleryCard key={gallery.id} gallery={gallery} />
      ))}
    </div>
  );
}
