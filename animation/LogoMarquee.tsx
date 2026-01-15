"use client";

import { TlogoMarqueeProps } from "@/types";
import {
	motion,
	useMotionValue,
	useAnimationFrame,
	useTransform,
	wrap,
} from "framer-motion";

export default function LogoMarquee({
	children,
	baseVelocity = 55, // adjust speed here
}: TlogoMarqueeProps) {
	// Raw motion value
	const baseX = useMotionValue(0);

	// Wrap it into percentage range
	const x = useTransform(baseX, (v) => `${wrap(-45, -20, v)}%`);

	useAnimationFrame((_, delta) => {
		// Constant movement (LEFT → RIGHT)
		baseX.set(baseX.get() - baseVelocity * (delta / 1000));
	});

	return (
		<div className="overflow-hidden flex whitespace-nowrap">
			<motion.div
				className="flex whitespace-nowrap items-center"
				style={{ x }}
			>
				<span className="flex">{children}</span>
				<span className="flex">{children}</span>
				<span className="flex">{children}</span>
				<span className="flex">{children}</span>
			</motion.div>
		</div>
	);
}


