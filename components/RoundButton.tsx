"use client";

import Link from "next/link";
import Rounded from "./Rounded";
import { ArrowUpRight } from "lucide-react";
import React from "react";

type BaseProps = {
	title: string;
	className?: string;
	bgcolor: string;
	style?: React.CSSProperties;
	loading?: boolean;
	success?: boolean;
};

type LinkButtonProps = BaseProps & {
	variant: "link";
	href: string;
};

type SubmitButtonProps = BaseProps & {
	variant: "button";
	type: "submit" | "button";
};

type RoundButtonProps = LinkButtonProps | SubmitButtonProps;

export default function RoundButton(props: RoundButtonProps) {
	const { title, className, bgcolor, style, loading, success } = props;

	const Content = (
	<Rounded
		className={`
			py-[6px]
			transition-all duration-300
			relative overflow-hidden
			${loading ? "scale-[0.96]" : ""}
			${success ? "pointer-events-none" : "active:scale-[0.94]"}
		`}
		backgroundColor={success ? "#1f7a4a" : bgcolor} // ✅ GREEN AFTER SUCCESS
	>
		<p
			className={`
				z-10 px-[10px] ml-[5px] py-[6px]
				transition-all duration-300
				${loading ? "opacity-70" : ""}
				${success ? "text-[#2dff9b]" : ""}
			`}
			style={!success ? style : undefined}
		>
			{success ? "Thank You!" : loading ? "Joining..." : title}
		</p>

		{/* ARROW — hidden after success */}
		{!success && (
			<div
				className={`p-[10px] rounded-full mr-[10px] z-10 transition-all duration-300
				${
					loading
						? "scale-[0.8] rotate-45"
						: "scale-[0.3] group-hover:scale-[0.9]"
				}
				${className}`}
			>
				<ArrowUpRight
					strokeWidth={1.5}
					size={30}
					className={`transition-all duration-300 ${
						loading ? "opacity-60" : "scale-[0] group-hover:scale-[1]"
					}`}
				/>
			</div>
		)}
	</Rounded>
);


	// 👉 LINK VERSION (unchanged)
	if (props.variant === "link") {
		return (
			<Link
				href={props.href}
				className="small-text uppercase font-normal font-NeueMontreal group"
			>
				{Content}
			</Link>
		);
	}

	// 👉 BUTTON VERSION (enhanced click animation)
	return (
		<button
			type={props.type}
			disabled={loading || success}
			className="
				small-text uppercase font-normal font-NeueMontreal group
				disabled:cursor-not-allowed
			"
		>
			{Content}
		</button>
	);
}




