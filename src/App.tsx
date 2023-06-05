import styled from "styled-components";
import { motion, Variants } from "framer-motion";
const Wrapper = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Box = styled(motion.div)`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	width: 200px;
	height: 200px;
	background-color: rgba(255, 255, 255, 0.2);
	border-radius: 40px;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
	background-color: white;
	place-self: center;
	height: 70px;
	width: 70px;
	border-radius: 35px;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants: Variants = {
	start: { scale: 0.5, opacity: 0 },
	end: {
		scale: 1,
		opacity: 1,
		transition: {
			type: "spring",
			duration: 1,
			bounce: 0.5,
			// 자식 컴포넌트에 transition: {delay:  0.5} 부여 - 1번째 자식은 staggerChildren이 적용되지 않기 때문에 delayChildren으로 전체 자식들 0.5초씩 딜레이 추가
			delayChildren: 0.5,
			staggerChildren: 0.5,
		},
	},
};

const circleVariants: Variants = {
	start: {
		opacity: 0,
		// 애니메이션 실행 전 initial y축 좌표
		y: 10,
	},
	end: {
		opacity: 1,
		// 애니메이션 실행 후 종료되는 y축 좌표
		y: 0,
		transition: { duration: 1 },
	},
};

function App() {
	return (
		<Wrapper>
			<Box variants={boxVariants} initial="start" animate="end">
				<Circle variants={circleVariants} />
				<Circle variants={circleVariants} />
				<Circle variants={circleVariants} />
				<Circle variants={circleVariants} />
			</Box>
		</Wrapper>
	);
}

export default App;
