import girls from "@/app/pcmax/seek.json";
import Footer from "@/app/pcmax/seek/footer";
import Header from "@/app/pcmax/seek/header";
import type { Metadata } from "next";
import Image from "next/image";
import { FC } from "react";

type SeekProps = {};

// ランダムにgirls[]の中身をシャッフルする関数
function shuffle(array: any[]) {
	let currentIndex = array.length,
		randomIndex;

	// まだシャッフルされていない要素がある限り
	while (currentIndex != 0) {
		// ランダムなインデックスを選ぶ
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// 現在の要素とランダムに選んだ要素を入れ替える
		[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
	}

	return array;
}

export const metadata: Metadata = {
	title: "PCMAX募集掲示板画面",
	description: "PCMAX募集掲示板画面",
};

const Seek: FC<SeekProps> = (props) => {
	const shuffledGirls = shuffle(girls); // girls[]をシャッフルする
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
								<div className="w-22vw flex-0-0-22vw mr-3">
									<Image
										className="block rounded"
										src={`/images/${item.id}.jpg`}
										width={200}
										height={200}
										alt="Next.js"
									/>
								</div>
								<div className="leading-1.1em flex-1-1-100% flex flex-col justify-between">
									<div className="flex w-full items-center justify-between">
										<label htmlFor="" className={`seek-label type-${item.stat}`}></label>
										<span className="seek-eye text-2.8vw text-gray-400">
											<span className="pr-2">{formattedTime}</span>
											{item.view}
										</span>
									</div>
									<p className="text-3.5vw font-bold text-pink-500">{item.message}</p>
									<div className="text-3.2vw flex">
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
