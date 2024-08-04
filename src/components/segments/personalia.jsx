"use client";

import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/ui/datepicker";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
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

export function PersonaliaSegment({ form }) {
	return (
		<>
			<h1 className="text-xl font-bold mb-6">Personalia</h1>
			<div className="grid grid-cols-2 gap-4 mb-6">
				<FormField
					control={form.control}
					name="firstname"
					render={({ field }) => (
						<FormItem>
							<FormLabel>First name</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="lastname"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Last name</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email address</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="phone"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Phone number</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="dateofbirth"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Date of birth</FormLabel>
							<FormControl>
								<DatePicker {...field} />
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="gender"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Gender</FormLabel>
							<FormControl>
								<Select {...field}>
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
					)}
				/>
			</div>

			<div className="grid grid-cols-2 gap-4 mb-6">
				<FormField
					control={form.control}
					name="address"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Home address</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="address2"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Home address 2nd Line (Optional)</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
						</FormItem>
					)}
				/>
			</div>
			<div className="grid grid-cols-3 gap-4 mb-6">
				<FormField
					control={form.control}
					name="zipcode"
					render={({ field }) => (
						<FormItem>
							<FormLabel>ZIP code</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="city"
					render={({ field }) => (
						<FormItem>
							<FormLabel>City</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="country"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Country</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
						</FormItem>
					)}
				/>
			</div>
			<div className="grid grid-cols-1 gap-4 mb-6">
				<FormField
					control={form.control}
					name="summary"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Summary</FormLabel>
							<FormControl>
								<Textarea {...field} />
							</FormControl>
						</FormItem>
					)}
				/>
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
					<Input type="file" />
				</DialogContent>
			</Dialog>
		</>
	);
}

export default PersonaliaSegment;
