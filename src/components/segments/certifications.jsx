'use client';

import { useFieldArray } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { DatePicker } from '@/components/ui/datepicker';
import { Input } from '@/components/ui/input';
import { FormControl, FormItem, FormLabel } from '@/components/ui/form';
import { Controller } from 'react-hook-form';

function CertificationInstance({ control, index, register, remove}) {

    return (

        <>
            <div className="grid grid-cols-2 gap-4 mb-6">
                <FormItem>
                    <FormLabel>Certification name</FormLabel>
                    <FormControl>
                        <Input {...register(`certificationsSegment.${index}.name`)} />
                    </FormControl>
                </FormItem>
                <FormItem>
                    <FormLabel>Issuer organization</FormLabel>
                    <FormControl>
                        <Input {...register(`certificationsSegment.${index}.issuer`)} />
                    </FormControl>
                </FormItem>
                <FormItem>
                    <FormLabel>Date of issue</FormLabel>
                    <FormControl>
                        <Controller
                            name={`certificationsSegment.${index}.startDate`}
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <DatePicker value={value} onChange={onChange} onBlur={onBlur} />
                            )}
                        />
                    </FormControl>
                </FormItem>
                <FormItem>
                    <FormLabel>Date of expiration</FormLabel>
                    <FormControl>
                        <Controller
                            name={`certificationsSegment.${index}.endDate`}
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <DatePicker value={value} onChange={onChange} onBlur={onBlur} />
                            )}
                        />
                    </FormControl>
                </FormItem>
                <Button type="button" variant="outline" onClick={() => remove(index)}>Remove certification</Button>
            </div>
        </>

    );

}

export function CertificationsSegment({ form }) {

    const { control, register } = form;
    const { fields, append, remove} = useFieldArray({
        control,
        name: 'certificationsSegment'
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
                />
            ))}

            <div className="flex justify-start gap-4">
                <Button type="button" onClick={() => append({ name: '', issuer: '', startDate: new Date(), endDate: new Date() })}>
                    Add certification
                </Button>
            </div>
        </>
    );
}
