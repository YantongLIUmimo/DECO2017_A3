// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"script.js":[function(require,module,exports) {
// project列表数组
var projectAry = [{
  tabbleName: 'DECO  2017  A2  Due  date4.15',
  color: '#B398F8',
  ary: [{
    name: 'One',
    date: '4.08-4.08',
    progress: 'gray',
    //gray,green,yellow,red
    progressColor: '#6C6C6C',
    //#6C6C6C,#8AE3A3,#E5E2A1,#CC5F6F
    files: 'link' //link,img,file

  }, {
    name: 'Two',
    date: '4.08-4.08',
    progress: 'green',
    //gray,green,yellow,red
    progressColor: '#8AE3A3',
    //#6C6C6C,#8AE3A3,#E5E2A1,#CC5F6F
    files: 'img' //link,img,file

  }, {
    name: 'Three',
    date: '4.08-4.08',
    progress: 'green',
    //gray,green,yellow,red
    progressColor: '#8AE3A3',
    //#6C6C6C,#8AE3A3,#E5E2A1,#CC5F6F
    files: 'file' //link,img,file

  }, {
    name: 'Four',
    date: '4.08-4.08',
    progress: 'yellow',
    //gray,green,yellow,red
    progressColor: '#E5E2A1',
    //#6C6C6C,#8AE3A3,#E5E2A1,#CC5F6F
    files: 'link' //link,img,file

  }, {
    name: 'Five',
    date: '4.08-4.08',
    progress: 'red',
    //gray,green,yellow,red
    progressColor: '#CC5F6F',
    //#6C6C6C,#8AE3A3,#E5E2A1,#CC5F6F
    files: 'link' //link,img,file

  }]
}, {
  tabbleName: 'DECO  2017  A2  Due  date4.15',
  color: '#81AFFF',
  ary: [{
    name: 'One',
    date: '4.08-4.08',
    progress: 'gray',
    //gray,green,yellow,red
    progressColor: '#6C6C6C',
    //#6C6C6C,#8AE3A3,#E5E2A1,#CC5F6F
    files: 'link' //link,img,file

  }, {
    name: 'Two',
    date: '4.08-4.08',
    progress: 'green',
    //gray,green,yellow,red
    progressColor: '#8AE3A3',
    //#6C6C6C,#8AE3A3,#E5E2A1,#CC5F6F
    files: 'link' //link,img,file

  }, {
    name: 'Three',
    date: '4.08-4.08',
    progress: 'green',
    //gray,green,yellow,red
    progressColor: '#8AE3A3',
    //#6C6C6C,#8AE3A3,#E5E2A1,#CC5F6F
    files: 'link' //link,img,file

  }]
}, {
  tabbleName: 'DECO  2017  A2  Due  date4.15',
  color: '#F0A684',
  ary: [{
    name: 'One',
    date: '4.08-4.08',
    progress: 'gray',
    //gray,green,yellow,red
    progressColor: '#6C6C6C',
    //#6C6C6C,#8AE3A3,#E5E2A1,#CC5F6F
    files: 'link' //link,img,file

  }, {
    name: 'Two',
    date: '4.08-4.08',
    progress: 'green',
    //gray,green,yellow,red
    progressColor: '#8AE3A3',
    //#6C6C6C,#8AE3A3,#E5E2A1,#CC5F6F
    files: 'link' //link,img,file

  }]
}]; // 点击头像显示个人信息

function pctxTap() {
  document.getElementById('pcuserinfo').style.display = 'block';
  document.getElementById('pcdailyTodo').style.display = 'none';
  document.getElementById('pcproject').style.display = 'none';
  document.getElementById('pcTimer').style.display = 'none';
  document.getElementById('pcMusicPlayer').style.display = 'none';
  document.getElementById('pcleftuserinfo').style.display = 'block';
  document.getElementById('pcleftdailyTodo').style.display = 'none';
  document.getElementById('pcleftproject').style.display = 'none';
} // pc端点击Logo执行缩小动画以及显示个人信息


