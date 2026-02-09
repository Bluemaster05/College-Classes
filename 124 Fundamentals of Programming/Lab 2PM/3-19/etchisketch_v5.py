import turtle
from random import randrange

wn = turtle.Screen()

def initialize() -> None:
    # turtle.tracer(False)
    turtle.title('Etch A Sketch')
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
    # turtle.color('black')
    # turtle.circle(21)
    # turtle.color('white')
    turtle.teleport(225, -95)
    turtle.begin_fill()
    turtle.circle(20)
    turtle.end_fill()
    turtle.color('Gold')
    turtle.teleport(0,260)
    turtle.write("Etch A Sketch©", font=("Courier New", 20), align='Center')
    turtle.teleport(-140,266)
    turtle.write("Magic", font=("Courier New", 10), align='Center')
    turtle.teleport(145,266)
    turtle.write("Screen", font=("Courier New", 10), align='Center')

def startInput():
    turtle.onkeypress(mvup, 'w')
    turtle.onkeypress(mvdown, 's')
    turtle.onkeypress(mvleft, 'a')
    turtle.onkeypress(mvright, 'd')
    turtle.onkeyrelease(clear, 'c')
    turtle.onkeyrelease(randMode, 'r')
    turtle.onkeyrelease(randOFF, 't')
    turtle.onkeyrelease(_3dSquare, 'h')
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
    turtle.write('Use w, a, s, and d for navagation', True, align='center', font=('Ariel', 12))
    turtle.teleport(0, -280)
    turtle.write('Press c to clear screen', True, align='center', font=('Ariel', 12))
    turtle.teleport(0, -300)
    turtle.write('Press r to start random drawing and t to stop', True, align='center', font=('Ariel', 12))
    turtle.teleport(0, -320)
    turtle.write('Press h to redraw 3D Cube Array', True, align='center', font=('Ariel', 12))

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


def diagUPRight(up = 1, right = 1, length = 20):
    for i in range(length):
        mvup(up)
        mvright(right)

def diagDOWNRIGHT(down = 1, right = 1, length = 20):
    for i in range(length):
        mvdown(down)
        mvright(right)

def diagDOWNLEFT(down = 1, left = 1, length = 20):
    for i in range(length):
        mvdown(down)
        mvleft(left)

def diagUPLEFT(up = 1, left = 1, length = 20):
    for i in range(length):
        mvup(up)
        mvleft(left)

def concaveSquare():
    diagUPRight(1, 1.5)
    diagDOWNRIGHT(1, 1.5)
    diagDOWNLEFT(1, 1.5)
    diagUPLEFT(1, 1.5)
    mvup(40)
    diagUPRight(1, 1.5)
    mvdown(40)
    mvup(40)
    diagDOWNRIGHT(1, 1.5)
    mvdown(40)

def _3dSquare():
    turtle.teleport(-195, -20)
    for i in range (6):
        concaveSquare()
    for i in range(5):
        diagUPLEFT(1, 1.5)
        diagDOWNLEFT(1, 1.5)
    diagUPLEFT(1, 1.5)
    mvup(40)
    for i in range(6):
        concaveSquare()
    for i in range(6):
        diagUPLEFT(1, 1.5)
        diagDOWNLEFT(1, 1.5)
    diagUPLEFT(1, 1.5)
    mvup(40)
    for i in range (6):
        concaveSquare()
    for i in range(5):
        diagUPLEFT(1, 1.5)
        diagDOWNLEFT(1, 1.5)
    diagUPLEFT(1, 1.5)
    mvup(40)
    for i in range(6):
        concaveSquare()
    mvdown(40)
    diagDOWNLEFT(1, 1.5)
    diagUPRight(1, 1.5)
    mvdown(40)
    mvdown(40)
    diagDOWNLEFT(1, 1.5)
    diagUPRight(1, 1.5)
    mvdown(40)
    diagDOWNLEFT(1, 1.5)
    diagUPRight(1, 1.5)
    mvdown(40)
    diagUPLEFT(1, 1.5)
    diagUPRight(1, 1.5)
    mvup(200)
    for i in range(6):
        diagUPLEFT(1, 1.5)
        diagDOWNLEFT(1, 1.5)
    diagUPLEFT(1, 1.5)
    mvdown(40)
    diagDOWNRIGHT(1, 1.5)
    mvup(40)
    diagUPLEFT(1, 1.5)
    mvdown(240)
    mvup(240)
    for i in range(6):
        diagUPRight(1, 1.5)
        diagDOWNRIGHT(1, 1.5)
    diagUPRight(1, 1.5)
    mvdown(40)
    turtle.teleport(0,0)
    
initialize()
drawEtchisketch()
turtle.hideturtle()
turtle.color('black')
drawInsts()
turtle.teleport(0,0)
_3dSquare()
startInput()
turtle.mainloop()


