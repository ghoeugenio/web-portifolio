import {useState, useEffect, useRef, LegacyRef} from 'react';

export const useHover = <T>(): [LegacyRef<HTMLDivElement>, boolean] => {
	const [value, setValue] = useState<boolean>(false);
	const ref: any = useRef<T | null>(null);
	const handleMouseOver = (): void => setValue(true);
	const handleMouseOut = (): void => setValue(false);
	useEffect(() => {
		const node: any = ref.current;
		if (node) {
			node.addEventListener('mouseover', handleMouseOver);
			node.addEventListener('mouseout', handleMouseOut);
			return () => {
				node.removeEventListener('mouseover', handleMouseOver);
				node.removeEventListener('mouseout', handleMouseOut);
			};
		}
	}, [ref.current]);
	return [ref, value];
};
