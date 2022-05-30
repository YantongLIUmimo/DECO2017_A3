// project列表数组
var projectAry=[
	{
		tabbleName:'DECO  2017  A2  Due  date4.15',
		color:'#B398F8',
		ary:[
			{
				name:'One',
				date:'4.08-4.08',
				progress:'gray',//gray,green,yellow,red
				progressColor:'#6C6C6C',//#6C6C6C,#8AE3A3,#E5E2A1,#CC5F6F
				files:'link',//link,img,file
			},
			{
				name:'Two',
				date:'4.08-4.08',
				progress:'green',//gray,green,yellow,red
				progressColor:'#8AE3A3',//#6C6C6C,#8AE3A3,#E5E2A1,#CC5F6F
				files:'img',//link,img,file
			},
			{
				name:'Three',
				date:'4.08-4.08',
				progress:'green',//gray,green,yellow,red
				progressColor:'#8AE3A3',//#6C6C6C,#8AE3A3,#E5E2A1,#CC5F6F
				files:'file',//link,img,file
			},
			{
				name:'Four',
				date:'4.08-4.08',
				progress:'yellow',//gray,green,yellow,red
				progressColor:'#E5E2A1',//#6C6C6C,#8AE3A3,#E5E2A1,#CC5F6F
				files:'link',//link,img,file
			},
			{
				name:'Five',
				date:'4.08-4.08',
				progress:'red',//gray,green,yellow,red
				progressColor:'#CC5F6F',//#6C6C6C,#8AE3A3,#E5E2A1,#CC5F6F
				files:'link',//link,img,file
			},
		],
	},
	{
		tabbleName:'DECO  2017  A2  Due  date4.15',
		color:'#81AFFF',
		ary:[
			{
				name:'One',
				date:'4.08-4.08',
				progress:'gray',//gray,green,yellow,red
				progressColor:'#6C6C6C',//#6C6C6C,#8AE3A3,#E5E2A1,#CC5F6F
				files:'link',//link,img,file
			},
			{
				name:'Two',
				date:'4.08-4.08',
				progress:'green',//gray,green,yellow,red
				progressColor:'#8AE3A3',//#6C6C6C,#8AE3A3,#E5E2A1,#CC5F6F
				files:'link',//link,img,file
			},
			{
				name:'Three',
				date:'4.08-4.08',
				progress:'green',//gray,green,yellow,red
				progressColor:'#8AE3A3',//#6C6C6C,#8AE3A3,#E5E2A1,#CC5F6F
				files:'link',//link,img,file
			},
		],
	},
	{
		tabbleName:'DECO  2017  A2  Due  date4.15',
		color:'#F0A684',
		ary:[
			{
				name:'One',
				date:'4.08-4.08',
				progress:'gray',//gray,green,yellow,red
				progressColor:'#6C6C6C',//#6C6C6C,#8AE3A3,#E5E2A1,#CC5F6F
				files:'link',//link,img,file
			},
			{
				name:'Two',
				date:'4.08-4.08',
				progress:'green',//gray,green,yellow,red
				progressColor:'#8AE3A3',//#6C6C6C,#8AE3A3,#E5E2A1,#CC5F6F
				files:'link',//link,img,file
			},
		],
	},
];
// Todo列表数组
var todoAry = [
	{
		date:'2022.04.07',
		color: '#BAA2EE',
		ary:[
			{
				check:true,
				content:'DECO2017 A2',
			},
			{
				check:true,
				content:'DECO2014 A3',
			},
			{
				check:false,
				content:'OLET2135 M3',
			},
			{
				check:false,
				content:'OLET1616 M2',
			},
			{
				check:false,
				content:'OLET1504 M2',
			},
		],
	},
	{
		date:'2022.04.08',
		color: '#94B7F1',
		ary:[
			{
				check:false,
				content:'DECO2017 A2',
			},
			{
				check:false,
				content:'DECO2014 A3',
			},
			{
				check:false,
				content:'OLET2135 M3',
			},
			{
				check:false,
				content:'OLET1616 M2',
			},
		],
	},
	{
		date:'2022.04.09',
		color: '#EFA586',
		ary:[
			{
				check:false,
				content:'DECO2017 A2',
			},
			{
				check:false,
				content:'DECO2014 A3',
			},
			{
				check:false,
				content:'OLET2135 M3',
			},
			{
				check:false,
				content:'OLET1616 M2',
			},
			{
				check:false,
				content:'OLET1504 M2',
			},
		],
	},
	{
		date:'2022.04.10',
		color: '#8CE69C',
		ary:[
			{
				check:false,
				content:'DECO2017 A2',
			},
			{
				check:false,
				content:'DECO2014 A3',
			},
			{
				check:false,
				content:'OLET2135 M3',
			},
		],
	},
];
// 点击头像显示个人信息
function pctxTap(){
	document.getElementById('pcuserinfo').style.display = 'block';
	document.getElementById('pcdailyTodo').style.display = 'none';
	document.getElementById('pcproject').style.display = 'none';
	document.getElementById('pcTimer').style.display = 'none';
	document.getElementById('pcMusicPlayer').style.display = 'none';
	document.getElementById('pcleftuserinfo').style.display = 'block';
	document.getElementById('pcleftdailyTodo').style.display = 'none';
	document.getElementById('pcleftproject').style.display = 'none';
	document.getElementById('pcleftmusic').style.display = 'none';
	document.getElementById('todoaddbtn').style.display = 'none';
	document.getElementById('projectaddbtn').style.display = 'none';
}
// pc端点击Logo执行缩小动画以及显示个人信息
function pclogoTap(){
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
	document.getElementById('pcleftmusic').style.display = 'none';
	document.getElementById('todoaddbtn').style.display = 'none';
	document.getElementById('projectaddbtn').style.display = 'none';
}
// pc端点击DailyTodo显示DailyTodo列表，隐藏其他内容
function pcDailyTodoTap(){
	document.getElementById('pcuserinfo').style.display = 'none';
	document.getElementById('pcdailyTodo').style.display = 'block';
	document.getElementById('pcproject').style.display = 'none';
	document.getElementById('pcTimer').style.display = 'none';
	document.getElementById('pcMusicPlayer').style.display = 'none';
	document.getElementById('pcleftuserinfo').style.display = 'none';
	document.getElementById('pcleftdailyTodo').style.display = 'block';
	document.getElementById('pcleftproject').style.display = 'none';
	document.getElementById('pcleftmusic').style.display = 'none';
	document.getElementById('todoaddbtn').style.display = 'block';
	document.getElementById('projectaddbtn').style.display = 'none';
};
// pc端点击Project显示Project列表，隐藏其他内容
function pcProjectTap(){
	document.getElementById('pcuserinfo').style.display = 'none';
	document.getElementById('pcdailyTodo').style.display = 'none';
	document.getElementById('pcproject').style.display = 'block';
	document.getElementById('pcTimer').style.display = 'none';
	document.getElementById('pcMusicPlayer').style.display = 'none';
	document.getElementById('pcleftuserinfo').style.display = 'none';
	document.getElementById('pcleftdailyTodo').style.display = 'none';
	document.getElementById('pcleftproject').style.display = 'block';
	document.getElementById('pcleftmusic').style.display = 'none';
	document.getElementById('todoaddbtn').style.display = 'none';
	document.getElementById('projectaddbtn').style.display = 'block';
};
// pc端点击时钟菜单显示对应的闹钟模块
var currentTimer = "Stopwatch";//当前显示的闹钟变量
function pcTimerMenuTap(state){
	if(state == '1'){
		document.getElementById('pcTimer').getElementsByTagName('h3')[0].innerHTML = 'Countdown';
		document.getElementById('pcsettimercountdownrow').style.display = 'block';
		document.getElementById('pcsettimerpomodororow').style.display = 'none';
		document.getElementById('pctimernameTip').style.display = 'none';
		currentTimer = "Countdown";
	}else if(state == '2'){
		document.getElementById('pcTimer').getElementsByTagName('h3')[0].innerHTML = 'Stopwatch';
		document.getElementById('pcsettimercountdownrow').style.display = 'none';
		document.getElementById('pcsettimerpomodororow').style.display = 'none';
		document.getElementById('pctimernameTip').style.display = 'none';
		currentTimer = "Stopwatch";
	}else if(state == '3'){
		document.getElementById('pcTimer').getElementsByTagName('h3')[0].innerHTML = 'Pomodoro  Timer';
		document.getElementById('pcsettimercountdownrow').style.display = 'none';
		document.getElementById('pcsettimerpomodororow').style.display = 'block';
		document.getElementById('pctimernameTip').style.display = 'block';
		currentTimer = "Pomodoro";
	}
	document.getElementById('timernumber').innerHTML = '00:00:00';
	document.getElementById('timernumber1').innerHTML = '00:00:00';
	document.getElementById('timernumber2').innerHTML = '00:00:00';
	document.getElementById('pcuserinfo').style.display = 'none';
	document.getElementById('pcdailyTodo').style.display = 'none';
	document.getElementById('pcproject').style.display = 'none';
	document.getElementById('pcTimer').style.display = 'block';
	document.getElementById('pcMusicPlayer').style.display = 'none';
	document.getElementById('pcleftuserinfo').style.display = 'block';
	document.getElementById('pcleftdailyTodo').style.display = 'none';
	document.getElementById('pcleftproject').style.display = 'none';
	document.getElementById('pcleftmusic').style.display = 'none';
	document.getElementById('todoaddbtn').style.display = 'none';
	document.getElementById('projectaddbtn').style.display = 'none';
	
	clearInterval(CountdownInterval);
	CountdownInterval = null;
	clearInterval(StopwatchInterval);
	StopwatchInterval = null;
	clearInterval(PomodoroInterval);
	PomodoroInterval = null;
	countdownseconds = 0;//countdown时钟当前的秒数默认为0
	stopwatchseconds = 0;//stopwatch时钟当前的秒数默认为0
	pomodoroseconds = 0;//pomodoro时钟当前的秒数默认为0(工作)
	pomodoroseconds1 = 0;//pomodoro时钟当前的秒数默认为0(休息)
	pomodoroseconds_record = 0;//pomodoro时钟当前的秒数默认为0(工作),(记录上一次的值)
	pomodoroseconds1_record = 0;//pomodoro时钟当前的秒数默认为0(休息),(记录上一次的值)
	pomodoroCount = 0;//pomodoro时钟当前的秒数默认为0(次数)
}
// pc端点击音乐菜单，显示音乐模块并隐藏其他模块
function pcMusicMenuTap(){
	document.getElementById('pcuserinfo').style.display = 'none';
	document.getElementById('pcdailyTodo').style.display = 'none';
	document.getElementById('pcproject').style.display = 'none';
	document.getElementById('pcTimer').style.display = 'none';
	document.getElementById('pcMusicPlayer').style.display = 'block';
	document.getElementById('pcleftuserinfo').style.display = 'none';
	document.getElementById('pcleftdailyTodo').style.display = 'none';
	document.getElementById('pcleftproject').style.display = 'none';
	document.getElementById('pcleftmusic').style.display = 'block';
	document.getElementById('todoaddbtn').style.display = 'none';
	document.getElementById('projectaddbtn').style.display = 'none';
}
// pc端时钟点击缩小缩小时钟到悬浮
function pctimesuoTap(){
	document.getElementById('pctimerMiniBox').style.display = 'block';
	document.getElementById('pcTimer').style.display = 'none';
	document.getElementById('pcuserinfo').style.display = 'block';
}
// pc端时钟点击设置时间显示设置模块
function pcsettimerTap(){
	if(document.getElementById('pcSetTimer').style.display == 'block'){
		document.getElementById('pcSetTimer').style.display = 'none';
	}else{
		document.getElementById('pcSetTimer').style.display = 'block';
	}
}
var countdownseconds = 0;//countdown时钟当前的秒数默认为0
var stopwatchseconds = 0;//stopwatch时钟当前的秒数默认为0
var pomodoroseconds = 0;//pomodoro时钟当前的秒数默认为0(工作)
var pomodoroseconds1 = 0;//pomodoro时钟当前的秒数默认为0(休息)
var pomodoroseconds_record = 0;//pomodoro时钟当前的秒数默认为0(工作),(记录上一次的值)
var pomodoroseconds1_record = 0;//pomodoro时钟当前的秒数默认为0(休息),(记录上一次的值)
var pomodoroCount = 0;//pomodoro时钟当前的秒数默认为0(次数)
// 时间转换的方方
function getTime(time) {
	// 转换为式分秒
	let h = parseInt(time / 60 / 60 % 24)
	h = h < 10 ? '0' + h : h
	let m = parseInt(time / 60 % 60)
	 m = m < 10 ? '0' + m : m
	let s = parseInt(time % 60)
	 s = s < 10 ? '0' + s : s
	// 作为返回值返回
	return [h, m, s]
}
// pc端点击保存设置,保存赋值相应的时钟当前秒数，以及相应的显示隐藏
function pcsavetimerTap(){
	document.getElementById('pcSetTimer').style.display = 'none';
	countdownseconds = (document.getElementById('countdownhour').value*60*60)+(document.getElementById('countdownminutes').value*60);
	pomodoroseconds = document.getElementById('pomodorohour').value*60;
	pomodoroseconds1 = document.getElementById('pomodorominutes').value*60;
	pomodoroseconds_record = document.getElementById('pomodorohour').value*60;
	pomodoroseconds1_record = document.getElementById('pomodorominutes').value*60;
	pomodoroCount = document.getElementById('pomodorocount').value;
	if(currentTimer == 'Countdown'){
		document.getElementById('timernumber').innerHTML = `${getTime(countdownseconds)[0]}:${getTime(countdownseconds)[1]}:${getTime(countdownseconds)[2]}`;
		document.getElementById('timernumber1').innerHTML = `${getTime(countdownseconds)[0]}:${getTime(countdownseconds)[1]}:${getTime(countdownseconds)[2]}`;
		document.getElementById('timernumber2').innerHTML = `${getTime(countdownseconds)[0]}:${getTime(countdownseconds)[1]}:${getTime(countdownseconds)[2]}`;
	}else if(currentTimer == 'Stopwatch'){
		document.getElementById('timernumber').innerHTML = `${getTime(stopwatchseconds)[0]}:${getTime(stopwatchseconds)[1]}:${getTime(stopwatchseconds)[2]}`;
		document.getElementById('timernumber1').innerHTML = `${getTime(stopwatchseconds)[0]}:${getTime(stopwatchseconds)[1]}:${getTime(stopwatchseconds)[2]}`;
		document.getElementById('timernumber2').innerHTML = `${getTime(stopwatchseconds)[0]}:${getTime(stopwatchseconds)[1]}:${getTime(stopwatchseconds)[2]}`;
	}else if(currentTimer == 'Pomodoro'){
		document.getElementById('timernumber').innerHTML = `${getTime(pomodoroseconds)[0]}:${getTime(pomodoroseconds)[1]}:${getTime(pomodoroseconds)[2]}`;
		document.getElementById('timernumber1').innerHTML = `${getTime(pomodoroseconds)[0]}:${getTime(pomodoroseconds)[1]}:${getTime(pomodoroseconds)[2]}`;
		document.getElementById('timernumber2').innerHTML = `${getTime(pomodoroseconds)[0]}:${getTime(pomodoroseconds)[1]}:${getTime(pomodoroseconds)[2]}`;
	}
}

