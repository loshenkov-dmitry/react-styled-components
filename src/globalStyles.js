import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

#root {
	display: flex;
	justify-content: center;
}

.App {
	width: 800px;
	padding: 0 15px 15px;
}
`;

export default GlobalStyle;
