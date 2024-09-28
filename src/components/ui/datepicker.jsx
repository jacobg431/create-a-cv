'use client';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
//import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export function DatePicker({ disabled, value, onChange, classNameButton, fromYear = 1900, toYear = 2100 }) {
    // Accepting external control

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    disabled={disabled}
                    variant={'outline'}
                    className={`flex h-10 w-full justify-start text-left font-normal px-3 py-2 rounded-md border border-input text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${classNameButton} `}
                >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {value ? format(value, 'PPP') : <span>Pick a date</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                <Calendar
                    mode="single"
                    captionLayout="dropdown-buttons"
                    selected={value}
                    onSelect={onChange}
                    defaultMonth={value}
                    fromYear={fromYear}
                    toYear={toYear}
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    );
}
