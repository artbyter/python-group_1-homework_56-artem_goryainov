import React from 'react'

class Counter extends React.Component{

    render() {
        return <div>Попыток: {this.props.score}</div>
    }

}

export default Counter