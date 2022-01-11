import React from "react";
import CharactersDetailPage from "./pages/CharactersDetailPage/CharactersDetailPage"
import CharactersListPage from "./pages/CharcatersListPage/CharactersListPage"

export default class App extends React.Component {
  state = {
    currentScreen: "list",
    clickedCharacterUrl: ""
  }

  goToDetailPage = (url) => {
    this.setState({ currentScreen: "detail", clickedCharacterUrl: url })
  }

  goToListPage = () => {
    this.setState({ currentScreen: "list", clickedCharacterUrl: "" })
  }
  selectPage = () => {
    switch (this.state.currentScreen) {
      case "list":
        return <CharactersListPage goToDetailPage={this.goToDetailPage} />

      case "detail":
        return <CharactersDetailPage goToListPage={this.goToListPage} url={this.state.clickedCharacterUrl} />
      default:
        return <CharactersListPage goToDetailPage={this.goToDetailPage} />

    }
  }

  render() {
    return (
      <div>
        {this.selectPage()}
      </div>
    )
  }
}

