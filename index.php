<?php require_once 'inc/functions.php'; ?>
<!DOCTYPE html>
<html lang="ru">
<head><meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<title>TwitchUP</title>
	<link rel="icon" href="img/twitch-icon.png">
	<!--- BOOTSTRAP -->
	<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
	<!--- Google Fonts --->
	<link href="https://fonts.googleapis.com/css?family=Permanent+Marker" rel="stylesheet">
	<!--- Font Awesome --->
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
	<!--- Animate Css -->
	<link rel="stylesheet" href="css/animate.css">
	<!--- Slick -->
	<link rel="stylesheet" type="text/css" href="slick/slick.css"/>		
	<!--- Jquery -->
	<script src="js/wow.min.js"></script>
	<script>
       new WOW().init();
    </script>
	<!--- Main Css -->
	<link rel="stylesheet" href="css/style.css">
	<!--- MEDIA -->
	<meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0"/>
	<link rel="stylesheet" href="css/media.css">
	<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
	<script type="text/javascript" src="slick/slick.min.js"></script>
	<script src="https://code.jivosite.com/widget.js" data-jv-id="nSLyzhzaYf" async></script>
</head>
<body>
	<header>
		<div class="header">
			<div class="container">
				<div class="row">
					<div class="col-3 col-sm-3 col-md-3">
						<a class="logo" href="">TwitchUP</a>
					</div>
					<div class="col-9 col-sm-9 col-md-9">
						<ul class="menu">
							<li class="menu__item">
								<a href="#about-us">О нас</a>
							</li>
							<li class="menu__item">
								<a href="#prices">Цены</a>
							</li>
							<li class="menu__item">
								<a href="#safeguard">Гарантии</a>
							</li>
							<li class="menu__item">
								<a href="#reviews">Отзывы</a>
							</li>
							<li class="menu__item">
								<a href="#contacts">Контакты</a>
							</li>
						</ul>
						<div class="navbar">
							<div class="menu-block">    
							    <a href="#" class="menu-btn">
							      <svg class="ham ham3" viewBox="0 0 110 70" width="70" onclick="this.classList.toggle('active')">
									  <path
									        class="line top"
									        d="m 70,33 h -40 c -11.092231,0 11.883874,13.496726 -3.420361,12.956839 -0.962502,-2.089471 -2.222071,-3.282996 -4.545687,-3.282996 -2.323616,0 -5.113897,2.622752 -5.113897,7.071068 0,4.448316 2.080609,7.007933 5.555839,7.007933 2.401943,0 2.96769,-1.283974 4.166879,-3.282995 2.209342,0.273823 4.031294,1.642466 5.857227,-0.252538 v -13.005715 16.288404 h 7.653568" />
									  <path
									        class="line middle"
									        d="m 70,50 h -40 c -5.6862,0 -8.534259,5.373483 -8.534259,11.551069 0,7.187738 3.499166,10.922274 13.131984,10.922274 11.021777,0 7.022787,-15.773343 15.531095,-15.773343 3.268142,0 5.177031,-2.159429 5.177031,-6.7 0,-4.540571 -1.766442,-7.33533 -5.087851,-7.326157 -3.321409,0.0092 -5.771288,2.789632 -5.771288,7.326157 0,4.536525 2.478983,6.805271 5.771288,6.7" />
									  <path
									        class="line bottom"
									        d="m 70,67 h -40 c 0,0 -3.680675,0.737051 -3.660714,-3.517857 0.02541,-5.415597 3.391687,-10.357143 10.982142,-10.357143 4.048418,0 17.88928,0.178572 23.482143,0.178572 0,2.563604 2.451177,3.403635 4.642857,3.392857 2.19168,-0.01078 4.373905,-1.369814 4.375,-3.392857 0.0011,-2.023043 -1.924401,-2.589191 -4.553571,-4.107143 -2.62917,-1.517952 -4.196429,-1.799562 -4.196429,-3.660714 0,-1.861153 2.442181,-3.118811 4.196429,-3.035715 1.754248,0.0831 4.375,0.890841 4.375,3.125 2.628634,0 6.160714,0.267857 6.160714,0.267857 l -0.178571,-2.946428 10.178571,0 -10.178571,0 v 6.696428 l 8.928571,0 -8.928571,0 v 7.142858 l 10.178571,0 -10.178571,0" />
									</svg>
							    </a>
						    </div>
						</div>
					</div>
				</div>
				<div class="navbar-menu">
					<div class="row">
						<div class="col-sm-12 col-md-12">
							<nav class="menu-nav">
								<ul>
									<li class="menu-nav__link">
										<a href="#about-us">О нас</a>
									</li>
									<li class="menu-nav__link">
										<a href="#prices">Цены</a>
									</li>
									<li class="menu-nav__link">
										<a href="#safeguard">Гарантии</a>
									</li>
									<li class="menu__item">
										<a href="#reviews">Отзывы</a>
									</li>
									<li class="menu__item">
										<a href="#contacts">Контакты</a>
									</li>
								</ul>
						    </nav>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="container">
			<div class="row">
				<div class="col-md-7">
					<div class="main">
						<h1 class="wow bounceInDown main__title">
							Накрутка зрителей на стрим для Twitch и YouTube каналов
						</h1>
						<ul class="main__adv wow bounceInLeft">
							<li>
								<i class="fas fa-chevron-right"></i>
								Автоматизированная система
							</li>
							<li>
								<i class="fas fa-chevron-right"></i>
								Безопасный метод накрутки для Вашего канала
							</li>
							<li>
								<i class="fas fa-chevron-right"></i>
								Наша накрутка проходит абсолютно все проверки
							</li>
							<li>
								<i class="fas fa-chevron-right"></i>
								Отзывчивая техническая поддержка
							</li>
							<li>
								<i class="fas fa-chevron-right"></i>
								Поддержка индивидуальных заказов
							</li>
							<li>
								<i class="fas fa-chevron-right"></i>
								Полная анонимность
							</li>
						</ul>
					</div>
				</div>
				<div class="col-md-5">
					<img src="img/pudge.png" alt="" class="pudge-img">
				</div>
			</div>
		</div>
	</header>
	<section id="about-us" >
		<div class="container">
			<div class="row">
				<div class="col-md-12 text-center">
					<a name="about-us"></a>
					<h2 class="wow bounceInDown name-section">
						О нас
						<p>
							(Коротко о нас, почему именно мы и что мы предлагаем)
						</p>
					</h2>
				</div>
			</div>
			<ul class="about-us">
				<div class="row">
					<div class="col-md-4">
						<li class="wow zoomIn about-us__block">
							<h3 class="text-center">
								Коротко о нас
							</h3>
							<p>
								Мы большая команда, которая более 2 лет оказывает услуги по накрутке зрителей, фолловеров и просмотров для Twitch на популярных зарубежных форумах.
							</p>
							<p>	
								Теперь мы предлагаем услуги для России и стран СНГ!
							</p>
						</li>
					</div>
					<div class="col-md-4">
						<li class="wow zoomIn about-us__block">
							<h3 class="text-center">
								Почему именно мы
							</h3>
							<p>
								Главное отличие нас от конкурентов, это опыт работы и понимание того, как эффективно развивать Twitch канал. Как бы Вы не сопротивлялись, накруткой пользуются более 50% стримеров, и с этим ничего не поделаешь, рано или поздно Вам придётся подкручивать свою статистику, либо годами пытаться развить свой стрим канал.
							</p>
						</li>
					</div>
					<div class="col-md-4">
						<li class="wow zoomIn about-us__block">
							<h3 class="text-center">
								Что мы предлагаем
							</h3>
							<p>
								В первую очередь мы предлагаем качественную накрутку для Вашего Twitch канала, но это только 10% успеха.
							</p>
							<p>
								Всем активным клиентам мы оказываем консультацию по развитию канала.
							</p>
							<p>
								У нас огромная база зарубежных стримеров, и мы на 90% уверены в том, что нужно Twitch аудитории.
							</p>
						</li>
					</div>
				</div>
			</ul>
		</div>
	</section>
	<!-- Модальное окно -->  
	<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	  <div class="modal-dialog" role="document">
	    <div class="modal-content">
	      <div class="modal-header">
	      	 <h4 class="modal-title violent-f" id="myModalLabel">Оплата</h4>
	        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
	          <span class="violent-f" aria-hidden="true">&times;</span>
	        </button>
	      </div>
	      <div class="modal-body text-center">
	      	<form id="buy" method="POST">
			  	<div class="form-group">
				    <label for="name">Ваше имя</label>
				    <input type="name" name="name" class="form-control" id="name" placeholder="Ваше имя" required>
			  	</div>
				<div class="form-group">
				    <label for="email">Ваша почта</label>
				    <input type="email" name="email" class="form-control" id="email" placeholder="Email" required>
			  	</div>
			  	<div class="form-group">
				    <label for="product">Выбранный товар</label>
				    <input type="text" name="product" class="form-control" id="product" readonly>
			  	</div>
			  	<div class="form-group">
				    <label for="price">Цена</label>
				    <input type="text" name="price" class="form-control" id="price" readonly>
			  	</div>
			  	<button type="submit" class="btn btn-primary">Купить</button>
			</form>
	      </div>
	    </div>
	  </div>
	</div>
	<section id="price">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<a name="prices"></a>
					<h2 class="wow bounceInLeft name-section text-center">
						Цены
						<p>
							(Каталог услуг и цены на них)
						</p>
					</h2>
				</div>
			</div>
			<div class="viewers-for-twitch">
				<h3 class="wow flipInX">
					<i class=" fab fa-twitch"></i>
					Зрителей для Twitch
				</h3>
				<ul>
					<div class="row">
						<div class="wow flipInX col-md-6 col-lg-4 col-xl-3">
							<li class="block-price clearfix">
								 <span class="block-price__title">
								 	«Bronze»
								 	<span class="block-price__viewers">
								 		<i class="fa fa-user"></i>10
								 	</span>
								 </span><br><br>
								 <span class="block-price__perday">
								 	2 ₽ за минуту
								</span>
								<ul class="block-price__adv">
									<li>
										<i class="fas fa-check-circle"></i>До 10 зрителей
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Расхождение до 10%
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Обход проверок
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Чат-боты
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Техническая поддержка
									</li>
								</ul>
								<div class="text-center">
									<button class="block-price__btn buy"data-toggle="modal" data-target="#myModal" data-price="2" data-product="Зрителей для Twitch «Bronze»">Купить</button>
								</div>
							</li>
						</div>
						<div class="wow flipInX col-md-6 col-lg-4 col-xl-3">
							<li class="block-price clearfix">
								 <span class="block-price__title">
								 	«Silver»
								 	<span class="block-price__viewers">
								 		<i class="fa fa-user"></i>20
								 	</span>
								 </span><br><br>
								 <span class="block-price__perday">
								 	3 ₽ за минуту
								</span>
								<ul class="block-price__adv">
									<li>
										<i class="fas fa-check-circle"></i>До 20 зрителей
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Расхождение до 10%
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Обход проверок
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Чат-боты
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Техническая поддержка
									</li>
								</ul>
								<div class="text-center">
									<button class="block-price__btn buy"data-toggle="modal" data-target="#myModal" data-price="3" data-product="Зрителей для Twitch «Silver»">Купить</button>
								</div>
							</li>
						</div>
						<div class="wow flipInX col-md-6 col-lg-4 col-xl-3">
							<li class="block-price clearfix">
								 <span class="block-price__title">
								 	«Gold»
								 	<span class="block-price__viewers">
								 		<i class="fa fa-user"></i>50
								 	</span>
								 </span><br><br>
								 <span class="block-price__perday">
								 	5 ₽ за минуту
								</span>
								<ul class="block-price__adv">
									<li>
										<i class="fas fa-check-circle"></i>До 50 зрителей
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Расхождение до 10%
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Обход проверок
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Чат-боты
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Техническая поддержка
									</li>
								</ul>
								<div class="text-center">
									<button class="block-price__btn buy"data-toggle="modal" data-target="#myModal" data-price="5" data-product="Зрителей для Twitch «Gold»">Купить</button>
								</div>
							</li>
						</div>
						<div class="wow flipInX col-md-6 col-lg-4 col-xl-3">
							<li class="block-price clearfix">
								 <span class="block-price__title">
								 	«Emerald»
								 	<span class="block-price__viewers">
								 		<i class="fa fa-user"></i>70
								 	</span>
								 </span><br><br>
								 <span class="block-price__perday">
								 	7 ₽ за минуту
								</span>
								<ul class="block-price__adv">
									<li>
										<i class="fas fa-check-circle"></i>До 70 зрителей
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Расхождение до 10%
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Обход проверок
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Чат-боты
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Техническая поддержка
									</li>
								</ul>
								<div class="text-center">
									<button class="block-price__btn buy"data-toggle="modal" data-target="#myModal" data-price="7" data-product="Зрителей для Twitch «Emerald»">Купить</button>
								</div>
							</li>
						</div>
						<div class="wow flipInX col-md-6 col-lg-4 col-xl-3">
							<li class="block-price clearfix">
								 <span class="block-price__title">
								 	«Ruby»
								 	<span class="block-price__viewers">
								 		<i class="fa fa-user"></i>100
								 	</span>
								 </span><br><br>
								 <span class="block-price__perday">
								 	10 ₽ за минуту
								</span>
								<ul class="block-price__adv">
									<li>
										<i class="fas fa-check-circle"></i>До 100 зрителей
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Расхождение до 10%
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Обход проверок
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Чат-боты
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Техническая поддержка
									</li>
								</ul>
								<div class="text-center">
									<button class="block-price__btn buy"data-toggle="modal" data-target="#myModal" data-price="10" data-product="Зрителей для Twitch «Ruby»">Купить</button>
								</div>
							</li>
						</div>
						<div class="wow flipInX col-md-6 col-lg-4 col-xl-3">
							<li class="block-price clearfix">
								 <span class="block-price__title">
								 	«Sapphired»
								 	<span class="block-price__viewers">
								 		<i class="fa fa-user"></i>150
								 	</span>
								 </span><br><br>
								 <span class="block-price__perday">
								 	12 ₽ за минуту
								</span>
								<ul class="block-price__adv">
									<li>
										<i class="fas fa-check-circle"></i>До 150 зрителей
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Расхождение до 10%
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Обход проверок
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Чат-боты
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Техническая поддержка
									</li>
								</ul>
								<div class="text-center">
									<button class="block-price__btn buy"data-toggle="modal" data-target="#myModal" data-price="12" data-product="Зрителей для Twitch «Sapphired»">Купить</button>
								</div>
							</li>
						</div>
						<div class="wow flipInX col-md-6 col-lg-4 col-xl-3">
							<li class="block-price clearfix">
								 <span class="block-price__title">
								 	«Diamond»
								 	<span class="block-price__viewers">
								 		<i class="fa fa-user"></i>200
								 	</span>
								 </span><br><br>
								 <span class="block-price__perday">
								 	15 ₽ за минуту
								</span>
								<ul class="block-price__adv">
									<li>
										<i class="fas fa-check-circle"></i>До 200 зрителей
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Расхождение до 10%
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Обход проверок
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Чат-боты
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Техническая поддержка
									</li>
								</ul>
								<div class="text-center">
									<button class="block-price__btn buy"data-toggle="modal" data-target="#myModal" data-price="15" data-product="Зрителей для Twitch «Diamond»">Купить</button>
								</div>
							</li>
						</div>
						<div class="wow flipInX col-md-6 col-lg-4 col-xl-3">
							<li class="block-price clearfix">
								 <span class="block-price__title">
								 	«Pink Diamond»
								 	<span class="block-price__viewers">
								 		<i class="fa fa-user"></i>300
								 	</span>
								 </span><br><br>
								 <span class="block-price__perday">
								 	20 ₽ за минуту
								</span>
								<ul class="block-price__adv">
									<li>
										<i class="fas fa-check-circle"></i>До 300 зрителей
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Расхождение до 10%
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Обход проверок
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Чат-боты
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Техническая поддержка
									</li>
								</ul>
								<div class="text-center">
									<button class="block-price__btn buy"data-toggle="modal" data-target="#myModal" data-price="20" data-product="Зрителей для Twitch «Pink Diamond»">Купить</button>
								</div>
							</li>
						</div>
					</div>
				</ul>
			</div>
			<div class="followers-for-twitch">
				<h3 class="wow flipInX">
					<i class="fab fa-twitch"></i>Фолловеры для Twitch
				</h3>
				<ul>
					<div class="row">
						<div class="wow flipInX col-md-6 col-lg-4 col-xl-3">
							<li class="block-price clearfix">
								 <span class="block-price__title">
								 	«Bronze»
								 </span><br><br>
								 <span class="block-price__perday">
								 	50 ₽
								</span>
								<ul class="block-price__adv">
									<li>
										<i class="fas fa-check-circle"></i>50 фолловеров
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Подтвержденные почты
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Адекватные ники
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Аватарки
									</li>
								</ul>
								<div class="text-center">
									<button class="block-price__btn buy"data-toggle="modal" data-target="#myModal" data-price="50" data-product="Фолловеры для Twitch «Bronze»">Купить</button>
								</div>
							</li>
						</div>
						<div class="wow flipInX col-md-6 col-lg-4 col-xl-3">
							<li class="block-price clearfix">
								 <span class="block-price__title">
								 	«Silver»
								 </span><br><br>
								 <span class="block-price__perday">
								 	100 ₽
								</span>
								<ul class="block-price__adv">
									<li>
										<i class="fas fa-check-circle"></i>100 фолловеров
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Подтвержденные почты
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Адекватные ники
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Аватарки
									</li>
								</ul>
								<div class="text-center">
									<button class="block-price__btn buy"data-toggle="modal" data-target="#myModal" data-price="100" data-product="Фолловеры для Twitch «Silver»">Купить</button>
								</div>
							</li>
						</div>
						<div class="wow flipInX col-md-6 col-lg-4 col-xl-3">
							<li class="block-price clearfix">
								 <span class="block-price__title">
								 	«Gold»
								 </span><br><br>
								 <span class="block-price__perday">
								 	200 ₽
								</span>
								<ul class="block-price__adv">
									<li>
										<i class="fas fa-check-circle"></i>200 фолловеров
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Подтвержденные почты
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Адекватные ники
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Аватарки
									</li>
								</ul>
								<div class="text-center">
									<button class="block-price__btn buy"data-toggle="modal" data-target="#myModal" data-price="200" data-product="Фолловеры для Twitch «Gold»">Купить</button>
								</div>
							</li>
						</div>

						<div class="wow flipInX col-md-6 col-lg-4 col-xl-3">
							<li class="block-price clearfix">
								 <span class="block-price__title">
								 	«Emerald»
								 </span><br><br>
								 <span class="block-price__perday">
								 	500 ₽
								</span>
								<ul class="block-price__adv">
									<li>
										<i class="fas fa-check-circle"></i>500 фолловеров
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Подтвержденные почты
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Адекватные ники
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Аватарки
									</li>
								</ul>
								<div class="text-center">
									<button class="block-price__btn buy"data-toggle="modal" data-target="#myModal" data-price="500" data-product="Фолловеры для Twitch «Emerald»">Купить</button>
								</div>
							</li>
						</div>
						<div class="wow flipInX col-md-6 col-lg-4 col-xl-3">
							<li class="block-price clearfix">
								 <span class="block-price__title">
								 	«Ruby»
								 </span><br><br>
								 <span class="block-price__perday">
								 	700 ₽
								</span>
								<ul class="block-price__adv">
									<li>
										<i class="fas fa-check-circle"></i>700 фолловеров
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Подтвержденные почты
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Адекватные ники
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Аватарки
									</li>
								</ul>
								<div class="text-center">
									<button class="block-price__btn buy"data-toggle="modal" data-target="#myModal" data-price="700" data-product="Фолловеры для Twitch «Ruby»">Купить</button>
								</div>
							</li>
						</div>
						<div class="wow flipInX col-md-6 col-lg-4 col-xl-3">
							<li class="block-price clearfix">
								 <span class="block-price__title">
								 	«Sapphired»
								 </span><br><br>
								 <span class="block-price__perday">
								 	1000 ₽
								</span>
								<ul class="block-price__adv">
									<li>
										<i class="fas fa-check-circle"></i>1000 фолловеров
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Подтвержденные почты
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Адекватные ники
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Аватарки
									</li>
								</ul>
								<div class="text-center">
									<button class="block-price__btn buy"data-toggle="modal" data-target="#myModal" data-price="1000" data-product="Фолловеры для Twitch «Sapphired»">Купить</button>
								</div>
							</li>
						</div>
					</div>
				</ul>
			</div>
			<div class="views-for-twitch">
				<h3 class="wow flipInX">
					<i class="fab fa-twitch"></i>Просмотры для Twitch
				</h3>
				<ul>
					<div class="row">
						<div class="wow flipInX col-md-6 col-lg-4 col-xl-3">
							<li class="block-price clearfix">
								 <span class="block-price__title">
								 	«Bronze»
								 </span><br><br>
								 <span class="block-price__perday">
								 	700 ₽
								</span>
								<ul class="block-price__adv">
									<li>
										<i class="fas fa-check-circle"></i>
										1000 просмотров
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Обход блокировок
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Выполнение в срок
									</li>
								</ul>
								<div class="text-center">
									<button class="block-price__btn buy"data-toggle="modal" data-target="#myModal" data-price="700" data-product="Просмотры для Twitch «Bronze»">Купить</button>
								</div>
							</li>
						</div>
						<div class="wow flipInX col-md-6 col-lg-4 col-xl-3">
							<li class="block-price clearfix">
								 <span class="block-price__title">
								 	«Silver»
								 </span><br><br>
								 <span class="block-price__perday">
								 	1400 ₽
								</span>
								<ul class="block-price__adv">
									<li>
										<i class="fas fa-check-circle"></i>
										2000 просмотров
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Обход блокировок
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Выполнение в срок
									</li>
								</ul>
								<div class="text-center">
									<button class="block-price__btn buy"data-toggle="modal" data-target="#myModal" data-price="1400" data-product="Просмотры для Twitch «Silver»">Купить</button>
								</div>
							</li>
						</div>
						<div class="wow flipInX col-md-6 col-lg-4 col-xl-3">
							<li class="block-price clearfix">
								 <span class="block-price__title">
								 	«Gold»
								 </span><br><br>
								 <span class="block-price__perday">
								 	3500 ₽
								</span>
								<ul class="block-price__adv">
									<li>
										<i class="fas fa-check-circle"></i>
										5000 просмотров
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Обход блокировок
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Выполнение в срок
									</li>
								</ul>
								<div class="text-center">
									<button class="block-price__btn buy"data-toggle="modal" data-target="#myModal" data-price="3500" data-product="Просмотры для Twitch «Gold»">Купить</button>
								</div>
							</li>
						</div>
						<div class="wow flipInX col-md-6 col-lg-4 col-xl-3">
							<li class="block-price clearfix">
								 <span class="block-price__title">
								 	«Emerald»
								 </span><br><br>
								 <span class="block-price__perday">
								 	4900 ₽
								</span>
								<ul class="block-price__adv">
									<li>
										<i class="fas fa-check-circle"></i>
										7000 просмотров
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Обход блокировок
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Выполнение в срок
									</li>
								</ul>
								<div class="text-center">
									<button class="block-price__btn buy"data-toggle="modal" data-target="#myModal" data-price="4900" data-product="Просмотры для Twitch «Emerald»">Купить</button>
								</div>
							</li>
						</div>
						<div class="wow flipInX col-md-6 col-lg-4 col-xl-3">
							<li class="block-price clearfix">
								 <span class="block-price__title">
								 	«Ruby»
								 </span><br><br>
								 <span class="block-price__perday">
								 	7000 ₽
								</span>
								<ul class="block-price__adv">
									<li>
										<i class="fas fa-check-circle"></i>
										10000 просмотров
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Обход блокировок
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Выполнение в срок
									</li>
								</ul>
								<div class="text-center">
									<button class="block-price__btn buy"data-toggle="modal" data-target="#myModal" data-price="7000" data-product="Просмотры для Twitch «Ruby»">Купить</button>
								</div>
							</li>
						</div>
					</div>
				</ul>
			</div>
			<div class="Primesub-for-twitch">
				<h3 class="wow flipInX">
					<i class="fab fa-twitch"></i>Prime подписчики для Twitch
				</h3>
				<ul>
					<div class="row">
						<div class="wow flipInX col-md-6 col-lg-4 col-xl-3">
							<li class="block-price clearfix">
								 <span class="block-price__title">
								 	«Bronze»
								 </span><br><br>
								 <span class="block-price__perday">
								 	50 ₽
								</span>
								<ul class="block-price__adv">
									<li>
										<i class="fas fa-check-circle"></i>1 подписчик
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Подтвержденные почты
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Адекватные ники
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Аватарки
									</li>
								</ul>
								<div class="text-center">
									<button class="block-price__btn buy"data-toggle="modal" data-target="#myModal" data-price="50" data-product="Prime подписчики для Twitch «Bronze»">Купить</button>
								</div>
							</li>
						</div>
						<div class="wow flipInX col-md-6 col-lg-4 col-xl-3">
							<li class="block-price clearfix">
								 <span class="block-price__title">
								 	«Silver»
								 </span><br><br>
								 <span class="block-price__perday">
								 	500 ₽
								</span>
								<ul class="block-price__adv">
									<li>
										<i class="fas fa-check-circle"></i>10 подписчиков
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Подтвержденные почты
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Адекватные ники
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Аватарки
									</li>
								</ul>
								<div class="text-center">
									<button class="block-price__btn buy"data-toggle="modal" data-target="#myModal" data-price="500" data-product="Prime подписчики для Twitch «Silver»">Купить</button>
								</div>
							</li>	
						</div>
						<div class="wow flipInX col-md-6 col-lg-4 col-xl-3">
							<li class="block-price clearfix">
								 <span class="block-price__title">
								 	«Gold»
								 </span><br><br>
								 <span class="block-price__perday">
								 	1250 ₽
								</span>
								<ul class="block-price__adv">
									<li>
										<i class="fas fa-check-circle"></i>25 подписчиков
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Подтвержденные почты
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Адекватные ники
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Аватарки
									</li>
								</ul>
								<div class="text-center">
									<button class="block-price__btn buy"data-toggle="modal" data-target="#myModal" data-price="1250" data-product="Prime подписчики для Twitch «Gold»">Купить</button>
								</div>
							</li>
						</div>
						<div class="wow flipInX col-md-6 col-lg-4 col-xl-3">
							<li class="block-price clearfix">
								 <span class="block-price__title">
								 	«Emerald»
								 </span><br><br>
								 <span class="block-price__perday">
								 	2500 ₽
								</span>
								<ul class="block-price__adv">
									<li>
										<i class="fas fa-check-circle"></i>50 подписчиков
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Подтвержденные почты
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Адекватные ники
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Аватарки
									</li>
								</ul>
								<div class="text-center">
									<button class="block-price__btn buy"data-toggle="modal" data-target="#myModal" data-price="2500" data-product="Prime подписчики для Twitch «Emerald»">Купить</button>
								</div>
							</li>
						</div>
						<div class="wow flipInX col-md-6 col-lg-4 col-xl-3">
							<li class="block-price clearfix">
								 <span class="block-price__title">
								 	«Ruby»
								 </span><br><br>
								 <span class="block-price__perday">
								 	3500 ₽
								</span>
								<ul class="block-price__adv">
									<li>
										<i class="fas fa-check-circle"></i>70 подписчиков
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Подтвержденные почты
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Адекватные ники
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Аватарки
									</li>
								</ul>
								<div class="text-center">
									<button class="block-price__btn buy"data-toggle="modal" data-target="#myModal" data-price="3500" data-product="Prime подписчики для Twitch «Ruby»">Купить</button>
								</div>
								</li>
						</div>
						<div class="wow flipInX col-md-6 col-lg-4 col-xl-3">
							<li class="block-price clearfix">
								 <span class="block-price__title">
								 	«Sapphired»
								 </span><br><br>
								 <span class="block-price__perday">
								 	5000 ₽
								</span>
								<ul class="block-price__adv">
									<li>
										<i class="fas fa-check-circle"></i>100 подписчиков
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Подтвержденные почты
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Адекватные ники
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Аватарки
									</li>
								</ul>
								<div class="text-center">
									<button class="block-price__btn buy"data-toggle="modal" data-target="#myModal" data-price="5000" data-product="Prime подписчики для Twitch «Sapphired»">Купить</button>
								</div>
								</li>
						</div>
						<div class="wow flipInX col-md-6 col-lg-4 col-xl-3">
							<li class="block-price clearfix">
								 <span class="block-price__title">
								 	«Diamond»
								 </span><br><br>
								 <span class="block-price__perday">
								 	7500 ₽
								</span>
								<ul class="block-price__adv">
									<li>
										<i class="fas fa-check-circle"></i>150 подписчиков
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Подтвержденные почты
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Адекватные ники
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Аватарки
									</li>
								</ul>
								<div class="text-center">
									<button class="block-price__btn buy"data-toggle="modal" data-target="#myModal" data-price="7500" data-product="Prime подписчики для Twitch «Diamond»">Купить</button>
								</div>
							</li>
						</div>
						<div class="wow flipInX col-md-6 col-lg-4 col-xl-3">
							<li class="block-price clearfix">
								 <span class="block-price__title">
								 	«Pink Diamond»
								 </span><br><br>
								 <span class="block-price__perday">
								 	10 000 ₽
								</span>
								<ul class="block-price__adv">
									<li>
										<i class="fas fa-check-circle"></i>200 подписчиков
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Подтвержденные почты
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Адекватные ники
									</li>
									<li>
										<i class="fas fa-check-circle"></i>Аватарки
									</li>
								</ul>
								<div class="text-center">
									<button class="block-price__btn buy"data-toggle="modal" data-target="#myModal" data-price="10 000" data-product="Prime подписчики для Twitch «Pink Diamond»">Купить</button>
								</div>
							</li>
						</div>
					</div>
				</ul>
			</div>
		</div>
	</section>
	<section id="safeguard">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<a name="safeguard"></a>
					<h2 class="wow bounceInLeft name-section text-center">
						Гарантии на наши услуги
						<p>
							(Гарантия распространяется на все услуги без исключений)
						</p>
					</h2>
				</div>
			</div>
			<ul class="safeguard">
				<div class="row">
					<div class="col-md-6 col-lg-4">
						<li class="wow zoomIn about-us__block safeguard__block">
							<h3 class="text-center">
								<i class="fas fa-check-circle"></i>Бан исключен
							</h3>
							<p>
								Ваш канал не могут забанить, так как нет ни какой привязки к тому, что накручиваете именно Вы. Иначе можно было бы заблокировать любой канал.
							</p>
						</li>
					</div>
					<div class="col-md-6 col-lg-4">
						<li class="wow zoomIn about-us__block safeguard__block">
							<h3 class="text-center">
								<i class="fas fa-check-circle"></i>Возврат средств
							</h3>
							<p>
								Если услуга оказана не в полном объёме, Вы вправе потребовать возврат. Средства возвращаются в зависимости от степени выполненной работы.Средства не возвращаются если ваш канал заблокируют!
							</p>
						</li>
					</div>
					<div class="col-md-12 col-lg-4">
						<li class="wow zoomIn about-us__block safeguard__block">
							<h3 class="text-center">
								<i class="fas fa-check-circle"></i>Анонимность
							</h3>
							<p>
								Данные не передаются 3-им лицам, и хранятся в зашифрованном виде. Информация о Вас ни где не публикуется. Вся статистика анонимна.
							</p>
						</li>
					</div>
				</div>
			</ul>
		</div>
	</section>
	<section id="reviews">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<a name="safeguard"></a>
					<h2 class="wow bounceInLeft name-section text-center">
						Отзывы
						<p>
							(Отзывы наших довольных клиентов)
						</p>
					</h2>
				</div>
			</div>
			<div class="row">
				<div class="wow zoomIn col-md-12">
					<div class="slider-reviews">
						<div class="block_reviews">
							<div class="block_reviews__icon">
								<i class="fab fa-twitch"></i>
							</div>
							<div class="block_reviews__name text-center">
								Name Surname
							</div>
							<div class="block_reviews__text">
								Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
							</div>
						</div>
						<div class="block_reviews">
							<div class="block_reviews__icon">
								<i class="fab fa-twitch"></i>
							</div>
							<div class="block_reviews__name text-center">
								Name Surname
							</div>
							<div class="block_reviews__text">
								Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
							</div>
						</div>
					</div>
					<div class="block_reviews__arrows clearfix">
						<div class="block_reviews__arrows-left">
							<i class="fas fa-long-arrow-alt-left"></i>
						</div>
						<div class="block_reviews__arrows-right">
							<i class="fas fa-long-arrow-alt-right"></i>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-12 text-center">
				<div class="btn">
					<a href="reviews.html" class="btn__link">
						Написать отзыв
					</a>
				</div>
			</div>
		</div>
	</section>
	<footer id="contacts">
		<div class="container">
			<div class="row">
				<div class="col-md-3">
					<a class="logo" href="">TwitchUP</a>
				</div>
				<div class="col md-9">
					<ul class="contacts">
						<li class="contacts__link">
							<a href="mailto:sellerservicee@gmail.com">
								<i class="fas fa-envelope"></i>
								sellerservicee@gmail.com
							</a>
						</li>
						<li class="contacts__link">
							<a href="tg://resolve?domain=SellerServicee">
								<i class="fab fa-telegram"></i>
								https://t.me/SellerServicee
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</footer>
	<script>
		$('.menu-btn').on('click', function(e) {
		  e.preventDefault();
		  $(this).toggleClass('menu-btn_active');
		  $('.menu-nav').toggleClass('menu-nav_active');
		  $('.navbar-menu').toggleClass('navbar-menu_active');
		});

		$(document).ready(function(){
		  $('.slider-reviews').slick({
		    prevArrow: $('.block_reviews__arrows-left'),
			nextArrow: $('.block_reviews__arrows-right')
		  });
		});
	</script>
	<script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="crossorigin="anonymous"></script>
	<script src="js/form.js"></script>
	<script src="js/js.js"></script>
</body>
</html>