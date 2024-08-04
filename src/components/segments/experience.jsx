"use client";

import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/ui/datepicker";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
} from "@/components/ui/form";

export function ExperienceSegment({ form }) {
	function onAddExperienceHandler() {
		// Logic to add experience
	}

	function onRemoveExperienceHandler() {
		// Logic to remove experience
	}

	return (
		<>
			<h1 className="text-xl font-bold mb-6">Experience</h1>
			<div className="grid grid-cols-2 gap-4 mb-6">
				<FormField
					control={form.control}
					name="company"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Company</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="position"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Position</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="startdate"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Start Date</FormLabel>
							<FormControl>
								<DatePicker {...field} />
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="enddate"
					render={({ field }) => (
						<FormItem>
							<FormLabel>End Date</FormLabel>
							<FormControl>
								<DatePicker {...field} />
							</FormControl>
						</FormItem>
					)}
				/>
			</div>
			<div className="grid grid-cols-1 gap-4 mb-6">
				<FormField
					control={form.control}
					name="description"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Description</FormLabel>
							<FormControl>
								<Textarea {...field} />
							</FormControl>
						</FormItem>
					)}
				/>
			</div>
			<div className="flex justify-start gap-4">
				<Button type="button" onClick={onAddExperienceHandler}>
					Add experience
				</Button>
				<Button type="button" onClick={onRemoveExperienceHandler}>
					Remove experience
				</Button>
			</div>
		</>
	);
}

export default ExperienceSegment;