// pc端时钟操作的点击事件
var CountdownInterval = null;//Countdown时钟的计时器变量默认为空
var StopwatchInterval = null;//Stopwatch时钟的计时器变量默认为空
var PomodoroInterval = null;//Pomodoro时钟的计时器变量默认为空
// pc端时钟操点击START
function pctimerstart(){
	if(currentTimer == 'Countdown'){ //如果当前为Countdown时钟的计时方法
		if(CountdownInterval != null){
			return
		}
		if(countdownseconds <= 0){
			alert('请设置倒计时时间');
		}else{
			CountdownInterval = setInterval(function(){
				if(countdownseconds<1){
					clearInterval(CountdownInterval);
					CountdownInterval = null;
					countdownseconds = 0;
					return
				}
				countdownseconds -= 1;
				document.getElementById('timernumber').innerHTML = `${getTime(countdownseconds)[0]}:${getTime(countdownseconds)[1]}:${getTime(countdownseconds)[2]}`;
				document.getElementById('timernumber1').innerHTML = `${getTime(countdownseconds)[0]}:${getTime(countdownseconds)[1]}:${getTime(countdownseconds)[2]}`;
				document.getElementById('timernumber2').innerHTML = `${getTime(countdownseconds)[0]}:${getTime(countdownseconds)[1]}:${getTime(countdownseconds)[2]}`;
			},1000);
		}
	}else if(currentTimer == 'Stopwatch'){//如果当前为Stopwatch时钟的计时方法
		if(StopwatchInterval != null){
			return
		}
		StopwatchInterval = setInterval(function(){
			stopwatchseconds += 1;
			document.getElementById('timernumber').innerHTML = `${getTime(stopwatchseconds)[0]}:${getTime(stopwatchseconds)[1]}:${getTime(stopwatchseconds)[2]}`;
			document.getElementById('timernumber1').innerHTML = `${getTime(stopwatchseconds)[0]}:${getTime(stopwatchseconds)[1]}:${getTime(stopwatchseconds)[2]}`;
			document.getElementById('timernumber2').innerHTML = `${getTime(stopwatchseconds)[0]}:${getTime(stopwatchseconds)[1]}:${getTime(stopwatchseconds)[2]}`;
		},1000)
	}else if(currentTimer == 'Pomodoro'){//如果当前为Pomodoro时钟的计时方法
		if(PomodoroInterval != null){
			return
		}
		if(pomodoroCount <= 0){
			alert('请设置倒计时执行次数');
		}else if(pomodoroseconds_record <= 0 || pomodoroseconds1_record <= 0){
			alert('请设置倒计时工作时间和休息时间');
		}else{
			if(pomodoroCount<1){
				return;
			}else{
				// var pomodoroseconds = 0;//pomodoro时钟当前的秒数默认为0(工作)
				// var pomodoroseconds1 = 0;//pomodoro时钟当前的秒数默认为0(休息)
				// var pomodoroseconds_record = 0;//pomodoro时钟当前的秒数默认为0(工作),(记录上一次的值)
				// var pomodoroseconds1_record = 0;//pomodoro时钟当前的秒数默认为0(休息),(记录上一次的值)
				// var pomodoroCount = 0;//pomodoro时钟当前的秒数默认为0(次数)
				PomodoroInterval = setInterval(function(){
					if(pomodoroCount > 0){
						if(pomodoroseconds > 0){
							pomodoroseconds -= 1;
							document.getElementById('timernumber').innerHTML = `${getTime(pomodoroseconds)[0]}:${getTime(pomodoroseconds)[1]}:${getTime(pomodoroseconds)[2]}`;
							document.getElementById('timernumber1').innerHTML = `${getTime(pomodoroseconds)[0]}:${getTime(pomodoroseconds)[1]}:${getTime(pomodoroseconds)[2]}`;
							document.getElementById('timernumber2').innerHTML = `${getTime(pomodoroseconds)[0]}:${getTime(pomodoroseconds)[1]}:${getTime(pomodoroseconds)[2]}`;
						}else{
							if(pomodoroseconds1 > 0){
								pomodoroseconds1 -= 1;
								document.getElementById('timernumber').innerHTML = `${getTime(pomodoroseconds1)[0]}:${getTime(pomodoroseconds1)[1]}:${getTime(pomodoroseconds1)[2]}`;
								document.getElementById('timernumber1').innerHTML = `${getTime(pomodoroseconds1)[0]}:${getTime(pomodoroseconds1)[1]}:${getTime(pomodoroseconds1)[2]}`;
								document.getElementById('timernumber2').innerHTML = `${getTime(pomodoroseconds1)[0]}:${getTime(pomodoroseconds1)[1]}:${getTime(pomodoroseconds1)[2]}`;
							}else{
								pomodoroseconds = pomodoroseconds_record;
								pomodoroseconds1 = pomodoroseconds1_record;
								pomodoroCount -= 1;
							}
						}
					}else{
						clearInterval(PomodoroInterval);
						PomodoroInterval = null;
						pomodoroseconds = 0;//pomodoro时钟当前的秒数默认为0(工作)
						pomodoroseconds1 = 0;//pomodoro时钟当前的秒数默认为0(休息)
						pomodoroseconds_record = 0;//pomodoro时钟当前的秒数默认为0(工作),(记录上一次的值)
						pomodoroseconds1_record = 0;//pomodoro时钟当前的秒数默认为0(休息),(记录上一次的值)
						pomodoroCount = 0;//pomodoro时钟当前的秒数默认为0(次数)
						return;
					}
				},1000);
			}
			
		}
	}
};
// pc端时钟操点击STOP，停止定时器，并赋值定时器空
function pctimerstop(){
	if(currentTimer == 'Countdown'){
		clearInterval(CountdownInterval);
		CountdownInterval = null;
	}else if(currentTimer == 'Stopwatch'){
		clearInterval(StopwatchInterval);
		StopwatchInterval = null;
	}else if(currentTimer == 'Pomodoro'){
		clearInterval(PomodoroInterval);
		PomodoroInterval = null;
	}
};
// pc端时钟操点击RESET，清除定时器，并将相应的当前时间清0
function pctimerreset(){
	if(currentTimer == 'Countdown'){
		clearInterval(CountdownInterval);
		CountdownInterval = null;
		countdownseconds = 0;
		document.getElementById('timernumber').innerHTML = `${getTime(countdownseconds)[0]}:${getTime(countdownseconds)[1]}:${getTime(countdownseconds)[2]}`;
		document.getElementById('timernumber1').innerHTML = `${getTime(countdownseconds)[0]}:${getTime(countdownseconds)[1]}:${getTime(countdownseconds)[2]}`;
		document.getElementById('timernumber2').innerHTML = `${getTime(countdownseconds)[0]}:${getTime(countdownseconds)[1]}:${getTime(countdownseconds)[2]}`;
	}else if(currentTimer == 'Stopwatch'){
		clearInterval(StopwatchInterval);
		StopwatchInterval = null;
		stopwatchseconds = 0;
		document.getElementById('timernumber').innerHTML = `${getTime(stopwatchseconds)[0]}:${getTime(stopwatchseconds)[1]}:${getTime(stopwatchseconds)[2]}`;
		document.getElementById('timernumber1').innerHTML = `${getTime(stopwatchseconds)[0]}:${getTime(stopwatchseconds)[1]}:${getTime(stopwatchseconds)[2]}`;
		document.getElementById('timernumber2').innerHTML = `${getTime(stopwatchseconds)[0]}:${getTime(stopwatchseconds)[1]}:${getTime(stopwatchseconds)[2]}`;
	}else if(currentTimer == 'Pomodoro'){
		clearInterval(PomodoroInterval);
		PomodoroInterval = null;
		pomodoroseconds = 0;//pomodoro时钟当前的秒数默认为0(工作)
		pomodoroseconds1 = 0;//pomodoro时钟当前的秒数默认为0(休息)
		pomodoroseconds_record = 0;//pomodoro时钟当前的秒数默认为0(工作),(记录上一次的值)
		pomodoroseconds1_record = 0;//pomodoro时钟当前的秒数默认为0(休息),(记录上一次的值)
		pomodoroCount = 0;//pomodoro时钟当前的秒数默认为0(次数)
		document.getElementById('timernumber').innerHTML = `${getTime(pomodoroseconds)[0]}:${getTime(pomodoroseconds)[1]}:${getTime(pomodoroseconds)[2]}`;
		document.getElementById('timernumber1').innerHTML = `${getTime(pomodoroseconds)[0]}:${getTime(pomodoroseconds)[1]}:${getTime(pomodoroseconds)[2]}`;
		document.getElementById('timernumber2').innerHTML = `${getTime(pomodoroseconds)[0]}:${getTime(pomodoroseconds)[1]}:${getTime(pomodoroseconds)[2]}`;
	}
};

