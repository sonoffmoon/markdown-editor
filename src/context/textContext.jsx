import { useState, createContext } from "react";

export const TextContext = createContext({
  text: "",
  setText: () => {},
});
