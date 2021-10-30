// ==UserScript==
// @name         IQRPG Companion
// @namespace    https://www.iqrpg.com/
// @version      1.0.0
// @description  Quality-of-life game extension
// @author       Tempest
// @match        http://test.iqrpg.com/game.php
// @match        https://test.iqrpg.com/game.php
// @require      http://code.jquery.com/jquery-latest.js
// @grant        none
// ==/UserScript==

/* global $ */

const CLASS_SIDEBAR = 'icSidebar';
const CLASS_SHOW_BUTTON = 'icShow';
const CLASS_HIDE_BUTTON = 'icHide';
const CLASS_SETTINGS = 'icHide';

const SETTINGS_ALIGN_LEFT = "alignLeft";


function writeCache( key, data ) {
  localStorage[key] = JSON.stringify(data);
    console.log("WRITE", localStorage[key]);
}

function readCache( key ) {
    console.log("READ", localStorage[key]);
  return JSON.parse(localStorage[key] || null) || localStorage[key];
}

function readSetting( key ) {
    let value = readCache(key);

    if(value === "false") {
        value = false;
    }

    return Boolean(value);
}

function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key)) {
            return false;
        }
    }
    return true;
}


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function applyStyles ( cb ) {

    if(readSetting(SETTINGS_ALIGN_LEFT) === true) {
        console.log("Setting True");
        $('.game').css('margin', 0);
    } else {
        console.log("Setting False");
        $('.game').css('margin', '0 20%');
    }

    if(cb) {
      cb();
    }
}

const settings = [
    {
        id : SETTINGS_ALIGN_LEFT,
        label : "Align Left",
        callback : applyStyles
    }
]

function createSidebar ( cb ) {

    $('body').append(`<div class='${CLASS_SIDEBAR}'><p class="heading">IQRPG Companion</p><br><button class='${CLASS_HIDE_BUTTON}'>Close Companion</button><!--<button class='${CLASS_SETTINGS}'>Settings</button>--><br><br><p class="heading">Settings</p><div class="settingsWrapper"></div></div><button class='${CLASS_SHOW_BUTTON}'>Show Companion</button>`);

    $(`.${CLASS_SIDEBAR}`).css('position', 'fixed');
    $(`.${CLASS_SIDEBAR}`).css('top', '0');
    $(`.${CLASS_SIDEBAR}`).css('padding', '40px 20px');
    $(`.${CLASS_SIDEBAR}`).css('right', '0');
    $(`.${CLASS_SIDEBAR}`).css('width', '300px');
    $(`.${CLASS_SIDEBAR}`).css('height', '100%');
    $(`.${CLASS_SIDEBAR}`).css('background', 'black');
    $(`.${CLASS_SIDEBAR}`).css('border-left', '1px solid #999');
    $(`.${CLASS_SIDEBAR}`).css('z-index', '0');
    $(`.${CLASS_SIDEBAR}`).css('transition', 'right 1s ease-in-out');
    $(`.${CLASS_SIDEBAR}`).css('margin-top', '5px');


    $(`.${CLASS_SHOW_BUTTON}`).css('transition', 'right 1s ease-in-out');
    $(`.${CLASS_SHOW_BUTTON}`).css('position', 'fixed');
    $(`.${CLASS_SHOW_BUTTON}`).css('right', '-100px');
    $(`.${CLASS_SHOW_BUTTON}`).css('width', '100px');
    $(`.${CLASS_SHOW_BUTTON}`).css('top', '30px');
    $(`.${CLASS_SHOW_BUTTON}`).css('width', '100px');
    cb();
}

function hideCompanion () {
    $(`.${CLASS_SIDEBAR}`).css('right', '-300px');
    $(`.${CLASS_SHOW_BUTTON}`).css('right', '0');
}

function showCompanion () {
    $(`.${CLASS_SIDEBAR}`).css('right', '0px');
    $(`.${CLASS_SHOW_BUTTON}`).css('right', '-100px');
}


function createTitle() {
   // $('.mmWatches').append("<div class='mmWatch'><div class='mmItem text-rarity-2'>ITEM</div><div class='mmSell'>SELL</div><div class='mmBuy'>BUY</div></div>");
    $(`.${CLASS_HIDE_BUTTON}`).click( () => { hideCompanion(); });
    $(`.${CLASS_SHOW_BUTTON}`).click( () => { showCompanion(); });

};

function toggleSettings( setting ) {

    let value = readSetting(setting.id);

    writeCache(setting.id, !value);

    if(setting.callback) {
        setting.callback();
    }
}

function createSettings() {

    settings.forEach( setting => {
        $('.settingsWrapper').append(`<button class='settings${setting.id}'>${setting.label}</button>`);
        $(`.settings${setting.id}`).click( () => { toggleSettings(setting); });
    });
};



