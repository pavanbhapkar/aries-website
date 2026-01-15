"use client";
import { useState } from "react";
import { Marquee } from "@/components";
import { TextHover } from "@/animation";
import { expectationsItems } from "@/constants";
import { AnimatePresence, motion } from "framer-motion";

export default function Expectations() {
	const [openItemId, setOpenItemId] = useState(null);

	const handleButtonClick = (id: any) => {
		setOpenItemId(openItemId === id ? null : id);
	};

	return (
		<section className=" ">
		</section>
	);
}
