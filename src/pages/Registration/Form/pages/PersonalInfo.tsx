import React from 'react';
import { RegistrationPageProps } from 'util/types';

const PersonalInfo = ({ errors, register }: RegistrationPageProps): JSX.Element => (
  <>
    <h1>Personal Info</h1>
    {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
    {/* register your input into the hook by invoking the "register" function */}
    <input name="name" defaultValue="test" ref={register} />

    {/* include validation with required or other standard HTML validation rules */}
    <input name="email" ref={register({ required: true })} />
    {/* errors will return when field validation fails  */}
    {errors.email && <span>This field is required</span>}
  </>
);

export default PersonalInfo;
