import axios from "axios"
import {BASE_URL} from "../constants/urls"

  export const getCharacter = (saveData) => {
        axios.get(this.props.url)
            .then((res) => saveData( res.data ))
            .catch((error) => console.log(error.response))
    }

 export const  getPlanet = (url, saveData) => {
        axios.get(this.state.character.homeworld)
            .then((res) => saveData( res.data.name))
            .catch((error) => console.log(error.response))


    }


  export const getCharactersList = (url, saveData) => {
        axios.get(`${BASE_URL}/people`)
            .then((res) => saveData( res.data.results))
            .catch((error) => console.log(error.respinse))
    }