import Link from "next/link";

type Props = {
	href: string;
	title: string;
};

export default function WaitlistButton({ href, title }: Props) {
	return (
		<Link href={href} className="group">
			<div
				className="
					relative
					px-[15px] py-[5px]
					rounded-full
					border border-[#212121]
					overflow-hidden
					cursor-pointer
					transition-all duration-300 ease-out
				"
			>
				{/* GRADIENT BACKGROUND */}
				<div
					className="
						absolute inset-0
						bg-gradient-to-r
						from-[#ff5f6d]
						via-[#6be7e7]
						to-[#5f9cff]
						opacity-0
						group-hover:opacity-100
						transition-opacity duration-300
					"
				/>

				{/* TEXT */}
				<span
					className="
						relative z-10
						font-NeueMontreal
						text-[14px]
						font-medium
						text-[#212121]
						group-hover:text-white
						transition-colors duration-300
					"
				>
					{title}
				</span>

				{/* GLOW */}
				<div
					className="
						absolute inset-0
						rounded-full
						opacity-0
						group-hover:opacity-100
						transition-opacity duration-300
						shadow-[0_0_25px_rgba(107,231,231,0.45)]
					"
				/>
			</div>
		</Link>
	);
}

