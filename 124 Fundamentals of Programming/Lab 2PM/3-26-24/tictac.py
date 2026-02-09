import turtle
current_player = 'x'
turtle.getcanvas().config(cursor="X_cursor")
turtle.title("Tic-Tac-Toe: Player X Move")
t = turtle
wn = turtle.Screen()

def draw_lines():
    t.hideturtle()
    wn.tracer(0)
    t.speed('fastest')
    t.color('Black')
    t.pensize(5)
    t.seth(90)
    t.teleport(-100,-300)
    t.forward(600)
    t.teleport(100,-300)
    t.forward(600)
    t.seth(0)
    t.teleport(-300, -100)
    t.forward(600)
    t.teleport(-300, 100)
    t.forward(600)
    t.speed(2)
    t.update()

def start_inputs():
    t.onscreenclick(run_click)
    t.onkeypress(change_plr_to_x, 'x')
    t.onkeypress(change_plr_to_o, 'o')
    t.listen()

def run_click(x: float, y:float): 
    if current_player == 'x':
        draw_x(point_to_square(x, y))
    if current_player == 'o':
        draw_o(point_to_square(x, y))

def change_plr_to_x():
    global current_player
    current_player = 'x'
    turtle.getcanvas().config(cursor="X_cursor")
    t.title("Tic-Tac-Toe: Player X Move")
def change_plr_to_o():
    global current_player
    current_player = 'o'
    turtle.getcanvas().config(cursor="circle")
    t.title("Tic-Tac-Toe: Player O Move")

def point_to_square(x:float, y:float) -> str:
    pos = ''
    # Center Column
    if x > -100 and x < 100:
        if y > -100 and y < 100:
            pos = 'Center'
        elif y > 100 and y < 300:
            pos = 'North'
        elif y > -300 and y < -100:
            pos = 'South'
        else:
            pos = 'null'
    # Left Column
    elif x > -300 and x < -100:
        if y > -100 and y < 100:
            pos = 'West'
        elif y > 100 and y < 300:
            pos = 'Northwest'
        elif y > -300 and y < -100:
            pos = 'Southwest'
        else:
            pos = 'null'
    # Right Column
    elif x > 100 and x < 300:
        if y > -100 and y < 100:
            pos = 'East'
        elif y > 100 and y < 300:
            pos = 'Northeast'
        elif y > -300 and y < -100:
            pos = 'Southeast'
        else:
            pos = 'null'
    else:
        pos = 'null'
    return pos

def square_to_point(square:str) -> tuple[float, float] | None:
    match square:
        case 'Northwest':
            x = -200
            y = 200
        case 'West':
            x = -200
            y = 0
        case 'Southwest':
            x = -200
            y = -200
        case 'North':
            x = 0
            y = 200
        case 'Center':
            x = 0
            y = 0
        case 'South':
            x = 0
            y = -200
        case 'Northeast':
            x = 200
            y = 200
        case 'East':
            x = 200
            y = 0
        case 'Southeast':
            x = 200
            y = -200
        case 'null':
            return None
    return x,y
    
def draw_x(square: str):
    if square == 'null':
        pass
    else:
        t.pensize(10)
        (x, y) = square_to_point(square)
        t.teleport(x,y)
        t.color('blue')
        degrees = 45
        for i in range(4):
            t.seth(degrees)
            t.forward(60)
            t.teleport(x, y)
            degrees += 90
        t.update()

def draw_o(square:str):
    if square == 'null':
        pass
    else:
        t.pensize(10)
        t.seth(0)
        (x, y) = square_to_point(square)
        t.teleport(x,y - 60)
        t.color('red')
        t.circle(60)
        t.update()
draw_lines()
t.listen()
start_inputs()
t.mainloop()