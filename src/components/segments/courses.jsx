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
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

export function CoursesSegment({ form }) {
	function onAddCourseHandler() {
		// Logic to add a new course
	}

	function onRemoveCourseHandler() {
		// Logic to remove a course
	}

	return (
		<>
			<h1 className="text-xl font-bold mb-6">Courses</h1>
			<div className="grid grid-cols-2 gap-4 mb-6">
				<FormField
					control={form.control}
					name="coursename"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Name</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="courseinstructor"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Instructor</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="coursecompletiondate"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Completion date</FormLabel>
							<FormControl>
								<DatePicker {...field} />
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="courseduration"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Duration</FormLabel>
							<FormControl>
								<Select {...field}>
									<SelectTrigger>
										<SelectValue />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="hours">Hours</SelectItem>
										<SelectItem value="days">Days</SelectItem>
										<SelectItem value="weeks">Weeks</SelectItem>
										<SelectItem value="months">Months</SelectItem>
									</SelectContent>
								</Select>
							</FormControl>
						</FormItem>
					)}
				/>
			</div>
			<div className="flex justify-start gap-4">
				<Button type="button" onClick={onAddCourseHandler}>
					Add course
				</Button>
				<Button type="button" onClick={onRemoveCourseHandler}>
					Remove course
				</Button>
			</div>
		</>
	);
}

export default CoursesSegment;
