import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { CertificationsSegment } from "@/components/segments/certifications";
import { CoursesSegment } from "@/components/segments/courses";
import { EducationSegment } from "@/components/segments/education";
import { ExperienceSegment } from "@/components/segments/experience";
import { PersonaliaSegment } from "@/components/segments/personalia";
import { SkillsSegment } from "@/components/segments/skills";

function CreateCvForm() {
	const form = useForm({
		defaultValues: {
			personaliaSegment: {
				firstName: "",
				lastName: "",
				email: "",
				phone: "",
				dateOfBirth: null,
				gender: "",
				address: "",
				address2: "",
				zipCode: "",
				city: "",
				country: "",
				summary: "",
				profilePicture: {},
			},
			educationSegment: {
				school: "",
				degree: "",
				startDate: null,
				endDate: null,
			},
			experienceSegment: {
				company: "",
				position: "",
				startDate: null,
				endDate: null,
				description: "",
			},
			skillsSegment: {
				skills: "",
			},
			certificationsSegment: {
				name: "",
				issuer: "",
				startDate: null,
				endDate: null,
			},
			coursesSegment: {
				name: "",
				instructor: "",
				completionDate: null,
				duration: "",
			},
		},
	});

	function onSubmit(values) {
		console.log("Form Values:", values);
	}

	return (
		<>
			<nav />
			<main>
				<div className="max-w-3xl mx-auto p-6 md:p-8 lg:p-10 bg-white shadow-md">
					<h1 className="text-3xl font-bold mb-4">Fill in the form</h1>
					<h2 className="text-l mb-6">We'll take care of the rest</h2>
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="divide-y divide-gray-200"
						>
							<div className="py-6 mb-12">
								<PersonaliaSegment form={form} />
							</div>
							<div className="py-6 mb-12">
								<EducationSegment form={form} />
							</div>
							<div className="py-6 mb-12">
								<ExperienceSegment form={form} />
							</div>
							<div className="py-6 mb-12">
								<SkillsSegment form={form} />
							</div>
							<div className="py-6 mb-12">
								<CertificationsSegment form={form} />
							</div>
							<div className="py-6 mb-12">
								<CoursesSegment form={form} />
							</div>

							<div className="pt-6 flex justify-end">
								<Button type="submit">Create your CV</Button>
							</div>
						</form>
					</Form>
				</div>
			</main>
		</>
	);
}

export default CreateCvForm;
