# User Scripts

[Tampermonkey](https://www.tampermonkey.net/) is a browser extension which can run scripts on web sites. Commonly, web games will have player-made scripts to augment the experience of playing a game, typically within the bounds of the terms of a service of a game.

[Greasyfork](https://greasyfork.org/en/scripts?q=iqrpg) is a repository of scripts that work in Tampermonkey.

## Audio Script

### [IQRPG+ (v0.1.7)](https://greasyfork.org/en/scripts/398028-iqrpg)

#### Required script editing

The game previously ran at `game.php`, but now runs at `game.html`, and you'll need to edit the script at lines 7 to 10.

```javascript
// @match        http://iqrpg.com/game.php
// @match        https://iqrpg.com/game.php
// @match        http://www.iqrpg.com/game.php
// @match        https://www.iqrpg.com/game.php
```

```javascript
// @match        http://iqrpg.com/game.html
// @match        https://iqrpg.com/game.html
// @match        http://www.iqrpg.com/game.html
// @match        https://www.iqrpg.com/game.html
```

#### Adjusting Volume

This has some loud or startling sounds when certain events occur. Often times folks edit the script and set the audio files to more simple beeps.

Go into the code and you can set audio between 0 and 1 line 27,

```javascript
var masterAudioLevel = .3;
```

## UI Scripts

### [Header + Animation Remover](https://greasyfork.org/en/scripts/437923-iqrpg-header-animation-remover)

Removes the header image and auto bar animation

### [Battle Stats](https://greasyfork.org/en/scripts/436718-iqrpg-battle-stats)
