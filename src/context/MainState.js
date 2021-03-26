import React, { useState } from "react";
import MainContext from "./mainContext";

const MainState = (props) => {
  const [searchFieldText, setSearchFieldText] = useState(null);

  return (
    <MainContext.Provider
      value={{
        searchFieldText,
        setSearchFieldText,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export default MainState;