// Pc端点击时钟小悬浮窗  放大操作，将相应的显示隐藏
function pctimerMinifangTap(){
	document.getElementById('pctimerMiniBox').style.display = 'none';
	document.getElementById('pcTimer').style.display = 'block';
	document.getElementById('pcuserinfo').style.display = 'none';
};





// 移动端点击Logo显示个人信息模块
function ydlogoTap(){
	console.log('wwww胡');
	document.getElementById('ydUserinfo').style.display = 'block';
	document.getElementById('ydlogo').style.animationPlayState = 'running';
	document.getElementById('todoaddbtn').style.display = 'none';
	document.getElementById('projectaddbtn').style.display = 'none';
}

// 移动端点击右边…菜单显示/隐藏的监听事件 做相应的显示隐藏操作，
$('#yddropdown').on('show.bs.dropdown', function () {
	// console.log("下拉菜单已经显示。");
	document.getElementById('ydmenuicon').classList.remove('glyphicon-option-horizontal');
	document.getElementById('ydmenuicon').classList.add('glyphicon-option-vertical');
});
$('#yddropdown').on('hide.bs.dropdown', function () {
	// console.log("下拉菜单已经隐藏。");
	document.getElementById('ydmenuicon').classList.remove('glyphicon-option-vertical');
	document.getElementById('ydmenuicon').classList.add('glyphicon-option-horizontal');
});