function pclogoTap() {
  // animation-play-state: running;
  document.getElementById('pclogo').style.animationPlayState = 'running';
  document.getElementById('pcuserinfo').style.display = 'block';
  document.getElementById('pcdailyTodo').style.display = 'none';
  document.getElementById('pcproject').style.display = 'none';
  document.getElementById('pcTimer').style.display = 'none';
  document.getElementById('pcMusicPlayer').style.display = 'none';
  document.getElementById('pcleftuserinfo').style.display = 'block';
  document.getElementById('pcleftdailyTodo').style.display = 'none';
  document.getElementById('pcleftproject').style.display = 'none';
} // pc端点击DailyTodo显示DailyTodo列表，隐藏其他内容


function pcDailyTodoTap() {
  document.getElementById('pcuserinfo').style.display = 'none';
  document.getElementById('pcdailyTodo').style.display = 'block';
  document.getElementById('pcproject').style.display = 'none';
  document.getElementById('pcTimer').style.display = 'none';
  document.getElementById('pcMusicPlayer').style.display = 'none';
  document.getElementById('pcleftuserinfo').style.display = 'none';
  document.getElementById('pcleftdailyTodo').style.display = 'block';
  document.getElementById('pcleftproject').style.display = 'none';
}

; // pc端点击Project显示Project列表，隐藏其他内容

function pcProjectTap() {
  document.getElementById('pcuserinfo').style.display = 'none';
  document.getElementById('pcdailyTodo').style.display = 'none';
  document.getElementById('pcproject').style.display = 'block';
  document.getElementById('pcTimer').style.display = 'none';
  document.getElementById('pcMusicPlayer').style.display = 'none';
  document.getElementById('pcleftuserinfo').style.display = 'none';
  document.getElementById('pcleftdailyTodo').style.display = 'none';
  document.getElementById('pcleftproject').style.display = 'block';
}

; // pc端点击时钟菜单显示对应的闹钟模块

var currentTimer = "Stopwatch"; //当前显示的闹钟变量

function pcTimerMenuTap(state) {
  if (state == '1') {
    document.getElementById('pcTimer').getElementsByTagName('h3')[0].innerHTML = 'Countdown';
    document.getElementById('pcsettimercountdownrow').style.display = 'block';
    document.getElementById('pcsettimerpomodororow').style.display = 'none';
    currentTimer = "Countdown";
  } else if (state == '2') {
    document.getElementById('pcTimer').getElementsByTagName('h3')[0].innerHTML = 'Stopwatch';
    document.getElementById('pcsettimercountdownrow').style.display = 'none';
    document.getElementById('pcsettimerpomodororow').style.display = 'none';
    currentTimer = "Stopwatch";
  } else if (state == '3') {
    document.getElementById('pcTimer').getElementsByTagName('h3')[0].innerHTML = 'Pomodoro  Timer';
    document.getElementById('pcsettimercountdownrow').style.display = 'none';
    document.getElementById('pcsettimerpomodororow').style.display = 'block';
    currentTimer = "Pomodoro";
  }

  document.getElementById('timernumber').innerHTML = '00:00';
  document.getElementById('pcuserinfo').style.display = 'none';
  document.getElementById('pcdailyTodo').style.display = 'none';
  document.getElementById('pcproject').style.display = 'none';
  document.getElementById('pcTimer').style.display = 'block';
  document.getElementById('pcMusicPlayer').style.display = 'none';
  document.getElementById('pcleftuserinfo').style.display = 'block';
  document.getElementById('pcleftdailyTodo').style.display = 'none';
  document.getElementById('pcleftproject').style.display = 'none';
} // pc端点击音乐菜单，显示音乐模块并隐藏其他模块


function pcMusicMenuTap() {
  document.getElementById('pcuserinfo').style.display = 'none';
  document.getElementById('pcdailyTodo').style.display = 'none';
  document.getElementById('pcproject').style.display = 'none';
  document.getElementById('pcTimer').style.display = 'none';
  document.getElementById('pcMusicPlayer').style.display = 'block';
  document.getElementById('pcleftuserinfo').style.display = 'none';
  document.getElementById('pcleftdailyTodo').style.display = 'none';
  document.getElementById('pcleftproject').style.display = 'none';
  document.getElementById('pcleftmusic').style.display = 'block';
} // pc端时钟点击缩小缩小时钟到悬浮


function pctimesuoTap() {
  document.getElementById('pctimerMiniBox').style.display = 'block';
  document.getElementById('pcTimer').style.display = 'none';
  document.getElementById('pcuserinfo').style.display = 'block';
} // pc端时钟点击设置时间显示设置模块


