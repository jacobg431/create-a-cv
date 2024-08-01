"use client"

import { Button } from "@/components/ui/button"
import { DatePicker } from "@/components/ui/datepicker"
import { Input } from "@/components/ui/input"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

export function EducationSegment({ form }) {

    function onAddEducationHandler() {
        return
    }

    function onRemoveEducationHandler() {
        return
    }

    return (
        <>                            
            <h1 className="text-xl font-bold mb-6">Education</h1>
            <div>
                <div className="grid grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name="school"
                        render={({ field }) => (
                            <FormItem>
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
                                <FormLabel>Enrollment Date</FormLabel>
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
                                <FormLabel>Graduation Date</FormLabel>
                                <FormControl>
                                    <DatePicker {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                </div>
                <div className="grid grid-cols-1 gap-4">
                    <Button type="button" variant="outline" onClick={onRemoveEducationHandler}>Remove</Button>
                </div>
            </div>
            <Button type="button" onClick={onAddEducationHandler}>Add Education</Button>
        </>
    )

}
