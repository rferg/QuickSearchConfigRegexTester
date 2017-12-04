# Quick Search Config RegEx Tester
A simple Node.js script for testing arrays of regular expressions for query definition quick search configs.

To run, call `node regex-test.js <path to test file (relative to regex-test.js)>`.  For example, to run the sample tests, `cd` to the directory of regex-test.js and run:
```
node regex-test.js ./sample/test-strings1.js
```
### Test file
The test file should export two arrays: `testStrings` and `regexArray`.  

The `regexArray` objects have a `regex` property and a `label` property.  

The `testStrings` objects have a `str` property, which is the input string to be tested, and an `expected` property, which is the `label` of the **first** RegEx in the `regexArray` that matches `str`.

The order of `regexArray` matters just as it does in the query definition.

