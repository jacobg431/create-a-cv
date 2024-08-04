"use client";

import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/ui/datepicker";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { Controller } from "react-hook-form";

function onAddExperienceHandler() {
	return;
}

function onRemoveExperienceHandler() {
	return;
}

export function ExperienceSegment({ form }) {
	const { control, register } = form;

	return (
		<>
			<h1 className="text-xl font-bold mb-6">Experience</h1>
			<div className="grid grid-cols-2 gap-4 mb-6">
				<FormItem>
					<FormLabel>Company</FormLabel>
					<FormControl>
						<Input {...register("experienceSegment.company")} />
					</FormControl>
				</FormItem>
				<FormItem>
					<FormLabel>Position</FormLabel>
					<FormControl>
						<Input {...register("experienceSegment.position")} />
					</FormControl>
				</FormItem>
				<FormItem>
					<FormLabel>Start date</FormLabel>
					<FormControl>
						<Controller
							name="experienceSegment.startDate"
							control={control}
							render={({ field: { onChange, onBlur, value } }) => (
								<DatePicker value={value} onChange={onChange} onBlur={onBlur} />
							)}
						/>
					</FormControl>
				</FormItem>
				<FormItem>
					<FormLabel>End date</FormLabel>
					<FormControl>
						<Controller
							name="experienceSegment.endDate"
							control={control}
							render={({ field: { onChange, onBlur, value } }) => (
								<DatePicker value={value} onChange={onChange} onBlur={onBlur} />
							)}
						/>
					</FormControl>
				</FormItem>
			</div>
			<div className="grid grid-cols-1 gap-4 mb-6">
				<FormItem>
					<FormLabel>Description</FormLabel>
					<FormControl>
						<Textarea {...register("experienceSegment.description")} />
					</FormControl>
				</FormItem>
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
