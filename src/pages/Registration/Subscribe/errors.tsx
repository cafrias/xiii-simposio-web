/*
This file contains all error types and messages they have.
*/

type Required = {
  type: "required";
  message: string;
};

type Invalid = {
  type: "invalid";
  message: string;
};

export type ValidationError = Required | Invalid;
