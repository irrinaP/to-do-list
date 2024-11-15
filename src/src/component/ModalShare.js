import React from "react";
import copy from "../icons/copy.png"
import vk from "../icons/vk.png"
import telegram from "../icons/telegram.png"
import whatsapp from "../icons/whatsapp.png"
import facebook from "../icons/facebook.png"

class ModalShare extends React.Component {
    render() {
        return (
            <div className="modal-share">
                <div className="share-section">
                    <button type="button" onClick={() => {
                        navigator.clipboard.writeText([this.props.onShareTask.title, this.props.onShareTask.text])
                        this.props.onCloseModal()
                        }}>
                        <img src={copy} alt="" />
                    </button>
                </div>
                <div className="share-section">
                    <button type="button">
                        <img src={vk} alt="" />
                    </button>
                </div>
                <div className="share-section">
                    <button type="button">
                        <img src={telegram} alt="" />
                    </button>
                </div>
                <div className="share-section">
                    <button type="button">
                        <img src={whatsapp} alt="" />
                    </button>
                </div>
                <div className="share-section">
                    <button type="button">
                        <img src={facebook} alt="" />
                    </button>
                </div>
            </div>
        )
    }
}

export default ModalShare