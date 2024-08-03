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
			<div className="grid grid-cols-2 gap-4">
				<FormField
					control={form.control}
					name="firstname"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input placeholder="First Name" {...field} />
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="lastname"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input placeholder="Last Name" {...field} />
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input placeholder="Email Address" {...field} />
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="phone"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input placeholder="Phone Number" {...field} />
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="dateofbirth"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Date of Birth</FormLabel>
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
							<FormControl>
								<Select {...field}>
									<SelectTrigger>
										<SelectValue placeholder="Gender" />
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
			</div>
			<div className="grid grid-cols-2 gap-4">
				<FormField
					control={form.control}
					name="address"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input placeholder="Home Address" {...field} />
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="address2"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input
									placeholder="Home Address 2nd Line (Optional)"
									{...field}
								/>
							</FormControl>
						</FormItem>
					)}
				/>
			</div>
			<div className="grid grid-cols-3 gap-4">
				<FormField
					control={form.control}
					name="zipcode"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input placeholder="ZIP Code" {...field} />
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="city"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input placeholder="City" {...field} />
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="country"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input placeholder="Country" {...field} />
							</FormControl>
						</FormItem>
					)}
				/>
			</div>
			<div className="grid grid-col-1 gap-4">
				<FormField
					control={form.control}
					name="summary"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Textarea placeholder="Summary" {...field} />
							</FormControl>
						</FormItem>
					)}
				/>
			</div>
		</>
	);
}
