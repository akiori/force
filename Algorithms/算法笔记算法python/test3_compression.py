strin = input()

def compres(strin):
    res = ""

    if len(strin) == 1:
        return strin

    else:
        ch = strin[0]
        cnt = 0
        # 移除当前首字母，移除后可能只剩下1位
        strin = strin[1:]
        while strin[0] == ch:
            if len(strin) == 1:
                cnt += 1
                res += str(cnt) + ch
                return res
            else:
                strin = strin[1:]
                cnt += 1

        if cnt == 0:
            res += ch + compres(strin)
        else:
            res += str(cnt) + ch + compres(strin)
            
    return res

print(compres(strin))