function pcsettimerTap() {
  if (document.getElementById('pcSetTimer').style.display == 'block') {
    document.getElementById('pcSetTimer').style.display = 'none';
  } else {
    document.getElementById('pcSetTimer').style.display = 'block';
  }
}

var countdownseconds = 0; //countdown时钟当前的秒数默认为0

var stopwatchseconds = 0; //stopwatch时钟当前的秒数默认为0

var pomodoroseconds = 0; //pomodoro时钟当前的秒数默认为0
// 时间转换的方方

function getTime(time) {
  // 转换为式分秒
  var h = parseInt(time / 60 / 60 % 24);
  h = h < 10 ? '0' + h : h;
  var m = parseInt(time / 60 % 60);
  m = m < 10 ? '0' + m : m;
  var s = parseInt(time % 60);
  s = s < 10 ? '0' + s : s; // 作为返回值返回

  return [h, m, s];
} // pc端点击保存设置,保存赋值相应的时钟当前秒数，以及相应的显示隐藏


function pcsavetimerTap() {
  document.getElementById('pcSetTimer').style.display = 'none';
  countdownseconds = document.getElementById('countdownhour').value * 60 * 60 + document.getElementById('countdownminutes').value * 60;
  pomodoroseconds = (document.getElementById('pomodorohour').value * 60 * 60 + document.getElementById('pomodorominutes').value * 60) * document.getElementById('pomodorocount').value;

  if (currentTimer == 'Countdown') {
    document.getElementById('timernumber').innerHTML = "".concat(getTime(countdownseconds)[0], ":").concat(getTime(countdownseconds)[1]);
    document.getElementById('timernumber1').innerHTML = "".concat(getTime(countdownseconds)[0], ":").concat(getTime(countdownseconds)[1]);
    document.getElementById('timernumber2').innerHTML = "".concat(getTime(countdownseconds)[0], ":").concat(getTime(countdownseconds)[1]);
  } else if (currentTimer == 'Stopwatch') {
    document.getElementById('timernumber').innerHTML = "".concat(getTime(stopwatchseconds)[1], ":").concat(getTime(stopwatchseconds)[2]);
    document.getElementById('timernumber1').innerHTML = "".concat(getTime(stopwatchseconds)[1], ":").concat(getTime(stopwatchseconds)[2]);
    document.getElementById('timernumber2').innerHTML = "".concat(getTime(stopwatchseconds)[1], ":").concat(getTime(stopwatchseconds)[2]);
  } else if (currentTimer == 'Pomodoro') {
    document.getElementById('timernumber').innerHTML = "".concat(getTime(pomodoroseconds)[0], ":").concat(getTime(pomodoroseconds)[1]);
    document.getElementById('timernumber1').innerHTML = "".concat(getTime(pomodoroseconds)[0], ":").concat(getTime(pomodoroseconds)[1]);
    document.getElementById('timernumber2').innerHTML = "".concat(getTime(pomodoroseconds)[0], ":").concat(getTime(pomodoroseconds)[1]);
  }
} // pc端时钟操作的点击事件


var CountdownInterval = null; //Countdown时钟的计时器变量默认为空

var StopwatchInterval = null; //Stopwatch时钟的计时器变量默认为空

var PomodoroInterval = null; //Pomodoro时钟的计时器变量默认为空
// pc端时钟操点击START

