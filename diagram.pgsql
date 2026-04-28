                ┌────────────────────────┐
                │   Page Loads           │
                └────────────┬───────────┘
                             │
                             ▼
                 ┌────────────────────────┐
                 │ createBoard()          │
                 │ • Shuffle emojis       │
                 │ • Create 16 cards      │
                 │ • Show them on board   │
                 └────────────┬───────────┘
                             │
                   User clicks a card
                             │
                             ▼
                ┌────────────────────────┐
                │ flipCard()             │
                │ • Flip card visually   │
                │ • Add to flippedCards  │
                └────────────┬───────────┘
                             │
                     Are 2 cards flipped?
                           /   \
                          /     \
                         No      Yes
                         |        |
                         |        ▼
                         |   ┌───────────────┐
                         |   │ checkMatch()  │
                         |   │ Compare cards │
                         |   └───────┬───────┘
                         |           │
                If MATCH │           │ If NOT MATCH
                         ▼           ▼
                ┌────────────────┐ ┌────────────────────┐
                │ Mark matched   │ │ Flip both back      │
                └───────┬────────┘ └─────────┬──────────┘
                        │                    │
                        └──────────┬─────────┘
                                   ▼
                         Is game finished?
                         /       \
                        /         \
                      No           Yes
                      |            |
                      |   ┌────────────────────┐
                      |   │ Show message       │
                      |   │ “You won in X moves│
                      |   └────────────────────┘
                      |
                      ▼
                 Continue game