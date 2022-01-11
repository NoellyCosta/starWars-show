import React from "react";
import axios from "axios"
import { BASE_URL } from "../../constants/urls"
import { CharacterCard } from "./styled"
import { getCharactersList } from "../../services/requests"


export default class CharactersListPage extends React.Component {
    state = {
        charactersList: []
    }

    componentDidMount() {
        getCharactersList(this.saveCharacter)
    }

    saveCharacter = (data) => {
    this.setState({ charactersList: data })
}



render() {
    const characters = this.state.charactersList.map((person) => {
        return <CharacterCard
            key={person.url}
            onClick={() => this.props.goToDetailPage(person.url)}
        >
            {person.name}
        </CharacterCard>
    })
    return (
        <div>{characters}</div>
    )
}
}