# LunarRabbit
**LunarRabbit** (aka **Lunar**) is an easy-to-use graphical frontend for Windows93 appstores and package managers.

## Installation
Given the very early phase in development, Lunar doesn't benefit from a proper installer yet. Installation has to be done manually for the time being but don't that scare you: it should take less than 5 minutes.

1. Clone the repository to your computer and import it into Windows93.
2. Move `/extra/lunar.css` inside `/a/boot/`.
3. Open `/store.html` with CodeMirror and locate the line with the following content:
    ```js
    let LunarDir = "/a/LunarRabbit/"
    ```
    Replace the string with the path to the cloned repo's folder.
4. Create a new shortcut and open it in CodeMirror, then replace the entire content with `/extra/shortcut.json`'s content.
5. Reboot Windows93 and everything should be ready to go. Run Lunar from the shortcut.

## Contacting
If you're interested in using Lunar as a frontend for your appstore and/or package manager, feel free to hit me up on Discord!

Tag: **VictiniTheDriftini#8949**