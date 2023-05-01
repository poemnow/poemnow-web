// 반응형 디자인을 위해 px을 rem으로 전환
const pixelToRem = (pixel) => `${pixel / 10}rem`;

const fontSize = {
	h1: pixelToRem(64),
	h2: pixelToRem(48),
};

const color = {
	primary: "green",
	secondary: "red",
	ground: "#1e1e1e",
};

const padding = {
	xs: pixelToRem(4),
	sm: pixelToRem(8),
	md: pixelToRem(16),
	lg: pixelToRem(32),
	xl: pixelToRem(64),
};

const theme = {
	fontSize,
	color,
	padding,
};

export default theme;