// 移动端点击时钟设置  显示/隐藏  设置模块
function ydsettimerTap(){
	if(document.getElementById('ydSetTimer').style.display == 'block'){
		document.getElementById('ydSetTimer').style.display = 'none';
	}else{
		document.getElementById('ydSetTimer').style.display = 'block';
	}
}
// 移动端点击保存设置  相应的显示当前时间
function ydsavetimerTap(){
	document.getElementById('ydSetTimer').style.display = 'none';
	countdownseconds = (document.getElementById('countdownhour1').value*60*60)+(document.getElementById('countdownminutes1').value*60);
	pomodoroseconds = document.getElementById('pomodorohour1').value*60;
	pomodoroseconds1 = document.getElementById('pomodorominutes1').value*60;
	pomodoroseconds_record = document.getElementById('pomodorohour1').value*60;
	pomodoroseconds1_record = document.getElementById('pomodorominutes1').value*60;
	pomodoroCount = document.getElementById('pomodorocount1').value;
	if(currentTimer == 'Countdown'){
		document.getElementById('timernumber').innerHTML = `${getTime(countdownseconds)[0]}:${getTime(countdownseconds)[1]}:${getTime(countdownseconds)[2]}`;
		document.getElementById('timernumber1').innerHTML = `${getTime(countdownseconds)[0]}:${getTime(countdownseconds)[1]}:${getTime(countdownseconds)[2]}`;
		document.getElementById('timernumber2').innerHTML = `${getTime(countdownseconds)[0]}:${getTime(countdownseconds)[1]}:${getTime(countdownseconds)[2]}`;
	}else if(currentTimer == 'Stopwatch'){
		document.getElementById('timernumber').innerHTML = `${getTime(stopwatchseconds)[0]}:${getTime(stopwatchseconds)[2]}:${getTime(stopwatchseconds)[2]}`;
		document.getElementById('timernumber1').innerHTML = `${getTime(stopwatchseconds)[0]}:${getTime(stopwatchseconds)[2]}:${getTime(stopwatchseconds)[2]}`;
		document.getElementById('timernumber2').innerHTML = `${getTime(stopwatchseconds)[0]}:${getTime(stopwatchseconds)[2]}:${getTime(stopwatchseconds)[2]}`;
	}else if(currentTimer == 'Pomodoro'){
		document.getElementById('timernumber').innerHTML = `${getTime(pomodoroseconds)[0]}:${getTime(pomodoroseconds)[1]}:${getTime(pomodoroseconds)[2]}`;
		document.getElementById('timernumber1').innerHTML = `${getTime(pomodoroseconds)[0]}:${getTime(pomodoroseconds)[1]}:${getTime(pomodoroseconds)[2]}`;
		document.getElementById('timernumber2').innerHTML = `${getTime(pomodoroseconds)[0]}:${getTime(pomodoroseconds)[1]}:${getTime(pomodoroseconds)[2]}`;
	}
}
function ydmusicfangTap(){
	// document.getElementById('ydmusicWarp').style.animationPlayState = 'running';
}
function ydmusicsuoTap(){

}

