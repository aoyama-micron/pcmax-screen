import Image from "next/image";
import React from "react";

const Footer: React.FC = () => {
	return (
		<>
			<div className="relative h-auto w-full">
				<Image className="image-fit" src={`/images/_footer_dummy.png`} alt="フッターダミー" fill priority />
			</div>
			<footer className="fixed bottom-0 left-0 right-0 z-50 w-full border-t border-gray-300">
				<Image className="image-fit" src={`/images/_footer_seek.png`} alt="メッセージフッター" fill priority />
			</footer>
		</>
	);
};

export default Footer;
