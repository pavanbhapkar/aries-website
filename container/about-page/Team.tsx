import Image from "next/image";
import { Team1, Team2, Team3, logo } from "@/public";
import { Marquee } from "@/components";
import { Linkedin } from "lucide-react";


/* TEAM DATA */
const teamMembers = [
	{
		id: 1,
		name: "Anuj Londhe",
		role: "CTO",
		image: Team1,
		linkedin: "https://linkedin.com/in/astroanuj",
		description:
			"Leads the technical vision and system architecture behind ARIES.",
	},
	{
		id: 2,
		name: "Aayush Shete",
		role: "CEO",
		image: Team2,
		linkedin: "https://linkedin.com/in/aayushshete",
		description:
			"Drives strategy, partnerships, and long-term vision.",
	},
	{
		id: 3,
		name: "Om Gaikwad",
		role: "CFO",
		image: Team3,
		linkedin: "https://www.linkedin.com/in/om-gaikwad-4381a2352/",
		description:
			"Oversees finance, operations, and sustainable growth.",
	},
];


export default function Team() {
	return (
		<section className="w-full bg-marquee min-h-screen rounded-t-[20px]">
			{/* MARQUEE */}
			<div className="w-full bg-marquee z-10 relative rounded-t-[20px] padding-y">
				<Marquee
					title="Meet the team"
					className="pb-[50px] lg:pb-[40px] md:pb-[30px] sm:pb-[25px] xm:pb-[18px] text-[540px] leading-[330px] lg:text-[380px] lg:leading-[240px] md:text-[300px] md:leading-[160px] sm:text-[230px] sm:leading-[140px] xm:text-[130px] xm:leading-[80px]"
				/>
			</div>

			{/* TEAM CARDS */}
			<div className="w-full bg-marquee flex items-center justify-center pb-[50px]">
				<div className="w-[80%] flex flex-col gap-[30px]">
					{teamMembers.map((member, index) => (
						<div
	key={member.id}
	className="relative p-[20px] bg-background rounded-[20px]"
>
	<div className="w-full flex flex-col justify-between gap-[20px] py-[10px]">

		{/* TOP */}
		<div className="flex justify-between sm:flex-col xm:flex-col gap-[30px]">

			{/* LEFT (logo + description) */}
			<div className="flex flex-col justify-between gap-[20px] flex-1">
				<Image
					src={logo}
					alt="logo"
					width={50}
					height={50}
				/>

				<p className="paragraph font-NeueMontreal text-secondry max-w-[360px]">
					{member.description}
				</p>
			</div>

			{/* RIGHT (image + role) */}
			<div>
				<Image
					src={member.image}
					alt={member.name}
					width={300}
					height={300}
					className="rounded-[10px] sm:w-full xm:w-full"
				/>
				<p className="paragraph font-NeueMontreal text-secondry py-[10px]">
					{member.role}
				</p>
			</div>
		</div>

		{/* BOTTOM */}
		<div className="flex justify-between items-end sm:flex-col xm:flex-col sm:items-start xm:items-start">
			<h1 className="heading font-bold font-FoundersGrotesk text-secondry">
				{member.name.split(" ").map((word, i) => (
					<span key={i}>
						{word}
						<br />
					</span>
				))}
			</h1>
		</div>
	</div>

	{/* LINKEDIN ICON (BOTTOM RIGHT) */}
	<a
	href={member.linkedin}
	target="_blank"
	rel="noopener noreferrer"
	className="
		absolute
		bottom-[20px]
		right-[30px]
		text-secondry
		opacity-60
		transition-all
		duration-300
		hover:opacity-100
		hover:-translate-y-1
	"
>
	<Linkedin size={22} strokeWidth={1.5} />
</a>

</div>

					))}
				</div>
			</div>
		</section>
	);
}

