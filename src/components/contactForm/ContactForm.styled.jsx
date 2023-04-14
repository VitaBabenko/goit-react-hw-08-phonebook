import styled from 'styled-components';
import {
  Form as FormikForm,
  ErrorMessage as FormikError,
  Field as InputField,
} from 'formik';

export const Title = styled.h1`
  text-align: center;
  color: #800080;
`;

export const Form = styled(FormikForm)`
  border: 2px solid #800080;
  border-radius: 10px;
  padding: 15px;
  width: 100%;

  @media (min-width: 768px) {
    width: 400px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 250px;
  color: #800080;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 25px;
`;

export const Field = styled(InputField)`
  border-color: #800080;
  border-radius: 10px;
`;

export const Btn = styled.button`
  display: block;
  align-content: center;
  padding: 10px 20px;
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
  color: #800080;
  margin-left: auto;
  margin-right: auto;
  border-color: #800080;
  border-radius: 10px;

  &:hover,
  &:focus {
    background-color: #ff00ff;
  }
`;

export const ErrorMessage = styled(FormikError)`
  color: red;
  width: 100%;
`;
