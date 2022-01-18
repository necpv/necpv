"use strict";

let lineX = document.getElementById('lineX');
let lineX0 = document.getElementById('lineX0');
let rY = document.getElementById('rY');
let rY0 = document.getElementById('rY0');
addX(); addX();	addX();
addY(); addY();	addY();

function addX(){
  lineX.after(lineX.cloneNode(true));
  lineX0.after(lineX0.cloneNode(true));
}

function removeX(){
  if (lineX.nextElementSibling) lineX.nextElementSibling.remove();
  if (lineX0.nextElementSibling) lineX0.nextElementSibling.remove();
}

function addY(){
  rY0.after(rY0.cloneNode(true));
  for (let i=0; i<lineX.parentElement.children.length; i++){
	lineX.parentElement.children[i].append(rY.cloneNode(true));
}}

function removeY(){
  if (rY0.nextElementSibling){
	rY0.nextElementSibling.remove();
	for (let i=0; i<lineX.parentElement.children.length; i++){
	  lineX.parentElement.children[i].lastElementChild.remove();
}}}

function mouseOverField(event){
  let x=0;
  let elem = event.currentTarget
  while(elem.previousElementSibling){
	x+=1;
	elem=elem.previousElementSibling;
  };
  
  let y=0;
  elem = event.currentTarget.parentElement;
  while(elem.previousElementSibling){
	y+=1;
	elem=elem.previousElementSibling;
  };
  
  if (lineX0.parentElement.children[1]){
	lineX0.parentElement.children[y].firstElementChild.style.backgroundColor = '#B22222';
  }
  if (rY0.parentElement.children[1]){
	rY0.parentElement.children[x].style.backgroundColor = '#B22222';
  }
  
  let promise = new Promise(function(resolve, reject) {
	event.currentTarget.onmouseout = () => resolve();
  });
  promise.then(()=>{
	lineX0.parentElement.children[y].firstElementChild.style.backgroundColor = '';
	rY0.parentElement.children[x].style.backgroundColor = '';
  })
}

function mouseOverMinusX(event){
  let elem = event.currentTarget
  if (lineX0.parentElement.children[1]){
	elem.style.backgroundColor = '#d24242';
  }
  
  let promise = new Promise(function(resolve, reject) {
	elem.onmouseout = () => resolve();
  });
  promise.then(()=>{elem.style.backgroundColor = '';})
}

function mouseOverMinusY(event){
  let elem = event.currentTarget
  if (rY0.parentElement.children[1]){
	elem.style.backgroundColor = '#d24242';
  }
  let promise = new Promise(function(resolve, reject) {
	elem.onmouseout = () => resolve();
  });
  promise.then(()=>{elem.style.backgroundColor = '';})
}

function mouseOverPlus(event){
  let elem = event.currentTarget
  elem.style.backgroundColor = '#FFD700';
  let promise = new Promise(function(resolve, reject) {
	elem.onmouseout = () => resolve();
  });
  promise.then(()=>{elem.style.backgroundColor = '';})
}