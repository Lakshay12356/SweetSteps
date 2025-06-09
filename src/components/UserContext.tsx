import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext<any>(null);

export const PackageProvider = ({ children }) => {
  const [selectedPackage, setSelectedPackage] = useState<number>(0);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);

  return (
    <UserContext.Provider value={{ selectedPackage, setSelectedPackage, hasUserInteracted, setHasUserInteracted }}>
      {children}
    </UserContext.Provider>
  );
};

export const usePackage = () => useContext(UserContext);
