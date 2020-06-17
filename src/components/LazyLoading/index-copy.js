import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
// import styles from './LazyLoading.module.scss';
import './styles.scss';

const ItemPlaceholder = styled.div`
	height: ${({ height }) => height || 400}px;
	width: ${({ height, width }) => width || 16 / 9 * ((height || 300) - 50)}px;
	/* width: calc(calc(100% / 3) - 50px); */
	margin: 25px;
	border-radius: 25px;
`;

export default ({ children }) => {
	const [ show, setShow ] = useState();
	const placeholderRef = useRef();

	useEffect(() => {
		const placeholder = placeholderRef.current;

		if (placeholder) {
			const observer = new IntersectionObserver(
				function(entries) {
					if (entries[0].isIntersecting === true) setShow(true);
					return false;
				},
				{ threshold: 0.2 },
			);
			observer.observe(placeholder);

			return () => {
				observer.unobserve(placeholder);
			};
		}
	}, []);

	if (show) {
		return (
			<CSSTransition
				in={true}
				timeout={500}
				classNames='fade'
				// classNames={{
				// 	appear       : styles['appear'],
				// 	appearActive : styles['active-appear'],
				// 	appearDone   : styles['done-appear'],
				// }}
				unmountOnExit
				appear
			>
				{children}
			</CSSTransition>
		);
	}
	return <ItemPlaceholder ref={placeholderRef} height={300} />;
};
