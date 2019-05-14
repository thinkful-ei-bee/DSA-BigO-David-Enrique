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


## 11. Tower of Hanoi
1. Description of algorithm:

    1. If there is only one disk, solve it by moving from the source to destination.

    2. If there is more than one disk, move all the disks except one to the intermediate spot then move the largest disk to the destination.

    3. Move the intermediate disks to the destination.

2. Given 5 disks, after 7 recursive calls, there are 3 disks on the destination and 2 disks on the source.

3. 3 disks: 7 moves
    4 disks: 15 moves
      5 disks : 31 moves

    n disks = 2^n-1

4. O(2^n)

## 12. Iterative version = iterativeSolutions.js

## 13. Recursive Big O

Counting Sheep: linear
Factorial: linear
Fibonacci: in between n^2 and 2^n
Power Calculator: constant for base, linear for exponent
Reverse String: linear
String Splitter: linear in number of separations
Triangular Number: linear

## 14. Iterative Big O

Counting Sheep: linear
Factorial: linear
Fibonacci: linear
Power Calculator: linear
Reverse String: linear
String Splitter: linear
Triangular Number: linear


