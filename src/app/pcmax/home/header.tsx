import React from "react";

const Header: React.FC = () => {
	return (
		<header className="header fixed left-0 right-0 top-0 z-50 border-b border-gray-300">
			{/* <Image className="relative block w-full object-contain" src={`/images/_header.png`} alt="ヘッダー" fill /> */}
			<img src="/images/_header.png" alt="ヘッダー" className="block w-full" />
		</header>
	);
};

export default Header;
