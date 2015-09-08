## Examples how to test React Components

In the account.test.js we don't mock the i18n context. That tests also tests the i18n module (more of an integration test than a unit test).
In the account-list-container we provide our own React context.
We should try to make the test as simple and easy to understand as possible.
