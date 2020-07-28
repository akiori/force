[a, b] = list(map(int, input().split()))

# def smallInt(a, b):
#     count = 0
#     for i in range(a, b + 1):
#         num = str(i)
#         if '1' in num or '2' in num or '3' in num or '4' in num or '5' in num or '7' in num or '9' in num or '0' in num:
#             continue
#         else:
#             count += 1
#     return count

# if a < 1 or b > 1000000000 or a > b:
#     print(-1)
# else:
#     count = 0
#     m = int(len(str(a)))
#     n = int(len(str(b))) - 1
#     if n - m > 0:
#         for i in range(m+1 , n + 1):
#             count += 2 ** i
#         count += smallInt(a, 10**m) + smallInt(10**n, b)

#     else:
#         count = smallInt(a, b)
            
total_res = []
# 生成长度为n的幸运数
def generate(n):
    lis = []
    if n == 1:
        return ['6', '8']
    for i in generate(n-1):
        lis.append('6' + i)
        lis.append('8' + i)
    return lis

for i in range(1, 10):
    total_res += generate(i)

total_number = []

for i in total_res:
    total_number.append(int(i))

count = 0
for j in total_number:
    if j >= a and j <= b:
        count += 1
print(count)