import { useAtomValue } from "jotai";
import { balanceatom } from "../atoms/balance.ts";
export const useBalance=()=>{
  const balance=useAtomValue(balanceatom);  
  return balance;
}