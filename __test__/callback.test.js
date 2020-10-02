import { callBackHell } from "../callback";

describe("Probando un callback", () => {
  test("callback", (done) => {
    function otherCallBack(data) {
      expect(data).toBe("Hola Javascript");
      done();
    }
    callBackHell(otherCallBack);
  });
});
