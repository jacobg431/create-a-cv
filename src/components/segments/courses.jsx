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
import { Controller } from "react-hook-form";

export function CoursesSegment({ form }) {
	const { register, control } = form;

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
				<FormItem>
					<FormLabel>Name</FormLabel>
					<FormControl>
						<Input {...register("coursesSegment.coursename")} />
					</FormControl>
				</FormItem>
				<FormItem>
					<FormLabel>Instructor</FormLabel>
					<FormControl>
						<Input {...register("coursesSegment.courseinstructor")} />
					</FormControl>
				</FormItem>
				<FormItem>
					<FormLabel>Completion date</FormLabel>
					<FormControl>
						<Controller
							control={control}
							name="coursesSegment.coursecompletiondate"
							render={({ field }) => <DatePicker {...field} />}
						/>
					</FormControl>
				</FormItem>
				<FormItem>
					<FormLabel>Duration</FormLabel>
					<FormControl>
						<Controller
							control={control}
							name="coursesSegment.courseduration"
							render={({ field }) => (
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
							)}
						/>
					</FormControl>
				</FormItem>
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
