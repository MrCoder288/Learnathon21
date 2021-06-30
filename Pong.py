import turtle as t


win = t.Screen()
win.bgcolor('blue')
win.setup(width=800, height=600)
win.tracer(0)

stick1 = t.Turtle()
stick1.speed(0)
stick1.shape('square')
stick1.color('grey')
stick1.shapesize(stretch_wid=5, stretch_len=1)
stick1.penup()
stick1.goto(-350, 0)


stick2 = t.Turtle()
stick2.speed(0)
stick2.shape('square')
stick2.shapesize(stretch_wid=5, stretch_len=1)
stick2.color('grey')
stick2.penup()
stick2.goto(350, 0)


ball = t.Turtle()
ball.speed(1)
ball.shape('circle')
ball.color('white')
ball.penup()
ball.goto(0, 0)
ball_dx = 0.5
ball_dy = 0.5



def stick_left_up():
    y = paddle_left.ycor()
    y = y + 15
    stick_left.sety(y)



def stick_left_down():
    y = paddle_left.ycor()
    y = y - 15
    stick_left.sety(y)



def stick_right_up():
    y = paddle_right.ycor()
    y = y + 15
    stick_right.sety(y)



def stick_right_down():
    y = paddle_right.ycor()
    y = y - 15
    stick_right.sety(y)



win.listen()
win.onkeypress(paddle_left_up, "w")
win.onkeypress(paddle_left_down, "s")
win.onkeypress(paddle_right_up, "Up")
win.onkeypress(paddle_right_down, "Down")


while True:
    win.update()

    ball.setx(ball.xcor() + ball_dx)
    ball.sety(ball.ycor() + ball_dy)


    if ball.ycor() > 290:
        ball.sety(290)
        ball_dy = ball_dy * -1

        if ball.ycor() < -290:
            ball.sety(-290)
            ball_dy = ball_dy * -1

    if ball.xcor() > 390:
        ball.goto(0, 0)
        ball_dx = ball_dx * -1

    if (ball.xcor()) < -390:
        ball.goto(0, 0)
        ball_dx = ball_dx * -1


    if (ball.xcor() > 340) and (ball.xcor() < 350) and (
            ball.ycor() < paddle_right.ycor() + 40 and ball.ycor() > paddle_right.ycor() - 40):
        ball.setx(340)
        ball_dx = ball_dx * -1


    if (ball.xcor() < -340) and (ball.xcor() > -350) and (
            ball.ycor() < paddle_left.ycor() + 40 and ball.ycor() > paddle_left.ycor() - 40):
        ball.setx(-340)
        ball_dx = ball_dx * -1
