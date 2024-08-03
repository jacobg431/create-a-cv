"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormControl, FormField, FormItem } from "@/components/ui/form";

export function SkillsSegment({ form }) {
	function onAddSkillHandler() {
		return;
	}

	function onRemoveSkillHandler() {
		return;
	}

	return (
		<>
			<h1 className="text-xl font-bold mb-6">Skills</h1>
			<div>
				<div className="flex items-center mb-2">
					<FormField
						control={form.control}
						name="skills"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input placeholder="Skill" {...field} />
								</FormControl>
							</FormItem>
						)}
					/>
					<Button
						type="button"
						variant="outline"
						onClick={onRemoveSkillHandler}
					>
						Remove
					</Button>
				</div>
			</div>
			<Button type="button" onClick={onAddSkillHandler}>
				Add Skill
			</Button>
		</>
	);
}
