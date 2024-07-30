import getData from "./helpers/getData.js"
import { showData } from "./helpers/showData.js"

const url ="http://localhost:3000/Libros"
const main = document.getElementById("main")
const libro=await getData(url)

showData(libro,main)