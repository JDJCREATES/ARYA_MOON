import { create } from 'zustand';
import { Gallery } from '@/types';
import { GalleryFilters } from '@/types/api';
import { galleryService } from '@/services/gallery/galleryService';

interface GalleryState {
  galleries: Gallery[];
  currentGallery: Gallery | null;
  loading: boolean;
  error: string | null;
  filters: GalleryFilters | null;
  
  // Actions
  setGalleries: (galleries: Gallery[]) => void;
  setCurrentGallery: (gallery: Gallery | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  setFilters: (filters: GalleryFilters | null) => void;
  fetchGalleries: (filters?: GalleryFilters) => Promise<void>;
  fetchGalleryById: (id: string) => Promise<void>;
  clearError: () => void;
  clearCurrentGallery: () => void;
}

export const useGalleryStore = create<GalleryState>((set, get) => ({
  galleries: [],
  currentGallery: null,
  loading: false,
  error: null,
  filters: null,

  setGalleries: (galleries) => set({ galleries }),
  
  setCurrentGallery: (gallery) => set({ currentGallery: gallery }),
  
  setLoading: (loading) => set({ loading }),
  
  setError: (error) => set({ error }),
  
  setFilters: (filters) => set({ filters }),
  
  clearError: () => set({ error: null }),
  
  clearCurrentGallery: () => set({ currentGallery: null }),

  fetchGalleries: async (filters?: GalleryFilters) => {
    set({ loading: true, error: null });
    
    try {
      const response = await galleryService.getGalleries(filters);
      
      if (response.success && response.data) {
        set({ 
          galleries: response.data,
          filters: filters || null,
          loading: false,
          error: null
        });
      } else {
        set({ 
          loading: false,
          error: response.error?.message || 'Failed to fetch galleries'
        });
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An error occurred';
      set({ loading: false, error: errorMessage });
    }
  },

  fetchGalleryById: async (id: string) => {
    set({ loading: true, error: null });
    
    try {
      const response = await galleryService.getGalleryById(id);
      
      if (response.success && response.data) {
        set({ 
          currentGallery: response.data,
          loading: false,
          error: null
        });
      } else {
        set({ 
          loading: false,
          error: response.error?.message || 'Failed to fetch gallery'
        });
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An error occurred';
      set({ loading: false, error: errorMessage });
    }
  },
}));
