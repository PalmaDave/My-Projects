// Nagdeclare ng array na naglalaman ng lahat ng lyrics, oras, at mga heading.
const lyricsStructure = [

    // Heading ng unang bahagi ng kanta.
    { type: "section", text: "[ Verse 1 ]" },

    // time = oras kung kailan lalabas ang lyric.
    // text = mismong lyrics na ipapakita.
    { time: 12.47, text: "Pwede ka bang makilala’t mahagkan" },
    { time: 18.96, text: "Pwede ka bang maanyayang lumabas" },
    { time: 25.76, text: "Nung una pa lang ako’y inlove saiyo" },
    { time: 31.23, text: "Ako’y nasasabik sa’yo" },
    { time: 37.22, text: "Pwede ka bang makausap magdamag" },
    { time: 43.93, text: "Nais ko lang naman tignan ang iyong mata" },
    { time: 50.46, text: "Ang pusong ito’y naghihintay saiyo" },
    { time: 57.14, text: "Ako’y nasasabik sa’yo" },

    // Heading ng Chorus.
    { type: "section", text: "[ Chorus ]" },

    { time: 62.72, text: "Pwede bang hingin ang iyong kamay" },
    { time: 68.05, text: "Tayong dal’wa ay magpakasal" },
    { time: 74.16, text: "Ako ay susumpa sa pag-ibig mo" },
    { time: 79.99, text: "At ikaw ang asawa ko" },
    { time: 86.64, text: "Pwede bang ikaw ay isayaw" },
    { time: 92.99, text: "Sa ilalim ng tala at buwan" },
    { time: 99.20, text: "Ako ay mahuhulog sa’yong ganda" },
    { time: 105.28, text: "Habang ikaw ay natatawa" },

    // Heading ng Verse 2.
    { type: "section", text: "[ Verse 2 ]" },

    { time: 114.61, text: "Pwede bang makasama ka sa pagtanda" },
    { time: 120.96, text: "Pwede ka bang maanyayang sumasayaw" },
    { time: 126.99, text: "Oh ang pusong ito’y naghihintay saiyo" },
    { time: 136.02, text: "Ako’y nasasabik sa’yo" },

    // Heading ng Chorus 2.
    { type: "section", text: "[ Chorus 2 ]" },

    { time: 139.48, text: "Pwede bang hingin ang iyong kamay" },
    { time: 144.67, text: "Tayong dal’wa ay magpakasal" },
    { time: 150.89, text: "Ako ay susumpa sa pag-ibig mo" },
    { time: 157.04, text: "At ikaw ang asawa ko" },
    { time: 163.90, text: "Pwede bang ikaw ay isayaw" },
    { time: 169.58, text: "Sa ilalim ng tala at buwan" },
    { time: 175.95, text: "Ako ay mahuhulog sa’yong ganda" },
    { time: 182.26, text: "Habang ikaw ay natatawa" },

    // Heading ng Bridge.
    { type: "section", text: "[ Bridge ]" },

    { time: 190.58, text: "Please wag kang mainlove sa iba" },

    // Heading ng huling Chorus.
    { type: "section", text: "[ Chorus 3 ]" },

    { time: 239.30, text: "Pwede bang hingin ang iyong kamay" },
    { time: 244.97, text: "Tayong dal’wa ay magpakasal" },
    { time: 251.08, text: "Ako ay susumpa sa pag-ibig mo" },
    { time: 257.46, text: "At ikaw ang asawa ko" },
    { time: 264.27, text: "Pwede bang ikaw ay isayaw" },
    { time: 270.04, text: "Sa ilalim ng tala at buwan" },
    { time: 276.18, text: "Ako ay mahuhulog sa’yong ganda" },
    { time: 282.76, text: "Habang ikaw ay natatawa" }
];

// Kinukuha ang <audio> sa HTML gamit ang id="audio-player".
const audio = document.getElementById('audio-player');

// Kinukuha ang div na paglalagyan ng lyrics.
const wrapper = document.getElementById('lyrics-wrapper');


// Iniisa-isa ang bawat object sa lyricsStructure array.
// item = kasalukuyang object.
// index = numero ng object sa array (0,1,2,3...)
lyricsStructure.forEach((item, index) => {

    // Gumagawa ng bagong <p> element.
    const el = document.createElement('p');

    // Kapag ang object ay section (heading)
    if (item.type === "section") {

        // Nilalagay ang heading text sa paragraph.
        el.innerText = item.text;

        // Dinadagdagan ng class para ma-style sa CSS.
        el.classList.add('section-label');

    } else {

        // Kung lyric line ito.

        // Nilalagay ang lyrics sa paragraph.
        el.innerText = item.text;

        // Dinadagdagan ng class na lyric-line.
        el.classList.add('lyric-line');

        // Gumagawa ng unique id.
        // Example:
        // line-1
        // line-2
        // line-3
        el.setAttribute('id', `line-${index}`); // nilalagyan ng id

        // Kapag klinick ang lyric.
        el.addEventListener('click', () => {

            // Lilipat ang audio sa oras ng lyric.
            audio.currentTime = item.time;

            // Automatic na magpe-play.
            audio.play();
        });
    }

    // Idinadagdag ang paragraph sa loob ng lyrics-wrapper.
    wrapper.appendChild(el);
});


