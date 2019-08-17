# # 递归 输出全排列
# # 给定n 输出1~n的全排列

n = 3

hashtable = [False*x for x in range(n)]
# 我一开始就开好数组 我是让他每次修改对应位置!!! 到了退出条件自然会退出
res = [0*x for x in range(n)]

# 函数处理 当前 第k位置填什么


def fp(k):
    # global res
    # global hashtable
    # print("k="+str(k)+", res="+str(res))
    # 看从头开始到当前位置都有哪些还没被填写
    for i in range(n):
        # 如果还没被写, 就填入当前的
        if hashtable[i] == False:
            res[k] = i + 1
            hashtable[i] = True
            fp(k + 1)
            # 恢复为false

    if k == n:
        print(res)
        # res = []
        # 我一开始就开好数组 我是让他每次修改对应位置!!! 所以不需要清空!!! 到了退出条件自然会退出
        # 清空也不是这么清空的
        # res[:] = []
        # 直接给[]是指向了新地址


fp(0)
