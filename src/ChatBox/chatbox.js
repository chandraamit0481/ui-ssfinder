import React from "react"
import chatIconHeader from '../assets/images/chat-icon-header.png';
import RemoveOutlinedIcon from '@material-ui/icons/RemoveOutlined';
import chatIcon from '../assets/images/chat-icon.png';
import CloseOutlinedIcon from '@material-ui/icons/HighlightOffRounded';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

function ChatBox(props) {
    return (
        <>
            <div className={`chatIcon ${!props.toggle1 ? 'open' : 'close'}`}>
                <span onClick={props.openChatBox}>
                    <img src={chatIcon} alt='chat-icon' />
                </span>
            </div>
            <div className={`chatBox ${props.toggle1 ? 'open' : 'close'}  ${props.toggle2 ? 'minimize' : ''} fill-height-or-more`} id="chatBox">
                <div className='header' id="header">
                    <div className='header-column'>
                        <img src={chatIconHeader} alt='chat-icon-header' width="30px" height="30px" />
                        <span className="header-title">Message Title</span>
                    </div>
                    <div className='header-column '>
                        <div className="icon">
                            <div className="header-child-icon" onClick={props.openOrMinimizeChatBox}>
                                <RemoveOutlinedIcon fontSize="small" />
                            </div>
                            <div className="header-child-icon" onClick={props.closeChatBox}>
                                <CloseOutlinedIcon fontSize="small" />
                            </div>
                        </div>

                    </div>
                </div>

                <div id="content">
                    <div data-testid="question" className="question">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry
                    </div>
                    <div className="allAnswer">
                        <div className="answer">
                            <div className="title"> the printing and typesetting industry </div>
                            <div className="round">
                                <label htmlFor="ans1"></label>
                                <input type="checkbox" id="ans1" />
                            </div>
                        </div>
                        <div className="answer">
                            <div className="title">Lorem Ipsum is simply dummy </div>
                            <div className="round">
                                <label htmlFor="ans2"></label>
                                <input type="checkbox" id="ans2" />
                            </div>
                        </div>
                        <div className="answer">
                            <div className="title">Lorem Ipsum is simply dummy </div>
                            <div className="round">
                                <label htmlFor="ans3"></label>
                                <input type="checkbox" id="ans3" />
                               
                            </div>
                        </div>
                        <div className="submit">
                            <button type="submit">Submit Answer</button>
                        </div>
                    </div>

                </div>
                <div id="input-box" className="input-box">
                    <div className="input-box-column">
                        <input type="text" className="form-control" placeholder="Type here"></input>
                    </div>
                    <div className="input-box-column">
                        <SendOutlinedIcon fontSize="small" />
                    </div>
                </div>
            </div>
        </>

    )

}

export default ChatBox