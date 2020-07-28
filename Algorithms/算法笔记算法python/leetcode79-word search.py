class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        # 先找到这个起始位置在哪
        startCh = word[0]
        wordLen = len(word)
        sPos = []
        for i in range(len(board)):
            for j in range(len(board[0])):
                if board[i][j] == startCh:
                    sPos.append([i, j])

        # 碰壁检测
        def Pb(pos):
            if pos[0] >= len(board) or pos[0] < 0 or pos[1] >= len(board[0]) or pos[1] < 0:
                return True
            return False

        # visited 是访问过的矩阵，访问过标1
        def search(pos, word, visited):
            # borad在pos上一定与word[0]一致
            res = False
            if len(word) == 1:
                return True
            else:
                visited[pos[0]][pos[1]] = 1
                for direction in [[0, 1], [1, 0], [0, -1], [-1, 0]]:
                    # 下一个可以到达的新位置
                    newPos = [sum(x) for x in zip(pos,direction)]
                    print(newPos)

                    # 新位置碰壁或者已经访问过，则考虑下一个方向
                    if Pb(newPos) or visited[newPos[0]][newPos[1]] == 1:
                        continue

                    # 如果新位置合法，正好新的位置也对得上下一个字母的话
                    if board[newPos[0]][newPos[1]] == word[1]:
                        print(word[1])
                        res = search(newPos, word[1:], visited)

                    # 如果新位置合法，但是也一个匹配不上

            # 如果全都不对，此路不通，回去，将其标记为未访问过
            if not res:
                visited[pos[0]][pos[1]] = 0
            return res

        final = False
        for item in sPos:
            visited = [[0 for j in range(len(board[0]))]
                       for i in range(len(board))]
            current = search(item, word, visited)
            final = final or current
        return final
