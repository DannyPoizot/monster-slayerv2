"use strict";

const sectionStart = document.querySelector(".sectionStart");
const sectionGame = document.querySelector(".sectionGame");
const progressPlayer = document.querySelector('.progressPlayer');
const progressMonster = document.querySelector('.progressMonster');
const pvPlayer = document.querySelector('.pvPlayer');
const pvMonster = document.querySelector('.pvMonster');
const btnStart = document.getElementById("btn_start");
const btnAttack = document.getElementById("btn_attack");
const btnSpecialAttack = document.getElementById("btn_special");
const btnHeal = document.getElementById("btn_heal");
const btnGiveUp = document.getElementById("btn_giveup");

let pvP = 100;
let pvM = 100;

pvPlayer.textContent = pvP;
pvMonster.textContent = pvM;

sectionGame.hidden = true;

class Character {
    
    constructor(name, pv, damage, progress) {
        this.name = name;
        this.pv = pv;
        this.damage = damage;
        this.progress;
    }

    

}

