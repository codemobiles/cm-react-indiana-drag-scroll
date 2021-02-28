import { Ref, MouseEvent, Component, CSSProperties, ReactNode, ElementType } from 'react';

export interface ScrollContainerProps {
	vertical?: boolean;
	horizontal?: boolean;
	hideScrollbars?: boolean;
	activationDistance?: number;
	children?: ReactNode;
	onStartScroll?: (event: ScrollEvent) => void;
	onScroll?: (event: ScrollEvent) => void;
	onEndScroll?: (event: ScrollEvent) => void;
	onClick?: (event: MouseEvent) => void;
	className?: string;
	style?: CSSProperties;
	ignoreElements?: string;
	nativeMobileScroll?: boolean;
	ref?: ReactNode;
	component?: ElementType;
	innerRef?: Ref<HTMLElement>;
	stopPropagation?: boolean;
}

export default class ScrollContainer extends Component<ScrollContainerProps> {
	getElement: () => HTMLElement;
}
