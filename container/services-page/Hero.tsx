"use client";

import { useEffect, useState } from "react";
import { Eyes } from "@/components";

const LAUNCH_DATE = new Date("2026-03-31T00:00:00"); // CHANGE THIS
const LAUNCH_DATE_STRING = "March 31, 2026";


function getTimeRemaining() {
	const total = LAUNCH_DATE.getTime() - new Date().getTime();

	return {
		days: Math.max(Math.floor(total / (1000 * 60 * 60 * 24)), 0),
		hours: Math.max(Math.floor((total / (1000 * 60 * 60)) % 24), 0),
		minutes: Math.max(Math.floor((total / (1000 * 60)) % 60), 0),
		seconds: Math.max(Math.floor((total / 1000) % 60), 0),
	};
}



export default function Hero() {
	const [time, setTime] = useState(getTimeRemaining());

	useEffect(() => {
		const interval = setInterval(() => {
			setTime(getTimeRemaining());
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		
		<section className="w-full min-h-screen flex flex-col justify-center pt-[120px] sm:pt-[100px]">
			<div className="w-full padding-x">
				{/* HERO TITLE */}
				<h1 className="heading tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase">
					Flight Computer
				</h1>

				{/* SUBTEXT */}
				<p className="mt-[20px] max-w-[720px] sub-heading font-NeueMontreal text-secondry">
					A modular flight computer built for modern aerospace and rocketry
					systems.
				</p>

				<p className="mt-[10px] paragraph font-NeueMontreal text-secondry opacity-60">
					Product unveiling coming soon
				</p>

				{/* COUNTDOWN */}
				<div className="mt-[60px] border-t border-[#21212155] pt-[40px]">
					<div className="flex items-center gap-[15px] mb-[25px] flex-wrap">
	<p className="paragraph font-NeueMontreal text-secondry">
		Unveil countdown
	</p>
	<span className="paragraph font-NeueMontreal text-secondry opacity-50">
		• {LAUNCH_DATE_STRING}
	</span>
</div>




					<div className="flex gap-[50px] sm:gap-[30px] flex-wrap">
						<TimeBlock label="Days" value={time.days} />
						<TimeBlock label="Hours" value={time.hours} />
						<TimeBlock label="Minutes" value={time.minutes} />
						<TimeBlock label="Seconds" value={time.seconds} />
					</div>
				</div>
			</div>
		</section>
	);
}

function TimeBlock({ label, value }: { label: string; value: number }) {
	return (
		<div className="flex flex-col">
			<span className="text-[72px] md:text-[60px] sm:text-[48px] leading-none font-FoundersGrotesk font-semibold tracking-tight text-secondry">
				{String(value).padStart(2, "0")}
			</span>
			<span className="mt-[6px] paragraph font-NeueMontreal text-secondry opacity-60">
				{label}
			</span>
		</div>
	);
}
