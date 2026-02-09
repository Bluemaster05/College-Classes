import turtle
from random import randrange

wn = turtle.Screen()

def initialize() -> None:
    # turtle.tracer(False)
    turtle.title('Turtle Play')
    # turtle.hideturtle()
    turtle.listen()
    turtle.speed(0)
    turtle.listen()
    wn.tracer(0)
    

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
    turtle.onkeyrelease(clear, 'c')
    turtle.onkeyrelease(randMode, 'r')
    turtle.onkeyrelease(randOFF, 't')
    turtle.onkeypress(printchoords, 'p')
def mvup(distance = 1):
    turtle.setheading(90)
    collisions()
    turtle.forward(distance)
    wn.update()
    collisions()
def mvdown(distance = 1):
    turtle.setheading(270)
    collisions()
    turtle.forward(distance)
    collisions()
    wn.update()
def mvright(distance = 1):
    turtle.setheading(0)
    collisions()
    turtle.forward(distance)
    collisions()
    wn.update()
def mvleft(distance = 1):
    turtle.setheading(180)
    collisions()
    turtle.forward(distance)
    collisions()
    wn.update()

randMode = False

def randMode():
    global randMode
    randMode = True
    while randMode:
        dir = randrange(1, 5)
        if dir == 1:
            if turtle.ycor() > 220:
                distance = 1
            else:
                distance =randrange(1,31)
            mvup(distance)
        if dir == 2:
            if turtle.ycor() < -20:
                distance = 1
            else:
                distance =randrange(1,31)
            mvdown(distance)
        if dir == 3:
            if turtle.xcor() < -170:
                distance = 1
            else:
                distance =randrange(1,31)
            mvleft(distance)
        if dir == 4:
            if turtle.xcor() > 170:
                distance = 1
            else:
                distance =randrange(1,31)
            mvright(distance)

def randOFF():
    global randMode
    randMode = False

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
    turtle.teleport(0,-260)
    turtle.write('Use w, a, s, and d for navagation', True, align='center')
    turtle.teleport(0, -280)
    turtle.write('Press c to clear screen', True, align='center')
    turtle.teleport(0, -300)
    turtle.write('Press r to start random drawing and t to stop', True, align='center')

def collisions():
    turtle.onkeypress(idk, 'w')
    turtle.onkeypress(idk, 's')
    turtle.onkeypress(idk, 'a')
    turtle.onkeypress(idk, 'd')
    if round(turtle.xcor(), 0) < -200 or round(turtle.xcor(), 0) > 200 or round(turtle.ycor(), 0) < -50 or round(turtle.ycor(), 0) > 250:
        if turtle.heading() == 180:
            turtle.teleport(-200, round(turtle.ycor(), 0))
        if turtle.heading() == 0:
            turtle.teleport(200, round(turtle.ycor(), 0))
        if turtle.heading() == 90:
            turtle.teleport(round(turtle.xcor(), 0), 250)
        if turtle.heading() == 270:
            turtle.teleport(round(turtle.xcor(), 0), -50)
    turtle.onkeypress(mvup, 'w')
    turtle.onkeypress(mvdown, 's')
    turtle.onkeypress(mvleft, 'a')
    turtle.onkeypress(mvright, 'd')
def printchoords():
    print(f'({turtle.xcor()},{turtle.ycor()})')

def idk():
    pass

initialize()
drawEtchisketch()
turtle.hideturtle()
turtle.color('black')
drawInsts()
turtle.teleport(0,0)
startInput()
turtle.mainloop()


