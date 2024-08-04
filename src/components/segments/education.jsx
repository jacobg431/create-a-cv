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
	return (
		<>
			<h1 className="text-xl font-bold mb-6">Education</h1>

			<div className="grid grid-cols-2 gap-4 mb-6">
				<FormField
					control={form.control}
					name="school"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Name of the school</FormLabel>
							<FormControl>
								<Input placeholder="School" {...field} />
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="degree"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Degree</FormLabel>
							<FormControl>
								<Input placeholder="Degree" {...field} />
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="edustartdate"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Enrollment date</FormLabel>
							<FormControl>
								<DatePicker {...field} />
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="eduenddate"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Graduation date</FormLabel>
							<FormControl>
								<DatePicker {...field} />
							</FormControl>
						</FormItem>
					)}
				/>
			</div>
			<div className="flex justify-start gap-4">
				<Button type="button" onClick={onAddEducationHandler}>
					Add education
				</Button>
				<Button type="button" onClick={onAddEducationHandler}>
					Remove education
				</Button>
			</div>
		</>
	);
}

export default EducationSegment;