// 移动端点击底部菜单 显示/隐藏相应模块
// 移动端点击时钟显示相应类型的时钟
function ydtimerTap(state){
	if(state == '1'){
		document.getElementById('ydTimer').getElementsByTagName('h3')[0].innerHTML = 'Countdown';
		document.getElementById('ydsettimercountdownrow').style.display = 'block';
		document.getElementById('ydsettimerpomodororow').style.display = 'none';
		currentTimer = "Countdown";
	}else if(state == '2'){
		document.getElementById('ydTimer').getElementsByTagName('h3')[0].innerHTML = 'Stopwatch';
		document.getElementById('ydsettimercountdownrow').style.display = 'none';
		document.getElementById('ydsettimerpomodororow').style.display = 'none';
		currentTimer = "Stopwatch";
	}else if(state == '3'){
		document.getElementById('ydTimer').getElementsByTagName('h3')[0].innerHTML = 'Pomodoro  Timer';
		document.getElementById('ydsettimercountdownrow').style.display = 'none';
		document.getElementById('ydsettimerpomodororow').style.display = 'block';
		currentTimer = "Pomodoro";
	}
	document.getElementById('timernumber').innerHTML = '00:00:00';
	document.getElementById('timernumber1').innerHTML = '00:00:00';
	document.getElementById('timernumber2').innerHTML = '00:00:00';
	document.getElementById('ydDailytodo').style.display = 'none';
	document.getElementById('ydProject').style.display = 'none';
	document.getElementById('ydTimer').style.display = 'block';
	document.getElementById('ydMusic').style.display = 'none';
	document.getElementById('ydUserinfo').style.display = 'none';
	document.getElementById('todoaddbtn').style.display = 'none';
	document.getElementById('projectaddbtn').style.display = 'none';
	
	clearInterval(CountdownInterval);
	CountdownInterval = null;
	clearInterval(StopwatchInterval);
	StopwatchInterval = null;
	clearInterval(PomodoroInterval);
	PomodoroInterval = null;
	countdownseconds = 0;//countdown时钟当前的秒数默认为0
	stopwatchseconds = 0;//stopwatch时钟当前的秒数默认为0
	pomodoroseconds = 0;//pomodoro时钟当前的秒数默认为0(工作)
	pomodoroseconds1 = 0;//pomodoro时钟当前的秒数默认为0(休息)
	pomodoroseconds_record = 0;//pomodoro时钟当前的秒数默认为0(工作),(记录上一次的值)
	pomodoroseconds1_record = 0;//pomodoro时钟当前的秒数默认为0(休息),(记录上一次的值)
	pomodoroCount = 0;//pomodoro时钟当前的秒数默认为0(次数)
};
// 移动端点击Project显示Project列表
function ydProjectTap(){
	document.getElementById('ydDailytodo').style.display = 'none';
	document.getElementById('ydProject').style.display = 'block';
	document.getElementById('ydTimer').style.display = 'none';
	document.getElementById('ydMusic').style.display = 'none';
	document.getElementById('ydUserinfo').style.display = 'none';
	document.getElementById('todoaddbtn').style.display = 'none';
	document.getElementById('projectaddbtn').style.display = 'block';
};
// 移动端点击DailyTodo显示DailyTodo列表
function ydDailyTodoTap(){
	document.getElementById('ydDailytodo').style.display = 'block';
	document.getElementById('ydProject').style.display = 'none';
	document.getElementById('ydTimer').style.display = 'none';
	document.getElementById('ydMusic').style.display = 'none';
	document.getElementById('ydUserinfo').style.display = 'none';
	document.getElementById('todoaddbtn').style.display = 'block';
	document.getElementById('projectaddbtn').style.display = 'none';
};
// 移动端点击音乐显示音乐模块
function ydMusicTap(){
	document.getElementById('ydDailytodo').style.display = 'none';
	document.getElementById('ydProject').style.display = 'none';
	document.getElementById('ydTimer').style.display = 'none';
	document.getElementById('ydMusic').style.display = 'block';
	document.getElementById('ydUserinfo').style.display = 'none';
	document.getElementById('todoaddbtn').style.display = 'none';
	document.getElementById('projectaddbtn').style.display = 'none';
};
// 移动端点击个人信息显示用户信息模块
function ydUserinfoTap(){
	document.getElementById('ydDailytodo').style.display = 'none';
	document.getElementById('ydProject').style.display = 'none';
	document.getElementById('ydTimer').style.display = 'none';
	document.getElementById('ydMusic').style.display = 'none';
	document.getElementById('ydUserinfo').style.display = 'block';
	document.getElementById('todoaddbtn').style.display = 'none';
	document.getElementById('projectaddbtn').style.display = 'none';
};

