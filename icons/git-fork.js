import Svg, { Path, Circle, Line } from "react-native-svg";

function IconGitFork({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-git-fork" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={18} r={2} /><Circle cx={7} cy={6} r={2} /><Circle cx={17} cy={6} r={2} /><Path d="M7 8v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2 -2v-2" /><Line x1={12} y1={12} x2={12} y2={16} /></Svg>;
}

export default IconGitFork;