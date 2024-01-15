import Link from 'next/link';
import { FC } from 'react';

type TopProps = {};

const Top: FC<TopProps> = (props) => {
	let pcmax_json = [
		{
			id: 'home',
			link: '/pcmax/home',
			name: 'ホーム',
		},
		{
			id: 'prof',
			link: '/pcmax/prof',
			name: 'プロフィール',
		},
		{
			id: 'seek',
			link: '/pcmax/seek',
			name: '募集掲示板',
		},
		{
			id: 'message',
			link: '/pcmax/message',
			name: 'メッセージ',
		},
	];
	return (
		<>
			<div className="py-10">
				<ul className="text-1.1em mx-auto mb-10">
					{pcmax_json.map((item) => (
						<li key={item.id} className="mx-3 mb-3">
							<Link href={item.link} className="btn pink">
								{item.name}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default Top;
