import Link from "next/link";
import Image from "next/image";
import { Gallery } from "@/types";
import Card from "@/components/ui/Card";

interface GalleryCardProps {
  gallery: Gallery;
}

export default function GalleryCard({ gallery }: GalleryCardProps) {
  return (
    <Link href={`/galleries/${gallery.id}`}>
      <Card hover>
        <div className="relative h-48 w-full">
          <Image
            src={gallery.coverImage}
            alt={gallery.title}
            fill
            className="object-cover rounded-t-lg"
          />
        </div>
        
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{gallery.title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
            {gallery.description}
          </p>
          
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold">
              ${gallery.price.toFixed(2)}
            </span>
            <span className="text-sm text-gray-500">
              {gallery.mediaCount} items
            </span>
          </div>
          
          {gallery.tags && gallery.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {gallery.tags.slice(0, 3).map((tag) => (
                <span 
                  key={tag}
                  className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </Card>
    </Link>
  );
}
