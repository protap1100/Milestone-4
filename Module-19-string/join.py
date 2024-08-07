def multinacci(n):
    if 1 <= n <= 20:
        if n == 0:
            return 1
        elif n == 1:
            return 2
        else:
            a, b = 1, 2
            for _ in range(2, n):
                c = a * b
                a, b = b, c
            return b
    else:
        return "N must be between 1 and 20"

Number = 7
result = multinacci(Number)
print(result);