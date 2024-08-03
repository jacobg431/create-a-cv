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
		return;
	}

	function onRemoveCourseHandler() {
		return;
	}

	return (
		<>
			<h1 className="text-xl font-bold mb-6">Courses</h1>
			<div>
				<div className="grid grid-cols-2 gap-4">
					<FormField
						control={form.control}
						name="coursename"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input placeholder="Name" {...field} />
								</FormControl>
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="courseinstructor"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input placeholder="Instructor" {...field} />
								</FormControl>
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="coursecompletiondate"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Completion Date</FormLabel>
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
								<FormControl>
									<Select {...field}>
										<SelectTrigger>
											<SelectValue placeholder="Duration" />
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
				<div className="grid grid-cols-1 gap-4">
					<Button
						type="button"
						variant="outline"
						onClick={onRemoveCourseHandler}
					>
						Remove
					</Button>
				</div>
			</div>
			<Button type="button" onClick={onAddCourseHandler}>
				Add Education
			</Button>
		</>
	);
}
