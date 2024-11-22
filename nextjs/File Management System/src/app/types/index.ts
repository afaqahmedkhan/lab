export type File = {
  id: number;
  name: string;
  dateModified: string;
  size: number;
  type: string;
  isFavorite: boolean;
  isSelected: boolean;
};

export type FileContextType = {
  files: File[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  favoritesFilter: boolean;
  toggleFavoritesFilter: () => void;
  toggleFavorite: (id: number) => void;
  toggleSelect: (id: number) => void;
  selectAll: boolean;
  toggleSelectAll: () => void;
  favoriteAll: () => void;
  selectedFileIds: Number[];
  bulkFavorite: () => void;
  setSelectedFileIds: (ids: Number[]) => void;
};
