import Image from "next/image";
import { useState } from "react";
import { serviceProcessItems } from "@/constants";
import { AnimatePresence, motion } from "framer-motion";

export default function Process() {
	const [activeAccordion, setActiveAccordion] = useState(
		serviceProcessItems[0].id,
	);
	const toggleAccordion = (itemId: any) => {
		setActiveAccordion((prev) => (prev === itemId ? null : itemId));
	};

	return (
		<section className="w-full padding-y">
			
		</section>
	);
}
