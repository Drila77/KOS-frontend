import React from "react";

const  List = (props) => {
    const { title, paragraph, photo  } = props;
        return (
    <div className="list">
          <div className="img">
                <img src={photo} className="Images"/>
          </div>
          <div className="Text">
              <h3 className="titulli">{title}</h3>
              <p>{paragraph}</p>
          </div>
    </div>
        );

};




export default List;