'use client';

import { useFieldArray } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { DatePicker } from '@/components/ui/datepicker';
import { Input } from '@/components/ui/input';
import { FormControl, FormItem, FormLabel } from '@/components/ui/form';
import { Controller } from 'react-hook-form';

function EducationInstance({ control, index, register, remove}) {

    return (

        <>
            <div className="grid grid-cols-2 gap-4 mb-6">
                <FormItem>
                    <FormLabel>Name of the school</FormLabel>
                    <FormControl>
                        <Input {...register(`educationSegment.${index}.school`)} />
                    </FormControl>
                </FormItem>
                <FormItem>
                    <FormLabel>Degree</FormLabel>
                    <FormControl>
                        <Input {...register(`educationSegment.${index}.degree`)} />
                    </FormControl>
                </FormItem>
                <FormItem>
                    <FormLabel>Enrollment date</FormLabel>
                    <FormControl>
                        <Controller
                            name={`educationSegment.${index}.startDate`}
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
                            name={`educationSegment.${index}.endDate`}
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <DatePicker value={value} onChange={onChange} onBlur={onBlur} />
                            )}
                        />
                    </FormControl>
                </FormItem>
                <Button type="button" variant="outline" onClick={() => remove(index)}>Remove education</Button>
            </div>
        </>

    );

}

export function EducationSegment({ form }) {

    const { control, register } = form;
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'educationSegment' 
      });
    
    return (
        <>
            <h1 className="text-xl font-bold mb-6">Education</h1>

            {fields.map((field, index) => (
                <EducationInstance 
                    key={field.id}
                    control={control}
                    index={index}
                    register={register}
                    remove={remove}
                />
            ))}

            <div className="flex justify-start gap-4">
                <Button type="button" onClick={() => append({ school: '', degree: '', startDate: new Date(), endDate: new Date()})}>
                    Add education
                </Button>
            </div>
        </>
    );

}
