import Svg, { Path, Circle } from "react-native-svg";

function IconBabyCarriage({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-baby-carriage" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={8} cy={19} r={2} /><Circle cx={18} cy={19} r={2} /><Path d="M2 5h2.5l1.632 4.897a6 6 0 0 0 5.693 4.103h2.675a5.5 5.5 0 0 0 0 -11h-.5v6" /><Path d="M6 9h14" /><Path d="M9 17l1 -3" /><Path d="M16 14l1 3" /></Svg>;
}

export default IconBabyCarriage;