// Detaile of project
var projectAry = [
    {
        tabbleName: "DECO  2017  A2  Due  date4.15",
        color: "#B398F8",
        ary: [
            {
                name: "One",
                date: "4.08-4.08",
                progress: "gray",
                progressColor: "#6C6C6C",
                files: "link"
            },
            {
                name: "Two",
                date: "4.08-4.08",
                progress: "green",
                progressColor: "#8AE3A3",
                files: "img"
            },
            {
                name: "Three",
                date: "4.08-4.08",
                progress: "green",
                progressColor: "#8AE3A3",
                files: "file"
            },
            {
                name: "Four",
                date: "4.08-4.08",
                progress: "yellow",
                progressColor: "#E5E2A1",
                files: "link"
            },
            {
                name: "Five",
                date: "4.08-4.08",
                progress: "red",
                progressColor: "#CC5F6F",
                files: "link"
            }, 
        ]
    },
    {
        tabbleName: "DECO  2017  A2  Due  date4.15",
        color: "#81AFFF",
        ary: [
            {
                name: "One",
                date: "4.08-4.08",
                progress: "gray",
                progressColor: "#6C6C6C",
                files: "link"
            },
            {
                name: "Two",
                date: "4.08-4.08",
                progress: "green",
                progressColor: "#8AE3A3",
                files: "link"
            },
            {
                name: "Three",
                date: "4.08-4.08",
                progress: "green",
                progressColor: "#8AE3A3",
                files: "link"
            }, 
        ]
    },
    {
        tabbleName: "DECO  2017  A2  Due  date4.15",
        color: "#F0A684",
        ary: [
            {
                name: "One",
                date: "4.08-4.08",
                progress: "gray",
                progressColor: "#6C6C6C",
                files: "link"
            },
            {
                name: "Two",
                date: "4.08-4.08",
                progress: "green",
                progressColor: "#8AE3A3",
                files: "link"
            }, 
        ]
    }, 
];
// Click on the avatar to go to the user information page
function pctxTap() {
    document.getElementById("pcuserinfo").style.display = "block";
    document.getElementById("pcdailyTodo").style.display = "none";
    document.getElementById("pcproject").style.display = "none";
    document.getElementById("pcTimer").style.display = "none";
    document.getElementById("pcMusicPlayer").style.display = "none";
    document.getElementById("pcleftuserinfo").style.display = "block";
    document.getElementById("pcleftdailyTodo").style.display = "none";
    document.getElementById("pcleftproject").style.display = "none";
}
// PC: Click on the logo to perform a zoom animation and display user information
function pclogoTap() {
    // animation-play-state: running;
    document.getElementById("pclogo").style.animationPlayState = "running";
    document.getElementById("pcuserinfo").style.display = "block";
    document.getElementById("pcdailyTodo").style.display = "none";
    document.getElementById("pcproject").style.display = "none";
    document.getElementById("pcTimer").style.display = "none";
    document.getElementById("pcMusicPlayer").style.display = "none";
    document.getElementById("pcleftuserinfo").style.display = "block";
    document.getElementById("pcleftdailyTodo").style.display = "none";
    document.getElementById("pcleftproject").style.display = "none";
}
// PC: Click on DailyTodo to display the DailyTodo list and hide the rest of the content
function pcDailyTodoTap() {
    document.getElementById("pcuserinfo").style.display = "none";
    document.getElementById("pcdailyTodo").style.display = "block";
    document.getElementById("pcproject").style.display = "none";
    document.getElementById("pcTimer").style.display = "none";
    document.getElementById("pcMusicPlayer").style.display = "none";
    document.getElementById("pcleftuserinfo").style.display = "none";
    document.getElementById("pcleftdailyTodo").style.display = "block";
    document.getElementById("pcleftproject").style.display = "none";
}
// PC: Click on Project to display the Project list and hide the rest of the content
function pcProjectTap() {
    document.getElementById("pcuserinfo").style.display = "none";
    document.getElementById("pcdailyTodo").style.display = "none";
    document.getElementById("pcproject").style.display = "block";
    document.getElementById("pcTimer").style.display = "none";
    document.getElementById("pcMusicPlayer").style.display = "none";
    document.getElementById("pcleftuserinfo").style.display = "none";
    document.getElementById("pcleftdailyTodo").style.display = "none";
    document.getElementById("pcleftproject").style.display = "block";
}
// PC: Click on the clock menu to display the difference module of clock
var currentTimer = "Stopwatch"; //Currently displayed variable of clock
function pcTimerMenuTap(state) {
    if (state == "1") {
        document.getElementById("pcTimer").getElementsByTagName("h3")[0].innerHTML = "Countdown";
        document.getElementById("pcsettimercountdownrow").style.display = "block";
        document.getElementById("pcsettimerpomodororow").style.display = "none";
        document.getElementById("pctimernameTip").style.display = "none";
        currentTimer = "Countdown";
    } else if (state == "2") {
        document.getElementById("pcTimer").getElementsByTagName("h3")[0].innerHTML = "Stopwatch";
        document.getElementById("pcsettimercountdownrow").style.display = "none";
        document.getElementById("pcsettimerpomodororow").style.display = "none";
        document.getElementById("pctimernameTip").style.display = "none";
        currentTimer = "Stopwatch";
    } else if (state == "3") {
        document.getElementById("pcTimer").getElementsByTagName("h3")[0].innerHTML = "Pomodoro  Timer";
        document.getElementById("pcsettimercountdownrow").style.display = "none";
        document.getElementById("pcsettimerpomodororow").style.display = "block";
        document.getElementById("pctimernameTip").style.display = "block";
        currentTimer = "Pomodoro";
    }
    document.getElementById("timernumber").innerHTML = "00:00:00";
    document.getElementById("timernumber1").innerHTML = "00:00:00";
    document.getElementById("timernumber2").innerHTML = "00:00:00";
    document.getElementById("pcuserinfo").style.display = "none";
    document.getElementById("pcdailyTodo").style.display = "none";
    document.getElementById("pcproject").style.display = "none";
    document.getElementById("pcTimer").style.display = "block";
    document.getElementById("pcMusicPlayer").style.display = "none";
    document.getElementById("pcleftuserinfo").style.display = "block";
    document.getElementById("pcleftdailyTodo").style.display = "none";
    document.getElementById("pcleftproject").style.display = "none";
    clearInterval(CountdownInterval);
    CountdownInterval = null;
    clearInterval(StopwatchInterval);
    StopwatchInterval = null;
    clearInterval(PomodoroInterval);
    PomodoroInterval = null;
    countdownseconds = 0; //countdown: The current number of seconds defaults to 0
    stopwatchseconds = 0; //stopwatch: The current number of seconds defaults to 0
    pomodoroseconds = 0; //pomodoro: The current number of seconds defaults to 0 (Work)
    pomodoroseconds1 = 0; //pomodoro: The current number of seconds defaults to 0 (Rest)
    pomodoroseconds_record = 0; //pomodoro: The current number of seconds defaults to 0 ???Work),(Record the last value)
    pomodoroseconds1_record = 0; //pomodoro: The current number of seconds defaults to 0 (Rest),(Record the last value)
    pomodoroCount = 0; //pomodoro: The current number of seconds defaults to 0 (Times)
}
// PC: Click on the Music player to show the Music module and hide the other modules
function pcMusicMenuTap() {
    document.getElementById("pcuserinfo").style.display = "none";
    document.getElementById("pcdailyTodo").style.display = "none";
    document.getElementById("pcproject").style.display = "none";
    document.getElementById("pcTimer").style.display = "none";
    document.getElementById("pcMusicPlayer").style.display = "block";
    document.getElementById("pcleftuserinfo").style.display = "none";
    document.getElementById("pcleftdailyTodo").style.display = "none";
    document.getElementById("pcleftproject").style.display = "none";
    document.getElementById("pcleftmusic").style.display = "block";
}
// PC: Click on the Timer section to shrink the timer to the hover window
function pctimesuoTap() {
    document.getElementById("pctimerMiniBox").style.display = "block";
    document.getElementById("pcTimer").style.display = "none";
    document.getElementById("pcuserinfo").style.display = "block";
}
// PC: TIMER-Click setting time display setting module
function pcsettimerTap() {
    if (document.getElementById("pcSetTimer").style.display == "block") document.getElementById("pcSetTimer").style.display = "none";
    else document.getElementById("pcSetTimer").style.display = "block";
}
var countdownseconds = 0; //countdown: The current number of seconds defaults to 0
var stopwatchseconds = 0; //stopwatch: The current number of seconds defaults to 0
var pomodoroseconds = 0; //pomodoro: The current number of seconds defaults to 0 (Work)
var pomodoroseconds1 = 0; //pomodoro: The current number of seconds defaults to 0 (Rest)
var pomodoroseconds_record = 0; //pomodoro: The current number of seconds defaults to 0 ???Work),(Record the last value)
var pomodoroseconds1_record = 0; //pomodoro: The current number of seconds defaults to 0 (Rest),(Record the last value)
var pomodoroCount = 0; //pomodoro: The current number of seconds defaults to 0 (Times)
// Methods of time shifting
function getTime(time) {
    // ??????????????????
    let h = parseInt(time / 60 / 60 % 24);
    h = h < 10 ? "0" + h : h;
    let m = parseInt(time / 60 % 60);
    m = m < 10 ? "0" + m : m;
    let s = parseInt(time % 60);
    s = s < 10 ? "0" + s : s;
    // ?????????????????????
    return [
        h,
        m,
        s
    ];
}
// pc?????????????????????,?????????????????????????????????????????????????????????????????????
function pcsavetimerTap() {
    document.getElementById("pcSetTimer").style.display = "none";
    countdownseconds = document.getElementById("countdownhour").value * 3600 + document.getElementById("countdownminutes").value * 60;
    pomodoroseconds = document.getElementById("pomodorohour").value * 60;
    pomodoroseconds1 = document.getElementById("pomodorominutes").value * 60;
    pomodoroseconds_record = document.getElementById("pomodorohour").value * 60;
    pomodoroseconds1_record = document.getElementById("pomodorominutes").value * 60;
    pomodoroCount = document.getElementById("pomodorocount").value;
    if (currentTimer == "Countdown") {
        document.getElementById("timernumber").innerHTML = `${getTime(countdownseconds)[0]}:${getTime(countdownseconds)[1]}:${getTime(countdownseconds)[2]}`;
        document.getElementById("timernumber1").innerHTML = `${getTime(countdownseconds)[0]}:${getTime(countdownseconds)[1]}:${getTime(countdownseconds)[2]}`;
        document.getElementById("timernumber2").innerHTML = `${getTime(countdownseconds)[0]}:${getTime(countdownseconds)[1]}:${getTime(countdownseconds)[2]}`;
    } else if (currentTimer == "Stopwatch") {
        document.getElementById("timernumber").innerHTML = `${getTime(stopwatchseconds)[0]}:${getTime(stopwatchseconds)[1]}:${getTime(stopwatchseconds)[2]}`;
        document.getElementById("timernumber1").innerHTML = `${getTime(stopwatchseconds)[0]}:${getTime(stopwatchseconds)[1]}:${getTime(stopwatchseconds)[2]}`;
        document.getElementById("timernumber2").innerHTML = `${getTime(stopwatchseconds)[0]}:${getTime(stopwatchseconds)[1]}:${getTime(stopwatchseconds)[2]}`;
    } else if (currentTimer == "Pomodoro") {
        document.getElementById("timernumber").innerHTML = `${getTime(pomodoroseconds)[0]}:${getTime(pomodoroseconds)[1]}:${getTime(pomodoroseconds)[2]}`;
        document.getElementById("timernumber1").innerHTML = `${getTime(pomodoroseconds)[0]}:${getTime(pomodoroseconds)[1]}:${getTime(pomodoroseconds)[2]}`;
        document.getElementById("timernumber2").innerHTML = `${getTime(pomodoroseconds)[0]}:${getTime(pomodoroseconds)[1]}:${getTime(pomodoroseconds)[2]}`;
    }
}
// pc??????????????????????????????
var CountdownInterval = null; //Countdown????????????????????????????????????
var StopwatchInterval = null; //Stopwatch????????????????????????????????????
var PomodoroInterval = null; //Pomodoro????????????????????????????????????
// pc??????????????????START
function pctimerstart() {
    if (currentTimer == "Countdown") {
        if (CountdownInterval != null) return;
        if (countdownseconds <= 0) alert("\u8BF7\u8BBE\u7F6E\u5012\u8BA1\u65F6\u65F6\u95F4");
        else CountdownInterval = setInterval(function() {
            if (countdownseconds < 1) {
                clearInterval(CountdownInterval);
                CountdownInterval = null;
                countdownseconds = 0;
                return;
            }
            countdownseconds -= 1;
            document.getElementById("timernumber").innerHTML = `${getTime(countdownseconds)[0]}:${getTime(countdownseconds)[1]}:${getTime(countdownseconds)[2]}`;
            document.getElementById("timernumber1").innerHTML = `${getTime(countdownseconds)[0]}:${getTime(countdownseconds)[1]}:${getTime(countdownseconds)[2]}`;
            document.getElementById("timernumber2").innerHTML = `${getTime(countdownseconds)[0]}:${getTime(countdownseconds)[1]}:${getTime(countdownseconds)[2]}`;
        }, 1000);
    } else if (currentTimer == "Stopwatch") {
        if (StopwatchInterval != null) return;
        StopwatchInterval = setInterval(function() {
            stopwatchseconds += 1;
            document.getElementById("timernumber").innerHTML = `${getTime(stopwatchseconds)[0]}:${getTime(stopwatchseconds)[1]}:${getTime(stopwatchseconds)[2]}`;
            document.getElementById("timernumber1").innerHTML = `${getTime(stopwatchseconds)[0]}:${getTime(stopwatchseconds)[1]}:${getTime(stopwatchseconds)[2]}`;
            document.getElementById("timernumber2").innerHTML = `${getTime(stopwatchseconds)[0]}:${getTime(stopwatchseconds)[1]}:${getTime(stopwatchseconds)[2]}`;
        }, 1000);
    } else if (currentTimer == "Pomodoro") {
        if (PomodoroInterval != null) return;
        if (pomodoroCount <= 0) alert("\u8BF7\u8BBE\u7F6E\u5012\u8BA1\u65F6\u6267\u884C\u6B21\u6570");
        else if (pomodoroseconds_record <= 0 || pomodoroseconds1_record <= 0) alert("\u8BF7\u8BBE\u7F6E\u5012\u8BA1\u65F6\u5DE5\u4F5C\u65F6\u95F4\u548C\u4F11\u606F\u65F6\u95F4");
        else {
            if (pomodoroCount < 1) return;
            else PomodoroInterval = setInterval(function() {
                if (pomodoroCount > 0) {
                    if (pomodoroseconds > 0) {
                        pomodoroseconds -= 1;
                        document.getElementById("timernumber").innerHTML = `${getTime(pomodoroseconds)[0]}:${getTime(pomodoroseconds)[1]}:${getTime(pomodoroseconds)[2]}`;
                        document.getElementById("timernumber1").innerHTML = `${getTime(pomodoroseconds)[0]}:${getTime(pomodoroseconds)[1]}:${getTime(pomodoroseconds)[2]}`;
                        document.getElementById("timernumber2").innerHTML = `${getTime(pomodoroseconds)[0]}:${getTime(pomodoroseconds)[1]}:${getTime(pomodoroseconds)[2]}`;
                    } else if (pomodoroseconds1 > 0) {
                        pomodoroseconds1 -= 1;
                        document.getElementById("timernumber").innerHTML = `${getTime(pomodoroseconds1)[0]}:${getTime(pomodoroseconds1)[1]}:${getTime(pomodoroseconds1)[2]}`;
                        document.getElementById("timernumber1").innerHTML = `${getTime(pomodoroseconds1)[0]}:${getTime(pomodoroseconds1)[1]}:${getTime(pomodoroseconds1)[2]}`;
                        document.getElementById("timernumber2").innerHTML = `${getTime(pomodoroseconds1)[0]}:${getTime(pomodoroseconds1)[1]}:${getTime(pomodoroseconds1)[2]}`;
                    } else {
                        pomodoroseconds = pomodoroseconds_record;
                        pomodoroseconds1 = pomodoroseconds1_record;
                        pomodoroCount -= 1;
                    }
                } else {
                    clearInterval(PomodoroInterval);
                    PomodoroInterval = null;
                    pomodoroseconds = 0; //pomodoro??????????????????????????????0(??????)
                    pomodoroseconds1 = 0; //pomodoro??????????????????????????????0(??????)
                    pomodoroseconds_record = 0; //pomodoro??????????????????????????????0(??????),(?????????????????????)
                    pomodoroseconds1_record = 0; //pomodoro??????????????????????????????0(??????),(?????????????????????)
                    pomodoroCount = 0; //pomodoro??????????????????????????????0(??????)
                    return;
                }
            }, 1000);
        }
    }
}
// pc??????????????????STOP??????????????????????????????????????????
function pctimerstop() {
    if (currentTimer == "Countdown") {
        clearInterval(CountdownInterval);
        CountdownInterval = null;
    } else if (currentTimer == "Stopwatch") {
        clearInterval(StopwatchInterval);
        StopwatchInterval = null;
    } else if (currentTimer == "Pomodoro") {
        clearInterval(PomodoroInterval);
        PomodoroInterval = null;
    }
}
// pc??????????????????RESET???????????????????????????????????????????????????0
function pctimerreset() {
    if (currentTimer == "Countdown") {
        clearInterval(CountdownInterval);
        CountdownInterval = null;
        countdownseconds = 0;
        document.getElementById("timernumber").innerHTML = `${getTime(countdownseconds)[0]}:${getTime(countdownseconds)[1]}:${getTime(countdownseconds)[2]}`;
        document.getElementById("timernumber1").innerHTML = `${getTime(countdownseconds)[0]}:${getTime(countdownseconds)[1]}:${getTime(countdownseconds)[2]}`;
        document.getElementById("timernumber2").innerHTML = `${getTime(countdownseconds)[0]}:${getTime(countdownseconds)[1]}:${getTime(countdownseconds)[2]}`;
    } else if (currentTimer == "Stopwatch") {
        clearInterval(StopwatchInterval);
        StopwatchInterval = null;
        stopwatchseconds = 0;
        document.getElementById("timernumber").innerHTML = `${getTime(stopwatchseconds)[0]}:${getTime(stopwatchseconds)[1]}:${getTime(stopwatchseconds)[2]}`;
        document.getElementById("timernumber1").innerHTML = `${getTime(stopwatchseconds)[0]}:${getTime(stopwatchseconds)[1]}:${getTime(stopwatchseconds)[2]}`;
        document.getElementById("timernumber2").innerHTML = `${getTime(stopwatchseconds)[0]}:${getTime(stopwatchseconds)[1]}:${getTime(stopwatchseconds)[2]}`;
    } else if (currentTimer == "Pomodoro") {
        clearInterval(PomodoroInterval);
        PomodoroInterval = null;
        pomodoroseconds = 0; //pomodoro??????????????????????????????0(??????)
        pomodoroseconds1 = 0; //pomodoro??????????????????????????????0(??????)
        pomodoroseconds_record = 0; //pomodoro??????????????????????????????0(??????),(?????????????????????)
        pomodoroseconds1_record = 0; //pomodoro??????????????????????????????0(??????),(?????????????????????)
        pomodoroCount = 0; //pomodoro??????????????????????????????0(??????)
        document.getElementById("timernumber").innerHTML = `${getTime(pomodoroseconds)[0]}:${getTime(pomodoroseconds)[1]}:${getTime(pomodoroseconds)[2]}`;
        document.getElementById("timernumber1").innerHTML = `${getTime(pomodoroseconds)[0]}:${getTime(pomodoroseconds)[1]}:${getTime(pomodoroseconds)[2]}`;
        document.getElementById("timernumber2").innerHTML = `${getTime(pomodoroseconds)[0]}:${getTime(pomodoroseconds)[1]}:${getTime(pomodoroseconds)[2]}`;
    }
}
// Pc???????????????????????????  ???????????????????????????????????????
function pctimerMinifangTap() {
    document.getElementById("pctimerMiniBox").style.display = "none";
    document.getElementById("pcTimer").style.display = "block";
    document.getElementById("pcuserinfo").style.display = "none";
}
// ???????????????Logo????????????????????????
function ydlogoTap() {
    console.log("wwww\u80E1");
    document.getElementById("ydUserinfo").style.display = "block";
    document.getElementById("ydlogo").style.animationPlayState = "running";
}
// ????????????????????????????????????/????????????????????? ?????????????????????????????????
$("#yddropdown").on("show.bs.dropdown", function() {
    // console.log("???????????????????????????");
    document.getElementById("ydmenuicon").classList.remove("glyphicon-option-horizontal");
    document.getElementById("ydmenuicon").classList.add("glyphicon-option-vertical");
});
$("#yddropdown").on("hide.bs.dropdown", function() {
    // console.log("???????????????????????????");
    document.getElementById("ydmenuicon").classList.remove("glyphicon-option-vertical");
    document.getElementById("ydmenuicon").classList.add("glyphicon-option-horizontal");
});
// ???????????????????????????  ??????/??????  ????????????
function ydsettimerTap() {
    if (document.getElementById("ydSetTimer").style.display == "block") document.getElementById("ydSetTimer").style.display = "none";
    else document.getElementById("ydSetTimer").style.display = "block";
}
// ???????????????????????????  ???????????????????????????
function ydsavetimerTap() {
    document.getElementById("ydSetTimer").style.display = "none";
    countdownseconds = document.getElementById("countdownhour1").value * 3600 + document.getElementById("countdownminutes1").value * 60;
    pomodoroseconds = document.getElementById("pomodorohour1").value * 60;
    pomodoroseconds1 = document.getElementById("pomodorominutes1").value * 60;
    pomodoroseconds_record = document.getElementById("pomodorohour1").value * 60;
    pomodoroseconds1_record = document.getElementById("pomodorominutes1").value * 60;
    pomodoroCount = document.getElementById("pomodorocount1").value;
    if (currentTimer == "Countdown") {
        document.getElementById("timernumber").innerHTML = `${getTime(countdownseconds)[0]}:${getTime(countdownseconds)[1]}:${getTime(countdownseconds)[2]}`;
        document.getElementById("timernumber1").innerHTML = `${getTime(countdownseconds)[0]}:${getTime(countdownseconds)[1]}:${getTime(countdownseconds)[2]}`;
        document.getElementById("timernumber2").innerHTML = `${getTime(countdownseconds)[0]}:${getTime(countdownseconds)[1]}:${getTime(countdownseconds)[2]}`;
    } else if (currentTimer == "Stopwatch") {
        document.getElementById("timernumber").innerHTML = `${getTime(stopwatchseconds)[0]}:${getTime(stopwatchseconds)[2]}:${getTime(stopwatchseconds)[2]}`;
        document.getElementById("timernumber1").innerHTML = `${getTime(stopwatchseconds)[0]}:${getTime(stopwatchseconds)[2]}:${getTime(stopwatchseconds)[2]}`;
        document.getElementById("timernumber2").innerHTML = `${getTime(stopwatchseconds)[0]}:${getTime(stopwatchseconds)[2]}:${getTime(stopwatchseconds)[2]}`;
    } else if (currentTimer == "Pomodoro") {
        document.getElementById("timernumber").innerHTML = `${getTime(pomodoroseconds)[0]}:${getTime(pomodoroseconds)[1]}:${getTime(pomodoroseconds)[2]}`;
        document.getElementById("timernumber1").innerHTML = `${getTime(pomodoroseconds)[0]}:${getTime(pomodoroseconds)[1]}:${getTime(pomodoroseconds)[2]}`;
        document.getElementById("timernumber2").innerHTML = `${getTime(pomodoroseconds)[0]}:${getTime(pomodoroseconds)[1]}:${getTime(pomodoroseconds)[2]}`;
    }
}
function ydmusicfangTap() {
// document.getElementById('ydmusicWarp').style.animationPlayState = 'running';
}
function ydmusicsuoTap() {}
// ??????????????????????????? ??????/??????????????????
// ????????????????????????????????????????????????
function ydtimerTap(state) {
    if (state == "1") {
        document.getElementById("ydTimer").getElementsByTagName("h3")[0].innerHTML = "Countdown";
        document.getElementById("ydsettimercountdownrow").style.display = "block";
        document.getElementById("ydsettimerpomodororow").style.display = "none";
        currentTimer = "Countdown";
    } else if (state == "2") {
        document.getElementById("ydTimer").getElementsByTagName("h3")[0].innerHTML = "Stopwatch";
        document.getElementById("ydsettimercountdownrow").style.display = "none";
        document.getElementById("ydsettimerpomodororow").style.display = "none";
        currentTimer = "Stopwatch";
    } else if (state == "3") {
        document.getElementById("ydTimer").getElementsByTagName("h3")[0].innerHTML = "Pomodoro  Timer";
        document.getElementById("ydsettimercountdownrow").style.display = "none";
        document.getElementById("ydsettimerpomodororow").style.display = "block";
        currentTimer = "Pomodoro";
    }
    document.getElementById("timernumber").innerHTML = "00:00:00";
    document.getElementById("timernumber1").innerHTML = "00:00:00";
    document.getElementById("timernumber2").innerHTML = "00:00:00";
    document.getElementById("ydDailytodo").style.display = "none";
    document.getElementById("ydProject").style.display = "none";
    document.getElementById("ydTimer").style.display = "block";
    document.getElementById("ydMusic").style.display = "none";
    document.getElementById("ydUserinfo").style.display = "none";
    clearInterval(CountdownInterval);
    CountdownInterval = null;
    clearInterval(StopwatchInterval);
    StopwatchInterval = null;
    clearInterval(PomodoroInterval);
    PomodoroInterval = null;
    countdownseconds = 0; //countdown??????????????????????????????0
    stopwatchseconds = 0; //stopwatch??????????????????????????????0
    pomodoroseconds = 0; //pomodoro??????????????????????????????0(??????)
    pomodoroseconds1 = 0; //pomodoro??????????????????????????????0(??????)
    pomodoroseconds_record = 0; //pomodoro??????????????????????????????0(??????),(?????????????????????)
    pomodoroseconds1_record = 0; //pomodoro??????????????????????????????0(??????),(?????????????????????)
    pomodoroCount = 0; //pomodoro??????????????????????????????0(??????)
}
// ???????????????Project??????Project??????
function ydProjectTap() {
    document.getElementById("ydDailytodo").style.display = "none";
    document.getElementById("ydProject").style.display = "block";
    document.getElementById("ydTimer").style.display = "none";
    document.getElementById("ydMusic").style.display = "none";
    document.getElementById("ydUserinfo").style.display = "none";
}
// ???????????????DailyTodo??????DailyTodo??????
function ydDailyTodoTap() {
    document.getElementById("ydDailytodo").style.display = "block";
    document.getElementById("ydProject").style.display = "none";
    document.getElementById("ydTimer").style.display = "none";
    document.getElementById("ydMusic").style.display = "none";
    document.getElementById("ydUserinfo").style.display = "none";
}
// ???????????????????????????????????????
function ydMusicTap() {
    document.getElementById("ydDailytodo").style.display = "none";
    document.getElementById("ydProject").style.display = "none";
    document.getElementById("ydTimer").style.display = "none";
    document.getElementById("ydMusic").style.display = "block";
    document.getElementById("ydUserinfo").style.display = "none";
}
// ???????????????????????????????????????????????????
function ydUserinfoTap() {
    document.getElementById("ydDailytodo").style.display = "none";
    document.getElementById("ydProject").style.display = "none";
    document.getElementById("ydTimer").style.display = "none";
    document.getElementById("ydMusic").style.display = "none";
    document.getElementById("ydUserinfo").style.display = "block";
}
// ????????????????????????pc ??? ????????? ?????????
// ??????audio????????????
var myAudio = document.getElementById("myAudio");
//????????????
var myAdAry = [
    {
        name: "music  one",
        img: "http://localhost:1234/mp3/1.jpeg",
        url: "http://localhost:1234/mp3/1.mp3"
    },
    {
        name: "music  two",
        img: "http://localhost:1234/mp3/2.jpeg",
        url: "http://localhost:1234/mp3/2.mp3"
    }, 
];
var currentPlay = 0; //?????????????????????
var currentVolume = 0.5; //?????????????????????0.5?????????0-1
// ??????/?????? ????????????
function playAudio() {
    // ??????????????????
    console.log(myAudio.paused);
    // ????????????
    if (myAudio.paused) {
        document.getElementById("adPlay").src = "http://localhost:1234/image/\u6682\u505C\u7684\u526F\u672C.png";
        document.getElementById("adPlay1").src = "http://localhost:1234/image/\u6682\u505C\u7684\u526F\u672C.png";
        myAudio.play();
    } else {
        document.getElementById("adPlay").src = "http://localhost:1234/image/\u64AD\u653E2\u7684\u526F\u672C2.png";
        document.getElementById("adPlay1").src = "http://localhost:1234/image/\u64AD\u653E2\u7684\u526F\u672C2.png";
        myAudio.pause();
    }
}
// ????????? ????????????
// // myAdImg
function previouTap() {
    if (currentPlay == 0) {
        currentPlay = myAdAry.length - 1;
        myAudio.src = myAdAry[currentPlay].url;
        document.getElementById("myAdImg").src = myAdAry[currentPlay].img;
        document.getElementById("myAdName").innerHTML = myAdAry[currentPlay].name;
        document.getElementById("myAdImg1").src = myAdAry[currentPlay].img;
        document.getElementById("myAdName1").innerHTML = myAdAry[currentPlay].name;
        myAudio.play();
    } else {
        currentPlay -= 1;
        myAudio.src = myAdAry[currentPlay].url;
        document.getElementById("myAdImg").src = myAdAry[currentPlay].img;
        document.getElementById("myAdName").innerHTML = myAdAry[currentPlay].name;
        document.getElementById("myAdImg1").src = myAdAry[currentPlay].img;
        document.getElementById("myAdName1").innerHTML = myAdAry[currentPlay].name;
        myAudio.play();
    }
}
// ????????? ????????????
function nextTap() {
    if (currentPlay == myAdAry.length - 1) {
        currentPlay = 0;
        myAudio.src = myAdAry[currentPlay].url;
        document.getElementById("myAdImg").src = myAdAry[currentPlay].img;
        document.getElementById("myAdName").innerHTML = myAdAry[currentPlay].name;
        document.getElementById("myAdImg1").src = myAdAry[currentPlay].img;
        document.getElementById("myAdName1").innerHTML = myAdAry[currentPlay].name;
        myAudio.play();
    } else {
        currentPlay += 1;
        myAudio.src = myAdAry[currentPlay].url;
        document.getElementById("myAdImg").src = myAdAry[currentPlay].img;
        document.getElementById("myAdName").innerHTML = myAdAry[currentPlay].name;
        document.getElementById("myAdImg1").src = myAdAry[currentPlay].img;
        document.getElementById("myAdName1").innerHTML = myAdAry[currentPlay].name;
        myAudio.play();
    }
}
// ????????? ????????????
function addTap() {
    if (currentVolume < 1) myAudio.volume += 0.1;
    else myAudio.volume = 1;
}
// ????????? ????????????
function reduceTap() {
    if (currentVolume > 0) myAudio.volume -= 0.1;
    else myAudio.volume = 0;
}
// ??????????????????
function adZoomTap(val) {
    var adBox = document.getElementById("audioBox").style;
    var adMiniBox = document.getElementById("audioMiniBox").style;
    if (val == "suo") {
        adBox.display = "none";
        adMiniBox.display = "block";
    } else if (val == "fang") {
        adBox.display = "block";
        adMiniBox.display = "none";
    }
}
// ????????????
myAdAry.forEach(function(item, index) {
    // console.log(item);
    var tr = document.createElement("tr");
    tr.innerHTML = `
		<tr>
			<td class="text-center" > <h4>${item.name}</h4> </td>
		</tr>
	`;
    document.getElementById("pcmusiclist").appendChild(tr);
});
// project????????????????????????
projectAry.forEach(function(item, index) {
    // console.log(item);
    // pc???project??????????????????
    $("#pcleftprojectlist").append(`
		<tr>
			<td class="text-center" > <h4>${item.tabbleName}</h4> </td>
		</tr>
	`);
    // pc???????????????????????????
    $("#pcproject").append(`
		<div class="row" style="margin-top: 30px;" >
			<div class="col-md-10 col-md-offset-1 text-left" style="padding: 0px;color: ${item.color};" data-toggle="collapse" data-target="#cd${index}" >
				<span class="glyphicon glyphicon-play"></span>
				<span>${item.tabbleName}</span>
			</div>
			<div id="cd${index}" class="col-lg-10 col-md-offset-1 collapse" style="padding:10px;" >
				<div style="background: #E6E6E6;padding: 10px 30px 10px 30px;border-radius: 10px;" >
					<div >
						<div class="col-md-3" style="" >NAME</div>
						<div class="col-md-3" style="" >DATE</div>
						<div class="col-md-3" style="" >PROGRESS</div>
						<div class="col-md-3" style="" >FILES</div>
					</div>
					<table id="pcprojecttab${index}" class="table table-bordered" style="" >
						
					</table>
				</div>
			</div>
		</div>
	`);
    // ?????????
    $("#ydProject").append(`
		<div style="padding: 0.5rem 0rem 0.5rem 0rem;box-sizing: border-box;" >
			<div data-toggle="collapse" data-target="#ydcollapse${index}${index}" style="color:  ${item.color};" >
				<span class="glyphicon glyphicon-play" ></span>
				<span>${item.tabbleName}</span>
			</div>
			<div class="collapse in" id="ydcollapse${index}${index}" style="padding: 1.25rem 1.5rem 0rem 1.5rem;" >
				<div class="tab" style="padding: 0.4rem;border-radius: 1rem;" >
					<div class="tabHead" >
						<span>NAME</span>
						<span>DATE</span>
						<span>PROGRESS</span>
						<span>FILES</span>
					</div>
					<table id="ydProjectTab${index}" class="table table-bordered" style="position: relative;background: #E1E1E1;border-radius: 1rem;overflow: hidden;" >
						
					</table>
				</div>
				
			</div>
		</div>
	`);
    item.ary.forEach(function(item1, index1) {
        // console.log(item1);
        $(`#pcprojecttab${index}`).append(`
			<tr>
				<td>${item1.name}</td>
				<td>${item1.date}</td>
				<td style="backGround:${item1.progressColor}" >${item1.progress}</td>
				<td>${item1.files}</td>
			</tr>
		`);
        $(`#ydProjectTab${index}`).append(`
			<tr>
				<td>${item1.name}</td>
				<td>${item1.date}</td>
				<td style="backGround:${item1.progressColor};" >
					<span data-toggle="collapse" data-target="#ydcolorselect${index}${index1}" >
						${item1.progress}
					</span>
					<ul id="ydcolorselect${index}${index1}" class="collapse on" style="padding: 0;margin: 0;list-style: none;position: absolute;top:0.6rem;right:4rem;" >
					  <li onclick="ydcolorselectTap(${index},${index1},'gray')" style="text-algin:center;background:#6C6C6C" >gray</li>
					  <li onclick="ydcolorselectTap(${index},${index1},'green')" style="text-algin:center;background:#8AE3A3"" >green</li onclick="ydcolorselectTap(${index},${index1},'gray')">
					  <li onclick="ydcolorselectTap(${index},${index1},'yellow')" style="text-algin:center;background:#E5E2A1"" >yellow</li onclick="ydcolorselectTap(${index},${index1},'gray')">
					  <li onclick="ydcolorselectTap(${index},${index1},'red')" style="text-algin:center;background:#CC5F6F"" >red</li>
					</ul>
				</td>
				<td>${item1.files}</td>
			</tr>
			
		`);
    });
});
function ydcolorselectTap(index1, index2, color) {
    console.log(index1, index2, color);
}

//# sourceMappingURL=index.31ae5fc8.js.map
