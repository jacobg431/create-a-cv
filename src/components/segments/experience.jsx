"use client"

import { Button } from "@/components/ui/button"
import { DatePicker } from "@/components/ui/datepicker"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

export function ExperienceSegment({ form }) {

    function onAddExperienceHandler() {
        return
    }

    function onRemoveExperienceHandler() {
        return
    }

    return (
        <>
            <h1 className="text-xl font-bold mb-6">Experience</h1>
            <div>
                <div className="grid grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Company" {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="position"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Position" {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="date"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Start Date</FormLabel>
                                <FormControl>
                                    <DatePicker {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="date"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>End Date</FormLabel>
                                <FormControl>
                                    <DatePicker {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                </div>
                <div className="grid grid-cols-1 gap-4">
                    <FormField
                        control={form.control}
                        name="date"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Textarea placeholder="Description" {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                </div>
                <div className="grid grid-cols-1 gap-4">
                    <Button type="button" variant="outline" onClick={onRemoveExperienceHandler}>Remove</Button>
                </div>
            </div>
            <Button type="submit" onClick={onAddExperienceHandler}>Add Experience</Button>
        </>
    )

}
