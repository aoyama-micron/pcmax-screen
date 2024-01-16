import girls from "@/app/pcmax/message.json";
import Footer from "@/app/pcmax/message/footer";
import Header from "@/app/pcmax/message/header";
import type { Metadata } from "next";
import Image from "next/image";
import { FC } from "react";

type MessageProps = {};

const shuffle = (array: any[]) => {
	let currentIndex = array.length,
		randomIndex;
	while (currentIndex != 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;
		[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
	}
	return array;
};

export const metadata: Metadata = {
	title: "PCMAXメッセージ画面",
	description: "PCMAXメッセージ画面",
};

const Message: FC<MessageProps> = (props) => {
	const shuffledGirls = shuffle(girls);

	let seektime = new Date(new Date().getTime() + 10 * 60 * 60 * 1000);
	return (
		<>
			<Header />
			<main className="min-h-screen pb-5">
				<ul className="">
					{girls.map((item) => {
						const randomMinutes = Math.floor(Math.random() * 5 + 2);
						seektime = new Date(seektime.getTime() - randomMinutes * 60000);
						const formattedTime = seektime.toLocaleString("ja-JP", {
							month: "numeric",
							day: "2-digit",
							hour: "2-digit",
							minute: "2-digit",
						});

						return (
							<li
								key={item.id}
								className="relative flex items-stretch justify-center overflow-hidden border-b px-3 py-3"
							>
								<div className="w-19vw flex-0-0-19vw mr-3">
									<Image
										className="block rounded-full"
										src={`/images/${item.id}.jpg`}
										width={200}
										height={200}
										alt="Next.js"
									/>
								</div>
								<div className="flex-1-1-100% pt-1">
									<div className="text-3.2vw leading-1.2em flex justify-between">
										<span className="text-pink-500">{item.name}</span>
										<span className="text-3vw text-gray-400">{formattedTime}</span>
									</div>
									<div className="text-3.2vw text-gray-400">
										{item.area} | {item.age}歳
									</div>
									<div className="text-3.5vw font-bold text-pink-500">メッセージが届いています。</div>
								</div>
								<div className="flex-0-0-5vw flex items-center justify-center">
									<i className="icon-svg arrow-r"></i>
								</div>
								<span className="new-label"></span>
							</li>
						);
					})}
				</ul>
			</main>
			<Footer />
		</>
	);
};

export default Message;