$(document).ready(function(){


    setTimeout( () => {
            $('.game').css('transition', 'all 1s ease-in-out');

        applyStyles( () => {
            createSidebar( () => {
                createTitle();
                createSettings();
            });
        });
    }, 1000);
});

/*
function DebugInfo(d){
    console.log(d);
}

const OldSocket = WebSocket;

window.WebSocket = function WebSocket(url, protocols) {
    console.log('IQRPG+ Socket Monitor Initilized...');
    const socket = new OldSocket(...arguments);
    socket.addEventListener('message', function(event) {
        const message = JSON.parse(event.data);
        console.log(message);
        switch(message.type){
            case 'playersOnline':
            case 'loadMessages':
            case 'addItemsToUser':
            case 'notification':
            case 'bonus':
                break;
            case 'event':
                DebugInfo('Event Data:');
                DebugInfo(message);
                if(message.data.type == "woodcutting" && eventAlert_Woodcutting){
                    if(eventAudioAlert){
                        PlaySound(eventAlertSoundURL);
                    }
                    if(eventDesktopAlert){
                        notifyMe('IQRPG Event!', 'Woodcutting event has started!');
                    }
                    setTimeout(function(){
                        if(eventAudioAlertFinished){
                            PlaySound(eventAlertSoundURL);
                        }
                        if(eventDesktopAlert){
                            notifyMe('IQRPG Event Finished!', 'Woodcutting event has End!');
                        }
                    }, message.data.timeRemaining*10);
                } else if(message.data.type == "mining" && eventAlert_Mining){
                    if(eventAudioAlert){
                        PlaySound(eventAlertSoundURL);
                    }
                    if(eventDesktopAlert){
                        notifyMe('IQRPG Event!', 'Mining event has started!');
                    }
                    setTimeout(function(){
                        if(eventAudioAlertFinished){
                            PlaySound(eventAlertSoundURL);
                        }
                        if(eventDesktopAlert){
                            notifyMe('IQRPG Event Finished!', 'Mining event has End!');
                        }
                    }, message.data.timeRemaining*10);
                } else if(message.data.type == "quarrying" && eventAlert_Quarrying){
                    if(eventAudioAlert){
                        PlaySound(eventAlertSoundURL);
                    }
                    if(eventDesktopAlert){
                        notifyMe('IQRPG Event Started!', 'Quarrying event has started!');
                    }
                    setTimeout(function(){
                        if(eventAudioAlertFinished){
                            PlaySound(eventAlertSoundURL);
                        }
                        if(eventDesktopAlert){
                            notifyMe('IQRPG Event Finished!', 'Quarrying event has End!');
                        }
                    }, message.data.timeRemaining*10);
                } else {
                    DebugInfo('Unsupported Event - ' + message.data.type);
                }
                break;
            case 'msg':
                switch(message.data.type){
                    case 'clanGlobal':
                        if(message.data.msg.startsWith('The watchtower')){
                            if(watchtowerAudioAlert){
                                PlaySound(watchtowerAlertSoundURL);
                            }
                            if(watchtowerDesktopAlert){
                                notifyMe('IQRPG Watchtower!', message.data.msg);
                            }
                        }
                        break;
                    case 'pm-from':
                        if (whisperAlertOnlyWhenTabIsInactive) {
                            if(document.hidden){
                                if(whisperAudioAlert){
                                    PlaySound(whisperAlertSoundURL);
                                }
                                if(whisperDesktopAlert){
                                    notifyMe('IQRPG Whisper!', message.data.username + ': '+ message.data.msg);
                                }
                            }
                        }else{
                            if(whisperAudioAlert){
                                PlaySound(whisperAlertSoundURL);
                            }
                            if(whisperDesktopAlert){
                                if(canSendDesktopAlert){
                                    notifyMe('IQRPG Whisper!', message.data.username + ': '+ message.data.msg);
                                    canSendDesktopAlert = false;
                                    setTimeout(()=>{ canSendDesktopAlert = true; }, 10000);
                                }
                            }
                        }
                        break;
                    case 'eventGlobal':
                        if(message.data.msg.startsWith('A rift to the dark realm has opened')){
                            if(eventAudioAlert){
                                PlaySound(bossAlertSoundURL, .1);
                            }
                            if(eventDesktopAlert){
                                notifyMe('IQRPG Boss!', 'A rift to the dark realm has opened!');
                            }
                        }
                        break;
                    case 'pm-to':
                    case 'msg':
                    case 'global':
                    case 'me':
                        break;
                    default:
                        DebugInfo('Unsupported msg type:' + message.data.type);
                        DebugInfo(message);
                        break;
                }
                break;
            case 'boss':
                break;
            default:
                DebugInfo(message);
        }
    });
    return socket;
}
*/
let updatedTrinket = false;


