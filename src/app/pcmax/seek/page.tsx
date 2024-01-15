import girls from "@/app/pcmax/girls.json";
import Footer from "@/app/pcmax/seek/footer";
import Header from "@/app/pcmax/seek/header";
import type { Metadata } from "next";
import Image from "next/image";
import { FC } from "react";

type SeekProps = {};

export const metadata: Metadata = {
	title: "PCMAX募集掲示板画面",
	description: "PCMAX募集掲示板画面",
};

const Seek: FC<SeekProps> = (props) => {
	return (
		<>
			<Header />
			<main className="min-h-screen py-5">
				<ul className="mx-3 grid grid-cols-2">
					{girls.map((item) => (
						<li key={item.id} className="mx-3 mb-1">
							<div className="relative">
								<Image
									className="block rounded-full"
									src={`/images/${item.id}.jpg`}
									width={200}
									height={200}
									alt="Next.js"
								/>
								<div className="h-16 px-1 pt-1 text-gray-700">
									<b className="block pb-1 text-xs text-pink-500">
										<span className="pr-2">{item.age}歳</span>
										{item.area}
									</b>
									<span className="block text-xs leading-tight">
										{item.message.length > 20 ? item.message.slice(0, 20) + "…" : item.message}
									</span>
									{item.stat === 1 ? (
										<label className="imahima flex h-11 w-11 items-center justify-center rounded-full bg-orange-500 text-sm leading-none text-white">
											いま
											<br />
											ヒマ
										</label>
									) : (
										""
									)}
								</div>
							</div>
						</li>
					))}
				</ul>
			</main>
			<Footer />
		</>
	);
};

export default Seek;