// 音乐的相关操作（pc 及 移动端 共用）
// 获取audio音频对象
var myAudio = document.getElementById('myAudio');
//音乐数组
var myAdAry = [
	{
		name:'music  one',
		img:'http://localhost:1234/mp3/1.jpeg',
		url:'http://localhost:1234/mp3/1.mp3',
	},
	{
		name:'music  two',
		img:'http://localhost:1234/mp3/2.jpeg',
		url:'http://localhost:1234/mp3/2.mp3',
	},
];
var currentPlay = 0;//当前播放第几首
var currentVolume = 0.5;//当前音量，默认0.5，范围0-1
// 播放/暂停 点击事件
function playAudio(){
	// 当前播放状态
	console.log(myAudio.paused);
	// 音乐播放
	if(myAudio.paused){
		document.getElementById('adPlay').src = 'http://localhost:1234/image/暂停的副本.png';
		document.getElementById('adPlay1').src = 'http://localhost:1234/image/暂停的副本.png';
		myAudio.play();
	}else{
		document.getElementById('adPlay').src = 'http://localhost:1234/image/播放2的副本2.png';
		document.getElementById('adPlay1').src = 'http://localhost:1234/image/播放2的副本2.png';
		myAudio.pause();
	}
}
// 上一曲 点击事件
// // myAdImg
function previouTap(){
	if(currentPlay == 0){
		currentPlay = myAdAry.length-1;
		myAudio.src = myAdAry[currentPlay].url;
		document.getElementById('myAdImg').src = myAdAry[currentPlay].img;
		document.getElementById('myAdName').innerHTML = myAdAry[currentPlay].name;
		document.getElementById('myAdImg1').src = myAdAry[currentPlay].img;
		document.getElementById('myAdName1').innerHTML = myAdAry[currentPlay].name;
		myAudio.play();
	}else{
		currentPlay -= 1;
		myAudio.src = myAdAry[currentPlay].url;
		document.getElementById('myAdImg').src = myAdAry[currentPlay].img;
		document.getElementById('myAdName').innerHTML = myAdAry[currentPlay].name;
		document.getElementById('myAdImg1').src = myAdAry[currentPlay].img;
		document.getElementById('myAdName1').innerHTML = myAdAry[currentPlay].name;
		myAudio.play();
	}
}
// 下一曲 点击事件
function nextTap(){
	if(currentPlay == (myAdAry.length-1)){
		currentPlay = 0;
		myAudio.src = myAdAry[currentPlay].url;
		document.getElementById('myAdImg').src = myAdAry[currentPlay].img;
		document.getElementById('myAdName').innerHTML = myAdAry[currentPlay].name;
		document.getElementById('myAdImg1').src = myAdAry[currentPlay].img;
		document.getElementById('myAdName1').innerHTML = myAdAry[currentPlay].name;
		myAudio.play();
	}else{
		currentPlay += 1;
		myAudio.src = myAdAry[currentPlay].url;
		document.getElementById('myAdImg').src = myAdAry[currentPlay].img;
		document.getElementById('myAdName').innerHTML = myAdAry[currentPlay].name;
		document.getElementById('myAdImg1').src = myAdAry[currentPlay].img;
		document.getElementById('myAdName1').innerHTML = myAdAry[currentPlay].name;
		myAudio.play();
	}
}
// 声音加 点击事件
function addTap(){
	if(currentVolume < 1){
		myAudio.volume += 0.1;
	}else{
		myAudio.volume = 1;
	}
}
// 声音减 点击事件
function reduceTap(){
	if(currentVolume > 0){
		myAudio.volume -= 0.1;
	}else{
		myAudio.volume = 0;
	}
}
// 缩放点击事件
function adZoomTap(val){
	var adBox = document.getElementById('audioBox').style;
	var adMiniBox = document.getElementById('audioMiniBox').style;
	if(val == 'suo'){
		adBox.display = 'none';
		adMiniBox.display = 'block';
	}else if(val == 'fang'){
		adBox.display = 'block';
		adMiniBox.display = 'none';
	}
}

