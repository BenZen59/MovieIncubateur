import React, { createContext, useContext, useState } from 'react';

const SwitchPageContext = createContext();

export function useSwitchPageContext() {
  return useContext(SwitchPageContext);
}

export function SwitchPageProvider({ children }) {
  const [pages, setPages] = useState(1);

  function SwitchPage1() {
    setPages(1);
  }
  function SwitchPage2() {
    setPages(2);
  }
  function SwitchPage3() {
    setPages(3);
  }
  function SwitchPage4() {
    setPages(4);
  }
  function SwitchPage5() {
    setPages(5);
  }
  function SwitchPage6() {
    setPages(6);
  }
  function SwitchPage7() {
    setPages(7);
  }
  function SwitchPage8() {
    setPages(8);
  }
  function SwitchPage9() {
    setPages(9);
  }
  function SwitchPage10() {
    setPages(10);
  }

  const value = {
    pages,
    SwitchPage1,
    SwitchPage2,
    SwitchPage3,
    SwitchPage4,
    SwitchPage5,
    SwitchPage6,
    SwitchPage7,
    SwitchPage8,
    SwitchPage9,
    SwitchPage10,
  };

  return (
    <SwitchPageContext.Provider value={value}>
      {children}
    </SwitchPageContext.Provider>
  );
}
