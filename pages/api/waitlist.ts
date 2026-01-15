import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/lib/supabase";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method !== "POST") {
		return res.status(405).json({ message: "Method not allowed" });
	}

	try {
		const { name, email, phone, description } = req.body;

		// Required fields
		if (!name || !email) {
			return res.status(400).json({
				message: "Name and email are required",
			});
		}

		const { error } = await supabase
			.from("waitlist")
			.insert([
				{
					name,
					email,
					phone: phone || null,               // ✅ optional
					description: description || null,   // ✅ optional
				},
			]);

		if (error) {
			console.error(error);
			return res.status(500).json({ message: "Database error" });
		}

		return res.status(200).json({ success: true });
	} catch (err) {
		console.error(err);
		return res.status(500).json({ message: "Server error" });
	}
}

