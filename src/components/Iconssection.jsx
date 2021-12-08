import React from 'react';
import {MdOutlineTagFaces} from 'react-icons/md'
function IconsSection() {
    return (
        <div className="IconSection">
            <div className="icon-sectin-container">
                <div className="icon-section-icons">
                    <div className="icons"></div>
                    <h4 className="icons-text">Коронавирус COVID-19в  Узбекистане</h4>
                </div>
                <div className="icon-section-icons icon-section-icons1">
                    <div className="icons icons1"></div>
                    <div>
                        <h4 className="icons-text">Инфицированы</h4>
                        <h1>2753</h1>
                    </div> 
                </div>
                <div className="icon-section-icons icon-section-icons2">
                    <MdOutlineTagFaces className=" icons2"/>
                    <div>
                        <h4 className="icons-text">Выздоровели</h4>
                        <h1>2245</h1>
                    </div>                   
                </div>
                <div className="icon-section-icons icon-section-icons3">
                    <div className="icons icons3"></div>
                    <div>
                        <h4 className="icons-text">Умерли</h4>
                        <h1>26</h1>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default IconsSection;
