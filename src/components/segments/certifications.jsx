'use client';

import { useFieldArray } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { DatePicker } from '@/components/ui/datepicker';
import { Input } from '@/components/ui/input';
import { FormControl, FormItem, FormLabel } from '@/components/ui/form';
import { Controller } from 'react-hook-form';

function CertificationInstance({ control, index, register, remove, watch, errors }) {
    return (
        <>
            <div className="grid grid-cols-12 gap-4 mb-6">
                <FormItem className="col-span-6">
                    <FormLabel>Certification name</FormLabel>
                    <FormControl>
                        <Input
                            {...register(`certificationsSegment.certificationList.${index}.name`)}
                            className={
                                errors?.certificationsSegment?.certificationList?.[index]?.name
                                    ? 'validation-error-outline'
                                    : ''
                            }
                        />
                    </FormControl>
                </FormItem>
                <FormItem className="col-span-6">
                    <FormLabel>Issuer organization</FormLabel>
                    <FormControl>
                        <Input
                            {...register(`certificationsSegment.certificationList.${index}.issuer`)}
                            className={
                                errors?.certificationsSegment?.certificationList?.[index]?.issuer
                                    ? 'validation-error-outline'
                                    : ''
                            }
                        />
                    </FormControl>
                </FormItem>
                <FormItem className="col-span-3">
                    <FormLabel>Date of issue</FormLabel>
                    <FormControl>
                        <Controller
                            name={`certificationsSegment.certificationList.${index}.startDate`}
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <DatePicker
                                    value={value}
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    classNameButton={
                                        errors?.certificationsSegment?.certificationList?.[index]?.startDate
                                            ? 'validation-error-outline'
                                            : ''
                                    }
                                />
                            )}
                        />
                    </FormControl>
                </FormItem>
                <FormItem className="col-span-3">
                    <FormLabel>Date of expiration</FormLabel>
                    <FormControl>
                        <Controller
                            name={`certificationsSegment.certificationList.${index}.endDate`}
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <DatePicker
                                    disabled={watch(`certificationsSegment.certificationList.${index}.isNotExpiring`)}
                                    value={value}
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    classNameButton={
                                        errors?.certificationsSegment?.certificationList?.[index]?.endDate
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
                            name={`certificationsSegment.certificationList.${index}.isNotExpiring`}
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <Checkbox checked={value} onCheckedChange={onChange} onBlur={onBlur} />
                            )}
                        />
                    </FormControl>
                    <FormLabel style={{ margin: 0 }}>No expiration date</FormLabel>
                </FormItem>
                <Button className="col-span-6" type="button" variant="outline" onClick={() => remove(index)}>
                    Remove certification
                </Button>
            </div>
        </>
    );
}

export function CertificationsSegment({ form }) {
    const {
        control,
        register,
        watch,
        formState: { errors }
    } = form;
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'certificationsSegment.certificationList'
    });

    return (
        <>
            <h1 className="text-xl font-bold mb-6">Certifications</h1>

            {fields.map((field, index) => (
                <CertificationInstance
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
                            name: '',
                            issuer: '',
                            startDate: new Date(),
                            endDate: new Date(),
                            isNotExpiring: false
                        })
                    }
                >
                    Add certification
                </Button>
            </div>
        </>
    );
}