function pctimerstart() {
  if (currentTimer == 'Countdown') {
    //如果当前为Countdown时钟的计时方法
    if (CountdownInterval != null) {
      return;
    }

    if (countdownseconds <= 0) {
      alert('请设置倒计时时间');
    } else {
      CountdownInterval = setInterval(function () {
        if (countdownseconds < 1) {
          clearInterval(CountdownInterval);
          CountdownInterval = null;
          countdownseconds = 0;
          return;
        }

        countdownseconds -= 1;
        document.getElementById('timernumber').innerHTML = "".concat(getTime(countdownseconds)[0], ":").concat(getTime(countdownseconds)[1]);
        document.getElementById('timernumber1').innerHTML = "".concat(getTime(countdownseconds)[0], ":").concat(getTime(countdownseconds)[1]);
        document.getElementById('timernumber2').innerHTML = "".concat(getTime(countdownseconds)[0], ":").concat(getTime(countdownseconds)[1]);
      }, 1000);
    }
  } else if (currentTimer == 'Stopwatch') {
    //如果当前为Stopwatch时钟的计时方法
    if (StopwatchInterval != null) {
      return;
    }

    StopwatchInterval = setInterval(function () {
      stopwatchseconds += 1;
      document.getElementById('timernumber').innerHTML = "".concat(getTime(stopwatchseconds)[1], ":").concat(getTime(stopwatchseconds)[2]);
      document.getElementById('timernumber1').innerHTML = "".concat(getTime(stopwatchseconds)[1], ":").concat(getTime(stopwatchseconds)[2]);
      document.getElementById('timernumber2').innerHTML = "".concat(getTime(stopwatchseconds)[1], ":").concat(getTime(stopwatchseconds)[2]);
    }, 1000);
  } else if (currentTimer == 'Pomodoro') {
    //如果当前为Pomodoro时钟的计时方法
    if (PomodoroInterval != null) {
      return;
    }

    if (pomodoroseconds <= 0) {
      alert('请设置倒计时时间');
    } else {
      PomodoroInterval = setInterval(function () {
        if (pomodoroseconds < 1) {
          clearInterval(PomodoroInterval);
          PomodoroInterval = null;
          pomodoroseconds = 0;
          return;
        }

        pomodoroseconds -= 1;
        document.getElementById('timernumber').innerHTML = "".concat(getTime(pomodoroseconds)[0], ":").concat(getTime(pomodoroseconds)[1]);
        document.getElementById('timernumber1').innerHTML = "".concat(getTime(pomodoroseconds)[0], ":").concat(getTime(pomodoroseconds)[1]);
        document.getElementById('timernumber2').innerHTML = "".concat(getTime(pomodoroseconds)[0], ":").concat(getTime(pomodoroseconds)[1]);
      }, 1000);
    }
  }
}

; // pc端时钟操点击STOP，停止定时器，并赋值定时器空

function pctimerstop() {
  if (currentTimer == 'Countdown') {
    clearInterval(CountdownInterval);
    CountdownInterval = null;
  } else if (currentTimer == 'Stopwatch') {
    clearInterval(StopwatchInterval);
    StopwatchInterval = null;
  } else if (currentTimer == 'Pomodoro') {
    clearInterval(PomodoroInterval);
    PomodoroInterval = null;
  }
}

; // pc端时钟操点击RESET，清除定时器，并将相应的当前时间清0

function pctimerreset() {
  if (currentTimer == 'Countdown') {
    clearInterval(CountdownInterval);
    CountdownInterval = null;
    countdownseconds = 0;
    document.getElementById('timernumber').innerHTML = "".concat(getTime(countdownseconds)[0], ":").concat(getTime(countdownseconds)[1]);
    document.getElementById('timernumber1').innerHTML = "".concat(getTime(countdownseconds)[0], ":").concat(getTime(countdownseconds)[1]);
    document.getElementById('timernumber2').innerHTML = "".concat(getTime(countdownseconds)[0], ":").concat(getTime(countdownseconds)[1]);
  } else if (currentTimer == 'Stopwatch') {
    clearInterval(StopwatchInterval);
    StopwatchInterval = null;
    stopwatchseconds = 0;
    document.getElementById('timernumber').innerHTML = "".concat(getTime(stopwatchseconds)[1], ":").concat(getTime(stopwatchseconds)[2]);
    document.getElementById('timernumber1').innerHTML = "".concat(getTime(stopwatchseconds)[1], ":").concat(getTime(stopwatchseconds)[2]);
    document.getElementById('timernumber2').innerHTML = "".concat(getTime(stopwatchseconds)[1], ":").concat(getTime(stopwatchseconds)[2]);
  } else if (currentTimer == 'Pomodoro') {
    clearInterval(PomodoroInterval);
    PomodoroInterval = null;
    pomodoroseconds = 0;
    document.getElementById('timernumber').innerHTML = "".concat(getTime(pomodoroseconds)[0], ":").concat(getTime(pomodoroseconds)[1]);
    document.getElementById('timernumber1').innerHTML = "".concat(getTime(pomodoroseconds)[0], ":").concat(getTime(pomodoroseconds)[1]);
    document.getElementById('timernumber2').innerHTML = "".concat(getTime(pomodoroseconds)[0], ":").concat(getTime(pomodoroseconds)[1]);
  }
}

