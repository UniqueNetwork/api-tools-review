import { useContext } from "react";
import { DedotWsContext } from "../context/dedotWsContext";
import { DedotLightContext } from "@/context/dedotLightContext";

export const useDedot = () => {
  const wsContext = useContext(DedotWsContext);
  const lightContext = useContext(DedotLightContext);

  return wsContext.init ? wsContext : lightContext;
};
