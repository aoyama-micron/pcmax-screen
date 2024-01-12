import Image from "next/image";
import React from "react";

const Header: React.FC = () => {
	return (
		<>
			<header className="fixed left-0 right-0 top-0 z-50 w-full border-b border-gray-300">
				<Image className="image-fit" src={`/images/_header.png`} alt="ヘッダー" fill />
			</header>
			<div>
				<Image className="image-fit" src={`/images/_header_dummy.png`} alt="ヘッダーダミー" fill />
			</div>
		</>
	);
};

export default Header;
