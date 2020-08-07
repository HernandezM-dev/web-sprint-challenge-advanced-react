import React from 'react';
import { useLocalSave } from "./useLocalSave";
import {useMedia} from './useMedia'

export const useDarkMode = () =>{
    // const prefersDarkMode = usePrefersDarkMode()

    const [darkMode, setDarkMode] = useLocalSave('enabled', usePrefersDarkMode())
    return [darkMode, setDarkMode]

    function usePrefersDarkMode(){
        const result = useMedia(['(prefers-color-scheme: dark)'], [true], false);
        // console.log(result)
        return result
        // return true
      }
    
}