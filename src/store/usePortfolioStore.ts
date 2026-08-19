import { create } from 'zustand';

export type CategoryType = 'all' | 'catalog' | 'muse' | 'self';
export type ViewMode = 'grid' | 'masonry';

interface LightboxState {
  isOpen: boolean;
  images: string[];
  currentIndex: number;
  title: string;
  folderId?: string;
}

interface PortfolioState {
  activeCategory: CategoryType;
  searchQuery: string;
  viewMode: ViewMode;
  lightbox: LightboxState;

  // Actions
  setActiveCategory: (category: CategoryType) => void;
  setSearchQuery: (query: string) => void;
  setViewMode: (mode: ViewMode) => void;
  openLightbox: (images: string[], index?: number, title?: string, folderId?: string) => void;
  closeLightbox: () => void;
  nextImage: () => void;
  prevImage: () => void;
  setLightboxIndex: (index: number) => void;
}

export const usePortfolioStore = create<PortfolioState>((set) => ({
  activeCategory: 'all',
  searchQuery: '',
  viewMode: 'grid',
  lightbox: {
    isOpen: false,
    images: [],
    currentIndex: 0,
    title: '',
  },

  setActiveCategory: (category) => set({ activeCategory: category }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  setViewMode: (mode) => set({ viewMode: mode }),

  openLightbox: (images, index = 0, title = '', folderId = '') =>
    set({
      lightbox: {
        isOpen: true,
        images,
        currentIndex: index,
        title,
        folderId,
      },
    }),

  closeLightbox: () =>
    set((state) => ({
      lightbox: {
        ...state.lightbox,
        isOpen: false,
      },
    })),

  nextImage: () =>
    set((state) => {
      const { images, currentIndex } = state.lightbox;
      if (images.length === 0) return state;
      const nextIdx = (currentIndex + 1) % images.length;
      return {
        lightbox: { ...state.lightbox, currentIndex: nextIdx },
      };
    }),

  prevImage: () =>
    set((state) => {
      const { images, currentIndex } = state.lightbox;
      if (images.length === 0) return state;
      const prevIdx = (currentIndex - 1 + images.length) % images.length;
      return {
        lightbox: { ...state.lightbox, currentIndex: prevIdx },
      };
    }),

  setLightboxIndex: (index) =>
    set((state) => ({
      lightbox: { ...state.lightbox, currentIndex: index },
    })),
}));
