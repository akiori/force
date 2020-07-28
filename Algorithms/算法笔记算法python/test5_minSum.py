import copy
# test5_minSum
n = int(input())
a1 = [int(i) for i in input().split(' ')]
a2 = [int(i) for i in input().split(' ')]
a3 = [int(i) for i in input().split(' ')]
A = [a1,a2,a3]

B = copy.deepcopy(A)
for i in range(len(B)):
    for j in range(len(B[0])):
        B[i][j] = 0

# 列 j
for j in range(1, n):
    # 行 i
    for i in range(3):
        B[i][j] = min([B[0][j-1]+abs(A[i][j]-A[0][j-1]),
                       B[1][j - 1] + abs(A[i][j] - A[1][j - 1]), B[2][j - 1] + abs(A[i][j] - A[2][j - 1])])

            
print(min(B[0][-1], B[1][-1], B[2][-1]))

