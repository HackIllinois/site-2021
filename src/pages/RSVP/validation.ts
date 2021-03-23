import * as z from 'zod';

export const rsvpSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  timezone: z.string(),
  discord: z.string().nonempty(),
  avatarUrl: z.string(),
  teamStatus: z.enum(['LOOKING_FOR_TEAM', 'LOOKING_FOR_MEMBERS', 'NOT_LOOKING']),
  interests: z.array(z.string()).optional(),
  description: z.string().optional(),
});

export type RSVPSchema = z.infer<typeof rsvpSchema>;

export const errorMap: z.ZodErrorMap = (error, ctx) => {
  if (error.message) return { message: error.message };

  if (error.code === z.ZodErrorCode.too_small && error.type === 'string') {
    return { message: 'Required' };
  }

  if (error.code === z.ZodErrorCode.invalid_enum_value) {
    return { message: 'Required' };
  }

  return { message: ctx.defaultError };
};

export const defaultValues = {};
