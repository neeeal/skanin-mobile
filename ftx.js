import React, { createContext, useContext } from 'react';

const FontContext = createContext();

export const useFontContext = () => {
  return useContext(FontContext);
};

export const FontProvider = ({ children, fontsLoaded }) => {
  return (
    <FontContext.Provider value={{ fontsLoaded }}>
      {children}
    </FontContext.Provider>
  );
};
