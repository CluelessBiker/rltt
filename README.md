## ARTISTIC DEVIATIONS :

- eye icon inserted into the password field instead of a lock : I wanted to add a view-password feature
- magnifying glass icon on right of search field : mockups show left, but instructions were not explicit as with prior inputs -I chose the path that was aesthetically pleasing to me-

## BUGS :
### API credentials / endpoint:
- different auth endpoint : I encountered issues with the one provided (a secondary branch exists to replicate the error)
### Login on enter:
- Keypress `enter` on the signin screen prompts the error message *Password too short*
- console logging out the length of the password shows it exceeds the 4 character restriction
- reorganising the if statements also does not resolve the issue

## TIME BREAKDOWN :
Approximately 6-8 hours was spent on this test over the course of 3 days at a leisurely pace.
- bugs: 2-3 hours
- aesthetics & styled components: 2 hours
- logic: 2-3 hours

## DUMMY API CREDENTIALS :
```
const dummyApi = {
  username: 'kminchelle',
  password: '0lelplR',
  expiresInMins: 30,
};
```
