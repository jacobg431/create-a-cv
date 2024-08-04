'use client';

import { Button } from '@/components/ui/button';
import { DatePicker } from '@/components/ui/datepicker';
import { Input } from '@/components/ui/input';
import { FormControl, FormItem, FormLabel } from '@/components/ui/form';
import { Controller } from 'react-hook-form';

function onAddEducationHandler() {
    return;
}

function onRemoveEducationHandler() {
    return;
}

export function EducationSegment({ form }) {
    const { control, register } = form;

    return (
        <>
            <h1 className="text-xl font-bold mb-6">Education</h1>
            <div className="grid grid-cols-2 gap-4 mb-6">
                <FormItem>
                    <FormLabel>Name of the school</FormLabel>
                    <FormControl>
                        <Input {...register('educationSegment.school')} />
                    </FormControl>
                </FormItem>
                <FormItem>
                    <FormLabel>Degree</FormLabel>
                    <FormControl>
                        <Input {...register('educationSegment.degree')} />
                    </FormControl>
                </FormItem>
                <FormItem>
                    <FormLabel>Enrollment date</FormLabel>
                    <FormControl>
                        <Controller
                            name="educationSegment.startDate"
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <DatePicker value={value} onChange={onChange} onBlur={onBlur} />
                            )}
                        />
                    </FormControl>
                </FormItem>
                <FormItem>
                    <FormLabel>Graduation date</FormLabel>
                    <FormControl>
                        <Controller
                            name="educationSegment.endDate"
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <DatePicker value={value} onChange={onChange} onBlur={onBlur} />
                            )}
                        />
                    </FormControl>
                </FormItem>
            </div>
            <div className="flex justify-start gap-4">
                <Button type="button" onClick={onAddEducationHandler}>
                    Add education
                </Button>
                <Button type="button" onClick={onRemoveEducationHandler}>
                    Remove education
                </Button>
            </div>
        </>
    );
}
