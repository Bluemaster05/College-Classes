import turtle
from random import randrange

def initialize() -> None:
    # turtle.tracer(False)
    turtle.title('Turtle Play')
    # turtle.hideturtle()
    turtle.listen()
    turtle.speed(50)

def drawEtchisketch():
    turtle.color('red')
    turtle.teleport(-250,300)
    turtle.begin_fill()
    for i in range(2):
        turtle.forward(500)
        turtle.right(90)
        turtle.forward(400)
        turtle.right(90)
    turtle.end_fill()
    turtle.teleport(-200,250)
    turtle.color('white')
    turtle.begin_fill()
    for i in range(2):
        turtle.forward(400)
        turtle.right(90)
        turtle.forward(300)
        turtle.right(90)
    turtle.end_fill()
    turtle.teleport(-225, -95)
    # turtle.color('green')
    turtle.begin_fill()
    turtle.circle(20)
    turtle.end_fill
    turtle.teleport(225, -95)
    turtle.begin_fill()
    turtle.circle(20)
    turtle.end_fill()

def startInput():
    turtle.onkeypress(mvup, 'w')
    turtle.onkeypress(mvdown, 's')
    turtle.onkeypress(mvleft, 'a')
    turtle.onkeypress(mvright, 'd')
    turtle.onkeypress(clear, 'c')
def mvup():
    turtle.setheading(90)
    turtle.forward(1)
def mvdown():
    turtle.setheading(270)
    turtle.forward(1)
def mvright():
    turtle.setheading(0)
    turtle.forward(1)
def mvleft():
    turtle.setheading(180)
    turtle.forward(1)

def clear():
    curX = turtle.xcor()
    curY = turtle.ycor()
    curDir = turtle.heading()
    turtle.teleport(-200,250)
    turtle.setheading(0)
    turtle.color('white')
    turtle.begin_fill()
    for i in range(2):
        turtle.forward(400)
        turtle.right(90)
        turtle.forward(300)
        turtle.right(90)
    turtle.end_fill()
    turtle.teleport(curX, curY)
    turtle.setheading(curDir)
    turtle.color('black')

def drawInsts():
    turtle.teleport(0,-280)
    turtle.write('Use w, a, s, and d for navagation', True, align='center')
    turtle.teleport(0, -300)
    turtle.write('Press c to clear screen', True, align='center')

initialize()
drawEtchisketch()
turtle.hideturtle()
turtle.color('black')
drawInsts()
turtle.teleport(0,0)
# turtle.speed(2)
startInput()
turtle.mainloop()


