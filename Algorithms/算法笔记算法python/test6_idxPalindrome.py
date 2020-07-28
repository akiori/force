# test6_idxPalindrome 牛客网 回文数索引
count = int(input())

def isPali(strin):
    if len(strin) == 0 or len(strin) == 1:
        return True
    else:
        if strin[0] != strin[-1]:
            return False
        else:
            return isPali(strin[1:-1])

for i in range(count):
    bugNum = -1
    isPal = True
    strin = input()
    if isPali(strin):
        print(-1)
    else:
        ptr1 = 0
        ptr2 = len(strin)-1
        while ptr2 - ptr1 > 1:
            if strin[ptr1] == strin[ptr2]:
                ptr1 += 1
                ptr2 -= 1
            else:
                if strin[ptr1 + 1] != strin[ptr2] and strin[ptr1] == strin[ptr2 - 1]:
                    print(ptr2)
                    break
                else:
                    print(ptr1)
                    break



