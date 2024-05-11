export class CodeError<T = string> extends Error {
  public code: T;

  public payload: any;

  public message: string;

  constructor(errorOptions: { code: T; message?: string; payload?: any }) {
    errorOptions.message =
      errorOptions.message || `CodeError with code ${errorOptions.code}`;
    super(errorOptions.message);
    this.message = errorOptions.message;
    this.code = errorOptions.code;
    this.payload = errorOptions.payload;

    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export const isCodeError = (value: any): value is CodeError =>
  value?.code != null;
