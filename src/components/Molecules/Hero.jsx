import styled from "styled-components";
import H2 from "../Atoms/H2";
import H3 from "../Atoms/H3";

const HeroContainer = styled.div`
	position: relative;
`;

const HeroImg = styled.div`
	width: 100%;
	height: 300px;
	background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
		url("https://images.unsplash.com/photo-1682687982183-c2937a74257c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80");
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	position: relative;
`;

const HeroText = styled.div`
	text-align: center;
	position: absolute;
	transform: translate(-50%, -50%);
	top: 50%;
	left: 50%;
	color: white;
`;

function Hero() {
	return (
		<HeroContainer>
			<HeroImg>
				<HeroText>
					<H2>main copy</H2>
					<H3>sub copy</H3>
				</HeroText>
			</HeroImg>
		</HeroContainer>
	);
}

export default Hero;
