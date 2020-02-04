# Positive Tests
## Auth tests
* Sign Up => Screen
* Sign In => Screen: Sign Up, Sign In buttons disappear, other buttons appear
* Change Password => Screen
* Sign out
* Sign In (with new password)

## Game
* New Game - Winning Scenarios: after win, see message and clicks do not register
    - X wins three in a row in less than 9 moves
    - O wins three in a column
    - O wins diaganolly from left top
    - X wins three in a column in less than 9 moves
    - X wins diaganolly from top right in 9 moves
* New Game - Draw
* Show Stats - will show number of wins for X, O, and ties, no mention of in progress.
* Incomplete game
* New Game (show blank screen)
* Show Stats - will show as above, plus will show number of incomplete

# Negative tests
## Authorization
* Sign Up - provide existing Email
* Sign In - provide incorrect Email
* Change Pw - provide incorrect password
## Failure due to disconnect
* Disconnect
* Sign Up
* Sign In
* Connect and Sign In
* Disconnect
* Log out
* Change PW
* New game
* Connect
* New game
* Make some moves
* disconnect
* Make a move
* Reconnect
* Finish game
## Unexpected Flow
* User clicks sign up, does not finish sign up, and presses Sign In
* User clicks sign in, does not finish sign in, and clicks sign up
