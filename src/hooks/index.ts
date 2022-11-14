import {useState, useCallback, useEffect, useRef, LegacyRef} from 'react';

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

export const useToggle = (initialState: boolean = false): [boolean, any] => {
	const [state, setState] = useState<boolean>(initialState);

	const toggle = useCallback((): void => setState((state) => !state), []);

	return [state, toggle];
};
