import Svg, { Path } from "react-native-svg";

function IconSuperscript({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-superscript" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M5 7l8 10m-8 0l8 -10" /><Path d="M21 11h-4l3.5 -4a1.73 1.73 0 0 0 -3.5 -2" /></Svg>;
}

export default IconSuperscript;