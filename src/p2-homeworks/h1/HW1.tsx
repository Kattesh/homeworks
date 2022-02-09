import React from 'react'
import Message from './Message'


const messages = [{
        avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
        name: 'Mike',
        message: 'Hello World',
        time: '10:15',
    },
    {
        avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
        name: 'Mike',
        message: 'How are you?',
        time: '22:00',
    },
    {
        avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
        name: 'Mike',
        message: 'Do you know smth about TS?',
        time: '22:12',
    },
]

function HW1() {
    return (
        <div>
            {messages.map((m, i) => (
                    <Message
                        avatar={m.avatar}
                        message={m.message}
                        name={m.name}
                        time={m.time}
                    />
                ))
            }
        </div>
    )
}

export default HW1