; // Pc端点击时钟小悬浮窗  放大操作，将相应的显示隐藏

function pctimerMinifangTap() {
  document.getElementById('pctimerMiniBox').style.display = 'none';
  document.getElementById('pcTimer').style.display = 'block';
  document.getElementById('pcuserinfo').style.display = 'none';
}

; // 移动端点击Logo显示个人信息模块

function ydlogoTap() {
  document.getElementById('ydUserinfo').style.display = 'block';
} // 移动端点击右边…菜单显示/隐藏的监听事件 做相应的显示隐藏操作，


$('#yddropdown').on('show.bs.dropdown', function () {
  // console.log("下拉菜单已经显示。");
  document.getElementById('ydmenuicon').classList.remove('glyphicon-option-horizontal');
  document.getElementById('ydmenuicon').classList.add('glyphicon-option-vertical');
});
$('#yddropdown').on('hide.bs.dropdown', function () {
  // console.log("下拉菜单已经隐藏。");
  document.getElementById('ydmenuicon').classList.remove('glyphicon-option-vertical');
  document.getElementById('ydmenuicon').classList.add('glyphicon-option-horizontal');
}); // 移动端点击时钟设置  显示/隐藏  设置模块

function ydsettimerTap() {
  if (document.getElementById('ydSetTimer').style.display == 'block') {
    document.getElementById('ydSetTimer').style.display = 'none';
  } else {
    document.getElementById('ydSetTimer').style.display = 'block';
  }
} // 移动端点击保存设置  相应的显示当前时间


function ydsavetimerTap() {
  document.getElementById('ydSetTimer').style.display = 'none';
  countdownseconds = document.getElementById('countdownhour1').value * 60 * 60 + document.getElementById('countdownminutes1').value * 60;
  pomodoroseconds = (document.getElementById('pomodorohour1').value * 60 * 60 + document.getElementById('pomodorominutes1').value * 60) * document.getElementById('pomodorocount1').value;

  if (currentTimer == 'Countdown') {
    document.getElementById('timernumber').innerHTML = "".concat(getTime(countdownseconds)[0], ":").concat(getTime(countdownseconds)[1]);
    document.getElementById('timernumber1').innerHTML = "".concat(getTime(countdownseconds)[0], ":").concat(getTime(countdownseconds)[1]);
    document.getElementById('timernumber2').innerHTML = "".concat(getTime(countdownseconds)[0], ":").concat(getTime(countdownseconds)[1]);
  } else if (currentTimer == 'Stopwatch') {
    document.getElementById('timernumber').innerHTML = "".concat(getTime(stopwatchseconds)[1], ":").concat(getTime(stopwatchseconds)[2]);
    document.getElementById('timernumber1').innerHTML = "".concat(getTime(stopwatchseconds)[1], ":").concat(getTime(stopwatchseconds)[2]);
    document.getElementById('timernumber2').innerHTML = "".concat(getTime(stopwatchseconds)[1], ":").concat(getTime(stopwatchseconds)[2]);
  } else if (currentTimer == 'Pomodoro') {
    document.getElementById('timernumber').innerHTML = "".concat(getTime(pomodoroseconds)[0], ":").concat(getTime(pomodoroseconds)[1]);
    document.getElementById('timernumber1').innerHTML = "".concat(getTime(pomodoroseconds)[0], ":").concat(getTime(pomodoroseconds)[1]);
    document.getElementById('timernumber2').innerHTML = "".concat(getTime(pomodoroseconds)[0], ":").concat(getTime(pomodoroseconds)[1]);
  }
}

function ydmusicfangTap() {// document.getElementById('ydmusicWarp').style.animationPlayState = 'running';
}

function ydmusicsuoTap() {} // 移动端点击底部菜单 显示/隐藏相应模块
// 移动端点击时钟显示相应类型的时钟


