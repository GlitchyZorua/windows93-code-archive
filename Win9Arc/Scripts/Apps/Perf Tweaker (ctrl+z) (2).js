/*
Performance Tweaker for Windows 93

Created by inverted cat#1194
*/

(function() {
    var CFG_BASE_DIR = ".config/perf_twk";

    if(le._win94)
        CFG_BASE_DIR = "win94/perf";

    const _pt_app = (async function() {

        // App resources
        /*************************************************************************************************/

        // Profile definitions

        var profiles = {
            high_performance: {
                name: "High Performance",
                description: "Highest Performance profile.<br><br>Disables window animations, window shadow, some gradient colors, and uses a solid color as background.",
                cssApply: `/* Perf Tweaker High Performance Profile */
                .ui_window {
                    box-shadow: 1px 0 #000, 0 1px #000, 1px 1px #000, inset 1px 1px #fff;
                    animation-duration: 0s !important;
                }

                header.ui_window__head {
                    background: #00192b;
                }

                .ui_window--active .ui_window__head {
                    background: #d023d0;
                }

                .skin_background {
                    background: #837CFF !important;
                }`,
                jsApply: ""
            },

            balanced: {
                name: "Balanced",
                description: "Balanced profile.<br><br>Disables window animations and removes the window shadow.",
                cssApply: `/* Perf Tweaker Balanced Profile */
                .ui_window {
                    box-shadow: 1px 0 #000, 0 1px #000, 1px 1px #000, inset 1px 1px #fff;
                    animation-duration: 0s !important;
                }`,
                jsApply: ""
            },

            normal: {
                name: "Normal",
                description: "Normal profile.<br><br>Windows 93 default settings.",
                cssApply: ``,
                jsApply: ""
            }
        }

        // Resources (main window html and specs)

        const W_HTML = `
    <div style="padding: 10px;">
        <b>Welcome to Performance Tweaker!</b><br><br>
        Using this tool, you can improve the graphical performance of Windows 93 on your computer.<br>
        <br>
        <hr>
        <br>
        <b>Select a profile</b>
        <br>
        Current Profile: <span class="current-profile">(None)</span>
        <br>
        <br>
        <div class="profiles">
            <!--<button class="pb_hperf">High Performance</button>
            <button class="pb_bal">Balanced</button>
            <button class="pb_norm">Normal</button>-->
        </div>
        <br>
        <br>
        <div class="explanation" style="box-sizing: border-box;width: 100%;height: 68px;border-style: inset;border-width: 1px;padding: 5px;"></div>
        <br>
        <br>
        
        <div style="display: flex;">
            <button style="margin-left: auto;" class="btn_reboot">Save and Reboot</button>
        </div>
    </div>
    `;

        /*************************************************************************************************/

        // Check if another instance is opened
        if(window._pt_open) {
            $alert("Another instance of Performance Tweaker is already running!");
            return;
        }

        window._pt_open = true;

        // Config

        if(!window._pt_config) {
            window._pt_config = {
                currentProfile: null
            }
        }

        const appWindow = $window({
            url: "about:blank",
            title: "Performance Tweaker",
            icon: "https://github.com/acdra1n/w93-projects/raw/master/perftweaker/resources/icons/PerfTwk16.png",
            height: 320,
            width: 450,
            resizable: false,
            maximizable: false,
            minimizable: false
        });

        var selectedProfile = "normal";

        // Functions

        /**
         * Setup file system for app (create default files with profiles, etc.)
         */
        async function fsSetup() {
            // Create README file
            if($fs.utils.exist("/a/" + CFG_BASE_DIR + "/README.txt") !== 0) {
                await localforage.setItem(CFG_BASE_DIR + "/README.txt", `Performance Tweaker configuration directory
    ===========================================
    profiles.json - Stores all profiles to be used.


    Creating custom profiles
    ========================
    As of this version, there is no UI to do this (WIP).
    To create your own profile, add an entry to the root JSON object that looks something like this:

    "profile_name": {
        "name": "Profile Name",
        "description": "Profile Description",
        "cssApply": "/* CSS code to change visual effects */"
    }

    When done correctly, your new profile should show up next time you launch Performance Tweaker.
    If you want to restore default profiles, simply delete profiles.json and restart Performance Tweaker. A new profiles.json file should be created.`);
            }

            // Write profiles json
            if($fs.utils.exist("/a/" + CFG_BASE_DIR + "/profiles.json") !== 0)
                await localforage.setItem(CFG_BASE_DIR + "/profiles.json", JSON.stringify(profiles, null, 4));
            else
                profiles = JSON.parse(await localforage.getItem(CFG_BASE_DIR + "/profiles.json"));
        }

        /**
         * Applies the specified tweaks to the current session.
         * @param {String} profileName The name of the profile to apply tweaks from.
         */
        function applyTweaks(profileName) {
            var pftwEl = document.querySelector("#_ptwk_cssApply");
            if(!pftwEl) {
                pftwEl = document.createElement('style');
                pftwEl.setAttribute("id", "_ptwk_cssApply");
                document.body.appendChild(pftwEl);
            }

            pftwEl.innerHTML = profiles[profileName].cssApply;
        }

        /**
         * Main application entry point.
         */
        function app() {
            // Setup main window

            appWindow.el.body.innerHTML = W_HTML;

            appWindow.cfg.onclose = function() {
                window._pt_open = false;
                if(window._pt_config.currentProfile)
                    applyTweaks(window._pt_config.currentProfile); // Reset to previous profile
                else
                    applyTweaks("normal");
            }

            // Setup window controls

            const curProfileLbl = appWindow.el.body.querySelector(".current-profile");
            const explanationLbl = appWindow.el.body.querySelector(".explanation");
            const profilesContainer = appWindow.el.body.querySelector(".profiles");
            const rebootBtn = appWindow.el.body.querySelector(".btn_reboot");

            rebootBtn.onclick = function() {
                // Generate startup JS file
                $store.set("boot/_pt_user.js", `
    /**
     * Performance tweaker loader file
     * */

    window._pt_config = {
        currentProfile: "${selectedProfile}"
    };

    (async function() {
        if($fs.utils.exist("/a/${CFG_BASE_DIR}/profiles.json") !== 0)
            return;
        const profiles = JSON.parse(await localforage.getItem("${CFG_BASE_DIR}/profiles.json"));
        const pftwEl = document.createElement('style');
        pftwEl.setAttribute("id", "_ptwk_cssApply");
        pftwEl.innerHTML = profiles[window._pt_config.currentProfile].cssApply;
        document.body.appendChild(pftwEl);
    })();`);
                document.location.reload();
            }

            // Iterate through profiles
            const profileKeys = Object.keys(profiles);
            profileKeys.forEach((profileKey)=>{
                // Create button for profile and assign events
                (function(profile, key){
                    const button = document.createElement("button");
                    button.innerText = profile.name;

                    button.onmouseenter = function() {
                        explanationLbl.innerHTML = profile.description;
                    }

                    button.onclick = function() {
                        selectedProfile = profileKey;
                        curProfileLbl.innerText = profile.name;
                        applyTweaks(key);
                    }

                    // Add button to profiles container
                    profilesContainer.appendChild(button);
                })(profiles[profileKey], profileKey);
            });

            if(window._pt_config.currentProfile == null)
                curProfileLbl.innerText = "(none)";
            else
                curProfileLbl.innerText = profiles[window._pt_config.currentProfile].name;
        }

        await fsSetup();
        $explorer.refresh(); // Refresh explorer

        // Setup app
        app();
    });

    le._apps.perf_tweaker = {
        categories: "Utility",
        exec: _pt_app,
        icon: "//github.com/acdra1n/w93-projects/raw/master/perftweaker/resources/icons/PerfTwk16.png",
        name: "Performance Tweaker",
        cats: ['Windows 94', 'Accessories>System Tools', 'Control Panel']
    };

    // Create shortcut on desktop (but only on first run)
    (async function() {
        /**
         * We determine a first run by whether a profiles.json file was autogenerated.
         */
        if(($fs.utils.exist("/a/" + CFG_BASE_DIR + "/profiles.json") !== 0) && ($fs.utils.exist("/a/desktop/Performance Tweaker.lnk42") !== 0)) {
            $store.set("desktop/Performance Tweaker.lnk42", JSON.stringify({
                exe: "perf_tweaker",
                icon: "https://github.com/acdra1n/w93-projects/raw/master/perftweaker/resources/icons/PerfTwk32.png"
            }));
            $explorer.refresh();
        }
    })();
})();