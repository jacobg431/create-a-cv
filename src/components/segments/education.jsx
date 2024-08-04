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

function onAddEducationHandler() {
	return;
}

function onRemoveEducationHandler() {
	return;
}

export function EducationSegment({ form }) {
	const { register } = form; // Destructuring to extract register from form

	return (
		<>
			<h1 className="text-xl font-bold mb-6">Education</h1>
			<div className="grid grid-cols-2 gap-4 mb-6">
				<FormItem>
					<FormLabel>Name of the school</FormLabel>
					<FormControl>
						<Input {...register("educationSegment.school")} />
					</FormControl>
				</FormItem>
				<FormItem>
					<FormLabel>Degree</FormLabel>
					<FormControl>
						<Input {...register("educationSegment.degree")} />
					</FormControl>
				</FormItem>
				<FormItem>
					<FormLabel>Enrollment date</FormLabel>
					<FormControl>
						<DatePicker {...register("educationSegment.startDate")} />
					</FormControl>
				</FormItem>
				<FormItem>
					<FormLabel>Graduation date</FormLabel>
					<FormControl>
						<DatePicker {...register("educationSegment.endDate")} />
					</FormControl>
				</FormItem>
			</div>
			<div className="flex justify-start gap-4">
				<Button type="button" onClick={onAddEducationHandler}>
					Add education
				</Button>
				<Button type="button" onClick={onRemoveEducationHandler}>
					Remove education
				</Button>
			</div>
		</>
	);
}

export default EducationSegment;
