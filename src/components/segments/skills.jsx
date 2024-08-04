'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FormControl, FormItem, FormLabel } from '@/components/ui/form';

function onAddSkillHandler() {
    return;
}

function onRemoveSkillHandler() {
    return;
}

export function SkillsSegment({ form }) {
    const { register } = form;

    return (
        <>
            <h1 className="text-xl font-bold mb-6">Skills</h1>
            <div className="grid grid-cols-1 gap-4 mb-6">
                <FormItem>
                    <FormLabel>Skill</FormLabel>
                    <FormControl className="flex items-center">
                        <Input {...register('skillsSegment.skills')} className="flex-grow" />
                    </FormControl>
                </FormItem>
            </div>
            <div className="flex justify-start gap-4">
                <Button type="button" onClick={onAddSkillHandler}>
                    Add skill
                </Button>
                <Button type="button" onClick={onRemoveSkillHandler}>
                    Remove skill
                </Button>
            </div>
        </>
    );
}
