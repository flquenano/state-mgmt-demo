export const ContextProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
