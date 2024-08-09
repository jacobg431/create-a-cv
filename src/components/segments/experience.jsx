'use client';

import { useFieldArray } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { DatePicker } from '@/components/ui/datepicker';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FormControl, FormItem, FormLabel } from '@/components/ui/form';
import { Controller } from 'react-hook-form';

function ExperienceInstance({ control, index, register, remove}) {

    return (

        <>
            <div className="grid grid-cols-2 gap-4 mb-6">
                <FormItem>
                    <FormLabel>Company</FormLabel>
                    <FormControl>
                        <Input {...register(`experienceSegment.${index}.company`)} />
                    </FormControl>
                </FormItem>
                <FormItem>
                    <FormLabel>Position</FormLabel>
                    <FormControl>
                        <Input {...register(`experienceSegment.${index}.position`)} />
                    </FormControl>
                </FormItem>
                <FormItem>
                    <FormLabel>Start date</FormLabel>
                    <FormControl>
                        <Controller
                            name={`experienceSegment.${index}.startDate`}
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <DatePicker value={value} onChange={onChange} onBlur={onBlur} />
                            )}
                        />
                    </FormControl>
                </FormItem>
                <FormItem>
                    <FormLabel>End date</FormLabel>
                    <FormControl>
                        <Controller
                            name={`experienceSegment.${index}.endDate`}
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <DatePicker value={value} onChange={onChange} onBlur={onBlur} />
                            )}
                        />
                    </FormControl>
                </FormItem>
            </div>
            <div className="grid grid-cols-1 gap-4 mb-6">
                <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                        <Textarea {...register(`experienceSegment.${index}.description`)} />
                    </FormControl>
                </FormItem>
                <Button type="button" variant="outline" onClick={() => remove(index)}>Remove experience</Button>
            </div>
        </>

    );

}

export function ExperienceSegment({ form }) {

    const { control, register } = form;
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'experienceSegment'
    });

    return (
        <>
            <h1 className="text-xl font-bold mb-6">Experience</h1>

            {fields.map((field, index) => (

                <ExperienceInstance 
                    key={field.id}
                    control={control}
                    index={index}
                    register={register}
                    remove={remove}
                />

            ))}

            <div className="flex justify-start gap-4">
                <Button type="button" onClick={() => append({ company: '', position: '', startDate: new Date(), endDate: new Date(), description: '' })}>
                    Add experience
                </Button>
            </div>
        </>
    );
}
