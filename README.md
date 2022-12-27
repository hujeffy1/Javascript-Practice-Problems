# Javascript Practice Problems

## What Can I Expect?

This repository is intended for anyone looking for extra practice with various
fundamental Javascript concepts. Included in this repo are problems that will ask 
you to:
    - Create for loops and while loops
    - Create Javascript functions using the function keyword
    - Create Javascript functions using arrow syntax
    - Demonstrate how to invoke/call a function and its results/effects
    - Develop functions with parameters and call functions with arguments
    - Understand the concept of scope in Javascript
    - Write code that passes functions as arguments
    - Write and use map, reduce, filter, forEach, and sort methods
    - Write functions that return other functions as the return value

## How Do I Use This Repo?

Once you have cloned this repo, run `npm install` then `npm run test`. Your terminal should show you a URL for http://localhost:7357/. Command click the URL to open your web browser. You will notice that the tests currently show zero failures. That is because the repo initially skips all the tests. You will have to go into the test spec file for your problem and remove the 'x' before the word 'describe' to run the test. These files can be found in the same directory as the practice problem you are working with. As you write code, the tests will run and check your code against the written tests. 

### For example: 
Let's say you want to start on the Array Methods section of this repo. In your file browser on the left of your VS code window, click on Array Methods, then RecreateArrayMethods, then 00-recreate-array-methods. Inside this directory, you will see a README.md which describes the problems found here. You will also see a file called 'reduce_specs.js'. Open that file. Inside, you will see a number of functions starting with the word 'xdescribe'. Remove the 'x' from the 'xdescribe'. Now, assuming you have already run `npm run test` and opened your browser, you will see a few tests failing. Perfect! Now those tests are being run and Testem will check your work in the solution_reduce.js file against the tests. 

