# test_rollerCoasterNumber.py
[n, num] = input().split('[')
n = int(n.rstrip(','))
num = list(map(int, num.rstrip(']').split(',')))

peak_loc = []

for idx, item in enumerate(num):
    if idx > 0 and idx < len(num) -1:
        if item > num[idx - 1] and item > num[idx + 1]:
            peak_loc.append(idx)

# print(peak_loc)

if len(peak_loc) == 0:
    print(0)

else:
    res = []
    for idx in peak_loc:
        # print(idx)
        count = 3
        # 对idx-1往前        
        for i in range(idx - 1, 0, -1):
            if num[i] > num[i - 1]:
                # print("!")
                count += 1
            else:
                break
        # 对idx+1往后
        for j in range(idx + 2, n):
            if num[j] < num[j-1]:
                count += 1
            else:
                break

    res.append(count)

    print(max(res))
