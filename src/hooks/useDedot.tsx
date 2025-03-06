import { useContext } from "react";
import { DedotLightContext } from "@/context/dedot/dedotLightContext";
import { DedotWsContext } from "@/context/dedot/dedotWsContext";

export const useDedot = () => {
  const wsContext = useContext(DedotWsContext);
  const lightContext = useContext(DedotLightContext);

  return wsContext.init ? wsContext : lightContext;
};
