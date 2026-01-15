"use client";
import Image from "next/image";
import { useState } from "react";
import { aboutImg } from "@/public";
import { LinkHover } from "@/animation";
import { footerItems } from "@/constants";
import { Heading, RoundButton } from "@/components";
import RoundLink from "@/components/RoundLink";

export default function About() {
	const [hovered, setHovered] = useState(false);

	return (
		<section className="w-full bg-about padding-y rounded-t-[20px] z-20 relative mt-[-15px]">
			<div className="pl-[50px] sm:px-[20px] xm:px-[20px]">
				<h2 className="sub-heading font-medium font-NeueMontreal text-secondry">
					ARIES creates modular flight computing architectures
					<br className="sm:hidden xm:hidden" /> engineered for&nbsp;
					<span className="sub-heading font-medium font-NeueMontreal link-flash cursor-pointer">
						reliability,
					</span>
					&nbsp;  <br className="sm:hidden xm:hidden" />
					<span className="sub-heading font-medium font-NeueMontreal link-flash cursor-pointer">
						scalabilty
					</span>
					&nbsp;and&nbsp;
					<span className="sub-heading font-medium font-NeueMontreal link-flash cursor-pointer">
						fault tolerance.
					</span>
				</h2>
			</div>
			<div className="w-full border-y border-[#21212155] my-[50px] py-[20px]">
				<div className="padding-x pb-[50px] w-full flex sm:flex-col xm:flex-col gap-[30px] justify-between">
					<div className="w-[50%] sm:w-full xm:w-full">
						<h3 className="text-[32px] leading-[38px] font-medium text-secondry font-NeueMontreal">
  							What do we offer?
						</h3>

					</div>
					<div className="w-[50%] sm:w-full xm:w-full">
						<div className="w-full flex gap-[30px] h-full items-end sm:items-start sm:flex-col xm:items-start xm:flex-col">
							<div className="w-[40%] sm:w-[60%] xm:w-[60%]">
								<p className="sub-paragraph font-medium font-NeueMontreal text-secondry tracking-wide">
									Our flight computer systems are designed with a modular architecture,
									allowing rapid customization and integration across a wide range of aerospace platforms.
									From early prototyping to flight-ready systems, we support the full development lifecycle.
								</p>
								<p className="sub-paragraph font-medium font-NeueMontreal text-secondry pt-[30px] tracking-wide">
									We believe the mix of strategy and design (with a bit of
									coffee) is what makes our flight systems the best
									in the market
								</p>
							</div>
							<div className="w-[60%] flex justify-end flex-col  sm:w-full xm:w-full">
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full flex justify-between padding-x sm:flex-col xm:flex-col gap-[30px]">
				<div className="flex flex-col gap-[30px]">
					<Heading title="Our approach:" />
					<div
						className="w-fit flex items-center justify-between bg-secondry cursor-pointer rounded-full group"
						onMouseEnter={() => setHovered(true)}
						onMouseLeave={() => setHovered(false)}>
						<RoundLink
						href="/ochi-team"
						title="read more"
						bgcolor="#000"
						className="bg-white text-black"
						style={{ color: "#fff" }}
					/>

					</div>
				</div>
				<div
					className={`w-[50%] sm:w-full xm:w-full transition transform duration-[1.5s] ease-[.215,.61,.355,1] rounded-[15px] overflow-hidden ${
						hovered && "scale-[1.09]"
					}`}>
				<div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl"></div>
					<Image
						src="/aboutImg.webp"
						alt="about-img"
						fill
					/>
				</div>
			</div>
		</section>
	);
}
