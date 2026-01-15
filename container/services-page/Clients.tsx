"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components";
import { serviceClientsItem } from "@/constants";
import { motion, AnimatePresence } from "framer-motion";

export default function Clients() {
	const [activeAccordion, setActiveAccordion] = useState(
		serviceClientsItem[0].id,
	);
	const toggleAccordion = (itemId: any) => {
		setActiveAccordion((prev) => (prev === itemId ? null : itemId));
	};
	return (
		<section className=" ">
			
			
		</section>
	);
}
