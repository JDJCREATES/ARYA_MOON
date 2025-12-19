"use client";

import { useState, useEffect } from "react";
import { Gallery } from "@/types";
import { GalleryFilters } from "@/types/api";
import { galleryService } from "@/services/gallery/galleryService";

export function useGalleries(filters?: GalleryFilters) {
  const [galleries, setGalleries] = useState<Gallery[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    fetchGalleries();
  }, [JSON.stringify(filters)]);
  
  const fetchGalleries = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await galleryService.getGalleries(filters);
      
      if (response.success && response.data) {
        setGalleries(response.data);
      } else {
        setError(response.error?.message || "Failed to fetch galleries");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };
  
  return {
    galleries,
    loading,
    error,
    refetch: fetchGalleries,
  };
}

export function useGallery(id: string) {
  const [gallery, setGallery] = useState<Gallery | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    if (id) {
      fetchGallery();
    }
  }, [id]);
  
  const fetchGallery = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await galleryService.getGalleryById(id);
      
      if (response.success && response.data) {
        setGallery(response.data);
      } else {
        setError(response.error?.message || "Failed to fetch gallery");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };
  
  return {
    gallery,
    loading,
    error,
    refetch: fetchGallery,
  };
}
