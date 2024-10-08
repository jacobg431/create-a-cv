'use client';

import { useFieldArray } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { DatePicker } from '@/components/ui/datepicker';
import { Input } from '@/components/ui/input';
import { FormControl, FormItem, FormLabel } from '@/components/ui/form';
import { Controller } from 'react-hook-form';

function EducationInstance({ control, index, register, remove, watch, errors }) {
    return (
        <>
            <div className="grid grid-cols-12 gap-4 mb-6">
                <FormItem className="col-span-6">
                    <FormLabel>Name of the school</FormLabel>
                    <FormControl>
                        <Input
                            {...register(`educationSegment.educationList.${index}.school`)}
                            className={
                                errors?.educationSegment?.educationList?.[index]?.school
                                    ? 'validation-error-outline'
                                    : ''
                            }
                        />
                    </FormControl>
                </FormItem>
                <FormItem className="col-span-6">
                    <FormLabel>Degree</FormLabel>
                    <FormControl>
                        <Input
                            {...register(`educationSegment.educationList.${index}.degree`)}
                            className={
                                errors?.educationSegment?.educationList?.[index]?.degree
                                    ? 'validation-error-outline'
                                    : ''
                            }
                        />
                    </FormControl>
                </FormItem>
                <FormItem className="col-span-3">
                    <FormLabel>Enrollment date</FormLabel>
                    <FormControl>
                        <Controller
                            name={`educationSegment.educationList.${index}.startDate`}
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <DatePicker
                                    value={value}
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    classNameButton={
                                        errors?.educationSegment?.educationList?.[index]?.startDate
                                            ? 'validation-error-outline'
                                            : ''
                                    }
                                />
                            )}
                        />
                    </FormControl>
                </FormItem>
                <FormItem className="col-span-3">
                    <FormLabel>Graduation date</FormLabel>
                    <FormControl>
                        <Controller
                            name={`educationSegment.educationList.${index}.endDate`}
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <DatePicker
                                    disabled={watch(`educationSegment.educationList.${index}.isStudying`)}
                                    value={value}
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    classNameButton={
                                        errors?.educationSegment?.educationList?.[index]?.endDate
                                            ? 'validation-error-outline'
                                            : ''
                                    }
                                />
                            )}
                        />
                    </FormControl>
                </FormItem>
                <FormItem className="flex flex-row flex-start items-center gap-4 col-span-6">
                    <FormControl>
                        <Controller
                            name={`educationSegment.educationList.${index}.isStudying`}
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <Checkbox checked={value} onCheckedChange={onChange} onBlur={onBlur} />
                            )}
                        />
                    </FormControl>
                    <FormLabel style={{ margin: 0 }}>Currently studying</FormLabel>
                </FormItem>
                <Button className="col-span-6" type="button" variant="outline" onClick={() => remove(index)}>
                    Remove education
                </Button>
            </div>
        </>
    );
}

export function EducationSegment({ form }) {
    const {
        control,
        register,
        watch,
        formState: { errors }
    } = form;
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'educationSegment.educationList'
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
                    watch={watch}
                    errors={errors}
                />
            ))}

            <div className="flex justify-start gap-4">
                <Button
                    type="button"
                    onClick={() =>
                        append({
                            school: '',
                            degree: '',
                            startDate: new Date(),
                            endDate: new Date(),
                            isStudying: false
                        })
                    }
                >
                    Add education
                </Button>
            </div>
        </>
    );
}
