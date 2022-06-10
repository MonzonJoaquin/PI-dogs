import React, { Component } from 'react'
import { connect } from 'react-redux'
// import redux
import { fetchAllDogs } from '../controllers/action'

//Presentation
import Presentation from '../containers/Forms/Presentation'

//Breeds
import Cards from '../containers/Sections/Cards.jsx'

//Import styles
import styles from '../styles/Main_page.module.css'

class Main_page extends Component {

  componentDidMount(){
    if (!this.props.dogs.list[0]) {
      this.props.fetchAllDogs()
    }
  }
  render() {
    return (
      <div className={styles.main}>
        <header className={styles.header}>
          <Presentation/>
        </header>
        <main className={styles.cards}>
          <Cards/>
        </main>
      </div>
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