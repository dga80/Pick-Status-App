import { useState } from "react";
import s from "./style.module.css";

export const MenuListItem = (props) => {
  const [isHovered, setIsHover] = useState(false);

  function activate() {
    setIsHover(true);
  }
  function desactivate() {
    setIsHover(false);
  }
  function getBackgroundColor (){
    if (isHovered){
        return "#a5e9ff";
    } else {
      if (props.isSelected){
        return "#26baea";
      } else {
        return "#eff0ef";
      }
    }
  };
  const onItemClick = () => {
    props.onClick(props.difficulty)
  }
  return (
    <div 
    onClick={onItemClick}
    className={s.container}
    onMouseEnter={activate} 
    onMouseLeave={desactivate}
    style = {{ backgroundColor: getBackgroundColor() }}>
      Set to : {props.difficulty}
    </div>
  );
};
