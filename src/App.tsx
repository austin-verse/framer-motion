import styled from "styled-components";
import { motion } from "framer-motion";
const Wrapper = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Box = styled(motion.div)`
	width: 200px;
	height: 200px;
	background-color: rgba(255, 255, 255, 0.2);
	border-radius: 15px;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const myVariants = {
	start: { scale: 0 },
	end: { scale: 1, rotateZ: 360, transition: { type: "spring", delay: 0.5 } },
};

function App() {
	return (
		<Wrapper>
			<Box variants={myVariants} initial="start" animate="end"></Box>
		</Wrapper>
	);
}

export default App;
// 기존엔 Box의 props에 애니메이션이 설정됨
// Varient를 통해 컴포넌트 코드 간단히 함 -
// Varient는 애니메이션의 무대라고 할 수 있음
// e.g. initial, finish, showing, hidden, from, to, 0%, 100% 등
