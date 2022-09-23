import React from "react";

const TextCard = (props) => {

  // Need to iterate through object
  // So making array's of keys and Values for 
  // achieving the result
  
  const entry = Object.keys(props.attributes);
  const values = Object.values(props.attributes);
  
  return (
    <div>
      <h3>{props.attributeTitle}</h3>
      <ul>
        {entry.map((key, id) => {
          return (
            <li>
              {key} : {values[id]}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TextCard;
