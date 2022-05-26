import React, { Component } from 'react'

//Presentation
import DataList from "../../containers/Inputs/Datalist"
import Selection from '../../containers/Inputs/Selection'
import Range from '../../containers/Inputs/Range'
import  Action  from '../../containers/Buttons/Action'

//Breeds
import Card from '../../components/Section'


export default class Main_page extends Component {
  constructor(){
    super()

    // REDUX 
    this.order = [{value: "Alfabético descendiente" },{value: "Alfabético ascendiente" },{value: "Peso ascendente" },{value: "Peso descendente" }]
    this.breeds = [{value: "Caniche" },{value: "Bulldog" },{value: "Golden retriever" },{value: "Dogo" },{value: "Labrador" },]
    this.min = 0
    this.mid = 16
    this.max= 99
    //

  }
  render() {
    return (
      <>
        <header className='presentation'>
          <Selection id={"order"} options={this.order} text={"Orden"}/>
          <Range id={"min"} min={this.min} max={this.mid} action={undefined}/>
          <Range id={"max"} min={this.mid} max={this.max} action={undefined}/>
          <DataList id={"filter"} options={this.breeds}/>
          <Action action={() => console.log("Estoy haciendo algo :D")} content={"Buscar"}/>
        </header>
        <main className='breeds'>
          <Card/>
        </main>
      </>
    )
  }
}

