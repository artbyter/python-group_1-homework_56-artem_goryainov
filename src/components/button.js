import React from 'react'

function Button(props) {

    return <button className='btn button' onClick={() => props.resetField()}>Сброс</button>

}

export default Button