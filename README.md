# DSA-BigO-David-Enrique

## 1. What is the Big O for this

1) Asking the question about the dog has a constant Big O since it is a one step procedure.

2) Big O is linear in the worst case when there is only one person with a golden retriever. If we assume a constant fraction of people with the breed however, this is essentially constant time.

## 2. Even or Odd

isEven is constant time since it is always the same two steps.

## 3. Are you here

This is n^2 or polynomial time counting an increase in both inputs at the same time since this is a nested loop.

## 4. Doubler

This is linear time since we go through a loop equal to the array. If array is twice as long, we will have twice the steps.

## 5. Naive search

This is linear, assuming worst or average case. Basically we loop once through the array so the steps are proportional to the length of the array.

## 6. Creating pairs

This is polynomial time since it is a nested loop that uses arr.length twice. The second loop uses the first index but this only removes half the values which does not affect how we categorize polynomial time.

## 7. Compute the sequence

The algorithm computes a Fibonacci sequence. The time is linear since we loop through (num) once.

## 8. Efficient search

This algorithm is a binary search and the time is O(log n). Doubling n only adds one step to the loop.

## 9. Random element.

This is constant time since it is a one step procedure regardless of the length of the array.

## 10. What am I?

This algorithm checks if a number is prime. The time is linear in the worst case (namely when the number is actually prime), constant for best case(even numbers), and in between for all the rest.

Description of algorithm:

1. Can we win in one step (A to C or B to C)? If so, do that and stop.
2. Test each of the six theoretically possible moves (A to B) (A to C) (B to A) (B to C) (C to A) (C to B)
  A. test if the move is legal
  B. Test if move makes us more distant from victory (removing largest piece or second largest when 2 are there from C)
  C. If so, go to 3. Otherwise skip that move.
3. Can we win in one step from those? If so, do that and stop.
4. If not, take all results and return to 1.




