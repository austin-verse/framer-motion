import styled from "styled-components";
import { motion, useMotionValue, Variants } from "framer-motion";
import { useEffect } from "react";
const Wrapper = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const BiggerBox = styled.div`
	width: 600px;
	height: 600px;
	background-color: rgba(255, 255, 255, 0.3);
	border-radius: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
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
	// 현재 MotionValue값 출력
	useEffect(() => {
		x.onChange(() => console.log(x.get()));
	}, [x]);
	return (
		<Wrapper>
			<button
				onClick={() => {
					// MotionValue값 업데이트
					x.set(200);
				}}
			>
				Update!
			</button>
			<Box style={{ x: x }} drag="x" dragSnapToOrigin />
		</Wrapper>
	);
}

export default App;
