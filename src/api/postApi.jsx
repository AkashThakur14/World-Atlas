import axios from "axios";

const api = axios.create({
    baseURL:"https://restcountries.com/v3.1"
});


// HTTP GET METHOD
export const getCountryData = () =>{
return(
    api.get("/all?fields=name,population,region,capital,flags")
)}
// HTTP GET INdividual data METHOD
export const getCountryIndivdualData = (name) =>{
return(
    api.get(`/name/${name}?fullText=true&fields=name,population,subregion,region,capital,tld,currencies,language,borders,flags`)
)}
