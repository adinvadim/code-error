# tiny-code-error

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#License)

It is very-very-very simple Error class, which have code and payload.
I create this package, because I used this class in many-many projects, because
Code Error it is more informative and type control then simple Error with just
message.

## 📦 Install

```sh
yarn add code-error
```

```sh
pnpm i code-error
```

## 🌟 Example

```typescript
export enum PaymentErrorCode {
  USER_NOT_REGISTER = "app/payment/user-not-register",
  PAYMENT_NOT_VERIFY = "app/payment/not-verify",
  NOT_NEW = "app/payment/not-new",
  CANT_UPDATE = "app/payment/cant-update",
  ALREADY_PAID = "app/payment/already-paid",
  VALIDATION_ERROR = "app/payment/validation-error",
  SUBSCRIPTION_PAYMENT_INCCORECT = "app/payment/subscription-payment-incorrect",
}

export class PaymentError extends CodeError<PaymentErrorCode> {}

export const enum ResetPasswordErrorCode {
  USER_NOT_FOUND = "app/reset/user-not-found",
  UNKNOWN = "app/reset/unknown",
}

export class ResetPasswordError extends CodeError<ResetPasswordErrorCode> {}
```
