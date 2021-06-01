import { useEffect } from "react"

const Chat = () => {

    useEffect(() => {
        const ws = new WebSocket('ws://localhost:1338')
        ws.addEventListener(
            'open',
            () => {
                ws.send(JSON.stringify({status: 'ok'}))
            },
            {once: true}
        )
    }, [])






    return (
        <div>
            Chat Page
        </div>
    )
}

export default Chat
