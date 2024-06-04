// JavaScript Document

'use strict';

{

    // TOPICS
    const iphone = document.getElementById('iphone');
	const topics = document.getElementById('TOPICS');
    const home01 = document.getElementById('home_box01');

	iphone.addEventListener('click', () => {
		topics.classList.add('active');
	});
	home01.addEventListener('click', () => {
		topics.classList.remove('active');
	});

	// VISION
	const lens = document.getElementById('lens');
	const vision = document.getElementById('VISION');
	const home02 = document.getElementById('home_box02');

	lens.addEventListener('click', () => {
		vision.classList.add('active');
	});
	home02.addEventListener('click', () => {
		vision.classList.remove('active');
	});

	// SERVICE_01 ホームページ
	const computer = document.getElementById('computer');
	const service_01 = document.getElementById('SERVICE_01');
	const home03 = document.getElementById('home_box03');

	computer.addEventListener('click', () => {
		service_01.classList.add('active');
	});
	home03.addEventListener('click', () => {
		service_01.classList.remove('active');
	});

	// SERVICE_02 デザイン
	const note = document.getElementById('note');
	const service_02 = document.getElementById('SERVICE_02');
	const home06 = document.getElementById('home_box06');

	note.addEventListener('click', () => {
		service_02.classList.add('active');
	});
	home06.addEventListener('click', () => {
		service_02.classList.remove('active');
	});

	// SERVICE_03 撮影
	const sp_camera = document.getElementById('sp_camera');
	const tb_camera = document.getElementById('tb_camera');
	const service_03 = document.getElementById('SERVICE_03');
	const home07 = document.getElementById('home_box07');

	sp_camera.addEventListener('click', () => {
		service_03.classList.add('active');
	});
	tb_camera.addEventListener('click', () => {
		service_03.classList.add('active');
	});
	home07.addEventListener('click', () => {
		service_03.classList.remove('active');
	});

	// SERVICE_04 福祉
	const futaba = document.getElementById('futaba');
	const service_04 = document.getElementById('SERVICE_04');
	const home08 = document.getElementById('home_box08');

	futaba.addEventListener('click', () => {
		service_04.classList.add('active');
	});
	home08.addEventListener('click', () => {
		service_04.classList.remove('active');
	});

	// ABOUT
	const sp_poster = document.getElementById('sp_poster');
	const tb_poster = document.getElementById('tb_poster');
	const about = document.getElementById('ABOUT');
	const home04 = document.getElementById('home_box04');

	sp_poster.addEventListener('click', () => {
		about.classList.add('active');
	});
	tb_poster.addEventListener('click', () => {
		about.classList.add('active');
	});
	home04.addEventListener('click', () => {
		about.classList.remove('active');
	});

	// TEAM
	const teams = document.getElementById('teams');
	const team = document.getElementById('TEAM');
	const home05 = document.getElementById('home_box05');

	teams.addEventListener('click', () => {
		team.classList.add('active');
	});
	home05.addEventListener('click', () => {
		team.classList.remove('active');
	});


	//ーーーー SERVICE_ページ内リンク　ーーーー//

	// SERVICE_01 ホームページ
	const ser_02 = document.getElementById('SER_02');
	const ser_03 = document.getElementById('SER_03');
	const ser_04 = document.getElementById('SER_04');

	ser_02.addEventListener('click', () => {
		service_02.classList.add('active');
		service_01.classList.remove('active');
	});
	ser_03.addEventListener('click', () => {
		service_03.classList.add('active');
		service_01.classList.remove('active');
	});
	ser_04.addEventListener('click', () => {
		service_04.classList.add('active');
		service_01.classList.remove('active');
	});


	// SERVICE_02 デザイン
	const de_01 = document.getElementById('de_01');
	const de_03 = document.getElementById('de_03');
	const de_04 = document.getElementById('de_04');

	de_01.addEventListener('click', () => {
		service_01.classList.add('active');
		service_02.classList.remove('active');
	});
	de_03.addEventListener('click', () => {
		service_03.classList.add('active');
		service_02.classList.remove('active');
	});
	de_04.addEventListener('click', () => {
		service_04.classList.add('active');
		service_02.classList.remove('active');
	});


	// SERVICE_03 撮影
	const mo_01 = document.getElementById('mo_01');
	const mo_02 = document.getElementById('mo_02');
	const mo_04 = document.getElementById('mo_04');

	mo_01.addEventListener('click', () => {
		service_01.classList.add('active');
		service_03.classList.remove('active');
	});
	mo_02.addEventListener('click', () => {
		service_02.classList.add('active');
		service_03.classList.remove('active');
	});
	mo_04.addEventListener('click', () => {
		service_04.classList.add('active');
		service_03.classList.remove('active');
	});


	// SERVICE_04 福祉
	const wel_01 = document.getElementById('wel_01');
	const wel_02 = document.getElementById('wel_02');
	const wel_03 = document.getElementById('wel_03');

	wel_01.addEventListener('click', () => {
		service_01.classList.add('active');
		service_04.classList.remove('active');
	});
	wel_02.addEventListener('click', () => {
		service_02.classList.add('active');
		service_04.classList.remove('active');
	});
	wel_03.addEventListener('click', () => {
		service_03.classList.add('active');
		service_04.classList.remove('active');
	});

}


