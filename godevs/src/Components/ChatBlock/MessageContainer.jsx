import { useEffect, useRef } from 'react';

const MessageContainer = ({ messages, myName }) => {
    const messageRef = useRef();

    useEffect(() => {
        if (messageRef && messageRef.current) {
            const { scrollHeight, clientHeight } = messageRef.current;
            messageRef.current.scrollTo({ left: 0, top: scrollHeight - clientHeight, behavior: 'smooth' });
        }
    }, [messages]);

    return <div ref={messageRef} style={{display: "flex" , overflow: "auto", flexDirection: "column"}} className='message-container' >
        {messages.map((m, index) => {
            if (m.user === myName) {
                return <div key={index} style={{alignSelf: "flex-end", marginRight: "20px"}}>
                    <p style={{}}>{m.message}</p>
                    <p style={{textAlign: "right",fontSize: "0.7em"}}>{m.user}</p>
                </div>
            } else {
                return <div key={index} style={{marginLeft: "20px"}}>
                    <p style={{}}>{m.message}</p>
                    <p style={{textAlign: "left",fontSize: "0.7em"}}>{m.user}</p>
                </div>
            }
        }
        )}
    </div>
}

export default MessageContainer;