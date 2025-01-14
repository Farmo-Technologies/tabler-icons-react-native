import Svg, { Path, Circle } from "react-native-svg";

function IconArrowRotaryLastLeft({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-rotary-last-left" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle transform="matrix(-1 0 0 1 30 0)" cx={15} cy={12} r={3} /><Path d="M15 15v6" /><Path d="M12.5 9.5l-6.5 -6.5" /><Path d="M11 3h-5v5" /></Svg>;
}

export default IconArrowRotaryLastLeft;