function addTrinketHeader(ele) {
  $("<td class='text-rarity-2' style='border-bottom:1px solid #999;margin-bottom:3px; padding-bottom: 3px;'>TRINKET</td>").insertBefore(ele);
  $("<td class='text-rarity-4' style='border-bottom:1px solid #999;margin-bottom:3px; padding-bottom: 3px;'>Base</td>").insertBefore(ele);
  $("<td class='text-rarity-4' style='border-bottom:1px solid #999;margin-bottom:3px; padding-bottom: 3px;'>Boost</td>").insertBefore(ele);
  $("<td class='text-rarity-3' style='border-bottom:1px solid #999;margin-bottom:3px; padding-bottom: 3px;'>Drop</td>").insertBefore(ele);
  $("<td class='text-rarity-3' style='border-bottom:1px solid #999;margin-bottom:3px; padding-bottom: 3px;'>Exp</td>").insertBefore(ele);
  $("<td class='text-rarity-1' style='border-bottom:1px solid #999;margin-bottom:3px; padding-bottom: 3px;'>Rarity</td>").insertBefore(ele);
  $("<td class='text-rarity-1' style='border-bottom:1px solid #999;margin-bottom:3px; padding-bottom: 3px;'>Double</td>").insertBefore(ele);
}

const meta = {
  BASE_RESOURCE : {
    key : 12,
    modifier : 10
  },
  RESOURCE_BOOST : {
    key : 7,
    modifier : 10,
      suffix : "%"
  },
  DROP_BOOST : {
    key : 6,
    modifier : 10,
      suffix : "%"
  },
  EXPERIENCE : {
    key : 2,
    modifier : 10,
      suffix : "%"
  },
  RARITY : {
    key : 14,
    modifier : 10,
      suffix : "%"
  },
  DOUBLE : {
    key : 13,
    modifier : 10,
      suffix : "%"
  }
};

function getMetaValue( meta, trinket) {

  let mods = trinket.mods.filter( e => e[0] == meta.key);

  if(mods.length) {
      let value = mods[0][1];
      if(meta.modifier) {
          value = value / meta.modifier;
      }
      if(meta.suffix) {
          value = `${value}${meta.suffix}`;
      }
    return value;
  }

  return "";
}

function addTrinketMeta(ele, trinket) {
$(`<td class='text-rarity-1'>${getMetaValue(meta.DOUBLE, trinket )}</td>`).insertAfter(ele);
$(`<td class='text-rarity-1'>${getMetaValue(meta.RARITY, trinket )}</td>`).insertAfter(ele);
  $(`<td class='text-rarity-1'>${getMetaValue(meta.EXPERIENCE, trinket )}</td>`).insertAfter(ele);
  $(`<td class='text-rarity-1'>${getMetaValue(meta.DROP_BOOST, trinket )}</td>`).insertAfter(ele);
  $(`<td class='text-rarity-1'>${getMetaValue(meta.RESOURCE_BOOST, trinket )}</td>`).insertAfter(ele);
  $(`<td class='text-rarity-1'>${getMetaValue(meta.BASE_RESOURCE, trinket )}</td>`).insertAfter(ele);
  //$(`<td class='text-rarity-1'>${trinket.mods[1][1]}</td>`).insertAfter(ele);
  //$(`<td class='text-rarity-1'>${trinket.mods[2][1]}</td>`).insertAfter(ele);
  //$("<td class='text-rarity-1'></td>").insertAfter(ele);
  //$("<td class='text-rarity-1'></td>").insertAfter(ele);
}

function modifyTrinketView(response) {

  response = JSON.parse(response);

  console.log(response);

  if(updatedTrinket) {
    return;
  }

  let t = $('.table-invisible', '.main-section__body')[2];

  if(!t) {
    return;
  }

  let trs = $('tr', t);

  addTrinketHeader(trs[0]);

  for( let x = 0; x < trs.length; x += 1 ) {
    let tr = trs[x];
    let tds = $('td', tr);
    let td = tds[0];

    addTrinketMeta(td, response[x]);

  }

  $("<br><br><p>Evelyn is not impressed.</p>").insertAfter(t);

  updatedTrinket = true;
}

//------------------------------------------------

var send = window.XMLHttpRequest.prototype.send;

function sendReplacement(data) {
  if(this.onreadystatechange) {
    this._onreadystatechange = this.onreadystatechange;
  }

  updateTrinket = false;
  this.onreadystatechange = onReadyStateChangeReplacement;
  return send.apply(this, arguments);
}

function onReadyStateChangeReplacement() {

  if(this._onreadystatechange) {
    setTimeout( () => {
      if(this.responseURL.includes("php/equipment.php?mod=loadTrinkets")) {
        if(this.response) {
          modifyTrinketView(this.response);
        }
      }
    }, 100 );

    return this._onreadystatechange.apply(this, arguments);
  }
}

window.XMLHttpRequest.prototype.send = sendReplacement;