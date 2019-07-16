import React from 'react'
import { connect } from 'react-redux'

import { CharacterList } from '../components'
import { getCharacters } from '../actions'

class CharacterListView extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.getCharacters()
  }

  render() {
    if (this.props.isLoading) {
      return <p>Loading...</p>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { characters, isLoading } = state.charsReducer

  return {
    characters,
    isLoading
  }
}

const mapDispatchToProps = {
  getCharacters: getCharacters
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterListView)
