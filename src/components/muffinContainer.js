import React from "react";
import { buyMuffin } from "../redux/muffin/muffinActions";
import { connect } from "react-redux";

const MuffinContainer = (props) => {
  return (
    <div>
      <h2>Number of muffins - {props.numOfMuffins}</h2>
      <button onClick={props.buyMuffin}>Buy a muffin</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfMuffins: state.muffin.numOfMuffins,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyMuffin: () => dispatch(buyMuffin()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MuffinContainer);
