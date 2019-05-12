function part1() {
    pictures.src = 'ImagesPrologue/image2.png';
    text.innerHTML = `<i>Beth is looking through the window, when she sees a 
        strange figure of a man holding a machete.</i>`;
    btnNext.setAttribute("onClick", "part2()");
}

function part2() {
    pictures.src = 'ImagesPrologue/image3.png';
    text.innerHTML = ``;
    btnNext.setAttribute("onClick", "part3()");
}

function part3() {
    pictures.src = 'ImagesPrologue/image4.png';
    text.innerHTML = `<i>Inside the lodge, we see a group of teenagers (Jessica, Emily, Mike, and Sam) 
        talking about their forthcoming prank on Beth's sister (Hannah). Jessica holds a piece of paper 
        and puts it on a nearby table.</i>`;
    btnNext.setAttribute("onClick", "part4()");
}

function part4() {
    pictures.src = 'ImagesPrologue/image5.png';
    text.innerHTML = `
    
    <b>Emily:</b> Oh my god! I can't believe you actually did this.
    <br><br>
    <b>Jessica:</b> Shhh... shhh... shhh...
    <br><br>
    <b>Sam:</b> Don't you guys think this is a little bit cruel?
    <br><br>
    <b>Jess:</b> Oh come on, she deserves it.
    <br><br>
    <b>Sam:</b> It's not her fault that she has a huge crush on Mike -
    <br><br>
    <b>Jess:</b> Hannah's been making moves on him. I'm just looking out for my girl Em.`;

    btnNext.setAttribute("onClick", "part5()");
}

function part5() {
    pictures.src = 'ImagesPrologue/image6.png';
    text.innerHTML = `<i>Jessica leaves the kitchen. Emily, Mike, and Sam follow her.</i>`;
    btnNext.setAttribute("onClick", "part6()");
}

function part6() {
    pictures.src = 'ImagesPrologue/image7.png';
    text.innerHTML = `
    <b>Emily:</b> Just because he's class Prez doesn't mean he belongs to everyone... Mike is my man.
    <br><br>
    <b>Mike:</b> Hey, Em. I'm not anybody's man.
    <br><br>
    <b>Emily:</b> Whatever you say, darling!`;
    btnNext.setAttribute("onClick", "part7()");
}

function part7() {
    pictures.src = 'ImagesPrologue/image8.png';
    text.innerHTML = `<i>Emily, Jess, Mike, Matt, and Ashley head to the guest room, while Sam climbs 
    up stairs to find and warn Hannah.</i>`;
    btnNext.setAttribute("onClick", "part8()");
}

function part8() {
    pictures.src = 'ImagesPrologue/image9.png';
    text.innerHTML = `<i>In the other room, Ashley laughs as she crouches behind a partition, Matt hides 
    inside the cabinets.</i>`;
    btnNext.setAttribute("onClick", "part9()");
}

function part9() {
    pictures.src = 'ImagesPrologue/image10.png';
    text.innerHTML = `<i>Jess and Emily hide under the bed, while Mike waits for Hannah in the room.</i>
    <br><br>
    <i>Emily and Jessica chuckle under the bed.</i>
    <br><br>
    <b>Emily:</b> Oop!... She's here... Shh!`;
    btnNext.setAttribute("onClick", "part10()");
}

function part10() {
    pictures.src = 'ImagesPrologue/image11.png';
    text.innerHTML = `
    <i>Hannah holding a candle while she heads to the guest room. She enters.</i>
    <br><br>
    <b>Hannah:</b> Mike? It's Hannah.
    <br><br>
    <b>Mike:</b> Hey, Hannah.`;
    btnNext.setAttribute("onClick", "part11()");
}

function part11() {
    pictures.src = 'ImagesPrologue/image12.png';
    text.innerHTML = `
    <i>The scene cuts and switches back to the view of Beth where she can be seen staring through the 
    window silently at the kitchen, where it can be seen that Josh and Chris are passed out after 
    drinking too much. It then again switches to an unknown man outside the lodge, and he immediately 
    leaves as Beth sees him through the window.</i>
    <br><br>
    <b>Beth:</b> Hey... Did you see that? Dad said it'd just be us this weekend. Josh?`;
    btnNext.setAttribute("onClick", "part12()");
}

function part12() {
    pictures.src = 'ImagesPrologue/image13.png';
    text.innerHTML = ``;
    btnNext.setAttribute("onClick", "part13()");
}

function part13() {
    pictures.src = 'ImagesPrologue/image14.png';
    title.innerHTML = `Beth - One Year Ago/2:00`;
    text.innerHTML = `
    <i>Beth go over to the table and find a note. She reads the letter written by Mike.</i>
    <br><br>
    The note: <i>"Hannah <br>
    You look so damn hot in that shirt...
    but I bet you're even better out of it.
    Come to the guest room at 2:00 am :)
    <br>
    Mike xxx."</i>
    <br><br>
    <b>Beth:</b> Oh my god. What'd our naive sister get herself into now?`;
    btnNext.setAttribute("onClick", "part14()");
}