function ydtimerTap(state) {
  if (state == '1') {
    document.getElementById('ydTimer').getElementsByTagName('h3')[0].innerHTML = 'Countdown';
    document.getElementById('ydsettimercountdownrow').style.display = 'block';
    document.getElementById('ydsettimerpomodororow').style.display = 'none';
    currentTimer = "Countdown";
  } else if (state == '2') {
    document.getElementById('ydTimer').getElementsByTagName('h3')[0].innerHTML = 'Stopwatch';
    document.getElementById('ydsettimercountdownrow').style.display = 'none';
    document.getElementById('ydsettimerpomodororow').style.display = 'none';
    currentTimer = "Stopwatch";
  } else if (state == '3') {
    document.getElementById('ydTimer').getElementsByTagName('h3')[0].innerHTML = 'Pomodoro  Timer';
    document.getElementById('ydsettimercountdownrow').style.display = 'none';
    document.getElementById('ydsettimerpomodororow').style.display = 'block';
    currentTimer = "Pomodoro";
  }

  document.getElementById('ydDailytodo').style.display = 'none';
  document.getElementById('ydProject').style.display = 'none';
  document.getElementById('ydTimer').style.display = 'block';
  document.getElementById('ydMusic').style.display = 'none';
  document.getElementById('ydUserinfo').style.display = 'none';
}

; // 移动端点击Project显示Project列表

function ydProjectTap() {
  document.getElementById('ydDailytodo').style.display = 'none';
  document.getElementById('ydProject').style.display = 'block';
  document.getElementById('ydTimer').style.display = 'none';
  document.getElementById('ydMusic').style.display = 'none';
  document.getElementById('ydUserinfo').style.display = 'none';
}

; // 移动端点击DailyTodo显示DailyTodo列表

function ydDailyTodoTap() {
  document.getElementById('ydDailytodo').style.display = 'block';
  document.getElementById('ydProject').style.display = 'none';
  document.getElementById('ydTimer').style.display = 'none';
  document.getElementById('ydMusic').style.display = 'none';
  document.getElementById('ydUserinfo').style.display = 'none';
}

; // 移动端点击音乐显示音乐模块

function ydMusicTap() {
  document.getElementById('ydDailytodo').style.display = 'none';
  document.getElementById('ydProject').style.display = 'none';
  document.getElementById('ydTimer').style.display = 'none';
  document.getElementById('ydMusic').style.display = 'block';
  document.getElementById('ydUserinfo').style.display = 'none';
}

; // 移动端点击个人信息显示用户信息模块

function ydUserinfoTap() {
  document.getElementById('ydDailytodo').style.display = 'none';
  document.getElementById('ydProject').style.display = 'none';
  document.getElementById('ydTimer').style.display = 'none';
  document.getElementById('ydMusic').style.display = 'none';
  document.getElementById('ydUserinfo').style.display = 'block';
}

; // 音乐的相关操作（pc 及 移动端 共用）
// 获取audio音频对象

var myAudio = document.getElementById('myAudio'); //音乐数组

var myAdAry = [{
  name: 'music  one',
  img: './mp3/1.jpeg',
  url: './mp3/1.mp3'
}, {
  name: 'music  two',
  img: './mp3/2.jpeg',
  url: './mp3/2.mp3'
}];
var currentPlay = 0; //当前播放第几首

var currentVolume = 0.5; //当前音量，默认0.5，范围0-1
// 播放/暂停 点击事件

function playAudio() {
  // 当前播放状态
  console.log(myAudio.paused); // 音乐播放

  if (myAudio.paused) {
    document.getElementById('adPlay').src = './image/暂停的副本.png';
    document.getElementById('adPlay1').src = './image/暂停的副本.png';
    myAudio.play();
  } else {
    document.getElementById('adPlay').src = './image/播放2的副本2.png';
    document.getElementById('adPlay1').src = './image/播放2的副本2.png';
    myAudio.pause();
  }
} // 上一曲 点击事件
// // myAdImg


function previouTap() {
  if (currentPlay == 0) {
    currentPlay = myAdAry.length - 1;
    myAudio.src = myAdAry[currentPlay].url;
    document.getElementById('myAdImg').src = myAdAry[currentPlay].img;
    document.getElementById('myAdName').innerHTML = myAdAry[currentPlay].name;
    document.getElementById('myAdImg1').src = myAdAry[currentPlay].img;
    document.getElementById('myAdName1').innerHTML = myAdAry[currentPlay].name;
    myAudio.play();
  } else {
    currentPlay -= 1;
    myAudio.src = myAdAry[currentPlay].url;
    document.getElementById('myAdImg').src = myAdAry[currentPlay].img;
    document.getElementById('myAdName').innerHTML = myAdAry[currentPlay].name;
    document.getElementById('myAdImg1').src = myAdAry[currentPlay].img;
    document.getElementById('myAdName1').innerHTML = myAdAry[currentPlay].name;
    myAudio.play();
  }
} // 下一曲 点击事件


