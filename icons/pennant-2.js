import Svg, { Path } from "react-native-svg";

function IconPennant2({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pennant-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M16 21h-4" /><Path d="M14 21v-18" /><Path d="M14 4l-9 4l9 4" /></Svg>;
}

export default IconPennant2;