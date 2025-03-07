import { PapiLightContext } from "@/context/papi/papiLightContext";
import { PapiWsContext } from "@/context/papi/papiWsContext";
import { useContext } from "react";

export const usePapi = () => {
  const wsContext = useContext(PapiWsContext);
  const lightContext = useContext(PapiLightContext);

  return wsContext.init ? wsContext : lightContext;
};
