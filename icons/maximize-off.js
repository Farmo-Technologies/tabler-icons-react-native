import Svg, { Path } from "react-native-svg";

function IconMaximizeOff({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-maximize-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 8v-2c0 -.551 .223 -1.05 .584 -1.412" /><Path d="M4 16v2a2 2 0 0 0 2 2h2" /><Path d="M16 4h2a2 2 0 0 1 2 2v2" /><Path d="M16 20h2c.545 0 1.04 -.218 1.4 -.572" /><Path d="M3 3l18 18" /></Svg>;
}

export default IconMaximizeOff;