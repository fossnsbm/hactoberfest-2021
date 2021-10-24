# Black-Jack
Black Jack game made using Python

Players are each dealt two cards, face up or down depending on the casino and the table. The dealer is also dealt two cards, normally one up (exposed) and one down (hidden). 
The value of cards two through ten is their pip value (2 through 10). Face cards (Jack, Queen, and King) are all worth ten.
Aces can be worth one or eleven. A hand's value is the sum of the card values. Players are allowed to draw additional cards("HIT") to improve their hands. The value of the ace will become one to prevent the hand from exceeding 21.

You can either HIT(ask for additional card to make your hand value closer to 21) or STAND(stop asking for cards and allow dealer to play their turn).

Once all the players have completed their hands, it is the dealer's turn. The dealer hand will not be completed if all players have either busted or received blackjacks. The dealer then reveals the hidden card. You are betting that you have a better hand than the dealer. The better hand is the hand where the sum of the card values is closer to 21 without exceeding 21. 
The detailed outcome of the hand follows:

•If the player is dealt an Ace and a ten-value card (called a "blackjack"), and the dealer does not, the player wins and usually receives a bonus.

•If the player exceeds a sum of 21 ("busts"); the player loses, even if the dealer also exceeds 21.

•If the dealer exceeds 21 ("busts") and the player does not; the player wins.

•If the player attains a final sum higher than the dealer and does not bust; the player wins.

•If both dealer and player receive a blackjack or any other hands with the same sum, called a "push", no one wins.
