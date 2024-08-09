'use client';

import { useFieldArray } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FormControl, FormItem, FormLabel } from '@/components/ui/form';

function AppendSkill(fields, value, append) {

    if (value == null || value == '') {
        return;
    }
    for (const field of fields) {
        if (field.skill == value) {
            return;
        }
    }
    append({ skill: value })

}

function SkillInstance({index, remove, value}) {

    return (
        <>
            <Button type="button" variant="outline" onClick={() => remove(index)}>
                {value}
            </Button>
        </>
    );


}

export function SkillsSegment({ form }) {

    const { control, register, getValues } = form;
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'skillsSegment.skills'
    });

    return (
        <>
            <h1 className="text-xl font-bold mb-6">Skills</h1>
            <div className="grid grid-cols-1 gap-4 mb-6">
                <FormItem>
                    <FormLabel>Skill</FormLabel>
                    <FormControl className="flex items-center">
                        <Input {...register('skillsSegment.input')} className="flex-grow" />
                    </FormControl>
                </FormItem>
            </div>
            <div className='flex flex-row flex-wrap gap-4 mb-6'>
                {fields.map((field, index) => (
                    <SkillInstance 
                        key={field.id}
                        index={index}
                        remove={remove}
                        value={getValues(`skillsSegment.skills.${index}.skill`)}
                    />
                ))}
            </div>
            <div className="flex justify-start gap-4">
                <Button type="button" onClick={() => AppendSkill(fields, getValues('skillsSegment.input'), append)}>
                    Add skill
                </Button>
            </div>
        </>
    );
}
