
// Returns the current Swatch beat
function GetSwatchTime(showDecimals = true) {
    var date = new Date();
    var hours = date.getUTCHours();
    var minutes = date.getUTCMinutes();
    var seconds = date.getUTCSeconds();
    var milliseconds = date.getUTCMilliseconds();
    hours = hours == 23 ? 0 : hours + 1;
    var timeInMilliseconds = ((hours * 60 + minutes) * 60 + seconds) * 1000 + milliseconds;
    var millisecondsInABeat = 86400;
    // Load the setting from localStorage, default to true
    var sd = JSON.parse(localStorage.getItem('showDecimals')) ?? true;
    if (sd) {
        return Math.abs(timeInMilliseconds / millisecondsInABeat).toFixed(2);
    } else {
        return Math.floor(Math.abs(timeInMilliseconds / millisecondsInABeat));
    }
}

// Show current time in 12-hour format
function showTime() {
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if (h == 0) {
        h = 12;
    }
    if (h > 12) {
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    var clockDisplay = document.getElementById("MyClockDisplay");
    if (clockDisplay) {
        clockDisplay.innerText = time;
        clockDisplay.textContent = time;
    }
    
    setTimeout(showTime, 1000);
}

// Center an element
function centerElement(element) {
    if (element) {  // Ensure the element exists before applying styles
        element.style.position = 'absolute';
        element.style.top = '50%';
        element.style.left = '50%';
        element.style.transform = 'translate(-50%, -50%)';
    }
}

le._apps.beat = {
    exec: function() {
        /*/
        var args = this.arg.arguments;
        if (args[1] === "--help"){
            $log('Shows Current beat time')
            $log('--help - Shows a list of arguments')
            $log('-b or --beat - Shows current beat time')
            $log.yellow('If the argument is invalid, it will open the app instead.')
            return;
        }
        if (args[1] === "--beat" || args[1] === "-b" || args[1] === "--b"){
            $log('@'+GetSwatchTime());
            return;
        }
            /*/
        {
            var win = $window({
                center: true,
                title: "Beat Time",
                width: 140,
                height: 140,
                maximizable: false,
                resizable: false,
                html: "<center><h3></h3><span style='font-size: 7px;opacity: 0;'><b></b></span><div id=\"MyClockDisplay\" class=\"clock\"></div></center>",
                ondestroy: function () {
                    clearInterval(interval);
                },
                menu: [
                    {
                        name: "Settings",
                        items: [
                            {
                                name: "Hide/Show 12-Hour Clock",
                                action: function () {
                                    var clockDisplay = document.getElementById('MyClockDisplay');
                                    if (clockDisplay) { // Ensure the element exists
                                        if (clockDisplay.style.display == 'none') {
                                            clockDisplay.style.display = 'flex';
                                        } else {
                                            clockDisplay.style.display = 'none';
                                        }
                                    }
                                }
                            },
                            { name: "---" }, // Separator
                            {
                                name: "Hide/Show Decimal",
                                action: function () {
                                    // Toggle the showDecimals setting and store in localStorage
                                    var currentSetting = JSON.parse(localStorage.getItem('showDecimals')) ?? true;
                                    var newSetting = !currentSetting;
                                    localStorage.setItem('showDecimals', JSON.stringify(newSetting));
                                }
                            }
                        ]
                    },
                    {
                        name: "Help",
                        items: [
                            {
                                name: "About & Credits",
                                action: function () {
                                    $alert.info('Beat Time for Windows 93 v0.0.0\nTells the time in Beat Time (also known as Swatch Time)\nBy GlitchyZorua\nSpecial Thanks: \'HOST\'')
                                }
                            },
                            { name: "---" }, // Separator
                            {
                                name: "How does beat time work?",
                                action: function () {
                                    try {
                                        $exe('catex https://wiki.melonland.net/swatch_time')
                                    } catch (error) {
                                        console.warn('Error occurred trying to open link in Catex. Attempting to open it in an iframe... Error is shown below');
                                        console.error(error);
                                        $exe('iframe https://wiki.melonland.net/swatch_time')
                                    }
                                }
                            },
                            {
                                name: "Manual",
                                action: function () {
                                    $alert.help('<h1>Using the Settings</h1>Hide/Show 12-Hour Clock - This will hide/show the little 12-hour clock on the bottom<br>Hide/Show Decimal - This will hide the little ending (.00) on the beat time display.<br>It\'s a god damn clock what more do you want?')
                                }
                            }
                        ]
                    },
                ]
            });

            var b = win.el.body.firstChild;

            // Update beats and show time every second
            var interval = setInterval(function () {
                b.children[0].innerText = '@' + GetSwatchTime();
                showTime();
                
                // Center the clock if it exists
                var clockDisplay = document.getElementById('MyClockDisplay');
                centerElement(clockDisplay);
            }, 1000);
        }
    }
};
