from enum import Enum

class Shape(Enum):
    QUAD = 5
    OVAL = 17
    PYRAMID = 234

print(str(Shape(5)))