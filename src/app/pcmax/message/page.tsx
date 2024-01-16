import girls from "@/app/pcmax/message.json";
import Footer from "@/app/pcmax/message/footer";
import Header from "@/app/pcmax/message/header";
import type { Metadata } from "next";
import Image from "next/image";
import { FC } from "react";

type MessageProps = {};

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
	title: "PCMAXメッセージ画面",
	description: "PCMAXメッセージ画面",
};

const Message: FC<MessageProps> = (props) => {
	const shuffledGirls = shuffle(girls); // girls[]をシャッフルする
	return (
		<>
			<Header />
			<main className="min-h-screen py-5">
				<ul className="">
					{shuffledGirls.map((item) => (
						<li key={item.id} className="mx-3 mb-1">
							<Image
								className="block rounded-full"
								src={`/images/${item.id}.jpg`}
								width={200}
								height={200}
								alt="Next.js"
							/>
						</li>
					))}
				</ul>
			</main>
			<Footer />
		</>
	);
};

export default Message;
