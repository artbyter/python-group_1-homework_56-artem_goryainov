// import 'bootstrap/dist/css/bootstrap.min.css'
import React, {Component} from 'react';
import './App.css';
import Field from "./components/Field/field";
import Cell from "./components/Field/Cell/cell";
import Button from './components/button'
import Counter from './components/counter'


const FIELD_SIZE = 6;

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cells: this.generateCells(),
            counter: 0,
            gameEnd:false,
        }
    }

    generateCells() {
        let cells = [];
        let cellsCount = FIELD_SIZE ** 2;

        for (let i = 0; i < cellsCount; i++) {
            cells.push({
                open: false,
                hasItem: false,
            })
        }

        let randomIndex = Math.floor(Math.random() * cellsCount);
        cells[randomIndex].hasItem = true;
        return cells;
    }

    openCell = (id) => {
        let cell = {...this.state.cells[id]};

        // открываем ячейку, только если она закрыта,
        // чтобы не считать повторные клики по одной и той же ячейке.
        if (!cell.open) {
            cell.open = true;
            let endGameState=false
            if (cell.hasItem==true){
                endGameState=true
            }

            let cells = [...this.state.cells];
            cells[id] = cell;

            let state = {...this.state};
            state.cells = cells;
            state.counter = state.counter + 1;
            state.endGame=endGameState;

            this.setState(state);
        }
    };

    resetField = () => {
        let cells = this.generateCells();
        this.setState({cells: cells, counter: 0,endGame:false})
    };

    render() {
        return (
            <div className="container">

                <Field>
                    {this.state.cells.map((item, index) =>
                        <Cell
                            cell={item}
                            key={index}
                            click={!this.state.endGame?() => this.openCell(index):null}
                        />
                    )}
                </Field>
                < div className='misc'>
                    < Counter
                        score={this.state.counter}
                    />
                    <Button resetField={this.resetField}/>

                </div>


            </div>


        );
    }

}

export default App;
