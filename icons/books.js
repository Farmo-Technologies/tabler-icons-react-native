import Svg, { Path, Rect } from "react-native-svg";

function IconBooks({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-books" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={5} y={4} width={4} height={16} rx={1} /><Rect x={9} y={4} width={4} height={16} rx={1} /><Path d="M5 8h4" /><Path d="M9 16h4" /><Path d="M13.803 4.56l2.184 -.53c.562 -.135 1.133 .19 1.282 .732l3.695 13.418a1.02 1.02 0 0 1 -.634 1.219l-.133 .041l-2.184 .53c-.562 .135 -1.133 -.19 -1.282 -.732l-3.695 -13.418a1.02 1.02 0 0 1 .634 -1.219l.133 -.041z" /><Path d="M14 9l4 -1" /><Path d="M16 16l3.923 -.98" /></Svg>;
}

export default IconBooks;