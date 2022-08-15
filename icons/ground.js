import Svg, { Path } from "react-native-svg";

function IconGround({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-ground" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 13v-8" /><Path d="M4 13h16" /><Path d="M7 16h10" /><Path d="M10 19h4" /></Svg>;
}

export default IconGround;