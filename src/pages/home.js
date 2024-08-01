import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"

import { CertificationsSegment } from "@/components/segments/certifications"
import { CoursesSegment } from "@/components/segments/courses"
import { EducationSegment } from "@/components/segments/education"
import { ExperienceSegment } from "@/components/segments/experience"
import { PersonaliaSegment } from "@/components/segments/personalia"
import { SkillsSegment } from "@/components/segments/skills"

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
});

function Home() {

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
        },
    });

    function onSubmit(values) {
        console.log(values);
    }

    return (
        <>
            <nav></nav>
            <main>
                <div className="max-w-3xl mx-auto p-6 md:p-8 lg:p-10">
                    <h1 className="text-3xl font-bold mb-6">Generate Your CV</h1>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                            <PersonaliaSegment form={form}/>
                            <EducationSegment form={form}/>
                            <ExperienceSegment form={form} />
                            <SkillsSegment form={form} />
                            <CertificationsSegment form={form} />
                            <CoursesSegment form={form} />
                            
                            <div className="flex justify-end">
                                <Button type="submit">Generate CV</Button>
                            </div>

                        </form>
                    </Form>
                </div>
            </main>
        </>
    );
}

export default Home;
