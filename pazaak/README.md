# Todo:
1. Create pre match window to pick a side deck
    * ~~User pick 10 cards~~
    * ~~Side deck saves 10 user picked cards~~
    * Game asks if player wants to conntinue with this side deck
    * Player can select No
    * ~~Player can remove cards from side deck~~
2. Game logic
    * ~~Game draws 4 from side deck into players hand~~
    * ~~GPlayer can end turn (draws a house card)~~G
    * Player can stand (no further action)
    * Player can play card from hand (1 per turn)
    * Player can flip plus/minus card's sign
3.  Play Again
    * Player can chose to play again
    * Reset all state
4. Implement CPU Player
    * Implement a board that reflects CPU state
    * Generate random hand for CPU
    * CPU stands if 19 and no cards in hand to increase to 20
    * CPU will always play card to increase card to 20
    * Otherwise, keep recieving house cards
    * If count is over 20, play minus card if avail

## Need to Refactor
* ~~Refactor Card and PickCards to dynamically render instead of hardcoding and repeating~~
* Move all state to Redux
* Move num generator func to a utils folder
* ~~Rename all params and values to be consistent across all components~~
* Create a func to map all cards
* rename all vars to be consistent 


## Stretch Goals
1. Limited pool of initial starting cards
2. Implement economy for player to purchase new cards
3. Add unique cards