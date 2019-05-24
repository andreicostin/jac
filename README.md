# jac

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

# JAC Technical Test
The baseline technical test for developers interested in working for the Judicial Appointments Commission

## Background

The JAC needs a new online tool to allow users to register their interest in a job or jobs.

You have just picked up the ticket to do this piece of work. It needs to be done to a production-ready standard.

## Requirements

We need a webpage that allows a user to enter their email address and pick from a list of upcoming jobs they wish to apply for.

The jobs are as follows:

| Job opens in | Job Title |
| --- | --- |
| 30 days | District Judge |
| 60 days | Tribunal Member |
| 65 days | Adjudicator |

+ Jobs remain open for 30 days.
+ We need a to maintain a record of which users applied for which jobs for 90 days after the job opening has closed.
+ We need to be able to add new jobs to the system-how that is done is unimportant right now.
+ For the purposes of this part of the test, user emails do not need to be validated.
+ The page should have at least basic styling.  We typically use bootstrap, but this is not mandatory.  Do not worry about
    branding for this part of the test. 

## Submitting your work

This is intended to test your ability to understand and model a typical problem we encounter.  It is also a test of your
approach to working.  It should typically take four to eight hours to complete the task.

Ensure your work is committed to a git repo and either send us that repo or share it with us from the hosted git of your choice
(we use GitHub).  Please also ensure your code is tested and has instructions on how to run it. 

## Our tech stack

When considering how to approach this problem, be aware that we currently use the following technologies:

+ Vue.js
+ Google Firebase
+ Google Firestore (the Firebase NoSQL data store)
+ Bootstrap
+ git
+ eslint
+ editorconfig

We are open to other approaches, but this test should use a substantially similar methodology.
