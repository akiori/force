
# given two ascend array
# two pointer merge

a = [1, 5, 7]
b = [2, 3, 6, 9]


def merge(arr_a, arr_b):
    res = []
    len_a = len(arr_a)
    len_b = len(arr_b)
    pointer_1 = 0
    pointer_2 = 0
    while pointer_1 < len_a and pointer_2 < len_b:
        curr_a = arr_a[pointer_1]
        curr_b = arr_b[pointer_2]
        if curr_a >= curr_b:
            res.append(curr_b)
            pointer_2 += 1
        else:
            res.append(curr_a)
            pointer_1 += 1
    if pointer_1 < len_a:
        res += arr_a[pointer_1:]
    if pointer_2 < len_b:
        res += arr_a[pointer_2:]
    return res


print(merge(a, b))
