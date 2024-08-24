'use client';

import { useFieldArray } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { DatePicker } from '@/components/ui/datepicker';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FormControl, FormItem, FormLabel } from '@/components/ui/form';
import { Controller } from 'react-hook-form';

function ExperienceInstance({ control, index, register, remove, watch, errors }) {
    return (
        <>
            <div className="grid grid-cols-12 gap-4 mb-6">
                <FormItem className="col-span-6">
                    <FormLabel>Company</FormLabel>
                    <FormControl>
                        <Input
                            {...register(`experienceSegment.experience.${index}.company`)}
                            className={
                                errors?.experienceSegment?.experience?.[index]?.company
                                    ? 'validation-error-outline'
                                    : ''
                            }
                        />
                    </FormControl>
                </FormItem>
                <FormItem className="col-span-6">
                    <FormLabel>Position</FormLabel>
                    <FormControl>
                        <Input
                            {...register(`experienceSegment.experience.${index}.position`)}
                            className={
                                errors?.experienceSegment?.experience?.[index]?.position
                                    ? 'validation-error-outline'
                                    : ''
                            }
                        />
                    </FormControl>
                </FormItem>
                <FormItem className="col-span-3">
                    <FormLabel>Start date</FormLabel>
                    <FormControl>
                        <Controller
                            name={`experienceSegment.experience.${index}.startDate`}
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <DatePicker
                                    value={value}
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    classNameButton={
                                        errors?.experienceSegment?.experience?.[index]?.startDate
                                            ? 'validation-error-outline'
                                            : ''
                                    }
                                />
                            )}
                        />
                    </FormControl>
                </FormItem>
                <FormItem className="col-span-3">
                    <FormLabel>End date</FormLabel>
                    <FormControl>
                        <Controller
                            name={`experienceSegment.experience.${index}.endDate`}
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <DatePicker
                                    disabled={watch(`experienceSegment.experience.${index}.isWorking`)}
                                    value={value}
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    classNameButton={
                                        errors?.experienceSegment?.experience?.[index]?.endDate
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
                            name={`experienceSegment.experience.${index}.isWorking`}
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <Checkbox checked={value} onCheckedChange={onChange} onBlur={onBlur} />
                            )}
                        />
                    </FormControl>
                    <FormLabel style={{ margin: 0 }}>Currently employed</FormLabel>
                </FormItem>
            </div>
            <div className="grid grid-cols-1 gap-4 mb-6">
                <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                        <Textarea
                            {...register(`experienceSegment.experience.${index}.description`)}
                            className={
                                errors?.experienceSegment?.experience?.[index]?.description
                                    ? 'validation-error-outline'
                                    : ''
                            }
                        />
                    </FormControl>
                </FormItem>
                <Button type="button" variant="outline" onClick={() => remove(index)}>
                    Remove experience
                </Button>
            </div>
        </>
    );
}

export function ExperienceSegment({ form }) {
    const {
        control,
        register,
        watch,
        formState: { errors }
    } = form;
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'experienceSegment.experience'
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
                    watch={watch}
                    errors={errors}
                />
            ))}

            <div className="flex justify-start gap-4">
                <Button
                    type="button"
                    onClick={() =>
                        append({
                            company: '',
                            position: '',
                            startDate: new Date(),
                            endDate: new Date(),
                            isWorking: false,
                            description: ''
                        })
                    }
                >
                    Add experience
                </Button>
            </div>
        </>
    );
}
