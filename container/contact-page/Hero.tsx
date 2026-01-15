import Image from "next/image";
import { contactHero } from "@/public";
import { motion } from "framer-motion";

export default function Hero() {
	return (
		<section className="w-full padding-x">
			<div className="w-full flex flex-col">
				<div className="w-full margin">
					<h1 className="heading tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase">
						<div className="flex items-center gap-[1px]">
								
							<h1 className="heading tracking-[-1.3px] medium text-[#212121] font-FoundersGrotesk uppercase">
								GET IN TOUCH <br />
							</h1>
						</div>
					</h1>
				</div>
				<div className="w-full pb-[1px]">
					<h3 className="paragraph font-large text-secondry font-NeueMontreal">
						Be the first to know when our product drops.
					</h3>
				</div>
			</div>
		</section>
	);
}
