import { expectType } from "tsd";
import { CodeError, isCodeError } from "../src";

enum TestEnum {
  test = "test",
}

expectType<CodeError>(new CodeError({ code: "test" }));
expectType<CodeError<"test">>(new CodeError({ code: "test" }));
expectType<CodeError<TestEnum>>(new CodeError({ code: TestEnum.test }));
expectType<boolean>(isCodeError(new CodeError({ code: "test" })));
