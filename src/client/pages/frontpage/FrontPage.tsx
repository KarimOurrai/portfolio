import { FC, Key } from "react";


const FrontPage : FC<any> = ({ children = 'No Text.', ...props }) => {
    const words = children.split(' ');

	return (
		<div  {...props}>
			{words.map((word: string, i: Key | null | undefined) => (
				<span key={i}>
					{word.split('').map((char, i) => (
						<span key={i}>
							<span className="animate-bounce hover:text-purple-300">{char}</span>
						</span>
					))}
					&nbsp;
				</span>
			))}
		</div>
	);
}

export default FrontPage;