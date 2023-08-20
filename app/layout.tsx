import { Providers } from "./providers";

import "@/styles/globals.css";

// import '../public/ico.png'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<title>Movie App</title>
				<link rel="icon" href="https://www.kindpng.com/picc/m/57-571833_peliculas-icono-png-cine-png-icon-transparent-png.png" />
			</head>
			<body>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>

					{children}

				</Providers>
			</body>
		</html>
	);
}
