import Svg, { Path } from "react-native-svg";

function IconMessageCircle2({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-message-circle-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" /></Svg>;
}

export default IconMessageCircle2;