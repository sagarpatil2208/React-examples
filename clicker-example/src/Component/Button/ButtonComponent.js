import React from "react";

function ButtonComponent(props) {
  const styles = {
    buttonStyle: {
      backgroundColor: props.color,
      height: 150,
      width: 170,
    },
  };

  return (
    <div>
      <button onClick={props.onclick} style={styles.buttonStyle}>
        <Icon type={props.icon} />
      </button>
    </div>
  );
}
function Icon({ type }) {
  return (
    <div>
      <img src={type} alt="" />
    </div>
  );
}
export default ButtonComponent;
