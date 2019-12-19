/* eslint-disable no-unused-expressions */
import { fixture, assert } from "@open-wc/testing";

import "../contact-form.js";

describe("Suite cases", () => {
  it("Case default", async () => {
    const _element = await fixture("<contact-form></contact-form>");
    assert.strictEqual(_element.hello, 'Hello World!');
  });
});
