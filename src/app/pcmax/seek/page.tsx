import girls from "@/app/pcmax/message.json";
import Footer from "@/app/pcmax/message/footer";
import Header from "@/app/pcmax/message/header";
import type { Metadata } from "next";
import Image from "next/image";
import { FC } from "react";

type SeekProps = {};

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
	title: "PCMAX募集掲示板画面",
	description: "PCMAX募集掲示板画面",
};

const Seek: FC<SeekProps> = (props) => {
	const shuffledGirls = shuffle(girls);
	let seektime = new Date();

	return (
		<>
			<Header />
			<main className="min-h-screen pb-5 pt-1">
				<ul className="">
					{girls.map((item) => {
						const randomMinutes = Math.floor(Math.random() * 8 + 3);
						seektime = new Date(seektime.getTime() - randomMinutes * 60000);
						const formattedTime = seektime.toLocaleString("ja-JP", {
							month: "long",
							day: "numeric",
							hour: "numeric",
							minute: "numeric",
						});
						return (
							<li key={item.id} className="flex border-b px-3 py-4">
								<div className="flex-0-0-22vw mr-3 w-22vw">
									<Image
										className="block rounded"
										src={`/images/${item.id}.jpg`}
										width={200}
										height={200}
										alt="Next.js"
										priority
									/>
								</div>
								<div className="flex-1-1-100% flex flex-col justify-between leading-1.1em">
									<div className="flex w-full items-center justify-between">
										<label htmlFor="" className={`seek-label type-${item.stat}`}></label>
										<span className="seek-eye text-2.8vw text-gray-400">
											<span className="pr-2">{formattedTime}</span>
											{item.view}
										</span>
									</div>
									<p className="text-3.5vw font-bold text-pink-500">{item.message}</p>
									<div className="flex text-3.2vw">
										<span className="pr-2">{item.name}</span>
										<span className="pr-2">{item.age}歳</span>
										<span className="area">{item.area}</span>
									</div>
								</div>
							</li>
						);
					})}
				</ul>
			</main>
			<Footer />
		</>
	);
};

export default Seek;
