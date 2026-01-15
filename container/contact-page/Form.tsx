"use client";
import { useState } from "react";
import { RoundButton } from "@/components";

export default function Form() {
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);

	const [status, setStatus] = useState("");

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
	e.preventDefault();
	setLoading(true);

	const formData = new FormData(e.currentTarget);
	const name = formData.get("name");
	const email = formData.get("email");
	const phone = formData.get("phone");
	const description = formData.get("description");

	try {
		const res = await fetch("/api/waitlist", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ name, email, phone, description }),
		});

		if (!res.ok) throw new Error("Request failed");

		setSuccess(true);
		e.currentTarget.reset();
	} catch (err) {
		console.error(err);
	} finally {
		setLoading(false);
	}
}

	return (
	
	<section className="w-full padding-x padding-y">
		<form onSubmit={handleSubmit}>
			<div className="w-full flex flex-col gap-[40px]">

				{/* NAME */}
				<div className="w-full flex flex-col gap-[10px]">
					<h2 className="sub-heading font-NeueMontreal font-normal text-secondry">
						Hi! My name is
					</h2>
					<input
						type="text"
						name="name"
						required
						placeholder="Enter your name"
						className="paragraph w-full font-NeueMontreal font-normal text-secondry bg-background border-b border-[#21212155] focus:border-secondry outline-none mt-[10px]"
					/>
				</div>

				{/* EMAIL */}
				<div className="w-full flex flex-col gap-[10px]">
					<h2 className="sub-heading font-NeueMontreal font-normal text-secondry">
						and my email is
					</h2>
					<input
						type="email"
						name="email"
						required
						placeholder="name@example.com"
						className="paragraph w-full font-NeueMontreal font-normal text-secondry bg-background border-b border-[#21212155] focus:border-secondry outline-none mt-[10px]"
					/>
				</div>

				{/* PHONE */}
				<div className="w-full flex flex-col gap-[10px]">
					<h2 className="sub-heading font-NeueMontreal font-normal text-secondry">
						my phone number is
					</h2>
					<input
						type="tel"
						name="phone"
						required
						placeholder="+1   555 123 4567 (optional)"
						className="paragraph w-full font-NeueMontreal font-normal text-secondry bg-background border-b border-[#21212155] focus:border-secondry outline-none mt-[10px]"
					/>
				</div>

				{/* DESCRIPTION */}
				<div className="w-full flex flex-col gap-[5px]">
					<h2 className="sub-heading font-NeueMontreal font-normal text-secondry">
						Tell us more
					</h2>
					<textarea
						name="description"
						required
						rows={1}
						placeholder="  Tell us what you're looking for... (optional)"
						className="paragraph w-full font-NeueMontreal font-normal text-secondry bg-background border-b border-[#21212155] focus:border-secondry outline-none mt-[1px] resize-none"
					/>
				</div>

			</div>

			{/* BUTTON */}
			<div className="w-full flex items-center justify-end sm:justify-start xm:justify-start pt-[50px]">
				<RoundButton
					variant="button"
					type="submit"
					bgcolor="#ef0505"
					title={loading ? "Joining..." : "Join"}
					className="text-black"
					style={{ color: "#000000e4" }}
					loading={loading}
					success={success}
				/>
			</div>

			{/* STATUS */}
			{status && (
				<p className="text-sm mt-4 text-secondry">
					{status}
				</p>
			)}
		</form>
	</section>
);


}
