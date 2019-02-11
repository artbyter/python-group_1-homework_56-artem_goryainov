import React from 'react'

class Button extends React.Component{
    render() {
        return <button className='btn button' onClick={()=>this.props.resetField()}>Сброс</button>
    }
}

export default Button