import Svg, { Path } from "react-native-svg";

function IconLamp({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-lamp" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M9 20h6" /><Path d="M12 20v-8" /><Path d="M5 12h14l-4 -8h-6z" /></Svg>;
}

export default IconLamp;