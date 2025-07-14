'use client';
import { createContext, ReactNode} from 'react'
import type { HomeTourType } from '@/shared/api/home-tour/type'

export const HomeDataContext = createContext<HomeTourType | undefined>(undefined);

type HomeDataProviderProps = {
  children: ReactNode;
  homeData: HomeTourType;
};

export const HomeDataProvider = ({ children, homeData}: HomeDataProviderProps) => {
  return (
    <HomeDataContext.Provider
      value={{
        ...homeData,
      }}
    >
      {children}
    </HomeDataContext.Provider>
  );
};
