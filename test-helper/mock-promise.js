/*
 * You can use these test helper to avoid async testing of promises
 */
export function createSuccessPromise(successValue) {
  return {
    then: (cb) => createSuccessPromise(cb(successValue)),
    successValue,
  };
}

export function createFailPromise(failValue) {
  return {
    then: (_, failCb) => createFailPromise(failCb(failValue)),
    failValue,
  };
}

