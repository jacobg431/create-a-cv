"use client";

import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/ui/datepicker";
import { Input } from "@/components/ui/input";
import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { Controller } from "react-hook-form";

function onAddCertHandler() {
	return;
}

function onRemoveCertHandler() {
	return;
}

export function CertificationsSegment({ form }) {
	const { control, register } = form;

	return (
		<>
			<h1 className="text-xl font-bold mb-6">Certifications</h1>
			<div className="grid grid-cols-2 gap-4 mb-6">
				<FormItem>
					<FormLabel>Certification name</FormLabel>
					<FormControl>
						<Input {...register("certificationsSegment.name")} />
					</FormControl>
				</FormItem>
				<FormItem>
					<FormLabel>Issuer organization</FormLabel>
					<FormControl>
						<Input {...register("certificationsSegment.issuer")} />
					</FormControl>
				</FormItem>
				<FormItem>
					<FormLabel>Date of issue</FormLabel>
					<FormControl>
						<Controller
							name="certificationsSegment.startDate"
							control={control}
							render={({ field: { onChange, onBlur, value } }) => (
								<DatePicker value={value} onChange={onChange} onBlur={onBlur} />
							)}
						/>
					</FormControl>
				</FormItem>
				<FormItem>
					<FormLabel>Date of expiration</FormLabel>
					<FormControl>
						<Controller
							name="certificationsSegment.endDate"
							control={control}
							render={({ field: { onChange, onBlur, value } }) => (
								<DatePicker value={value} onChange={onChange} onBlur={onBlur} />
							)}
						/>
					</FormControl>
				</FormItem>
			</div>
			<div className="flex justify-start gap-4">
				<Button type="button" onClick={onAddCertHandler}>
					Add certification
				</Button>
				<Button type="button" onClick={onRemoveCertHandler}>
					Remove certification
				</Button>
			</div>
		</>
	);
}

export default CertificationsSegment;
