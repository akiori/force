#leetcode322 凑硬币最小数量问题# test

coins = [186, 419, 83, 408]
amount = 6249

mini = min(coins)

def coinChangeCount(coins, amount):
    res = []

    if amount < mini:
        return [-1]

    # item是可能的硬币
    for item in coins:
        if item == amount:
            return [1]
        else:
            for small in coinChangeCount(coins, amount - item):
                if small == -1:
                    continue
                else:
                    res.append(small + 1)

    return res

tres = coinChangeCount(coins, amount)
print(min(tres))
