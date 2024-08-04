"use client";

import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/ui/datepicker";
import { Input } from "@/components/ui/input";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Controller } from "react-hook-form";

export function PersonaliaSegment({ form }) {
	const { control, register } = form;

	return (
		<>
			<h1 className="text-xl font-bold mb-6">Personalia</h1>
			<div className="grid grid-cols-2 gap-4 mb-6">
				<FormItem>
					<FormLabel>First name</FormLabel>
					<FormControl>
						<Input {...register("personaliaSegment.firstName")} />
					</FormControl>
				</FormItem>
				<FormItem>
					<FormLabel>Last name</FormLabel>
					<FormControl>
						<Input {...register("personaliaSegment.lastName")} />
					</FormControl>
				</FormItem>
				<FormItem>
					<FormLabel>Email address</FormLabel>
					<FormControl>
						<Input {...register("personaliaSegment.email")} />
					</FormControl>
				</FormItem>
				<FormItem>
					<FormLabel>Phone number</FormLabel>
					<FormControl>
						<Input {...register("personaliaSegment.phone")} />
					</FormControl>
				</FormItem>
				<FormItem>
					<FormLabel>Date of birth</FormLabel>
					<FormControl>
						<Controller
							name="personaliaSegment.dateOfBirth"
							control={control}
							render={({ field: { onChange, onBlur, value } }) => (
								<DatePicker value={value} onChange={onChange} onBlur={onBlur} />
							)}
						/>
					</FormControl>
				</FormItem>
				<FormItem>
					<FormLabel>Gender</FormLabel>
					<FormControl>
						<Select {...register("personaliaSegment.gender")}>
							<SelectTrigger>
								<SelectValue />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="female">Female</SelectItem>
								<SelectItem value="male">Male</SelectItem>
							</SelectContent>
						</Select>
					</FormControl>
				</FormItem>
				<FormItem>
					<FormLabel>Home address</FormLabel>
					<FormControl>
						<Input {...register("personaliaSegment.address")} />
					</FormControl>
				</FormItem>
				<FormItem>
					<FormLabel>Home address 2nd Line (Optional)</FormLabel>
					<FormControl>
						<Input {...register("personaliaSegment.address2")} />
					</FormControl>
				</FormItem>
				<FormItem>
					<FormLabel>ZIP code</FormLabel>
					<FormControl>
						<Input {...register("personaliaSegment.zipCode")} />
					</FormControl>
				</FormItem>
				<FormItem>
					<FormLabel>City</FormLabel>
					<FormControl>
						<Input {...register("personaliaSegment.city")} />
					</FormControl>
				</FormItem>
				<FormItem>
					<FormLabel>Country</FormLabel>
					<FormControl>
						<Input {...register("personaliaSegment.country")} />
					</FormControl>
				</FormItem>
				<FormItem>
					<FormLabel>Summary</FormLabel>
					<FormControl>
						<Input {...register("personaliaSegment.summary")} />
					</FormControl>
				</FormItem>
			</div>
			<Dialog>
				<DialogTrigger>
					<Button variant="outline">Upload Profile Picture</Button>
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Upload Profile Picture</DialogTitle>
						<DialogDescription>
							The image file to upload must be in JPG/PNG format and must not
							exceed a size of 256 MB.
						</DialogDescription>
					</DialogHeader>
					<Input
						type="file"
						{...register("personaliaSegment.profilePicture")}
					/>
				</DialogContent>
			</Dialog>
		</>
	);
}

export default PersonaliaSegment;
