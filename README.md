## ARTISTIC DEVIATIONS :
- *'Email'* has been changed to *'Username'* on the login screen to reflect the dummy API used
- eye icon inserted into the password field instead of a lock : I wanted to add a view-password feature
- magnifying glass icon on right of search field : mockups show left, but instructions were not explicit as with prior inputs -I chose the path that was aesthetically pleasing to me-

## BUGS :
### API credentials / endpoint:
- different auth endpoint : I encountered issues with the one provided (a secondary branch exists to replicate the error)
### Login on enter:
- Keypress `enter` on the signin screen prompts the error message *Password too short*
- console logging out the length of the password shows it exceeds the 4 character restriction
- reorganising the if statements also does not resolve the issue
- moved validation into onChange. Upon hitting enter, a request is made to the API, however the username/password are both coming up as empty strings so the request fails
- console logging out the login shows both fields to be populated
- issue was resolved by adding `login` to useEffect dependency array

## TIME BREAKDOWN :
Approximately 6-8 hours was spent on this test over the course of 3 days at a leisurely pace.
- bugs: 2-3 hours
- aesthetics & styled components: 2 hours
- logic: 2-3 hours

## DUMMY API CREDENTIALS :
```
username: 'kminchelle',
password: '0lelplR',
```

## PROVIDED API CREDS :
```
endpoint: 'http://dev.rapptrlabs.com/Tests/scripts/user-login.php',
username: 'test@rapptrlabs.com',
password: 'Test123.',
```
