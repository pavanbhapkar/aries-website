import Link from "next/link";
import Image from "next/image";
import { logo } from "@/public";
import { useState } from "react";
import { navVariants } from "@/motion";
import { TextHover } from "@/animation";
import { navbarItems } from "@/constants";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import MobileNav from "./MobileNav";
import WaitlistCTA from "@/animation/WaitlistCTA";

export default function Navbar() {
	const [hidden, setHidden] = useState(false);
	const { scrollY } = useScroll();

	useMotionValueEvent(scrollY, "change", (latest) => {
		const previous = scrollY.getPrevious();
		if (previous && latest > previous) {
			setHidden(true);
		} else {
			setHidden(false);
		}
	});

	return (
		<>
			<motion.nav
				variants={navVariants}
				className="w-full h-[8vh] padding-x fixed top-0 left-0 z-50 backdrop-blur-[7px] flex items-center sm:hidden xm:hidden md:hidden"
				animate={hidden ? "hidden" : "visible"}
			>
				{/* LEFT */}
				<div className="flex-1">
					<Link href="/">
						<Image src={logo} alt="ochi logo" width={70} height={70} />
					</Link>
				</div>

				{/* CENTER */}
				<div className="flex gap-x-[20px]">
					{navbarItems
						.filter((item) => item.id !== 5)
						.map((item) => (
							<Link
								key={item.id}
								href={item.href}
								className="group w-fit paragraph font-medium font-NeueMontreal text-secondry capitalize flex flex-col"
							>
								<TextHover
									titile1={item.title}
									titile2={item.title}
								/>
							</Link>
						))}
				</div>

				{/* RIGHT */}
				<div className="flex-1 flex justify-end">
	{navbarItems
		.filter((item) => item.id === 5)
		.map((item) => (
			<WaitlistCTA
				key={item.id}
				href={item.href}
				title={item.title}
			/>
		))}
</div>


			</motion.nav>

			<MobileNav />
		</>
	);
}