// 音乐列表
function musicForeach(){
	myAdAry.forEach(function(item,index){
		// console.log(item);
		$('#pcmusiclist').append(`
			<tr>
				<td class="text-center" > <h4>${item.name}</h4> </td>
			</tr>
		`);
	});
};
musicForeach();

//project列表 
function projectForeach(){
	/**********先清空**********/
	$('#pcleftprojectlist').empty();
	$('#pcproject').empty();
	$('#ydProject').empty();
	// project列表循环追加元素
	projectAry.forEach(function(item,index){
		// console.log(item);
		// pc端project左边列表追加
		$('#pcleftprojectlist').append(`
			<tr>
				<td class="text-center" > <h4>${item.tabbleName}</h4> </td>
			</tr>
		`);
		// pc端右边表格列表追加
		$('#pcproject').append(`
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
						<table id="pcprojecttab${index}" class="table"  >
							
						</table>
						<span data-idx="${index}" data-toggle="modal" data-target="#pcprojecttabmodal" class="glyphicon glyphicon-plus-sign"
							style="font-size:20px;color:#7d7d7d;" >
						</span>
					</div>
				</div>
			</div>
		`);
		// 移动端
		$('#ydProject').append(`
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
		item.ary.forEach(function(item1,index1){
			// console.log(item1);
			$(`#pcprojecttab${index}`).append(`
				<tr>
					<td style="padding: 1rem 0rem 1rem 0rem;border:1px solid #DDDDDD;" >${item1.name}</td>
					<td style="padding: 1rem 0rem 1rem 0rem;border:1px solid #DDDDDD;" >${item1.date}</td>
					<td data-idx1="${index}" data-idx2="${index1}" data-toggle="modal" data-target="#pcprojecttabprogressmodal" style="padding: 1rem 0rem 1rem 0rem;border:1px solid #DDDDDD;backGround:${item1.progressColor}" >
						${item1.progress}
					</td>
					<td data-idx1="${index}" data-idx2="${index1}" data-toggle="modal" data-target="#pcprojecttabfilesmodal" style="padding: 1rem 0rem 1rem 0rem;border:1px solid #DDDDDD;" >${item1.files}</td>
				</tr>
			`);
			$(`#ydProjectTab${index}`).append(`
				<tr>
					<td>${item1.name}</td>
					<td>${item1.date}</td>
					<td style="backGround:${item1.progressColor};" >
						${item1.progress}
					</td>
					<td>${item1.files}</td>
				</tr>
				
			`);
		})
	})
};
projectForeach();
// 添加project项
function addProjectTap(){
	var obj = {
		tabbleName:$('#pcprojecttitle').val(),
		color:$('#pcprojectcolor').val(),
		ary:[],
	};
	projectAry.push(obj);
	projectForeach();
	// console.log(todoAry);
	$('#pcprojectmodal').modal('hide');
}
var project_tab_idx;
$('#pcprojecttabmodal').on('show.bs.modal', function (event) {
	project_tab_idx = $(event.relatedTarget).data('idx');
})
function addProjectTabTap(){
	var selectColor = '#6C6C6C';
	switch ($('#pcprojectprogress').val()){
		case 'gray':
			selectColor = '#6C6C6C';
			break;
		case 'green':
			selectColor = '#8AE3A3';
			break;
		case 'yellow':
			selectColor = '#E5E2A1';
			break;
		case 'red':
			selectColor = '#CC5F6F';
			break;
		default:
			selectColor = '#6C6C6C';
			break;
	}
	var obj = {
		name:$('#pcprojectname').val(),
		date:$('#pcprojectdate').val(),
		progress:$('#pcprojectprogress').val(),//gray,green,yellow,red
		progressColor:selectColor,//#6C6C6C,#8AE3A3,#E5E2A1,#CC5F6F
		files:$('#pcprojectfiles').val(),//link,img,file
	};
	projectAry[project_tab_idx].ary.push(obj);
	projectForeach();
	$('#pcprojecttabmodal').modal('hide');
};
var project_tab_progress_idx1;
var project_tab_progress_idx2;
$('#pcprojecttabprogressmodal').on('show.bs.modal', function (event) {
	project_tab_progress_idx1 = $(event.relatedTarget).data('idx1');
	project_tab_progress_idx2 = $(event.relatedTarget).data('idx2');
})
function amendProjectTabProgressTap(){
	var selectColor = '#6C6C6C';
	switch ($('#pcprojectprogressamend').val()){
		case 'gray':
			selectColor = '#6C6C6C';
			break;
		case 'green':
			selectColor = '#8AE3A3';
			break;
		case 'yellow':
			selectColor = '#E5E2A1';
			break;
		case 'red':
			selectColor = '#CC5F6F';
			break;
		default:
			selectColor = '#6C6C6C';
			break;
	}
	projectAry[project_tab_progress_idx1].ary[project_tab_progress_idx2].progress = $('#pcprojectprogressamend').val();
	projectAry[project_tab_progress_idx1].ary[project_tab_progress_idx2].progressColor = selectColor;
	projectForeach();
	$('#pcprojecttabprogressmodal').modal('hide');
};
var project_tab_files_idx1;
var project_tab_files_idx2;
$('#pcprojecttabfilesmodal').on('show.bs.modal', function (event) {
	project_tab_files_idx1 = $(event.relatedTarget).data('idx1');
	project_tab_files_idx2 = $(event.relatedTarget).data('idx2');
})
function amendProjectTabFilesTap(){
	projectAry[project_tab_files_idx1].ary[project_tab_files_idx2].files = $('#pcprojectfilesamend').val();
	projectForeach();
	$('#pcprojecttabfilesmodal').modal('hide');
};


// Todo列表
function todoForeach(){
	/**********先清空**********/
	$('#pclefttodolist').empty();
	$('#pcdailyTodo').empty();
	$('#ydDailytodo').empty();
	/**********追加子元素**********/
	todoAry.forEach(function(item,index){
		// pc端Todo左边列表追加
		$('#pclefttodolist').append(`
			<tr>
				<td class="text-center" > <h4>${item.date}　　　${item.ary.length}　items</h4> </td>
			</tr>
		`);
		// pc端Todo右边列表追加
		$('#pcdailyTodo').append(`
			<div class="row" style="margin-top: 30px;" >
				<div class="col-md-10 col-md-offset-1 text-left" style="padding: 0px;color: ${item.color};" data-toggle="collapse" data-target="#zd${index}" >
					<span class="glyphicon glyphicon-play"></span>
					<span>${item.date}</span>
				</div>
				<div id="zd${index}" class="col-lg-10 col-md-offset-1 collapse" style="" >
					<table id="pctodotab${index}" class="table table-bordered" style="margin-top: 10px;background: #E6E6E6;border-radius: 10px;overflow: hidden;">
						
					</table>
					<span data-idx="${index}" data-toggle="modal" data-target="#pctodotabmodal" class="glyphicon glyphicon-plus-sign"
						style="font-size:20px;color:#7d7d7d;" >
					</span>
				</div>
			</div>
		`);
		// 移动端列表追加
		$('#ydDailytodo').append(`
			<div style="padding: 0.5rem 0rem 0.5rem 0rem;box-sizing: border-box;" >
				<div data-toggle="collapse" data-target="#ydcollapse${index}" style="color: ${item.color};" >
					<span class="glyphicon glyphicon-play" ></span>
					<span>${item.date}</span>
				</div>
				<div class="collapse in" id="ydcollapse${index}" style="padding: 1.25rem 2rem 0rem 2rem;" >
					<table id="ydtodotab${index}" class="table table-bordered" style="background: #E1E1E1;border-radius: 1rem;overflow: hidden;" >
						
					</table>
				</div>
			</div>
		`);
		item.ary.forEach(function(item1,index1){
			$(`#pctodotab${index}`).append(`
				<tr style="border-bottom: 1px solid #DDDDDD;" ><td style="padding: 1.8rem;" class="text-left" ><input type="checkbox" >　　${item1.content}</td></tr>
			`)
		});
		item.ary.forEach(function(item1,index1){
			$(`#ydtodotab${index}`).append(`
				<tr style="border-bottom: 0.08rem solid #DDDDDD;" ><td style="padding: 0.8rem;" ><input type="checkbox">　　${item1.content}</td></tr>
			`)
		});
	});
};
todoForeach();
// 添加Todo项
function addTodoTap(){
	var obj = {
		date:$('#pctododate').val(),
		color:$('#pctodocolor').val(),
		ary:[],
	};
	todoAry.push(obj);
	todoForeach();
	// console.log(todoAry);
	$('#pctodomodal').modal('hide');
};
var todo_tab_idx;
$('#pctodotabmodal').on('show.bs.modal', function (event) {
	todo_tab_idx = $(event.relatedTarget).data('idx');
})
function addTodoTabTap(){
	var obj = {
		check:false,
		content:$('#pctodocontent').val(),
	};
	todoAry[todo_tab_idx].ary.push(obj);
	todoForeach();
	$('#pctodotabmodal').modal('hide');
};
//gray,green,yellow,red
//#6C6C6C,#8AE3A3,#E5E2A1,#CC5F6F