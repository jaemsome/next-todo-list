import { Inter } from "next/font/google";
import "./globals.css";
import LayoutContent from "./layoutcontent";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Todo List Test",
	description: "Todo List Test with NextJS",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head></head>
			<body className={inter.className}>
				<LayoutContent>{children}</LayoutContent>
			</body>
		</html>
	);
}
