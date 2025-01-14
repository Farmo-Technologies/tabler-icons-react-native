import Svg, { Path } from "react-native-svg";

function IconArrowMoveRight({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-move-right" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M11 12h10" /><Path d="M18 9l3 3l-3 3" /><Path d="M7 12a2 2 0 1 1 -4 0a2 2 0 0 1 4 0z" /></Svg>;
}

export default IconArrowMoveRight;