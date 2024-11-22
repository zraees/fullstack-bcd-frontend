import { useState } from "react";

export const useLocalStorage1 = (keyName: any, defaultValue: any) => {

  const [storedValue, setStoredValue] = useState(JSON.parse(localStorage.getItem(keyName)??defaultValue));

  const setValue = (newValue: any) => {
    try {
      console.log('use storage newValue ', newValue)
      window.localStorage.setItem(keyName, JSON.stringify(newValue));
    } catch (err) {
      console.log(err);
    }
    setStoredValue(newValue);
  };

  return [storedValue, setValue];
};



// () => {
//   try {
//     const value = window.localStorage.getItem(keyName);
//     if (value) {
//       return JSON.parse(value);
//     } else {
//       window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
//       return defaultValue;
//     }
//   } catch (err) {
//     return defaultValue;
//   }
// }