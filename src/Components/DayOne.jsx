import Datasheet from 'react-datasheet/lib/DataSheet';
import React from 'react';
// import './override-everything.css';
import './custom.css';
import _ from 'lodash';
import axios from 'axios';

export default class BasicSheet extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        grid: [
          [
            {readOnly: true, value: 'Day 1'},
            {value: 'Reps', readOnly: true},
            {value: 'Date', readOnly: true},
            {value: 'Weight', readOnly: true},

            {value: '60%', readOnly: true},
            {value: '70%', readOnly: true},
            {value: '80%', readOnly: true},

            {value: 'Date', readOnly: true},
            {value: 'Weight', readOnly: true},
            {value: '65%', readOnly: true},
            {value: '75%', readOnly: true},
            {value: '85%', readOnly: true},

            {value: 'Date', readOnly: true},
            {value: 'Weight', readOnly: true},
            {value: '70%', readOnly: true},
            {value: '80%', readOnly: true},
            {value: '90%', readOnly: true},
            {value: 'Date', readOnly: true},
            {value: 'Weight', readOnly: true},
            {value: '75%', readOnly: true},
            {value: '85%', readOnly: true},
            {value: '95%', readOnly: true},
            {value: 'Date', readOnly: true},
            {value: 'Weight', readOnly: true},
            {value: '40%', readOnly: true},
            {value: '50%', readOnly: true},
            {value: '60%', readOnly: true},

          ],
          [{readOnly: true, value: "Back Squat"}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''},{value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
          [{readOnly: true, value: "Deficit Deadlift"}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''},{value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
          [{readOnly: true, value: "Leg Extensions"}, {value: ''}, {value: ''}, {value: ''}, {value: ''},  {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''},{value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
          [{readOnly: true, value: "Seated Calf Raises"}, {value: ''}, {value: ''}, {value: ''}, {value: ''},  {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''},{value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
          [{readOnly: true, value: "Hanging Leg Raises"}, {value: ''}, {value: ''}, {value: ''}, {value: ''},  {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''},{value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''},{value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}]
        ]
      }
    }

    
    render () {
        console.log(this.state.grid)
      return (
          

        <Datasheet
          data={this.state.grid}
          valueRenderer={(cell) => cell.value}
          onContextMenu={(e, cell, i, j) => cell.readOnly ? e.preventDefault() : null}
          onCellsChanged={changes => {
            const grid = this.state.grid.map(row => [...row])
            changes.forEach(({cell, row, col, value}) => {
              grid[row][col] = {...grid[row][col], value}
            })

            this.setState({grid},
              () => {
                axios
                  .post("https://webhook.site/4f4456fb-82a3-4644-a2f3-e7b4158ba997", this.state.grid)
                  .then(response => {
                    console.log(response);
                    console.log(response.data);
                  })
                  .catch(error => {
                    console.log(error);
                  });
              }
               
              )

            
          }}
        />
  
      )
    };
  };