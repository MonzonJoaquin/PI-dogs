import React, { Component } from 'react'

import DataList from "../../containers/Inputs/Datalist"
import Selection from '../../containers/Inputs/Selection'
import Range from '../../containers/Inputs/Range'

export default class Main_page extends Component {
  constructor(){
    super()
    this.order = [{value: "Alfabético descendiente" },{value: "Alfabético ascendiente" },{value: "Peso ascendente" },{value: "Peso descendente" }]
    this.breeds = [{value: 1 },{value: 2 },{value: 3 },{value: 4 },{value: 5 },]
    this.min = 0
    this.mid = 16
    this.max= 99
  }
  render() {
    return (
      <>
        <div className='presentation'>
          <Selection id={"order"} options={this.order} text={"Orden"}/>
          <DataList id={"filter"} options={this.breeds}/>
          <Range id={"min"} min={this.min} max={this.mid} action={undefined}/>
          <Range id={"max"} min={this.mid} max={this.max} action={undefined}/>
        </div>
      </>
    )
  }
}