function nextTap() {
  if (currentPlay == myAdAry.length - 1) {
    currentPlay = 0;
    myAudio.src = myAdAry[currentPlay].url;
    document.getElementById('myAdImg').src = myAdAry[currentPlay].img;
    document.getElementById('myAdName').innerHTML = myAdAry[currentPlay].name;
    document.getElementById('myAdImg1').src = myAdAry[currentPlay].img;
    document.getElementById('myAdName1').innerHTML = myAdAry[currentPlay].name;
    myAudio.play();
  } else {
    currentPlay += 1;
    myAudio.src = myAdAry[currentPlay].url;
    document.getElementById('myAdImg').src = myAdAry[currentPlay].img;
    document.getElementById('myAdName').innerHTML = myAdAry[currentPlay].name;
    document.getElementById('myAdImg1').src = myAdAry[currentPlay].img;
    document.getElementById('myAdName1').innerHTML = myAdAry[currentPlay].name;
    myAudio.play();
  }
} // 声音加 点击事件


function addTap() {
  if (currentVolume < 1) {
    myAudio.volume += 0.1;
  } else {
    myAudio.volume = 1;
  }
} // 声音减 点击事件


function reduceTap() {
  if (currentVolume > 0) {
    myAudio.volume -= 0.1;
  } else {
    myAudio.volume = 0;
  }
} // 缩放点击事件


function adZoomTap(val) {
  var adBox = document.getElementById('audioBox').style;
  var adMiniBox = document.getElementById('audioMiniBox').style;

  if (val == 'suo') {
    adBox.display = 'none';
    adMiniBox.display = 'block';
  } else if (val == 'fang') {
    adBox.display = 'block';
    adMiniBox.display = 'none';
  }
} // 音乐列表


myAdAry.forEach(function (item, index) {
  // console.log(item);
  var tr = document.createElement('tr');
  tr.innerHTML = "\n\t\t<tr>\n\t\t\t<td class=\"text-center\" > <h4>".concat(item.name, "</h4> </td>\n\t\t</tr>\n\t");
  document.getElementById('pcmusiclist').appendChild(tr);
}); // project列表循环追加元素

