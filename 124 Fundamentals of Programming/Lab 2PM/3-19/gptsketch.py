import turtle
from random import randrange

def initialize():
    turtle.title('Etchisketch')
    turtle.speed("fastest")
    turtle.hideturtle()
    turtle.listen()

def drawEtchisketch():
    turtle.penup()
    turtle.goto(-250, 300)
    turtle.color('red')
    turtle.begin_fill()
    for _ in range(2):
        turtle.forward(500)
        turtle.right(90)
        turtle.forward(400)
        turtle.right(90)
    turtle.end_fill()

    turtle.goto(-200, 250)
    turtle.color('white')
    turtle.begin_fill()
    for _ in range(2):
        turtle.forward(400)
        turtle.right(90)
        turtle.forward(300)
        turtle.right(90)
    turtle.end_fill()

    turtle.goto(-225, -95)
    turtle.begin_fill()
    turtle.circle(20)
    turtle.end_fill()

    turtle.goto(225, -95)
    turtle.begin_fill()
    turtle.circle(20)
    turtle.end_fill()

def startInput():
    turtle.onkeypress(mvup, 'w')
    turtle.onkeypress(mvdown, 's')
    turtle.onkeypress(mvleft, 'a')
    turtle.onkeypress(mvright, 'd')
    turtle.onkeypress(clear, 'c')
    turtle.onkeypress(randModeOn, 'r')
    turtle.onkeypress(randModeOff, 't')
    turtle.onkeypress(printCoords, 'p')

def mvup():
    turtle.setheading(90)
    turtle.forward(10)
    collisions()

def mvdown():
    turtle.setheading(270)
    turtle.forward(10)
    collisions()

def mvright():
    turtle.setheading(0)
    turtle.forward(10)
    collisions()

def mvleft():
    turtle.setheading(180)
    turtle.forward(10)
    collisions()

randMode = False

def randModeOn():
    global randMode
    randMode = True
    randMovement()

def randModeOff():
    global randMode
    randMode = False

def randMovement():
    if randMode:
        dir = randrange(1, 5)
        if dir == 1:
            mvup()
        elif dir == 2:
            mvdown()
        elif dir == 3:
            mvleft()
        elif dir == 4:
            mvright()
        turtle.ontimer(randMovement, 500)

def clear():
    turtle.clear()

def collisions():
    if turtle.xcor() < -200:
        turtle.goto(-200, turtle.ycor())
    elif turtle.xcor() > 200:
        turtle.goto(200, turtle.ycor())
    elif turtle.ycor() < -50:
        turtle.goto(turtle.xcor(), -50)
    elif turtle.ycor() > 250:
        turtle.goto(turtle.xcor(), 250)

def printCoords():
    print(f'({turtle.xcor()}, {turtle.ycor()})')

def drawInsts():
    turtle.penup()
    turtle.goto(0, -260)
    turtle.write('Use w, a, s, and d for navigation', align='center')
    turtle.goto(0, -280)
    turtle.write('Press c to clear screen', align='center')
    turtle.goto(0, -300)
    turtle.write('Press r to start random drawing and t to stop', align='center')

initialize()
drawEtchisketch()
drawInsts()
turtle.goto(0, 0)
startInput()
turtle.mainloop()
