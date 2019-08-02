import React from 'react'

export default function Die({number, isRolling}) {
    return <i className={`Die ${isRolling ? 'Die--animated': ""} fas fa-dice-${number}`}></i>
}
