import React, { Component } from 'react'

//Presentation


//Breeds
import Card from '../../components/Section'
import Presentation from '../../containers/Forms/Presentation'


export default class Main_page extends Component {
  constructor(){
    super()

    // REDUX 

    //

  }
  render() {
    return (
      <>
        <header className='presentation'>
          <Presentation/>
        </header>
        <main className='breeds'>
          <Card/>
        </main>
      </>
    )
  }
}

