"use client";

import { useEffect } from "react";
import { useGalleryStore } from "@/store/galleryStore";
import { GalleryFilters } from "@/types/api";

/**
 * Custom hook for fetching galleries using Zustand store
 * 
 * @param filters - Optional filters for galleries
 * @returns Galleries state and methods
 */
export function useGalleries(filters?: GalleryFilters) {
  const { 
    galleries, 
    loading, 
    error, 
    fetchGalleries,
    clearError 
  } = useGalleryStore();
  
  useEffect(() => {
    fetchGalleries(filters);
  }, [filters?.page, filters?.limit, filters?.category, filters?.search, fetchGalleries]);
  
  return {
    galleries,
    loading,
    error,
    refetch: () => fetchGalleries(filters),
    clearError,
  };
}

/**
 * Custom hook for fetching a single gallery using Zustand store
 * 
 * @param id - Gallery ID
 * @returns Gallery state and methods
 */
export function useGallery(id: string) {
  const { 
    currentGallery: gallery, 
    loading, 
    error, 
    fetchGalleryById,
    clearCurrentGallery,
    clearError 
  } = useGalleryStore();
  
  useEffect(() => {
    if (id) {
      fetchGalleryById(id);
    }
    
    // Cleanup on unmount
    return () => {
      clearCurrentGallery();
    };
  }, [id, fetchGalleryById, clearCurrentGallery]);
  
  return {
    gallery,
    loading,
    error,
    refetch: () => fetchGalleryById(id),
    clearError,
  };
}
