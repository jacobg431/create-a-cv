"use client";

import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/ui/datepicker";
import { Input } from "@/components/ui/input";
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
} from "@/components/ui/form";

export function CertificationsSegment({ form }) {
	function onRemoveCertHandler() {
		return;
	}

	return (
		<>
			<h1 className="text-xl font-bold mb-6">Certifications</h1>
			<div>
				<div className="grid grid-cols-2 gap-4">
					<FormField
						control={form.control}
						name="certname"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input placeholder="Certification Name" {...field} />
								</FormControl>
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="certissuer"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input placeholder="Issuer Organization" {...field} />
								</FormControl>
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="certstartdate"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Date of Issue</FormLabel>
								<FormControl>
									<DatePicker {...field} />
								</FormControl>
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="certenddate"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Date of Expiration</FormLabel>
								<FormControl>
									<DatePicker {...field} />
								</FormControl>
							</FormItem>
						)}
					/>
				</div>
				<div className="grid grid-cols-1 gap-4">
					<Button type="button" variant="outline" onClick={onRemoveCertHandler}>
						Remove
					</Button>
				</div>
			</div>
			<Button type="button" onClick={onRemoveCertHandler}>
				Add Certification
			</Button>
		</>
	);
}
