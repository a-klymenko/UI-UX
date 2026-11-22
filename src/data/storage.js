const PREFIX='es-demo-v1-';
export function readStore(key,fallback=[]){try{const v=JSON.parse(localStorage.getItem(PREFIX+key));return Array.isArray(v)?v:fallback}catch{return fallback}}
export function writeStore(key,value){try{localStorage.setItem(PREFIX+key,JSON.stringify(value))}catch{ /* приватний режим може блокувати localStorage */ }}