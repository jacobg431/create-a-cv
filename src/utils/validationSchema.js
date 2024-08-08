import * as yup from 'yup';

const MAX_FILE_SIZE = 4_194_304
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const validFileExtensions = { image: ['jpg', 'gif', 'png', 'jpeg', 'svg', 'webp'] };

function isValidFileType(fileName, fileType) {
    return fileName && validFileExtensions[fileType].indexOf(fileName.split('.').pop()) > -1;
}

export const validationSchema = yup.object().shape({

    personaliaSegment: yup.object().shape({
        firstName: yup.string().required('First name is required'),
        lastName: yup.string().required('Last name is required'),
        email: yup.string().email('Invalid email format').required('Email is required'),
        phone: yup
            .string()
            .required('Phone number is required')
            .matches(phoneRegExp, 'Phone number is not valid'),
        dateOfBirth: yup.date().nonNullable().required('Date of birth is required'),
        gender: yup
            .string()
            .oneOf(['Female', 'Male'])
            .required('Gender is required'),
        address: yup.string().required('Address is required'),
        zipCode: yup.string().required('ZIP code is required'),
        city: yup.string().required('City is required'),
        country: yup.string().required('Country is required'),
        summary: yup.string(),
        profilePicture: yup
            .mixed()
            .required('Profile picture is required')
            .test('is-valid-type', 'Not a valid image file type', value => isValidFileType(value.name, 'image'))
            .test('is-valid-size', 'Uploaded image exceeds max limit of 4MB', value => value && value.size <= MAX_FILE_SIZE)
    }),
    
    educationSegment: yup.object().shape({
        school: yup.string().required('School name is required'),
        //degree: yup.string().required('Degree is required'),
        startDate: yup.date().nullable().required('Education start date is required')
    }),

    experienceSegment: yup.object().shape({
        company: yup.string().required('Company is required'),
        position: yup.string().required('Position is required'),
        startDate: yup.date().nullable().required('Experience start date is required')
    }),

    skillsSegment: yup.object().shape({
        //placeholder
    }),

    certificationsSegment: yup.object().shape({
        name: yup.string().required('Course name is required'),
        issuer: yup.string().required('Issuer organization is required'),
        startDate: yup.date().nullable().required('Certification issue date is required'),
    }),

    coursesSegment: yup.object().shape({
        name: yup.string().required('Course name is required'),
        instructor: yup.string().required('Instructor is required'),
        completionDate: yup.date().nullable().required('Course completion date is required'),
        duration: yup.string().required('Course duration is required')
    })

});