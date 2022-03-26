/**
 * Performance increasing tool.
 * Drop into /a/boot to install.
 * 
 * By default, it removes:
 *  - Window animations
 *  - Window box shadows
 *  - Gradient background (replaces with solid color)
 *  - Gradient titlebars
 * 
 * You can further customize it by editing /a/.config/perf.json.
 * 
 */

(function() {
    // Config struct
	// You may manually modify this if /a/.config/perf.json does not work.
    var perfConfig = {
        disableAudio: false,
        disableAnimation: true,
        customCssAppend: "",
        gradientBg: false,
        colors: {
            bg: "#837CFF",
            hWinActive: "#d023d0",
            hWin: "#00192b"
        },
        ui: {
            menu_displayIcons: true,
            show_deskIcons: true
        }
    }

    // Check for config and load it

    var prevConfig = localStorage.getItem(".config/perf.json");
    if(prevConfig != null)
        perfConfig = JSON.parse(prevConfig);
    else
        localStorage.setItem(".config/perf.json", JSON.stringify(perfConfig, null, 4));

    // Create style element containing CSS

    var stovElement = document.createElement('style');
    if(document.querySelector('#stov_basic') != null)
        return;
    stovElement.id = "stov_ultra";
    stovElement.innerHTML = `
    .ui_window {
		box-shadow: 1px 0 #000, 0 1px #000, 1px 1px #000, inset 1px 1px #fff;
		${perfConfig.disableAnimation ? 'animation-duration: 0s !important;' : ''}
    }
	
    ${perfConfig.gradientBg ? '' : `
    header.ui_window__head {
		background: ${perfConfig.colors.hWin};
	}
	
	.ui_window--active .ui_window__head {
        background: ${perfConfig.colors.hWinActive};
    }
    
    .skin_background {
		background: ${perfConfig.colors.bg};
    }`}

    ${perfConfig.ui.menu_displayIcons ? '' : `
    .ui_menu__item__ico {
        display: none;
    }
    `}

    ${perfConfig.ui.show_deskIcons ? '' : `
    .ui_explorer_container .ui_explorer>.ui_icon__lnk42 {
        display: none;
    }`}
    
    ${perfConfig.customCssAppend}`;

    // Disables most audio in Windows 93
    if(perfConfig.disableAudio) {
        Audio.prototype.play = function() { }
    }
    
    $explorer.refresh()

    document.body.appendChild(stovElement);
})();
