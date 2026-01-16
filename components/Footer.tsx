import Link from "next/link";
import Image from "next/image";
import { logo } from "@/public";
import { LinkHover, TextMask } from "@/animation";
import { footerItems, footernavbarItems } from "@/constants";
import { Instagram, X, Linkedin } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";



export default function Footer() {
	const phrase = ["The future of flight systems."];
	const phrase1 = [""];

	return (
		<footer className="w-full min-h-[60vh] padding-x z-30 relative pt-[40px] bg-background flex flex-col justify-between rounded-t-[20px] mt-[-20px]">

			{/* TOP SECTION */}
			<div className="w-full flex justify-between sm:flex-col xm:flex-col">
				{/* LEFT BIG TEXT */}
				<div className="flex flex-col justify-between sm:w-full xm:w-full w-1/2">
					<h1 className="text-[120px] leading-[95px] lg:text-[105px] lg:leading-[82px] md:text-[80px] md:leading-[62px] sm:text-[60px] sm:leading-[54px] xm:text-[52px] xm:leading-[44px] font-semibold font-FoundersGrotesk text-secondry uppercase">
						<TextMask>{phrase}</TextMask>
					</h1>
					{/* SOCIAL ICONS */}
<div className="mt-[40px] flex gap-[25px]">
	<Link
		href="https://www.instagram.com/aries.hq/"
		target="_blank"
		className="transition-all duration-300 hover:-translate-y-1 hover:opacity-80"
	>
		<Instagram size={26} strokeWidth={1.5} />
	</Link>

	<Link
		href="https://x.com/ariesaerotech"
		target="_blank"
		className="transition-all duration-300 hover:-translate-y-1 hover:opacity-80"
	>
		<FaXTwitter size={26} strokeWidth={1.5} />
	</Link>

	<Link
		href="https://www.linkedin.com/company/ariesaerotech"
		target="_blank"
		className="transition-all duration-300 hover:-translate-y-1 hover:opacity-80"
	>
		<Linkedin size={26} strokeWidth={1.5} />
	</Link>
</div>
{/* EMAIL */}
<div className="pt-[30px] flex gap-x-[16px] items-center">
	<h1 className="paragraph font-medium font-NeueMontreal text-secondry">
		Email:</h1>
	<LinkHover
		title="aries.aero.tech@gmail.com"
		href="mailto:aries.aero.tech@gmail.com"
		className="paragraph font-medium before:bottom-[-3px] after:bottom-[-3px]"
	/>
</div>

				</div>

				{/* RIGHT CONTENT */}
				<div className="h-full flex flex-col justify-between sm:w-full xm:w-full w-1/2">
					<div>
						<h1 className="text-[150px] leading-[115px] lg:text-[130px] lg:leading-[98px] md:text-[100px] md:leading-[75px] sm:text-[74px] sm:leading-[68px] xm:text-[64px] xm:leading-[48px] font-semibold font-FoundersGrotesk text-secondry uppercase">
							<TextMask>{phrase1}</TextMask>
						</h1>

						{/* QUICK LINKS */}
<div className="pt-[50px]">
	<div className="flex flex-col gap-[14px]">
		<LinkHover
			title="Home"
			href="/"
			className="paragraph font-medium before:h-[1px] after:h-[1px] before:bottom-[1px] after:bottom-[1px]"
		/>
		<LinkHover
			title="About Us"
			href="ochi-team"
			className="paragraph font-medium before:h-[1px] after:h-[1px] before:bottom-[1px] after:bottom-[1px]"
		/>
		<LinkHover
			title="Products"
			href="services"
			className="paragraph font-medium before:h-[1px] after:h-[1px] before:bottom-[1px] after:bottom-[1px]"
		/>
		<LinkHover
			title="Join the Waitlist"
			href="contact"
			className="paragraph font-medium before:h-[1px] after:h-[1px] before:bottom-[1px] after:bottom-[1px]"
		/>
	</div>
</div>

						
					</div>
				</div>
			</div>

			{/* BOTTOM BAR */}
			<div className="w-full pt-[40px] pb-[30px] flex justify-between sm:flex-col xm:flex-col sm:gap-[20px] xm:gap-[20px]">
				<div className="w-1/2 sm:w-full xm:w-full">
					<Link href="/">
						<Image
							src={logo}
							alt="logo"
							width={70}
							height={70}
						/>
					</Link>
				</div>

				<div className="w-1/2 h-full flex gap-[10px] justify-between items-end sm:w-full xm:w-full sm:flex-col xm:flex-col sm:items-start xm:items-start">
					<div className="flex sm:flex-col xm:flex-col gap-[10px]">
						<h1 className="paragraph font-medium font-NeueMontreal text-secondry opacity-40">
							© 2026. All rights reserved.
						</h1>
						<LinkHover
							title=" "
							href="/"
							className="before:h-[1px] after:h-[1px] paragraph font-medium text-secondry opacity-40 before:bottom-[-3px] after:bottom-[-3px]"
						/>
					</div>

					<div>
						<LinkHover
							title=""
							href="/"
							className="before:h-[1px] after:h-[1px] paragraph font-medium text-secondry opacity-40 before:bottom-[-3px] after:bottom-[-3px]"
						/>
					</div>
				</div>
			</div>
		</footer>
	);
}
