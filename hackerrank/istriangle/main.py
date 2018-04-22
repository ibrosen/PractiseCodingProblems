"""
Question is-
If given three lists, a, b, and c, where a[i], b[i] and c[i] arethe 3 side lengths of triangle i,
write a function to return Yes or No for each of the n triangles formed by a,b,c, where Yes
means the triangle can exist and is non-degenerate
"""
from random import randint
a = [3]
b = [4]
c = [5]


# basically, it's a triangle if the hypotenuse is less than the sum of the two smaller sides
def isTriangle(aLens, bLens, cLens):
    output = []
    for i in range(0, len(aLens)):
        triangle = [aLens[i], bLens[i], cLens[i]]
        triangle.sort()
        a = triangle[0]
        b = triangle[1]
        c = triangle[2]
        output.append("Yes" if c < a + b else "No")
    return output


for i in range(0, 10):
    a.append(randint(1, 101))
    b.append(randint(1, 101))
    c.append(randint(1, 101))

print(a)
print(b)
print(c)

areTheyTriangles = isTriangle(a, b, c)
print(areTheyTriangles)
