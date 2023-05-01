import { useEffect, useState } from "react";
import Header from "../components/Organisms/Header";
import api from "../utils/api";
import styled from "styled-components";
import Search from "../components/Molecules/Search";
import ModalBottom from "../components/Molecules/ModalBottom";

const Container = styled.div`
	display: flex;
`;

function Home() {
	return (
		<>
			<ModalBottom />
		</>
	);
}

export default Home;
