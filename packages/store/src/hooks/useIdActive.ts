import { useAtom } from "jotai";
import { idactiveatom } from "../atoms/idActive";
export const useIdActive=()=>{
  const [idActive,setIdActive]=useAtom(idactiveatom);  
  return {idActive,setIdActive};
}