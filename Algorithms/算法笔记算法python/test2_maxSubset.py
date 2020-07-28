# 最大连续子串和
count = input()
arr = []
for i in range(int(count)):
    arr.append(int(input()))

max_v = arr[0]
curr_v = arr[0]
# 维护一个到arr[i]为止的和的最大值
# 维护一个必须包含arr[i]当前的最大和
for i in range(1, int(count)):
    if curr_v < 0:
        curr_v = arr[i]
    # !!!不要偷懒忘记用else
    else: 
        curr_v += arr[i]
    # print("cur " + str(curr_v))
    if curr_v > max_v:
        max_v = curr_v
    
print(max_v)


