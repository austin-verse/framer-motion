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
	width: 200px;
	height: 200px;
	background-color: rgba(255, 255, 255, 1);
	border-radius: 40px;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants: Variants = {
	initial: { opacity: 0, scale: 0 },
	visible: { opacity: 1, scale: 1, rotateZ: 360 },
	leaving: { opacity: 0, scale: 0, y: 50 },
};

function App() {
	const [showing, setShowing] = useState(false);
	const showingHandler = () => {
		setShowing(!showing);
	};
	return (
		<Wrapper>
			<AnimatePresence>
				{showing ? (
					<Box
						variants={boxVariants}
						initial="initial"
						animate="visible"
						// 박스가 사라질 때 하는 행동
						exit="leaving"
					/>
				) : null}
			</AnimatePresence>
			<button
				style={{ position: "absolute", marginTop: 300 }}
				onClick={showingHandler}
			>
				Click me
			</button>
		</Wrapper>
	);
}
export default App;

// AnimatePresence
// ReactJS어플에서 사라지는 콤퍼넌트를 에니메이션함
// 리액트 트리에서 컴포넌트가 제거될 때 제거되는 컴포넌트에 애니메이션 효과를 줄 수 있음
// 컴포넌트가 마운트되거나 언마운트될 때 애니메이션을 처리,ㅣ

// Box가 사라질 때 Box를 animate

// AnimatePresence는 visible상태여야함 - AnimatePresence의 내부에는 조건문이 존재하여야함
// AP는 자신의 안에 나타나거나 사라지는 것이 있다면 그것을 animate할 수 있도록 해줌

// exit : 이 element가 사라질 때 어떤 애니메이션을 발생시키는 지를 정함
