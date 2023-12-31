import styled from '@emotion/styled';
import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikError,
} from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 480px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;

  font-weight: 600;

  color: #666666;
`;

export const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  padding-left: 8px;
`;

export const Field = styled(FormikField)`
  padding: 8px;
  height: 36px;

  border-radius: 8px;
  border: 1px solid #cececf;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  font-size: 16px;
`;

export const FormButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 160px;
  height: 36px;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #cececf;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #d2d8db;
  color: #666666;

  font-size: 16px;
  font-weight: 500;
`;

export const ErrorMessage = styled(FormikError)`
  max-width: 480px;
  color: tomato;
`;
