import {Fragment} from "react";

const NamesAndIcons = (props) => {
  const clickBtnHandler = () => {
    props.getIndex(props.index)
  }

  return (
    <Fragment>
      <img src={props.icon} alt="icon" />
      <button
        onClick= {clickBtnHandler}
        type="button">{props.name}</button>
    </Fragment>
  );
};

export default NamesAndIcons;
