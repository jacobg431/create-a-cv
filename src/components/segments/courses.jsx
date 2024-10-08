'use client';

import { useFieldArray } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { DatePicker } from '@/components/ui/datepicker';
import { Input } from '@/components/ui/input';
import { FormControl, FormItem, FormLabel } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Controller } from 'react-hook-form';

function CourseInstance({ control, index, register, remove, errors }) {
    return (
        <>
            <div className="grid grid-cols-2 gap-4 mb-6">
                <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                        <Input
                            {...register(`coursesSegment.courseList.${index}.name`)}
                            className={
                                errors?.coursesSegment?.courseList?.[index]?.name ? 'validation-error-outline' : ''
                            }
                        />
                    </FormControl>
                </FormItem>
                <FormItem>
                    <FormLabel>Instructor</FormLabel>
                    <FormControl>
                        <Input
                            {...register(`coursesSegment.courseList.${index}.instructor`)}
                            className={
                                errors?.coursesSegment?.courseList?.[index]?.instructor
                                    ? 'validation-error-outline'
                                    : ''
                            }
                        />
                    </FormControl>
                </FormItem>
                <FormItem>
                    <FormLabel>Completion date</FormLabel>
                    <FormControl>
                        <Controller
                            name={`coursesSegment.courseList.${index}.completionDate`}
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <DatePicker
                                    value={value}
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    classNameButton={
                                        errors?.coursesSegment?.courseList?.[index]?.startDate
                                            ? 'validation-error-outline'
                                            : ''
                                    }
                                />
                            )}
                        />
                    </FormControl>
                </FormItem>
                <FormItem>
                    <FormLabel>Duration</FormLabel>
                    <FormControl>
                        <Controller
                            name={`coursesSegment.courseList.${index}.duration`}
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <Select onValueChange={onChange}>
                                    <SelectTrigger
                                        className={
                                            errors?.coursesSegment?.courseList?.[index]?.duration
                                                ? 'validation-error-outline'
                                                : ''
                                        }
                                    >
                                        <SelectValue>{value ? value : 'Select duration'}</SelectValue>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Hours">Hours</SelectItem>
                                        <SelectItem value="Days">Days</SelectItem>
                                        <SelectItem value="Weeks">Weeks</SelectItem>
                                        <SelectItem value="Months">Months</SelectItem>
                                    </SelectContent>
                                </Select>
                            )}
                        />
                    </FormControl>
                </FormItem>
                <Button type="button" variant="outline" onClick={() => remove(index)}>
                    Remove course
                </Button>
            </div>
        </>
    );
}

export function CoursesSegment({ form }) {
    const {
        register,
        control,
        formState: { errors }
    } = form;
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'coursesSegment.courseList'
    });

    return (
        <>
            <h1 className="text-xl font-bold mb-6">Courses</h1>

            {fields.map((field, index) => (
                <CourseInstance
                    key={field.id}
                    control={control}
                    index={index}
                    register={register}
                    remove={remove}
                    errors={errors}
                />
            ))}

            <div className="flex justify-start gap-4">
                <Button
                    type="button"
                    onClick={() => append({ name: '', instructor: '', completionDate: new Date(), duration: '' })}
                >
                    Add course
                </Button>
            </div>
        </>
    );
}
