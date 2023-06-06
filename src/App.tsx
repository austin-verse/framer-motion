import styled from "styled-components";
import { AnimatePresence, Variants, motion } from "framer-motion";
import { useState } from "react";
const Wrapper = styled(motion.div)`
	position: relative;
	height: 100vh;
	width: 100vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: linear-gradient(135deg, rgb(238, 0, 153), rgb(140, 0, 255));
`;

const Box = styled(motion.div)`
	position: absolute;
	top: 200px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 28px;
	font-size: 700;
	width: 100px;
	height: 100px;
	background-color: rgba(255, 255, 255, 1);
	border-radius: 40px;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants: Variants = {
	invisible: {
		x: 500,
		opacity: 0,
		scale: 0,
	},
	visible: {
		x: 0,
		opacity: 1,
		scale: 1,
		transition: {
			duration: 1,
		},
	},
	exit: {
		x: -500,
		opacity: 0,
		scale: 0,
		transition: {
			duration: 1,
		},
	},
};

function App() {
	const [visible, setVisible] = useState(1);
	const nextSlideHandler = () =>
		setVisible((prev) => (prev === 10 ? 10 : prev + 1));
	const prevSlideHandler = () =>
		setVisible((prev) => (prev === 1 ? 1 : prev - 1));
	return (
		<Wrapper>
			<AnimatePresence>
				{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function (a, i) {
					return a === visible ? (
						<Box
							variants={boxVariants}
							initial="invisible"
							animate="visible"
							exit="exit"
							key={a}
						>
							{a}
						</Box>
					) : null;
				})}
			</AnimatePresence>
			<button onClick={prevSlideHandler}>prev</button>
			<button onClick={nextSlideHandler}>next</button>
		</Wrapper>
	);
}
export default App;
