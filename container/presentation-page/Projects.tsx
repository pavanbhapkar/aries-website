"use client";
import { useRef } from "react";
import { ProjectCard, Tags } from "@/components";
import { presentationProjectItem } from "@/constants";

export default function Projects() {
	const container = useRef(null);
	return (
		<div
			className="w-full"
			ref={container}>
			<div className="w-full flex flex-col items-center justify-center bg-about">
				<div
					data-scroll
					data-scroll-speed="-.2"
					className="bg-[#BFDA62] w-[75%] py-[20px] rounded-t-[10px]	"
				/>
				<div
					className="bg-[#B8D25E] relative z-20 w-[90%] py-[20px] rounded-t-[10px]"
					data-scroll
					data-scroll-speed="-.1"
				/>
			</div>
			<section className="w-full relative z-30 padding-y rounded-t-[20px] bg-background">
				
				
			</section>
		</div>
	);
}
