import turtle              # Ini-import ang turtle module para makapag-drawing gamit ang Turtle graphics

t = turtle.Turtle()        # Gumawa ng Turtle object na tatawaging 't' para kontrolin ang pen
t.speed(2)                 # Speed ng drawing (1 slowest, 10 fastest, 0 instant); dito medyo mabilis lang
t.pensize(2)               # Kapal ng linya ng pen, para mas makapal at visible

# 🏹 Move to starting position
t.penup()                  # Itinaas ang pen para hindi agad gumuhit habang lumilipat
t.left(90)                 # Iikot ang turtle 90 degrees pakaliwa (pataas)
t.forward(100)             # Lumayo ng 100 units pataas
t.pendown()                # Ibababa ang pen para magsimulang gumuhit
t.right(90)                # Iikot ang turtle 90 degrees pakanan, balik sa horizontal

# ❤️ Gumuhit ng rose
t.fillcolor("red")         # Punan ng kulay na red
t.begin_fill()             # Simula ng fill area
t.circle(10,180)           # Gumuhit ng semi-circle radius 10, 180 degrees
t.circle(25,110)           # Gumuhit ng curve radius 25, 110 degrees
t.left(50)                 # Iikot ang turtle 50 degrees pakaliwa
t.circle(60,45)            # Gumuhit ng curve radius 60, 45 degrees
t.circle(20,170)           # Curve radius 20, 170 degrees
t.right(24)                # Iikot ang turtle 24 degrees pakanan
t.forward(30)              # Lumipat 30 units sa kasalukuyang heading
t.left(10)                 # Iikot 10 degrees pakaliwa
t.circle(30,110)           # Curve radius 30, 110 degrees
t.forward(20)              # Lumipat ng 20 units
t.left(40)                 # Iikot 40 degrees pakaliwa
t.circle(90,70)            # Curve radius 90, 70 degrees
t.circle(30,150)           # Curve radius 30, 150 degrees
t.right(30)                # Iikot 30 degrees pakanan
t.forward(15)              # Lumipat ng 15 units
t.circle(80,90)            # Curve radius 80, 90 degrees
t.left(15)                 # Iikot 15 degrees pakaliwa
t.forward(45)              # Lumipat ng 45 units
t.right(165)               # Iikot 165 degrees pakanan (malaki ang turn)
t.forward(20)              # Lumipat ng 20 units
t.left(155)                # Iikot 155 degrees pakaliwa
t.circle(150,80)           # Curve radius 150, 80 degrees
t.left(50)                 # Iikot 50 degrees pakaliwa
t.circle(150,90)           # Curve radius 150, 90 degrees
t.end_fill()               # Tapusin ang fill area (rose petal punan ng red)

# 🌿 Gumuhit ng leaves at stems
t.left(150)                # Iikot 150 degrees pakaliwa
t.circle(-90,70)           # Curve clockwise (negative radius), radius 90, 70 degrees
t.left(20)                 # Iikot 20 degrees pakaliwa
t.circle(75,105)           # Curve radius 75, 105 degrees
t.setheading(60)           # Itakda ang turtle heading sa 60 degrees
t.circle(80,98)            # Curve radius 80, 98 degrees
t.circle(-90,40)           # Curve clockwise, radius 90, 40 degrees
t.left(180)                # Iikot 180 degrees pakaliwa (balik likod)
t.circle(90,40)            # Curve radius 90, 40 degrees
t.circle(-80,98)           # Curve clockwise, radius 80, 98 degrees
t.setheading(-83)          # Itakda ang heading sa -83 degrees

t.forward(30)              # Lumipat ng 30 units
t.left(90)                 # Iikot 90 degrees pakaliwa
t.forward(25)              # Lumipat ng 25 units
t.left(45)                 # Iikot 45 degrees pakaliwa
t.fillcolor("green")       # Punan ng green (para sa leaf)
t.begin_fill()             # Simula ng fill area
t.circle(-80,90)           # Curve clockwise, radius 80, 90 degrees
t.right(90)                # Iikot 90 degrees pakanan
t.circle(-80,90)           # Curve clockwise, radius 80, 90 degrees
t.end_fill()               # Tapusin ang fill area (unang leaf)

t.right(135)               # Iikot 135 degrees pakanan
t.forward(60)              # Lumipat 60 units
t.left(180)                # Iikot 180 degrees pakaliwa
t.forward(85)              # Lumipat 85 units
t.left(90)                 # Iikot 90 degrees pakaliwa
t.forward(80)              # Lumipat 80 units
t.right(90)                # Iikot 90 degrees pakanan
t.right(45)                # Iikot 45 degrees pakanan

t.fillcolor("green")       # Punan ulit ng green para sa pangalawang leaf
t.begin_fill()             # Simula ng fill
t.circle(80,90)            # Curve radius 80, 90 degrees
t.left(90)                 # Iikot 90 degrees pakaliwa
t.circle(80,90)            # Curve radius 80, 90 degrees
t.end_fill()               # Tapusin ang fill area (ikalawang leaf)

t.left(135)                # Iikot 135 degrees pakaliwa
t.forward(60)              # Lumipat 60 units
t.left(180)                # Iikot 180 degrees pakaliwa
t.forward(60)              # Lumipat 60 units
t.right(90)                # Iikot 90 degrees pakanan
t.circle(200,60)           # Curve radius 200, 60 degrees (stem/underleaf curve)

turtle.done()              # Tapos na ang drawing, panatilihing open ang window
