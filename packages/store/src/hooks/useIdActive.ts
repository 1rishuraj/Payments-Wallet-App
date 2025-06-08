import { useAtom } from "jotai";
import { idactiveatom } from "../atoms/idActive.ts";
export const useIdActive=()=>{
  const [idActive,setIdActive]=useAtom(idactiveatom);  
  return {idActive,setIdActive};
}