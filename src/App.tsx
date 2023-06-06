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
	entry: (back: boolean) => ({
		x: back ? -500 : 500,
		opacity: 0,
		scale: 0,
	}),
	center: {
		x: 0,
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.3,
		},
	},
	exit: (back: boolean) => ({
		x: back ? 500 : -500,
		opacity: 0,
		scale: 0,
		transition: {
			duration: 0.3,
		},
	}),
};

function App() {
	const [visible, setVisible] = useState(1);
	const [back, setBack] = useState(false);
	const nextSlideHandler = () => {
		setBack(false);
		setVisible((prev) => (prev === 10 ? 10 : prev + 1));
	};
	const prevSlideHandler = () => {
		setBack(true);
		setVisible((prev) => (prev === 1 ? 1 : prev - 1));
	};
	return (
		<Wrapper>
			{/* animatePresence에도 custom을 props로 넣어줘야함 */}
			{/* mode="wait"을 하면 exit애니메이션이 끝나고 나서(이전 element exit animation duration이 끝난 후) initial애니메이션이 실행됨(next element이 돌아옴) */}
			<AnimatePresence mode="wait" custom={back}>
				<Box
					custom={back}
					variants={boxVariants}
					initial="entry"
					animate="center"
					exit="exit"
					// React는 key값을 통해 각각의 박스가 unique하다고 생각함
					// key를 바꾸면 React는 이전 element가 사라지고 새 element가 생겼다고 인식 - mount, unmount를 AnimatePresence가 인식하게 해줌
					// Key를 통해 조건문 없이도 AnimatePresence를 사용할 수 있게 됨
					// key를 바꿔주는 것 만으로도 React가 element가 사라졌다는걸 인식함 - exit애니메이션이 실행
					// *key를 바꿔주면 React 리랜더됨 - 새 컴포넌트가 생겼다고 생각함
					// React가 이전  컴포넌트를 삭제하고 새로운 것을 보여주는 곳에는 initial, animate, exit 이 세가지의 에니메이션이 모두 실행됨
					key={visible}
				>
					{visible}
				</Box>
			</AnimatePresence>
			<button onClick={prevSlideHandler}>prev</button>
			<button onClick={nextSlideHandler}>next</button>
		</Wrapper>
	);
}
export default App;

// custom  : Variants에 데이터를 보낼 수 있게 해주는 property
// custom을 통해 variants를 변경할 수 있음
// custom value를 variants를 상요하고 싶다면 variants를 object를 ㄱ리턴하는 함수로 변경해야함
