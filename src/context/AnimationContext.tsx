import { SetStateAction, createContext, useState } from 'react';

export const AnimationsContext = createContext([false, {} as unknown]);

export const NoAnimationsProvider: React.FC<any> = ({ children }) => {
	const [noAnimations, setNoAnimations] = useState(false);

	return (
		<AnimationsContext.Provider value={[noAnimations, setNoAnimations]}>
			{children}
		</AnimationsContext.Provider>
	);
};