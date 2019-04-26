const timerBlock = document.querySelector(".timer-block");
const timerBlockInner = document.querySelector(".timer-block__inner");
let timerWidth = timerBlock.offsetWidth;
const subTitles = document.querySelector(".subtitles");
const playButton = document.querySelector(".play");
const pauseButton = document.querySelector(".pause");
const resetButton = document.querySelector(".reset");
const james = document.querySelector(".james");
const per = document.querySelector(".per");
const jessica = document.querySelector(".jessica");
const textContainer = document.querySelector(".podcast__text");
const hostContainer = document.querySelector(".hosts");
let text = "";

let timer = 0;

const jamesCircle = document.querySelector("#james-circle");
const perCircle = document.querySelector("#per-circle");
const jessicaCircle = document.querySelector("#jessica-circle");

const colorScheme = document.querySelector(".podcast__color-scheme");

const neutral = "#fff";
const happy = "#E4D305";
const indignantly = "#8C69F2";
const serious = "#383E58";
const mad = "#E15E5E";
const questionable = "#69A7F2";

colorScheme.addEventListener("click", function() {
  colorScheme.classList.toggle("open");
});

function createElement(text, color) {
  const node = document.createElement("p");
  let textNode = document.createTextNode(text);
  node.appendChild(textNode);
  node.style.borderBottom = "4px solid" + color;
  textContainer.appendChild(node);
}

