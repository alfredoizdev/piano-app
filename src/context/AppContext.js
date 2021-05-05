import React, {
  memo,
  createContext,
  useContext,
  useMemo,
  useCallback,
  useReducer,
} from "react";

const AppContext = createContext(null);

export const useAppContext = function () {
  return useContext(AppContext);
};

const Layout = ({ children }) => {
  const context = useAppContext();
  return typeof children === "function" ? children(context) : children;
};

const AppContextProvider = function ({ children }) {
  const value = useMemo(
    () => ({
      keys: ["C","D","E","F","G","A","B"],
      selected: undefined,
      keyLogs: [],
    }),
    []
  );

  const updater = useCallback(
    (state, value) => ({
      ...state,
      ...value,
    }),
    []
  );

  const [state, updaterKeysCtx] = useReducer(updater, value, undefined);

  return (
    <AppContext.Provider value={{ ...state, updaterKeysCtx }}>
      <Layout>{children}</Layout>
    </AppContext.Provider>
  );
};

export default memo(AppContextProvider);
