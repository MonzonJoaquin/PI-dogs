import React, { Component } from 'react'
import { connect } from 'react-redux'
// import redux
import { fetchAllDogs } from '../../controllers/reducer'

//Presentation
import Presentation from '../../containers/Forms/Presentation'

//Breeds
import Cards from '../../containers/Sections/Cards.jsx'

class Main_page extends Component {
  constructor(){
    super()
  }
  componentDidMount(){
    if (!this.props.dogs.list[0]) {
      this.props.fetchAllDogs()
    }
  }
  render() {
    return (
      <>
        <header className='presentation'>
          <Presentation/>
        </header>
        <main className='breeds'>
          <Cards/>
        </main>
      </>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAllDogs: () => dispatch(fetchAllDogs())
  }
}

const mapStateToProps = (state) => ({
  dogs: state.dogs,
});

export default connect(mapStateToProps, mapDispatchToProps)(Main_page)