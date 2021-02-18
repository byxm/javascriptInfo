import React, { useContext } from 'react'
import { AppContext } from '../context'





function Message() {
    const { username } = useContext(AppContext)
    return <div>
        Message, {username}
    </div>
}


export default Message