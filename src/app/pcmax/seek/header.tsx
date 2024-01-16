"use client";
import Image from "next/image";
import React from "react";

const Header: React.FC = () => {
	return (
		<>
			<header className="fixed left-0 right-0 top-0 z-50 w-full border-b border-gray-300">
				<Image
					className="image-fit relative"
					src={`/images/_header_seek.png`}
					alt="募集ヘッダー"
					fill
					priority
				/>
				<button
					className="absolute right-0 top-0 h-full w-full bg-transparent"
					onClick={() => {
						location.reload();
					}}
				></button>
			</header>
			<div className="relative h-auto w-full">
				<Image className="image-fit" src={`/images/_header_dummy.png`} alt="募集ヘッダーダミー" fill priority />
			</div>
		</>
	);
};

export default Header;
