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

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	width: 50vw;
	gap: 10px;
	div:first-child,
	div:last-child {
		grid-column: span 2;
	}
`;

const Box = styled(motion.div)`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 28px;
	font-size: 700;
	height: 200px;
	background-color: rgba(255, 255, 255, 1);
	border-radius: 40px;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Overlay = styled(motion.div)`
	width: 100%;
	height: 100%;
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
`;
function App() {
	const [clicked, setClicked] = useState(false);
	const [clickedBoxNumber, setClickedBoxNumber] = useState<null | string>(null);
	const toggleClickHandler = () => setClicked(!clicked);
	const clickedBoxHandler = (num: string) => {
		setClickedBoxNumber(num);
		toggleClickHandler();
	};
	return (
		<Wrapper>
			<Grid>
				<Box
					layoutId="1"
					onClick={() => {
						clickedBoxHandler("1");
					}}
				/>
				<Box
					layoutId="2"
					onClick={() => {
						clickedBoxHandler("2");
					}}
				/>
				<Box
					layoutId="3"
					onClick={() => {
						clickedBoxHandler("3");
					}}
				/>
				<Box
					layoutId="4"
					onClick={() => {
						clickedBoxHandler("4");
					}}
				/>
			</Grid>
			{clickedBoxNumber === null ? null : (
				<AnimatePresence>
					{clicked ? (
						<Overlay
							initial={{ backgroundColor: "rgba(0, 0, 0, 0.0)" }}
							animate={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
							exit={{ backgroundColor: "rgba(0, 0, 0, 0.0)" }}
						>
							<Box
								style={{ width: 400, height: 200 }}
								layoutId={clickedBoxNumber}
								onClick={toggleClickHandler}
							/>
						</Overlay>
					) : null}
				</AnimatePresence>
			)}
		</Wrapper>
	);
}
export default App;
