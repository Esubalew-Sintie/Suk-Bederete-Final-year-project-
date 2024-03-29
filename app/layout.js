import React from "react";
import ClientLayout from "./ClientLayout";
import {Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
	title: "Suk-Bederete",
	description: "ecommerce application",
};

export default function RootLayout({children}) {
	return (
		<html lang="en" suppressHydrationWarning={true}>
			<body className={inter.className}>
				<div className=" flex flex-col w-full min-h-screen">
					<div id="page-transition"></div>

					<ClientLayout>{children}</ClientLayout>
				</div>
			</body>
		</html>
	);
}
