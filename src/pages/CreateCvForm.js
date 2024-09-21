import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from '@/utils/ValidationSchema';
import { IsEmptyObject } from '@/utils/IsEmptyObject';
import { base64ToPdf } from '@/utils/FileHandler';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';
import { CertificationsSegment } from '@/components/segments/certifications';
import { CoursesSegment } from '@/components/segments/courses';
import { EducationSegment } from '@/components/segments/education';
import { ExperienceSegment } from '@/components/segments/experience';
import { PersonaliaSegment } from '@/components/segments/personalia';
import { SkillsSegment } from '@/components/segments/skills';

export function CreateCvForm() {
    const form = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            personaliaSegment: {
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                dateOfBirth: new Date(),
                gender: '',
                address: '',
                address2: '',
                zipCode: '',
                city: '',
                country: '',
                summary: '',
                profilePicture: null
            },
            educationSegment: {
                educationList: [
                    {
                        school: '',
                        degree: '',
                        startDate: new Date(),
                        endDate: new Date(),
                        isStudying: false
                    }
                ]
            },
            experienceSegment: {
                experienceList: [
                    {
                        company: '',
                        position: '',
                        startDate: new Date(),
                        endDate: new Date(),
                        isWorking: false,
                        description: ''
                    }
                ]
            },
            skillsSegment: {
                input: '',
                skillList: []
            },
            certificationsSegment: {
                certificationList: [
                    {
                        name: '',
                        issuer: '',
                        startDate: new Date(),
                        endDate: new Date(),
                        isNotExpiring: false
                    }
                ]
            },
            coursesSegment: {
                courseList: [
                    {
                        name: '',
                        instructor: '',
                        completionDate: new Date(),
                        duration: ''
                    }
                ]
            }
        }
    });
    
    function onSubmit(values) {
        const endpoint = 'http://localhost:8080/generate-pdf';
        const settings = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        };
    
        fetch(endpoint, settings)
            .then(response => response.text())
            .then(base64Data => base64ToPdf(base64Data))
            .catch(_error => toast("Error generating PDF"))
            //.catch(error => console.log(error));
    
        console.log('Form Values:', JSON.stringify(values));
    }

    function onError(errors) {
        const flattenErrors = (obj, path = '') =>
            Object.entries(obj).reduce((accumulatedResult, [key, value]) => {
                const currentPath = path ? `${path}.${key}` : key;
                if (value == null) {
                    return accumulatedResult;
                }
                if (value.message) {
                    accumulatedResult.push(value.message);
                    return accumulatedResult;
                }
                if (!IsEmptyObject(value)) {
                    accumulatedResult.push(...flattenErrors(value, currentPath));
                }
                return accumulatedResult;
            }, []);

        //const errorMessages = flattenErrors(errors).join(', ');
        //console.log(errors)
        //console.log(errorMessages);
        const firstErrorMessage = flattenErrors(errors)[0];
        toast(firstErrorMessage);
    }

    return (
        <>
            <nav />
            <main>
                <div className="max-w-4xl mx-auto p-6 md:p-8 lg:p-10 bg-white shadow-md">
                    <h1 className="text-3xl font-bold mb-4">Fill in the form</h1>
                    <h2 className="text-l mb-6">We'll take care of the rest.</h2>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit, onError)} className="divide-y divide-gray-200">
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
            <Toaster />
        </>
    );
}
