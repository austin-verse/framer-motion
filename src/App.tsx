import styled from "styled-components";
import { motion, useMotionValue, useTransform, Variants } from "framer-motion";
const Wrapper = styled(motion.div)`
	height: 100vh;
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
	background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
`;

const Box = styled(motion.div)`
	width: 200px;
	height: 200px;
	background-color: rgba(255, 255, 255, 1);
	border-radius: 40px;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
	const x = useMotionValue(0);
	const scale = useTransform(x, [-800, 0, 800], [2, 1, 0.1]);
	const rotate = useTransform(x, [-800, 800], [-360, 360]);
	const backgroundGradient = useTransform(
		x,
		[-800, 0, 800],
		[
			"linear-gradient(135deg, rgb(0, 210, 238), rgb(0, 83, 238))",
			"linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238))",
			"linear-gradient(135deg, rgb(63, 255, 63), rgb(214, 255, 168))",
		]
	);
	const boxGradient = useTransform(
		x,
		[-800, 0, 800],
		["rgb(189, 13, 13)", "rgb(18, 206, 115)", "rgb(10, 42, 222)"]
	);
	return (
		<Wrapper style={{ background: backgroundGradient }}>
			<Box
				style={{ x: x, scale: scale, rotate: rotate, background: boxGradient }}
				drag="x"
				dragSnapToOrigin
			/>
		</Wrapper>
	);
}
export default App;
