# 公交车最短耗时
# 输入是终到站，以及路线数目
# 以及每条路线起点 终点 耗时
[end_stop, count] = input().split()
bus = {}
for i in range(int(count)):
    [start, end, time] = input().split()
    if end in bus.keys():
        bus[end].append([start, int(time)])
    else:
        bus[end] = [[start, int(time)]]
    # bus[str(start)+"_"+str(end)] = int(time)

Inf = 9999999

t = [Inf for i in range(int(end_stop) + 1)]
t[0] = 0
if "1" in bus.keys():
    t[1] = bus["1"][0][1]

if end_stop == "1":
    if t[1] == Inf:
        print(-1)
    else:
        print(t[1])
else:
    for i in range(2, int(end_stop) + 1):
        if str(i) in bus.keys():
            paths = bus[str(i)]
            time_arr = []
            for j in range(len(paths)):
                [pathStart, pathCost] = paths[j]
                time_arr.append(t[int(pathStart)] + int(pathCost))
            t[int(str(i))] = min(time_arr)

    if t[-1] > Inf:
        print(-1)
    else:
        print(t[-1])