projectAry.forEach(function (item, index) {
  console.log(item); // pc端project左边列表追加

  $('#pcleftprojectlist').append("\n\t\t<tr>\n\t\t\t<td class=\"text-center\" > <h4>".concat(item.tabbleName, "</h4> </td>\n\t\t</tr>\n\t")); // pc端右边表格列表追加

  $('#pcproject').append("\n\t\t<div class=\"row\" style=\"margin-top: 30px;\" >\n\t\t\t<div class=\"col-md-10 col-md-offset-1 text-left\" style=\"padding: 0px;color: ".concat(item.color, ";\" data-toggle=\"collapse\" data-target=\"#cd").concat(index, "\" >\n\t\t\t\t<span class=\"glyphicon glyphicon-play\"></span>\n\t\t\t\t<span>").concat(item.tabbleName, "</span>\n\t\t\t</div>\n\t\t\t<div id=\"cd").concat(index, "\" class=\"col-lg-10 col-md-offset-1 collapse\" style=\"padding:10px;\" >\n\t\t\t\t<div style=\"background: #E6E6E6;padding: 10px 30px 10px 30px;border-radius: 10px;\" >\n\t\t\t\t\t<div >\n\t\t\t\t\t\t<div class=\"col-md-3\" style=\"\" >NAME</div>\n\t\t\t\t\t\t<div class=\"col-md-3\" style=\"\" >DATE</div>\n\t\t\t\t\t\t<div class=\"col-md-3\" style=\"\" >PROGRESS</div>\n\t\t\t\t\t\t<div class=\"col-md-3\" style=\"\" >FILES</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<table id=\"pcprojecttab").concat(index, "\" class=\"table table-bordered\" style=\"\" >\n\t\t\t\t\t\t\n\t\t\t\t\t</table>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t")); // 移动端

  $('#ydProject').append("\n\t\t<div style=\"padding: 0.5rem 0rem 0.5rem 0rem;box-sizing: border-box;\" >\n\t\t\t<div data-toggle=\"collapse\" data-target=\"#ydcollapse".concat(index).concat(index, "\" style=\"color:  ").concat(item.color, ";\" >\n\t\t\t\t<span class=\"glyphicon glyphicon-play\" ></span>\n\t\t\t\t<span>").concat(item.tabbleName, "</span>\n\t\t\t</div>\n\t\t\t<div class=\"collapse in\" id=\"ydcollapse").concat(index).concat(index, "\" style=\"padding: 1.25rem 1.5rem 0rem 1.5rem;\" >\n\t\t\t\t<div class=\"tab\" style=\"padding: 0.4rem;border-radius: 1rem;\" >\n\t\t\t\t\t<div class=\"tabHead\" >\n\t\t\t\t\t\t<span>NAME</span>\n\t\t\t\t\t\t<span>DATE</span>\n\t\t\t\t\t\t<span>PROGRESS</span>\n\t\t\t\t\t\t<span>FILES</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<table id=\"ydProjectTab").concat(index, "\" class=\"table table-bordered\" style=\"position: relative;background: #E1E1E1;border-radius: 1rem;overflow: hidden;\" >\n\t\t\t\t\t\t\n\t\t\t\t\t</table>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t</div>\n\t\t</div>\n\t"));
  item.ary.forEach(function (item1, index1) {
    // console.log(item1);
    $("#pcprojecttab".concat(index)).append("\n\t\t\t<tr>\n\t\t\t\t<td>".concat(item1.name, "</td>\n\t\t\t\t<td>").concat(item1.date, "</td>\n\t\t\t\t<td style=\"backGround:").concat(item1.progressColor, "\" >").concat(item1.progress, "</td>\n\t\t\t\t<td>").concat(item1.files, "</td>\n\t\t\t</tr>\n\t\t"));
    $("#ydProjectTab".concat(index)).append("\n\t\t\t<tr>\n\t\t\t\t<td>".concat(item1.name, "</td>\n\t\t\t\t<td>").concat(item1.date, "</td>\n\t\t\t\t<td style=\"backGround:").concat(item1.progressColor, ";\" >\n\t\t\t\t\t<span data-toggle=\"collapse\" data-target=\"#ydcolorselect").concat(index).concat(index1, "\" >\n\t\t\t\t\t\t").concat(item1.progress, "\n\t\t\t\t\t</span>\n\t\t\t\t\t<ul id=\"ydcolorselect").concat(index).concat(index1, "\" class=\"collapse on\" style=\"padding: 0;margin: 0;list-style: none;position: absolute;top:0.6rem;right:4rem;\" >\n\t\t\t\t\t  <li onclick=\"ydcolorselectTap(").concat(index, ",").concat(index1, ",'gray')\" style=\"text-algin:center;background:#6C6C6C\" >gray</li>\n\t\t\t\t\t  <li onclick=\"ydcolorselectTap(").concat(index, ",").concat(index1, ",'green')\" style=\"text-algin:center;background:#8AE3A3\"\" >green</li onclick=\"ydcolorselectTap(").concat(index, ",").concat(index1, ",'gray')\">\n\t\t\t\t\t  <li onclick=\"ydcolorselectTap(").concat(index, ",").concat(index1, ",'yellow')\" style=\"text-algin:center;background:#E5E2A1\"\" >yellow</li onclick=\"ydcolorselectTap(").concat(index, ",").concat(index1, ",'gray')\">\n\t\t\t\t\t  <li onclick=\"ydcolorselectTap(").concat(index, ",").concat(index1, ",'red')\" style=\"text-algin:center;background:#CC5F6F\"\" >red</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</td>\n\t\t\t\t<td>").concat(item1.files, "</td>\n\t\t\t</tr>\n\t\t\t\n\t\t"));
  });
});

function ydcolorselectTap(index1, index2, color) {
  console.log(index1, index2, color);
}

; //gray,green,yellow,red
//#6C6C6C,#8AE3A3,#E5E2A1,#CC5F6F
},{}],"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53013" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","script.js"], null)
//# sourceMappingURL=/script.75da7f30.js.map