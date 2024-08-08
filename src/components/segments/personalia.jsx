'use client';

import { Button } from '@/components/ui/button';
import { DatePicker } from '@/components/ui/datepicker';
import { Input } from '@/components/ui/input';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose
} from '@/components/ui/dialog';
import { FormControl, FormItem, FormLabel } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Controller } from 'react-hook-form';

export function PersonaliaSegment({ form }) {
    const { control, register, formState: { errors } } = form;

    return (
        <>
            <h1 className="text-xl font-bold mb-6">Personalia</h1>
            <div className="grid grid-cols-2 gap-4 mb-6">
                <FormItem>
                    <FormLabel>First name</FormLabel>
                    <FormControl>
                        <Input 
                            {...register('personaliaSegment.firstName')} 
                            className={errors.personaliaSegment?.firstName ? 'border-red-500' : ''} 
                        />
                    </FormControl>
                </FormItem>
                <FormItem>
                    <FormLabel>Last name</FormLabel>
                    <FormControl>
                        <Input 
                            {...register('personaliaSegment.lastName')}
                            className={errors.personaliaSegment?.lastName ? 'border-red-500' : ''}
                        />
                    </FormControl>
                </FormItem>
                <FormItem>
                    <FormLabel>Email address</FormLabel>
                    <FormControl>
                        <Input 
                            {...register('personaliaSegment.email')} 
                            className={errors.personaliaSegment?.email ? 'border-red-500' : ''} 
                        />
                    </FormControl>
                </FormItem>
                <FormItem>
                    <FormLabel>Phone number</FormLabel>
                    <FormControl>
                        <Input 
                            {...register('personaliaSegment.phone')} 
                            className={errors.personaliaSegment?.phone ? 'border-red-500' : ''} 
                        />
                    </FormControl>
                </FormItem>
                <FormItem>
                    <FormLabel>Date of birth</FormLabel>
                    <FormControl>
                        <Controller
                            name="personaliaSegment.dateOfBirth"
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <DatePicker 
                                    value={value} 
                                    onChange={onChange} 
                                    onBlur={onBlur} 
                                    className={errors.personaliaSegment?.dateOfBirth ? 'border-red-500' : ''} 
                                />
                            )}
                        />
                    </FormControl>
                </FormItem>
                <FormItem>
                    <FormLabel>Gender</FormLabel>
                    <FormControl>
                        <Controller
                            name="personaliaSegment.gender"
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <Select 
                                    onValueChange={onChange} 
                                >
                                    <SelectTrigger 
                                        className={errors.personaliaSegment?.gender ? 'border-red-500' : ''} 
                                    >
                                        <SelectValue>{value ? value : 'Select gender'}</SelectValue>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Female">Female</SelectItem>
                                        <SelectItem value="Male">Male</SelectItem>
                                    </SelectContent>
                                </Select>
                            )}
                        />
                    </FormControl>
                </FormItem>
                <FormItem>
                    <FormLabel>Home address</FormLabel>
                    <FormControl>
                        <Input 
                            {...register('personaliaSegment.address')} 
                            className={errors.personaliaSegment?.address ? 'border-red-500' : ''}
                        />
                    </FormControl>
                </FormItem>
                <FormItem>
                    <FormLabel>Home address 2nd Line (Optional)</FormLabel>
                    <FormControl>
                        <Input {...register('personaliaSegment.address2')} />
                    </FormControl>
                </FormItem>
                <FormItem>
                    <FormLabel>ZIP code</FormLabel>
                    <FormControl>
                        <Input 
                            {...register('personaliaSegment.zipCode')} 
                            className={errors.personaliaSegment?.zipCode ? 'border-red-500' : ''}
                        />
                    </FormControl>
                </FormItem>
                <FormItem>
                    <FormLabel>City</FormLabel>
                    <FormControl>
                        <Input 
                            {...register('personaliaSegment.city')} 
                            className={errors.personaliaSegment?.city ? 'border-red-500' : ''}
                        />
                    </FormControl>
                </FormItem>
                <FormItem>
                    <FormLabel>Country</FormLabel>
                    <FormControl>
                        <Input 
                            {...register('personaliaSegment.country')} 
                            className={errors.personaliaSegment?.country ? 'border-red-500' : ''}
                        />
                    </FormControl>
                </FormItem>
            </div>
            <div>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="outline">Upload Profile Picture</Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Upload Profile Picture</DialogTitle>
                            <DialogDescription>
                                The image file to upload must be in JPG/PNG format and must not exceed a size of 8 MB.
                            </DialogDescription>
                        </DialogHeader>
                        <Input 
                            type="file" 
                            {...register('personaliaSegment.profilePicture')} 
                            className={errors.personaliaSegment?.country ? 'border-red-500' : ''}
                        />
                        <DialogClose asChild>
                            <Button type="button">Confirm</Button>
                        </DialogClose>
                    </DialogContent>
                </Dialog>
                <FormItem>
                    <FormLabel>Summary</FormLabel>
                    <FormControl>
                        <Textarea 
                            {...register('personaliaSegment.summary')} 
                            className={errors.personaliaSegment?.summary ? 'border-red-500' : ''}
                        />
                    </FormControl>
                </FormItem>
            </div>
        </>
    );
}
