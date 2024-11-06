import React from "react";
import Share_1 from "../icons/share_1.png"
import Share_2 from "../icons/share_2.png"
import Share_3 from "../icons/share_3.png"
import Share_4 from "../icons/share_4.png"
import Share_5 from "../icons/share_5.png"

class ModalShare extends React.Component {
    render() {
        return (
            <div className="modal-share">
                <div className="share-section">
                    <button type="button">
                        <img src={Share_1} alt="" />
                    </button>
                </div>
                <div className="share-section">
                    <button type="button">
                        <img src={Share_2} alt="" />
                    </button>
                </div>
                <div className="share-section">
                    <button type="button">
                        <img src={Share_3} alt="" />
                    </button>
                </div>
                <div className="share-section">
                    <button type="button">
                        <img src={Share_4} alt="" />
                    </button>
                </div>
                <div className="share-section">
                    <button type="button">
                        <img src={Share_5} alt="" />
                    </button>
                </div>
            </div>
        )
    }
}

export default ModalShare