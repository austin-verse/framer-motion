import styled from "styled-components";
import { AnimatePresence, Variants, motion } from "framer-motion";
import { useState } from "react";
const Wrapper = styled(motion.div)`
	position: relative;
	height: 100vh;
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
	background: linear-gradient(135deg, rgb(238, 0, 153), rgb(140, 0, 255));
`;

const Box = styled(motion.div)`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 28px;
	font-size: 700;
	width: 200px;
	height: 200px;
	background-color: rgba(255, 255, 255, 1);
	border-radius: 40px;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
	background-color: #00a5ff;
	width: 50px;
	height: 50px;
	border-radius: 50px;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
function App() {
	const [clicked, setClicked] = useState(false);
	const toggleClickHandler = () => setClicked(!clicked);
	return (
		<Wrapper onClick={toggleClickHandler}>
			<Box>
				{!clicked ? (
					<Circle layoutId="1" style={{ borderRadius: 50, scale: 1 }} />
				) : null}
			</Box>
			<Box>
				{clicked ? (
					<Circle layoutId="1" style={{ borderRadius: 0, scale: 2 }} />
				) : null}
			</Box>
		</Wrapper>
	);
}
export default App;