playButton.addEventListener("click", function() {
  playButton.classList.add("active");
  pauseButton.classList.remove("active");
  resetButton.classList.remove("active");
  colorScheme.classList.add("open");
  //
  // var calc = timerWidth / timer;
  // console.log(calc);

  pauseButton.addEventListener("click", function() {
    clearInterval(mainInterval);
    pauseButton.classList.add("active");
    playButton.classList.remove("active");
    resetButton.classList.remove("active");
  });

  resetButton.addEventListener("click", function() {
    clearInterval(mainInterval);
    resetButton.classList.add("active");
    pauseButton.classList.remove("active");
    playButton.classList.remove("active");
    colorScheme.classList.remove("open");
    timer = 0;
    textContainer.innerHTML = "";
    jamesCircle.classList.remove("active-talking");
    perCircle.classList.remove("active-talking");
    jessicaCircle.classList.remove("active-talking");
  });

  var mainInterval = setInterval(function() {
    timerBlockInner.style.width = (timer / timerWidth) * 145 + "%";
    timer++;

    switch (timer) {
      case 1:
        text = "JAMES: Hello, I’m James Royal-Lawson.";
        createElement(text, happy);

        james.classList.add("talking");
        per.classList.remove("talking");
        jessica.classList.remove("talking");
        jamesCircle.classList.add("active-talking");
        jamesCircle.style.backgroundColor = happy;
        textContainer.scrollTop = textContainer.scrollHeight;
        break;
      case 2:
        text = "PER: And I’m Per Axbom";
        createElement(text, happy);

        per.classList.add("talking");
        james.classList.remove("talking");
        jessica.classList.remove("talking");

        perCircle.classList.add("active-talking");
        jamesCircle.classList.remove("active-talking");
        perCircle.style.backgroundColor = happy;
        textContainer.scrollTop = textContainer.scrollHeight;
        break;
      case 4:
        text =
          "JAMES: And this is UX Podcast. We’re in Stockholm, Sweden and you’re listening in 184 countries from Zambia to Portugal.";
        createElement(text, neutral);

        james.classList.add("talking");
        per.classList.remove("talking");
        jessica.classList.remove("talking");
        jamesCircle.style.backgroundColor = neutral;

        jamesCircle.classList.add("active-talking");
        perCircle.classList.remove("active-talking");
        textContainer.scrollTop = textContainer.scrollHeight;
        break;
      case 12:
        text =
          "PER: Jessica Ivins, UX designer, speaker, teacher and learner. She works at Center Centre, the UX Design School in Chattanooga, Tennessee founded by Jared Spool and Leslie Jensen-Inman.";
        createElement(text, serious);

        per.classList.add("talking");
        james.classList.remove("talking");
        jessica.classList.remove("talking");

        perCircle.classList.add("active-talking");
        jamesCircle.classList.remove("active-talking");
        perCircle.style.backgroundColor = serious;
        textContainer.scrollTop = textContainer.scrollHeight;
        break;
      case 24:
        text =
          "JAMES: Jess is someone we’ve referenced in a number of shows and even featured one of her articles in episode 190.";
        createElement(text, happy);

        james.classList.add("talking");
        per.classList.remove("talking");
        jessica.classList.remove("talking");
        jamesCircle.style.backgroundColor = happy;
        jamesCircle.classList.add("active-talking");
        perCircle.classList.remove("active-talking");

        textContainer.scrollTop = textContainer.scrollHeight;
        break;

      case 30:
        text = "PER: No we did not!";
        createElement(text, mad);

        per.classList.add("talking");
        james.classList.remove("talking");
        jessica.classList.remove("talking");

        perCircle.classList.add("active-talking");
        jamesCircle.classList.remove("active-talking");
        perCircle.style.backgroundColor = mad;

        textContainer.scrollTop = textContainer.scrollHeight;

        break;

      case 32:
        text = "JAMES: We did!";
        createElement(text, indignantly);

        james.classList.add("talking");
        per.classList.remove("talking");
        jessica.classList.remove("talking");
        jamesCircle.style.backgroundColor = indignantly;
        jamesCircle.classList.add("active-talking");
        perCircle.classList.remove("active-talking");

        textContainer.scrollTop = textContainer.scrollHeight;
        break;
      case 34:
        text = "PER: Oh! you are Right, i'm sorry!";
        createElement(text, indignantly);

        per.classList.add("talking");
        james.classList.remove("talking");
        jessica.classList.remove("talking");
        perCircle.style.backgroundColor = indignantly;
        perCircle.classList.add("active-talking");
        jamesCircle.classList.remove("active-talking");

        textContainer.scrollTop = textContainer.scrollHeight;
        break;
      case 36:
        text =
          "PER: And the article we featured in that link show was how to maintain a professional network throughout your UX career. And that together with a number of articles Jessica has written laid the seeds, which brings us to bringing her on the show for a chat today.";
        createElement(text, serious);

        per.classList.add("talking");
        james.classList.remove("talking");
        jessica.classList.remove("talking");
        perCircle.style.backgroundColor = serious;
        perCircle.classList.add("active-talking");
        jamesCircle.classList.remove("active-talking");

        textContainer.scrollTop = textContainer.scrollHeight;
        break;
      case 48:
        text = "JAMES: And the topic will be Getting Your Next UX Job.";
        createElement(text, serious);

        james.classList.add("talking");
        per.classList.remove("talking");
        jessica.classList.remove("talking");
        jamesCircle.style.backgroundColor = serious;
        jamesCircle.classList.add("active-talking");
        perCircle.classList.remove("active-talking");

        textContainer.scrollTop = textContainer.scrollHeight;
        break;
      case 52:
        text = "[music playing]";
        createElement(text);
        textContainer.style.border = "7px solid #E03075";
        james.classList.remove("talking");
        per.classList.remove("talking");
        jessica.classList.remove("talking");

        jamesCircle.classList.remove("active-talking");

        textContainer.scrollTop = textContainer.scrollHeight;
        break;
      case 56:
        text =
          "JAMES: I think all three of us get quite a lot of questions and enquiries from people asking for tips about how they should get going in UX or get a job in UX, or even get consulting gigs in UX. ";
        createElement(text, happy);
        textContainer.style.border = "none";
        james.classList.add("talking");
        per.classList.remove("talking");
        jessica.classList.remove("talking");
        jamesCircle.style.backgroundColor = happy;
        jamesCircle.classList.add("active-talking");

        textContainer.scrollTop = textContainer.scrollHeight;
        break;

      case 76:
        text = "What kind of questions do you get, Jessica?";
        createElement(text, questionable);

        james.classList.add("talking");
        per.classList.remove("talking");
        jessica.classList.remove("talking");
        jamesCircle.style.backgroundColor = questionable;
        jamesCircle.classList.add("active-talking");

        textContainer.scrollTop = textContainer.scrollHeight;
        break;
      case 79:
        text =
          "JESSICA: Yeah!, so I got all sorts of questions about this particularly because as you know, I’m an educator, I’m a faculty member at Center Centre or the UX Design School and our goal is to prepare our students to be industry-ready UX designers and get them jobs at graduation.";
        createElement(text, happy);

        jessica.classList.add("talking");
        james.classList.remove("talking");
        per.classList.remove("talking");
        jessicaCircle.style.backgroundColor = happy;
        jessicaCircle.classList.add("active-talking");
        jamesCircle.classList.remove("active-talking");

        textContainer.scrollTop = textContainer.scrollHeight;
        break;

      case 87:
        text =
          "JESSICA: So this is very, very top of mind for me. Like the whole job searching journey from the very, very beginning to when you’re actually in your new job.";
        createElement(text, serious);

        jessica.classList.add("talking");
        james.classList.remove("talking");
        per.classList.remove("talking");
        jessicaCircle.style.backgroundColor = serious;
        jessicaCircle.classList.add("active-talking");
        jamesCircle.classList.remove("active-talking");

        textContainer.scrollTop = textContainer.scrollHeight;
        break;

      case 95:
        text =
          "One of the things I really enjoy talking about with people, and I’ve written about this before, is planning for your next job search well before you’re actually searching for a job. So thinking ahead of time about how to put yourself out there, how to be known, how you want to be seen in the field so that if heaven forbid you were to get laid off or lose your job, you’ve already done a lot of the legwork and people know who you are and it’s much more easy for you at that point to get interviews and to get job leads than if you wait until you’re ready to look for a job and then start from scratch.";
        createElement(text, happy);

        jessica.classList.add("talking");
        james.classList.remove("talking");
        per.classList.remove("talking");
        jessicaCircle.style.backgroundColor = happy;
        jessicaCircle.classList.add("active-talking");
        jamesCircle.classList.remove("active-talking");

        textContainer.scrollTop = textContainer.scrollHeight;
        break;

      case 115:
        text =
          "One of the things I really enjoy talking about with people, and I’ve written about this before, is planning for your next job search well before you’re actually searching for a job. So thinking ahead of time about how to put yourself out there, how to be known, how you want to be seen in the field so that if heaven forbid you were to get laid off or lose your job, you’ve already done a lot of the legwork and people know who you are and it’s much more easy for you at that point to get interviews and to get job leads than if you wait until you’re ready to look for a job and then start from scratch.";
        createElement(text, serious);

        jessica.classList.add("talking");
        james.classList.remove("talking");
        per.classList.remove("talking");
        jessicaCircle.style.backgroundColor = serious;
        jessicaCircle.classList.add("active-talking");
        jamesCircle.classList.remove("active-talking");

        textContainer.scrollTop = textContainer.scrollHeight;
        break;
      case 142:
        text =
          "PER: I really liked that approach because it’s just so much easier to prepare when you don’t have any pressure.";
        createElement(text, serious);

        per.classList.add("talking");
        james.classList.remove("talking");
        jessica.classList.remove("talking");
        perCircle.style.backgroundColor = serious;
        jessicaCircle.classList.remove("active-talking");
        perCircle.classList.add("active-talking");

        textContainer.scrollTop = textContainer.scrollHeight;
        break;
      case 147:
        text =
          "JESSICA: Yeah. I like to compare it to saving for retirement because at least here in the United States – I know you have listeners all over the world, but here in the United States, it’s up to you for the most part to save money for your retirement so that when you stop working you can still pay your bills. You hear in America all the time, “Don’t wait too long to save for retirement. Don’t wait until you’re getting close to retirement to save. Start saving early.” And I like to apply that thinking to getting a job. Start putting yourself out there ahead of time.";
        createElement(text);

        jessica.classList.add("talking");
        james.classList.remove("talking");
        per.classList.remove("talking");

        jessicaCircle.classList.add("active-talking");
        perCircle.classList.remove("active-talking");

        textContainer.scrollTop = textContainer.scrollHeight;
        break;
      case 189:
        text =
          "JAMES: So basically you’ve got to invest something every week or something in how you would maintain yourself.";
        createElement(text, serious);

        james.classList.add("talking");
        per.classList.remove("talking");
        jessica.classList.remove("talking");
        jessicaCircle.style.backgroundColor = serious;
        jamesCircle.classList.add("active-talking");
        perCircle.classList.remove("active-talking");

        textContainer.scrollTop = textContainer.scrollHeight;
        break;

      case 195:
        text =
          "JESSICA: Start thinking about what type of job you would want next if you were to lose your job and you had to get a new job and how do you present yourself as that type of designer to the industry?";
        createElement(text);

        james.classList.add("talking");
        per.classList.remove("talking");
        jessica.classList.remove("talking");
        jessicaCircle.style.backgroundColor = questionable;
        jamesCircle.classList.add("active-talking");
        perCircle.classList.remove("active-talking");

        textContainer.scrollTop = textContainer.scrollHeight;
        break;
      case 199:
        text =
          "JESSICA: Yeah, exactly. It’s really small investments. That’s what I tell people. And it could be weekly, it could be biweekly. I recommend no less than biweekly because the things that you do regularly and the things that you schedule are the things that get done. So if you schedule something once a month, chances are you’re just not going to get to it. Because if it’s this once a month thing, you don’t have a habit around it. But if you’re doing it once a week, chances are you’ll probably get to it once a week. And if you don’t get to it every week, you’re probably going to get to it every other week. And at that point it’ll get done. And it could be as simple as 20 minutes a week. And it could be as complex as hours and hours every week. There’s no limit as to how much time and energy you want to put into it. I put a lot into it. I’m also in a position where I don’t have children and I don’t have any other sort of obligation outside of work that takes up my time so I can put a lot of time into it. But you don’t have to put a ton of time into it. Like I wrote an article talking about everything that I do to put myself out there as a UX designer. And I said several times throughout the article, you don’t have to do everything that I do. You don’t have to put hours. I probably put at least three hours outside of work time every week into building what I call my UX brands. But you don’t have to do that. It could be something like 20 minutes a week. Just really simple things to get yourself out there and to put in that legwork ahead of time.";
        createElement(text);

        jessica.classList.add("talking");
        james.classList.remove("talking");
        per.classList.remove("talking");
        textContainer.scrollTop = textContainer.scrollHeight;
        jamesCircle.classList.remove("active-talking");
        jessicaCircle.classList.add("active-talking");

        break;
      case 281:
        text =
          "PER: Something I’ve seen you doing, I think, is actually tweet links to the same articles over a period of time, which to me seems like a hugely efficient way of doing it. You have these articles that are really good, we featured some of them on the show before. Just repurposing and reusing content is something that we’ve talked about in other contexts within the show as well. Thinking about doing that for yourself, it’s just up talk about saving time.";
        createElement(text);

        per.classList.add("talking");
        james.classList.remove("talking");
        jessica.classList.remove("talking");
        textContainer.scrollTop = textContainer.scrollHeight;
        jessicaCircle.classList.remove("active-talking");

        perCircle.classList.add("active-talking");

        break;
      case 282:
        per.classList.remove("talking");
        james.classList.remove("talking");
        jessica.classList.remove("talking");
        textContainer.scrollTop = textContainer.scrollHeight;
        jessicaCircle.classList.remove("active-talking");
    }
  }, 1000);
});
