import math                  # Ini-import ang math module para sa mga mathematical functions tulad ng sin at cos
from turtle import *         # Ini-import lahat ng turtle functions para makapag-drawing tayo

speed(0)                     # Pinakamabilis na drawing speed, para mabilis mag-draw ang heart
bgcolor("black")             # Ginagawang black ang background ng window
colors = ["pink", "purple", "magenta"]  # Listahan ng mga kulay na gagamitin sa heart, palit-palit

pensize(1)                   # Kapal ng linya ng bawat guhit
hideturtle()                 # Itinatago ang turtle cursor para mas malinis tingnan

def hearta(k):               # Function para sa x-coordinate ng heart
    return 15 * math.sin(k)**3  # Formula para sa x, ginagamit ang sine function at power 3

def heartb(k):               # Function para sa y-coordinate ng heart
    return (12 * math.cos(k) - 5 * math.cos(2*k)  # Formula para sa y, combination ng cosine functions
            - 2 * math.cos(3*k) - math.cos(4*k))  # Para mabuo ang heart shape

penup()                      # Itinaas ang pen para hindi agad gumuhit habang naglilipat sa starting point

for i in range(1000):        # Loop ng 1000 beses; mas mataas ang number, mas maraming lines at mas solid ang heart
    color(colors[i % 3])     # Palit-palit ang kulay: pink → purple → magenta → ulit

    x = hearta(i) * 20       # Kinukuha ang x position at pinalalaki para mas visible
    y = heartb(i) * 20       # Kinukuha ang y position at pinalalaki para mas visible

    goto(x, y)               # Pupunta sa calculated point (x, y)
    pendown()                # Ibababa ang pen para magsimulang gumuhit
    goto(0, 0)               # Gumuhit ng linya pabalik sa gitna (center)
    penup()                  # Itataas ulit ang pen para lumipat sa susunod na point nang hindi gumuhit

done()                       # Tinatapos ang drawing at pinapanatili ang window open
