import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

import type { ResultItem } from "../types";

interface LightboxState {
  isOpen: boolean;
  images: ResultItem[];
  currentIndex: number;
}

interface LightboxContextType {
  lightbox: LightboxState;

  openLightbox: (
    images: ResultItem[],
    index: number
  ) => void;

  closeLightbox: () => void;

  nextImage: () => void;

  prevImage: () => void;
}

const LightboxContext = createContext<
  LightboxContextType | undefined
>(undefined);

export const LightboxProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [lightbox, setLightbox] =
    useState<LightboxState>({
      isOpen: false,
      images: [],
      currentIndex: 0,
    });

  const openLightbox = (
    images: ResultItem[],
    index: number
  ) => {
    setLightbox({
      isOpen: true,
      images,
      currentIndex: index,
    });
  };

  const closeLightbox = () => {
    setLightbox((prev) => ({
      ...prev,
      isOpen: false,
    }));
  };

  const nextImage = () => {
    setLightbox((prev) => ({
      ...prev,
      currentIndex:
        (prev.currentIndex + 1) %
        prev.images.length,
    }));
  };

  const prevImage = () => {
    setLightbox((prev) => ({
      ...prev,
      currentIndex:
        prev.currentIndex === 0
          ? prev.images.length - 1
          : prev.currentIndex - 1,
    }));
  };

  return (
    <LightboxContext.Provider
      value={{
        lightbox,
        openLightbox,
        closeLightbox,
        nextImage,
        prevImage,
      }}
    >
      {children}
    </LightboxContext.Provider>
  );
};

export const useLightbox = () => {
  const context = useContext(LightboxContext);

  if (!context) {
    throw new Error(
      "useLightbox must be used inside LightboxProvider"
    );
  }

  return context;
};