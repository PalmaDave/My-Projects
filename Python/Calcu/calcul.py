# Import ng tkinter library para gumawa ng GUI (window)
import tkinter as tk

# Gumagawa ng main window
root = tk.Tk()
root.title("Calculator")          # Title ng window
root.geometry("280x350")          # Size ng window (width x height)
root.configure(bg="#000")         # Background color (black)

# Variable na maglalaman ng display (yung screen ng calculator)
display = tk.StringVar(value="0")

# Label na magsisilbing screen/display ng calculator
tk.Label(
    root,
    textvariable=display,         # Ipapakita yung laman ng display variable
    bg="#111",                    # Background color ng screen
    fg="#0ff",                    # Text color (cyan)
    font=("Arial", 20, "bold"),   # Font style
    height=2                      # Height ng label
).pack(fill="x", padx=10, pady=10)  # I-stretch sa width + spacing

# Function na tatawagin kapag may pinindot na button
def click(btn):
    current = display.get()       # Kunin current value sa display

    if btn == "C":
        display.set("0")          # Clear → ibalik sa 0

    elif btn == "=":
        try:
            display.set(str(eval(current)))  # I-compute yung expression
        except:
            display.set("Error")             # Kapag mali input

    else:
        # Idagdag yung pinindot na button sa display
        if current != "0":
            display.set(current + btn)
        else:
            display.set(btn)

# List ng buttons (layout ng calculator)
buttons = [
    ["C", "", "", "/"],           # Row 1
    ["7", "8", "9", "*"],         # Row 2
    ["4", "5", "6", "-"],         # Row 3
    ["1", "2", "3", "+"],         # Row 4
    ["0", "", ".", "="]           # Row 5
]

# Loop para gumawa ng rows ng buttons
for i, row in enumerate(buttons):

    # Frame = container ng bawat row
    frame = tk.Frame(root, bg="#000")
    frame.pack(fill="x", padx=10, pady=2)

    # Loop para gumawa ng bawat button sa row
    for j, btn in enumerate(row):

        # Pili ng kulay base sa button
        color = (
            "#f39c12" if btn in "+-*/="   # Orange para sa operators
            else "#3498db" if btn == "C"  # Blue para sa clear
            else "#34495e"                # Dark gray para sa numbers
        )

        # Gumagawa ng button (Label ginagamit instead of Button)
        btn_widget = tk.Label(
            frame,
            text=btn,                    # Text ng button
            font=("Arial", 14, "bold"), # Font style
            bg=color,                   # Background color
            fg="white",                 # Text color
            width=5,                    # Width ng button
            height=2,                   # Height ng button
            relief="flat"               # Walang border
        )

        # Event listener: kapag clinick ang button
        btn_widget.bind(
            "<Button-1>",               # Left click
            lambda e, b=btn: click(b)  # Tawagin click function
        )

        # Ilagay sa frame (row)
        btn_widget.pack(side="left", padx=2)

# Run ng GUI (para magpakita window)
root.mainloop()
     