function part14() {
    pictures.src = 'ImagesPrologue/image15.png';
    text.innerHTML = `
    <i>The scene cuts, and switches to Hannah and Mike.</i>
    <br><br>
    <b>Hannah:</b> I got your note.
    <br><br>
    <b>Mike:</b> Glad you could make it.
    <br><br>
    <b>Mike:</b> Maybe we should start with a little, you know, making out, and see where it goes from there.
    <br><br>
    <i>Hannah is about to take off her blouse.</i>
    <br><br>
    <b>Mike:</b> Ohhhhhh hell yeah.`;

    btnNext.setAttribute("onClick", "part15()");
}

function part15() {
    pictures.src = 'ImagesPrologue/image16.png';
    text.innerHTML = `
    <i>Jessica giggles as Hannah takes off her blouse.</i>
    <br><br>
    <b>Jess:</b> Oh my God! She's taking her shirt off!
    <br><br>
    <i>Hannah notices.</i>`;

    btnNext.setAttribute("onClick", "part16()");
}

function part16() {
    pictures.src = 'ImagesPrologue/image17.png';
    text.innerHTML = `
    <b>Hannah:</b> What...? Oh my god!
    <br><br>
    <i>The others come out of their hiding places.</i>
    <br><br>
    <b>Hannah:</b> Matt!? What are you doing here?!
    <br><br>
    <b>Mike:</b> Uh, I'm sorry, Hannah, this all got outta hand, but....
    <br><br>
    <i>Sam enters the guest room.</i>`;

    btnNext.setAttribute("onClick", "part17()");
}

function part17() {
    pictures.src = 'ImagesPrologue/image18.png';
    text.innerHTML = `
    <b>Sam:</b> Hannah! Hannah, hey, honey.... Don't... it's just a...
    <br><br>
    <b>Hannah:</b> Mike...!
    <br><br>
    <i>Hannah exits the guest room, and runs out of the lodge.</i>`;

    btnNext.setAttribute("onClick", "part18()");
}

function part18() {
    pictures.src = 'ImagesPrologue/image19.png';
    text.innerHTML = `
    <b>Sam:</b> ...stupid prank.
    <br><br>
    <b>Mike:</b> Uh... damn!
    <br><br>
    <b>Sam:</b> You guys are jerks. You know that? 
    <br><br>
    <i>Sam also exits the room and calls out for Hannah. Mike goes after her.</i>
    <br><br>
    <b>Sam:</b> HANNAH!`;

    btnNext.setAttribute("onClick", "part19()");
}

function part18() {
    pictures.src = 'ImagesPrologue/image19.png';
    text.innerHTML = `
    <b>Sam:</b> ...stupid prank.
    <br><br>
    <b>Mike:</b> Uh... damn!
    <br><br>
    <b>Sam:</b> You guys are jerks. You know that? 
    <br><br>
    <i>Sam also exits the room and calls out for Hannah. Mike goes after her.</i>
    <br><br>
    <b>Sam:</b> HANNAH!`;

    btnNext.setAttribute("onClick", "part19()");
}

function part19() {
    pictures.src = 'ImagesPrologue/image20.png';
    text.innerHTML = `
    <i>The scene switches back to Beth, who is still reading the letter. 
    She then looks at the window and notices Hannah running outside.</i>`;

    btnNext.setAttribute("onClick", "part20()");
}

function part20() {
    pictures.src = 'ImagesPrologue/image21.png';
    text.innerHTML = `
    <i>Choose one option, if you don't choose any, the game will generate a random option</i>`;
    btnNext.style.display = 'none';
    choices.innerHTML = `
        <div id='slidebar'>.</div>
        <br><br>
        <button class="butn" onclick="decision1(0)">Wake up Josh</button>
        <button class="butn" onclick="decision1(1)">Find others</button>
        `;
    var t = 10;
    timer = setInterval(() => {
        if (t == 1) {
            var random = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
            decision1(random);
            clearInterval();
        }
        t--;
    }, 1000);

    btnNext.setAttribute("onClick", "part21()");
}

function decision1(x) {
    clearInterval(timer);
    btnNext.style.display = '';
    if (x == 0) {
        choices.innerHTML = '';
        pictures.src = 'ImagesPrologue/image221.png';
        text.innerHTML = `
        <i>Beth runs over to Josh and shakes his shoulder.</i> 
        <br><br>
        <b>Beth:</b> Josh! JOSH! Fuck.
        <br><br>
        <i>Beth runs out the door to the main lodge.</i>`;
        btnNext.setAttribute("onClick", "part21()");
    }
    else if (x == 1) {
        choices.innerHTML = '';
        pictures.src = 'ImagesPrologue/image222.png';
        text.innerHTML = `
        <i>Beth runs out the door to the main lodge.</i>`;
        btnNext.setAttribute("onClick", "part21()");
    }
}

function part21() {
    pictures.src = 'ImagesPrologue/image23.png';
    text.innerHTML = `
    <b>Beth:</b> Guys! There's someone outside!
    <br><br>
    <b>Beth:</b> What the hell...?
    `;

    btnNext.setAttribute("onClick", "part22()");
}