// tumatakbo habang tumutunog yung audio
audio.addEventListener('timeupdate', () => {

    // Kinukuha ang kasalukuyang oras ng kanta.
    const currentTime = audio.currentTime;

    // Wala pang active lyrics.
    let activeIndex = -1;

    // for loop iisa isahin ang buong lyrics ng array
    for (let i = 0; i < lyricsStructure.length; i++) {

        // Kinukuha ang kasalukuyang object.
        const item = lyricsStructure[i];

     // item.time !== undefined — siguraduhing lyric ito at may time (hindi section).
    // currentTime >= item.time — umabot na ba ang kasalukuyang oras sa timestamp ng lyric?
        if (item.time !== undefined && currentTime >= item.time) {

     // Kapag true, itinatala niya ang index ng pinakahuling lyric na dapat naka-highlight.
            activeIndex = i;
        }
    }

    // Kung may nahanap nang active lyric, saka lang magpapatuloy
    if (activeIndex !== -1) {

        // Hinahanap lahat ng lyric lines.
        document.querySelectorAll('.lyric-line')

  //  Tinatanggal muna ang active class sa lahat ng lyric lines para isa lang ang naka-highlight.
        .forEach(el => el.classList.remove('active'));

        // Hinahanap ang <p> na may id katulad ng line -8
        const activeLine = document.getElementById(`line-${activeIndex}`);

        // Tinitiyak na may nahanap talaga bago ito gamitin
        if (activeLine) {

            // Nilalagyan ng active class.
            activeLine.classList.add('active');

            // Automatic na ini-scroll ang lyrics.
            // Ang active lyric ay ilalagay sa gitna ng lyrics container.
            // Nagdeclare ng array na naglalaman ng lahat ng lyrics, oras, at mga heading.
const lyricsStructure = [

    // Heading ng unang bahagi ng kanta.
    { type: "section", text: "[ Verse 1 ]" },

    // time = oras kung kailan lalabas ang lyric.
    // text = mismong lyrics na ipapakita.
    { time: 12.47, text: "Pwede ka bang makilala’t mahagkan" },
    { time: 18.96, text: "Pwede ka bang maanyayang lumabas" },
    { time: 25.76, text: "Nung una pa lang ako’y inlove saiyo" },
    { time: 31.23, text: "Ako’y nasasabik sa’yo" },
    { time: 37.22, text: "Pwede ka bang makausap magdamag" },
    { time: 43.93, text: "Nais ko lang naman tignan ang iyong mata" },
    { time: 50.46, text: "Ang pusong ito’y naghihintay saiyo" },
    { time: 57.14, text: "Ako’y nasasabik sa’yo" },

    // Heading ng Chorus.
    { type: "section", text: "[ Chorus ]" },

    { time: 62.72, text: "Pwede bang hingin ang iyong kamay" },
    { time: 68.05, text: "Tayong dal’wa ay magpakasal" },
    { time: 74.16, text: "Ako ay susumpa sa pag-ibig mo" },
    { time: 79.99, text: "At ikaw ang asawa ko" },
    { time: 86.64, text: "Pwede bang ikaw ay isayaw" },
    { time: 92.99, text: "Sa ilalim ng tala at buwan" },
    { time: 99.20, text: "Ako ay mahuhulog sa’yong ganda" },
    { time: 105.28, text: "Habang ikaw ay natatawa" },

    // Heading ng Verse 2.
    { type: "section", text: "[ Verse 2 ]" },

    { time: 114.61, text: "Pwede bang makasama ka sa pagtanda" },
    { time: 120.96, text: "Pwede ka bang maanyayang sumasayaw" },
    { time: 126.99, text: "Oh ang pusong ito’y naghihintay saiyo" },
    { time: 136.02, text: "Ako’y nasasabik sa’yo" },

    // Heading ng Chorus 2.
    { type: "section", text: "[ Chorus 2 ]" },

    { time: 139.48, text: "Pwede bang hingin ang iyong kamay" },
    { time: 144.67, text: "Tayong dal’wa ay magpakasal" },
    { time: 150.89, text: "Ako ay susumpa sa pag-ibig mo" },
    { time: 157.04, text: "At ikaw ang asawa ko" },
    { time: 163.90, text: "Pwede bang ikaw ay isayaw" },
    { time: 169.58, text: "Sa ilalim ng tala at buwan" },
    { time: 175.95, text: "Ako ay mahuhulog sa’yong ganda" },
    { time: 182.26, text: "Habang ikaw ay natatawa" },

    // Heading ng Bridge.
    { type: "section", text: "[ Bridge ]" },

    { time: 190.58, text: "Please wag kang mainlove sa iba" },

    // Heading ng huling Chorus.
    { type: "section", text: "[ Chorus 3 ]" },

    { time: 239.30, text: "Pwede bang hingin ang iyong kamay" },
    { time: 244.97, text: "Tayong dal’wa ay magpakasal" },
    { time: 251.08, text: "Ako ay susumpa sa pag-ibig mo" },
    { time: 257.46, text: "At ikaw ang asawa ko" },
    { time: 264.27, text: "Pwede bang ikaw ay isayaw" },
    { time: 270.04, text: "Sa ilalim ng tala at buwan" },
    { time: 276.18, text: "Ako ay mahuhulog sa’yong ganda" },
    { time: 282.76, text: "Habang ikaw ay natatawa" }
];

// Kinukuha ang <audio> sa HTML gamit ang id="audio-player".
const audio = document.getElementById('audio-player');

// Kinukuha ang div na paglalagyan ng lyrics.
const wrapper = document.getElementById('lyrics-wrapper');


// Iniisa-isa ang bawat object sa lyricsStructure array.
// item = kasalukuyang object.
// index = numero ng object sa array (0,1,2,3...)
lyricsStructure.forEach((item, index) => {

    // Gumagawa ng bagong <p> element.
    const el = document.createElement('p');

    // Kapag ang object ay section (heading)
    if (item.type === "section") {

        // Nilalagay ang heading text sa paragraph.
        el.innerText = item.text;

        // Dinadagdagan ng class para ma-style sa CSS.
        el.classList.add('section-label');

    } else {

        // Kung lyric line ito.

        // Nilalagay ang lyrics sa paragraph.
        el.innerText = item.text;

        // Dinadagdagan ng class na lyric-line.
        el.classList.add('lyric-line');

        // Gumagawa ng unique id.
        // Example:
        // line-1
        // line-2
        // line-3
        el.setAttribute('id', `line-${index}`); // nilalagyan ng id

        // Kapag klinick ang lyric.
        el.addEventListener('click', () => {

            // Lilipat ang audio sa oras ng lyric.
            audio.currentTime = item.time;

            // Automatic na magpe-play.
            audio.play();
        });
    }

    // Idinadagdag ang paragraph sa loob ng lyrics-wrapper.
    wrapper.appendChild(el);
});


//  Tuwing nagbabago ang oras ng audio habang tumutugtog ito.
audio.addEventListener('timeupdate', () => {

    // Kinukuha ang kasalukuyang oras ng kanta.
    const currentTime = audio.currentTime;

    // Wala pang active lyrics.
    let activeIndex = -1;

    // for loop iisa isahin ang buong lyrics ng array
    for (let i = 0; i < lyricsStructure.length; i++) {

        // Kinukuha ang kasalukuyang object.
        const item = lyricsStructure[i];

     // item.time !== undefined — siguraduhing lyric ito at may time (hindi section).
    // currentTime >= item.time — umabot na ba ang kasalukuyang oras sa timestamp ng lyric?
        if (item.time !== undefined && currentTime >= item.time) {

     // Kapag true, itinatala niya ang index ng pinakahuling lyric na dapat naka-highlight.
            activeIndex = i;
        }
    }

    // Kung may nahanap nang active lyric, saka lang magpapatuloy
    if (activeIndex !== -1) {

        // Hinahanap lahat ng lyric lines.
        document.querySelectorAll('.lyric-line')

  //  Tinatanggal muna ang active class sa lahat ng lyric lines para isa lang ang naka-highlight.
        .forEach(el => el.classList.remove('active'));

        // Hinahanap ang <p> na may id katulad ng line -8
        const activeLine = document.getElementById(`line-${activeIndex}`);

        // Tinitiyak na may nahanap talaga bago ito gamitin
        if (activeLine) {

            // Nilalagyan ng active class.
            activeLine.classList.add('active');

            // Automatic na ini-scroll ang lyrics.
            // Ang active lyric ay ilalagay sa gitna ng lyrics container.
            wrapper.scrollTop = //Binabago ang scroll position ng lyrics container.
                activeLine.offsetTop //Kinukuha ang layo ng active line mula sa taas ng container
                - wrapper.offsetTop // Kinukuha ang layo ng wrapper mula sa taas ng page.
                - (wrapper.clientHeight / 2) // Kinukuha ang kalahati ng taas ng lyrics container.
                -(activeLine.clientHeight / 2) // Kinukuha ang kalahati ng taas ng mismong lyric line.
    }} 
});                  

    }} 
});                  

 