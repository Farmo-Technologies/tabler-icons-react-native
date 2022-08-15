import Svg, { Path, Line } from "react-native-svg";

function IconHash({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-hash" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Line x1={5} y1={9} x2={19} y2={9} /><Line x1={5} y1={15} x2={19} y2={15} /><Line x1={11} y1={4} x2={7} y2={20} /><Line x1={17} y1={4} x2={13} y2={20} /></Svg>;
}

export default IconHash;