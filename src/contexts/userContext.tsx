import { createContext, useContext } from "react"
import { MyContextProps } from "../types/types-config";

export const myContext = createContext<MyContextProps | undefined>(undefined);

export const useMyContext = ()=>{
    const context = useContext(myContext);
    if(!context)
        throw new Error('useMyContext must be used within a MyProvider');
    return context;
}