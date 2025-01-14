import Svg, { Path } from "react-native-svg";

function IconStack3({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-stack-3" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 2l-8 4l8 4l8 -4l-8 -4" /><Path d="M4 10l8 4l8 -4" /><Path d="M4 18l8 4l8 -4" /><Path d="M4 14l8 4l8 -4" /></Svg>;
}

export default IconStack3;