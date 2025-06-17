import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface PackageProviderProps {
  children: ReactNode;
}

const UserContext = createContext<any>(null);

export const PackageProvider: React.FC<PackageProviderProps> = ({ children }) => {
  const [selectedPackage, setSelectedPackage] = useState<number>(0);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);

  return (
    <UserContext.Provider value={{ selectedPackage, setSelectedPackage, hasUserInteracted, setHasUserInteracted }}>
      {children}
    </UserContext.Provider>
  );
};

export const usePackage = () => useContext(UserContext);
