"use client";
import girls from "@/app/pcmax/prof.json";
import Footer from "@/app/pcmax/prof/footer";
import Image from "next/image";
import React, { FC } from "react";

type ProfProps = {};

const Prof: FC<ProfProps> = (props) => {
	return (
		<>
			<header className="fixed left-0 right-0 top-0 z-50 w-full border-b border-gray-300">
				<Image
					className="image-fit"
					src={`/images/_header_prof_icon.png?ab`}
					alt="メッセージヘッダー"
					fill
					priority
				/>
			</header>
			<main className="min-h-screen">
				<div className="h-100vh w-100vw relative overflow-hidden">
					<ul className="w-700% h-100vh l- absolute left-0 top-0 flex" id="girlScroll">
						{girls.map((item) => (
							<li key={item.id} className="w-100vw h-100vh overflow-hidden">
								<div className="relative flex w-full  border-b border-gray-300">
									<Image
										className="image-fit"
										src={`/images/_header_prof.png`}
										alt="プロフヘッダー"
										fill
										priority
									/>
									<div className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center">
										<span className="block pt-2 text-4.5vw font-bold text-pink-500">
											{item.name}
										</span>
									</div>
								</div>
								<div className="h-100vw relative w-full">
									<Image
										className="block"
										src={`/images/prof/prof_${item.id}.jpg`}
										alt="Next.js"
										priority
										fill
									/>
									<div className="h-20vw absolute bottom-0 left-0 right-0 flex items-end pb-4 pl-4">
										<div className="text-3.5vw text-white">
											<span className="pr-2">{item.age}歳</span>
											<span>{item.area}</span>
										</div>
									</div>
								</div>
								<div className="relative mx-4 my-3 flex">
									{typeof item.snap === "number" &&
										item.snap > 0 &&
										Array.from({ length: item.snap }, (_, index) => index + 1).map((index) => (
											<React.Fragment key={`${item.id}-${index}`}>
												{index > 1}
												<span className="h-17vw w-17vw relative mr-2">
													<Image
														className="block rounded-lg"
														src={`/images/prof/prof_${item.id}-${index}.jpg`}
														alt="Next.js"
														sizes="200"
														fill
														priority
													/>
												</span>
											</React.Fragment>
										))}
								</div>
								<div className="mx-5 mb-4 mt-6 border-b border-black pb-2 text-4.5vw font-bold">
									自己紹介
								</div>
								<div className="mx-4 my-5 block text-4vw text-gray-500">
									{item.message.split("¥n").map((line, index) => (
										<React.Fragment key={`${item.id}-${index}`}>
											{index > 0 && <br />}
											{line}
										</React.Fragment>
									))}
								</div>
							</li>
						))}
					</ul>
				</div>
			</main>
			<Footer />
		</>
	);
};

export default Prof;
