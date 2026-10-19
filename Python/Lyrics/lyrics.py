import os
import sys
import time
import pygame

# 1. Alamin ang folder ng lyrics.py para hindi maligaw sa MP3 file
current_dir = os.path.dirname(os.path.abspath(__file__))
mp3_path = os.path.join(current_dir, "pwede by dave.mp3")

# 2. I-initialize ang audio at patakbuhin ang kanta
pygame.mixer.init()
pygame.mixer.music.load(mp3_path)
pygame.mixer.music.play()

# Naka-save ang start time kung kailan nagsimula ang kanta
start_time = time.time()

# Timestamps mo mula sa HTML
lyrics = [
    {"type": "section", "text": "\n[ Verse 1 ]\n"},
    {"time": 12.47, "text": "Pwede ka bang makilala’t mahagkan"},
    {"time": 18.96, "text": "Pwede ka bang maanyayang lumabas"},
    {"time": 25.76, "text": "Nung una pa lang ako’y inlove saiyo"},
    {"time": 31.23, "text": "Ako’y nasasabik sa’yo"},
    {"time": 38.20, "text": "Pwede ka bang makausap magdamag"},
    {"time": 43.93, "text": "Nais ko lang naman tignan ang iyong mata"},
    {"time": 50.46, "text": "Ang pusong ito’y naghihintay saiyo"},
    {"time": 57.14, "text": "Ako’y nasasabik sa’yo"},
    {"type": "section", "text": "\n[ Chorus ]\n"},
    {"time": 62.72, "text": "Pwede bang hingin ang iyong kamay"},
    {"time": 68.05, "text": "Tayong dal’wa ay magpakasal"},
    {"time": 74.16, "text": "Ako ay susumpa sa pag-ibig mo"},
    {"time": 79.99, "text": "At ikaw ang asawa ko"},
    {"time": 86.64, "text": "Pwede bang ikaw ay isayaw"},
    {"time": 92.99, "text": "Sa ilalim ng tala at buwan"},
    {"time": 99.20, "text": "Ako ay mahuhulog sa’yong ganda"},
    {"time": 105.28, "text": "Habang ikaw ay natatawa"},
    {"type": "section", "text": "\n[ Verse 2 ]\n"},
    {"time": 114.61, "text": "Pwede bang makasama ka sa pagtanda"},
    {"time": 120.96, "text": "Pwede ka bang maanyayang sumasayaw"},
    {"time": 126.99, "text": "Oh ang pusong ito’y naghihintay saiyo"},
    {"time": 136.02, "text": "Ako’y nasasabik sa’yo"},
    {"type": "section", "text": "\n[ Chorus 2 ]\n"},
    {"time": 139.48, "text": "Pwede bang hingin ang iyong kamay"},
    {"time": 144.67, "text": "Tayong dal’wa ay magpakasal"},
    {"time": 150.89, "text": "Ako ay susumpa sa pag-ibig mo"},
    {"time": 157.04, "text": "At ikaw ang asawa ko"},
    {"time": 163.90, "text": "Pwede bang ikaw ay isayaw"},
    {"time": 169.58, "text": "Sa ilalim ng tala at buwan"},
    {"time": 175.95, "text": "Ako ay mahuhulog sa’yong ganda"},
    {"time": 182.26, "text": "Habang ikaw ay natatawa"},
    {"type": "section", "text": "\n[ Bridge ]\n"},
    {"time": 190.58, "text": "Please wag kang mainlove sa iba"},
    {"type": "section", "text": "\n[ Chorus 3 ]\n"},
    {"time": 239.30, "text": "Pwede bang hingin ang iyong kamay"},
    {"time": 244.97, "text": "Tayong dal’wa ay magpakasal"},
    {"time": 251.08, "text": "Ako ay susumpa sa pag-ibig mo"},
    {"time": 257.46, "text": "At ikaw ang asawa ko"},
    {"time": 264.27, "text": "Pwede bang ikaw ay isayaw"},
    {"time": 270.04, "text": "Sa ilalim ng tala at buwan"},
    {"time": 276.18, "text": "Ako ay mahuhulog sa’yong ganda"},
    {"time": 282.76, "text": "Habang ikaw ay natatawa"},
]
def print_typewriter(text, speed=0.21):
    for char in text:
        sys.stdout.write(char)
        sys.stdout.flush()
        time.sleep(speed)
    print()

def play_lyrics():
    for item in lyrics:
        if item.get("type") == "section":
            print(item["text"])
            continue

        target_time = item["time"]

        while True:
            elapsed_time = time.time() - start_time
            # INAGAHAN NG 1.8 SECONDS PARA MATAPOS ANG TYPEWRITER EFFECT NG SABAY SA AUDIO
            if elapsed_time >= (target_time - 1.8):
                break
            time.sleep(0.005)

        print_typewriter(item["text"])

# Patakbuhin ang program
play_lyrics()

while pygame.mixer.music.get_busy():
    time.sleep(1)