import * as z from 'zod';

// TODO: if we can get the backend to accept "name" instead of "firstName" and "lastName" then
// RegistrationSchema could just be replaced with RegistrationType
export const registrationSchema = z.object({
  firstName: z.string().nonempty(),
  lastName: z.string().nonempty(),
  email: z.string().nonempty().email(),
  location: z.string().nonempty(),
  timezone: z.string().nonempty(),
  gender: z.string().optional(),
  race: z.string().array().optional(),
  degreePursued: z.enum(['ASSOCIATES', 'BACHELORS', 'MASTERS', 'PHD', 'GRADUATED', 'OTHER']),
  graduationYear: z.number().int(),
  school: z.string().nonempty(),
  major: z.string().nonempty(),
  programmingYears: z.number().int().min(0).max(10),
  programmingAbility: z.number().int().min(1).max(5),
  hasInternship: z.boolean(),
  resumeFilename: z.string().optional(),
  terms: z.boolean().refine((val: boolean) => val),
});

export type RegistrationSchema = z.infer<typeof registrationSchema>;

export const errorMap: z.ZodErrorMap = (error, ctx) => {
  if (error.message) return { message: error.message };

  if (error.code === z.ZodErrorCode.too_small && error.type === 'string') {
    return { message: 'Required' };
  }

  return { message: ctx.defaultError };
};

export const defaultValues = {
  race: [],
};
