import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const openSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,

        openSidebar,

        closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom Hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
