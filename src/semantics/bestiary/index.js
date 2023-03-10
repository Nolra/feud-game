import './index.css';
import gameAPI from '../../api/index.js'
import { useState } from 'react';
import { useHistory } from "react-router-dom";

function Bestiary(props) {
		const [evilDesc0, setEvilDesc0] = useState(false);
		const [evilDesc1, setEvilDesc1] = useState(false);
		const [evilDesc2, setEvilDesc2] = useState(false);
		const [evilDesc3, setEvilDesc3] = useState(false);
		const [evilDesc4, setEvilDesc4] = useState(false);
		const [evilDesc5, setEvilDesc5] = useState(false);
		const [evilDesc6, setEvilDesc6] = useState(false);
		const [evilDesc7, setEvilDesc7] = useState(false);
		const [evilDesc8, setEvilDesc8] = useState(false);
		const [evilDesc9, setEvilDesc9] = useState(false);
		const [evilDesc10, setEvilDesc10] = useState(false);
		const [evilDesc11, setEvilDesc11] = useState(false);
		const [evilDesc12, setEvilDesc12] = useState(false);
		const [evilDesc13, setEvilDesc13] = useState(false);
		const [evilDesc14, setEvilDesc14] = useState(false);
		const [evilDesc15, setEvilDesc15] = useState(false);
		const [evilDesc16, setEvilDesc16] = useState(false);
		const [evilDesc17, setEvilDesc17] = useState(false);
		const [evilDesc18, setEvilDesc18] = useState(false);
		const [evilDesc19, setEvilDesc19] = useState(false);
		const [evilDesc20, setEvilDesc20] = useState(false);
		const [evilDesc21, setEvilDesc21] = useState(false);
		const [evilDesc22, setEvilDesc22] = useState(false);
		const [evilDesc23, setEvilDesc23] = useState(false);
		const [evilDesc24, setEvilDesc24] = useState(false);
		const [evilDesc25, setEvilDesc25] = useState(false);
		const [evilDesc26, setEvilDesc26] = useState(false);
		const [evilDesc27, setEvilDesc27] = useState(false);
		const [evilDesc28, setEvilDesc28] = useState(false);
		const [evilDesc29, setEvilDesc29] = useState(false);
		const [evilDesc30, setEvilDesc30] = useState(false);
		const [evilDesc31, setEvilDesc31] = useState(false);
		const [evilDesc32, setEvilDesc32] = useState(false);


	  return (
	    <div className="bestiary">
	    	<div className="bestiary-container">
	    		<button className="back-button" onClick={() => props.setEnter("Menu")}></button>
		    	<h1>Бестиарий</h1>
		    	<div className="bestiary-head">
		    			<div className="bestiary-desc">
			    			Здесь ты можешь найти информацию обо всех основных сущностях,
			    			которые встретятся в игре.
			    			Под катом - история про демоническую природу российской власти,
			    			ужасающую магию силовых структур и бестиарий. 
		    			</div>

				    	<div className={`bestiary-box ${evilDesc0}`}>
								<button class="next-button" onClick={() => setEvilDesc0(!evilDesc0)}></button>
				    		<h2 onClick={() => setEvilDesc0(!evilDesc0)}>Общее описание бестиария</h2>
				    		<p>
				    			<i>И есть первый дух, он зовется Владимир Колокольцев<br/><br/>	

				    			Он Могущественный Герцог и с рычанием появляется в виде льва с головой осла.<br/>
				    			Он хороший приятель, но подбивает заняться воровством.<br/>
				    			Он управляет 10 Легионами Духов. Вот его Печать, которую носят даже, несмотря на то, хочешь ли ты быть его приятелем или нет.<br/><br/></i>
									

									За основу этого документа мы собирались взять знаменитый магический гримуар  <strong>Ars Goetia</strong>, известный также как первая часть более крупного магического текста “малый ключ Соломона” или “Лемегетон”. <br/><br/>
									Соломон с древности известен как один из самых искушенных заклинателей демонов и духов, в средневековой церемониальной магии именно ему приписывалось создание специальных печатей или сигилов, которыми можно заклинать и связывать демонов, заставляя их служить своей воле. Самый общеизвестный аналог такой печати - обыкновенная пентаграмма, которую ты не раз встречал на территории многочисленных заброшек нашей родины. <br/><br/>
									Документ <strong>Ars Goetia</strong>, описывающий 72 главных демона-управителя, был скорее всего создан значительно позднее библейских времен. Нас же в нем заинтересовала прежде всего иерархическая структура адского царства. <br/><br/>
									Подобно тому, как китайский ад представляет собой зеркальное отражение земной бюрократии, <strong>Ars Goetia</strong> открывает нам увлекательный мир демонических структур, некоторые из которых могут быть полезны заклинателю. Гоэтия описывает отношения между демонами- управителями, великими князьями, царями и принцами демонического воинства, и легионами их подчиненных, а также обозначает обязанности управителей и этих легионов. 
									Такая форма очень напоминает нам устройство российских силовых структур, не смогли мы проигнорировать и сходство между гербами силовых ведомств и печатями, приведенными в магическом гримуаре.<br/><br/>

										Контакт с силовиками в России вообще всегда напоминает столкновение с темным и сверхъестественным.<br/><br/>

										 Во-первых,  сами по себе силовые структуры абсолютно непредсказуемы, непроницаемы и не подчиняются ни закону, ни даже относительной логике. С каждым годом они все больше стремятся продемонстрировать свою независимость от международного права, защиты граждан и прочих условностей, превращая само словосочетание “правоохранительные органы” в оксюморон. Мы называем органы, которые нас винтят и сажают в тюрьму правозащитными автоматически, однако эта лингвистическая неточность напоминает то, как шотландские крестьяне, из страха перед неблагословенным двором фей, упорно именовали их “добрыми соседями”. <br/><br/>

										Во-вторых - с органами можно осуществить магический призыв - слишком долго поминая их всуе или критикуя, находясь в опасной близости или просто неосторожно запостив мем. В абсолютной тьме беззакония наши сограждане вынуждены изобретать способы предсказания ответных действий органов. Так рождаются брошюры, посвященные разнообразных мерам предосторожности- от правил поведения в интернете до попыток опознать внедренного агента в активистской среде. Но по-настоящему никто не понимает, что на самом деле призывает эту кровавую мэри, и как работает рандомайзер под названием “российская законодательная система”. <br/><br/>

										The siloviki как сущность безусловно являются хозяевами известного мира - именно они управляют страной. C их легионами вынужден иметь дело всякий, кто задается вопросами права, человеческого достоинства и свободы мысли в современной России. С ними регулярно заключаются пакты, варьирующиеся от гарантии личной безопасности, до карьерного роста. И снова, как в случае демонической сделки, расплата неминуема и страшна. Мы собирались снабдить каждое из управлений МВД специальным сигилом и инструкцией призыва, но началась война, часть местных демонов отправилась на чужие земли, а другая оккупировала все крупные российские города. Мы переформатировали гримуар в общий бестиарий, стремясь оставить в игре максимум материалов, которые мы не успели реализовать, но очень хотели с вами поделиться. Здесь мы выкладываем информацию об основных персонажах/сущностях игры, которых ты можешь сразу не узнать. 
				    		</p>
				    	</div>
		    	</div>


		    	<div className={`bestiary-box ${evilDesc1}`}>
						<button class="next-button" onClick={() => setEvilDesc1(!evilDesc1)}></button>
		    		<h2 onClick={() => setEvilDesc1(!evilDesc1)}>Феод</h2>
		    		<p>
		    			Земельный надел, который сеньор выдает своему вассалу в награду за службу, лояльность и готовность защищать интересы сеньора. В игре - условное обозначение территорий РФ, в основном земли, известной как Московия, но на самом деле феодом является любое региональное образование в России, ведь управляющие им феодалы всегда лояльны централизованной власти, а свои титулы получают в основном по дружбе или из любви к боевым искусствам. Иногда в игре феодом называют всю страну.
		    		</p>
		    	</div>


		    	<div className={`bestiary-box ${evilDesc2}`}>
						<button class="next-button" onClick={() => setEvilDesc2(!evilDesc2)}></button>
		    		<h2 onClick={() => setEvilDesc2(!evilDesc2)}>Феодальность</h2>
		    		<p>
		    			Состояние души, обеспечивающее шаткость конструкции,
		    			бесправие и постоянную опасность разрушения.
		    		</p>
		    	</div>


		    	<div className={`bestiary-box ${evilDesc3}`}>
						<button class="next-button" onClick={() => setEvilDesc3(!evilDesc3)}></button>
		    		<h2 onClick={() => setEvilDesc3(!evilDesc3)}>Легион</h2>
		    		<p>
		    			Министерство внутренних дел, the siloviki в целом. Сюда входят абсолютно все дочерние подразделения  и смежные ведомства: полиция, автоинспекция, госнаркоконтроль, росгвардия, ОМОН и другие. 
		    		</p>
		    	</div>


		    	<div className={`bestiary-box ${evilDesc4}`}>
						<button class="next-button" onClick={() => setEvilDesc4(!evilDesc4)}></button>
		    		<h2 onClick={() => setEvilDesc4(!evilDesc4)}>Легионеры</h2>
		    		<p>
		    			Получеловеческие сущности, обреченные проводить жизнь в бункерах и на загородных виллах, перемежая шашлыки с пытками подследственных и многомиллиардными кражами из государственной казны. Обитают на всей территории феода, зарождаются при невыясненных обстоятельствах. Возможно, виной тому какая-нибудь воронка темной энергии, как в ночном дозоре. Помимо наследственности, в легион можно попасть путем конвертации из обычного человека в магического мента.
		    		</p>
		    	</div>


		    	<div className={`bestiary-box ${evilDesc5}`}>
						<button class="next-button" onClick={() => setEvilDesc5(!evilDesc5)}></button>
		    		<h2 onClick={() => setEvilDesc5(!evilDesc5)}>Взаимодействие с легионом</h2>
		    		<p>
		    			Существуют топ-легионеры, вроде Колокольцева и Бастрыкина, которых ты никогда не увидишь и рядовые солдаты армии потусторонней власти. При столкновении с легионом нужно вести себя как если бы тебе встретился бес, который хочет тебя запутать - нужно разоблачать чары, не поминать всуе, помнить об отличительных чертах, которые выдают легионера. Так сверхъестественные персонажи на человеческом празднике распознаются через какое-нибудь уродство или несоответствие.
		    		</p>
		    	</div>


		    	<div className={`bestiary-box ${evilDesc6}`}>
						<button class="next-button" onClick={() => setEvilDesc6(!evilDesc6)}></button>
		    		<h2 onClick={() => setEvilDesc6(!evilDesc6)}>Конвертация в легион</h2>
		    		<p>
		    			Один из способов прикоснуться к демонической природе власти. Проживая на территории феода, человек может нарушить ряд запретов, поддаться соблазну или завести знакомства, которые приведут его в руки Легиона.<br/><br/> Если он постепенно движется по карьерной лестнице в определенном направлении, конвертация происходит естественно и незаметно, хоть и является безусловно магической практикой. После конвертации легионер приобретает характерные черты, такие как неприязнь к запертым дверям, интерес к личным перепискам, постоянное подозрение в крамоле и вера в необходимость существования феода.<br/><br/> Конвертация обратима в случае, если будет уничтожен источник демонической власти, но с каждым годом на службе легионер приобретает все больше потусторонних черт, и в конце концов его бледная тень едва ли будет способна вернуться в мир людей. 
		    		</p>
		    	</div>


		    	<div className={`bestiary-box ${evilDesc7}`}>
						<button class="next-button" onClick={() => setEvilDesc7(!evilDesc7)}></button>
		    		<h2 onClick={() => setEvilDesc7(!evilDesc7)}>The provokator</h2>
		    		<p>
		    			Жертва конвертации по неосторожности. Такой человек не стремился делать карьеру, и не был достаточно ловок, чтобы поддерживать небезопасные контакты или нарушать магические запреты, в результате чего на него вышел Легион.<br/>Теперь единственный выход для него - заключить опасную и заведомо проигрышную сделку, превратясь в наблюдателя в мире людей.<br/><br/> The provokator провоцирует и сообщает информацию, но в отличие от истинного легионера не обладает потусторонними признаками, так что разоблачить его гораздо сложнее.
		    		</p>
		    	</div>


		    	<div className={`bestiary-box ${evilDesc8}`}>
						<button class="next-button" onClick={() => setEvilDesc6(!evilDesc8)}></button>
		    		<h2 onClick={() => setEvilDesc8(!evilDesc8)}>Зараза</h2>
		    		<p>
		    			Моровое поветрие, возбуждающее особенную тревогу как у властей феода, так и у простых жителей. Воспринимается апокалиптически, окружено множеством мифов.
		    		</p>
		    	</div>

		    	<div className={`bestiary-box ${evilDesc9}`}>
						<button class="next-button" onClick={() => setEvilDesc6(!evilDesc9)}></button>
		    		<h2 onClick={() => setEvilDesc9(!evilDesc9)}>Орден Свободных Йоменов</h2>
		    		<p>
		    			Объединение некрепостных крестьян, выступающее против разграбления простого народа Легионом и властями феода (разница между которыми порой очень условна). Имеют неоднозначную репутацию в основном из-за непростого прошлого Главного(Фигурант) и потому, что их программа понятна даже детям. 
		    		</p>
		    	</div>


		    	<div className={`bestiary-box ${evilDesc10}`}>
						<button class="next-button" onClick={() => setEvilDesc6(!evilDesc10)}></button>
		    		<h2 onClick={() => setEvilDesc10(!evilDesc10)}>Простой народ</h2>
		    		<p>
		    			Мы. Жители феода, не обладающие ни политической властью, ни правовой защитой, ни возможностью прямой коммуникации с теми, от кого зависит наша судьба. Проблема простого народа в том, что он не всегда замечает свое положение, и в реальной Российской Федерации даже самые образованные граждане зачастую пытаются воздействовать на распухший левиафан архаической власти гражданскими методами.<br/><br/> К сожалению, в РФ не существует работающих механизмов обычного гражданского общества, а декорацией является не только “демократия” но и современность вообще. <br/><br/>Вернем все взад! 
		    		</p>
		    	</div>


		    	<div className={`bestiary-box ${evilDesc11}`}>
						<button class="next-button" onClick={() => setEvilDesc6(!evilDesc11)}></button>
		    		<h2 onClick={() => setEvilDesc11(!evilDesc11)}>Главный(Фигурант)</h2>
		    		<p>
		    			Привет, это Навальный.<br/><br/> Загадочная фигура, стоящая у истоков ордена свободных йоменов. В данный момент спит на дне озера, не подозревая, что под воду погрузился уже весь феод.
		    		</p>
		    	</div>


		    	<div className={`bestiary-box ${evilDesc12}`}>
						<button class="next-button" onClick={() => setEvilDesc12(!evilDesc12)}></button>
		    		<h2 onClick={() => setEvilDesc12(!evilDesc12)}>Клирики</h2>
		    		<p>
		    			Синоним слова священнослужители. Некоторые из них очевидные коллаборационисты, озабоченные обычной для феода церемониальной магией власти, но есть и те, кто укроет вас в своем вертепе.
		    		</p>
		    	</div>


		    	<div className={`bestiary-box ${evilDesc13}`}>
						<button class="next-button" onClick={() => setEvilDesc6(!evilDesc13)}></button>
		    		<h2 onClick={() => setEvilDesc13(!evilDesc13)}>Мощи первого мертвеца</h2>
		    		<p>
		    			Еретический символ, собирательная метафора, первый погибший от Заразы, которому поклоняются члены секты мощеносцев. Возможно, реальный детский труп завернутый в тряпки. Считается, что прикосновение к мощам первого погибшего от Заразы мертвеца спасает от возможности заражения.
		    		</p>
		    	</div>


		    	<div className={`bestiary-box ${evilDesc14}`}>
						<button class="next-button" onClick={() => setEvilDesc6(!evilDesc14)}></button>
		    		<h2 onClick={() => setEvilDesc14(!evilDesc14)}>Мощеносцы</h2>
		    		<p>
		    			Простые граждане, напуганные Заразой, объединившиеся в небольшую еретическую секту. Верят, что ритуалы, связанные с мощами первого мертвеца, могут защитить их от смерти.<br/><br/> Отказываются использовать средства дезинфекции и проводят свои дни в молитвах и путешествиях по городам и селам, во время которых тыкают под нос незнакомым людям свой мумифицированный символ веры, обещая им защиту и распространяя мифы. Напоминают россиян, скрывающихся от ковида в храмах.
		    		</p>
		    	</div>


		    	<div className={`bestiary-box ${evilDesc15}`}>
						<button class="next-button" onClick={() => setEvilDesc6(!evilDesc15)}></button>
		    		<h2 onClick={() => setEvilDesc15(!evilDesc15)}>Дикая охота</h2>
		    		<p>
		    			Следственный комитет Российской Федерации. Проносятся по небу в поисках экстремистов и мыслепреступников. Их сопровождает свора волшебных собак, которые разорвут тебя на куски. 
		    		</p>
		    	</div>


		    	<div className={`bestiary-box ${evilDesc16}`}>
						<button class="next-button" onClick={() => setEvilDesc16(!evilDesc16)}></button>
		    		<h2 onClick={() => setEvilDesc16(!evilDesc16)}>Ваганты</h2>
		    		<p>
		    			Средневековые феодальные студенты, такие, как твои друзья.
		    		</p>
		    	</div>


		    	<div className={`bestiary-box ${evilDesc17}`}>
						<button class="next-button" onClick={() => setEvilDesc6(!evilDesc17)}></button>
		    		<h2 onClick={() => setEvilDesc17(!evilDesc17)}>Бумм</h2>
		    		<p>
		    			Удар реальности по голове, который ты получаешь в городе бесов, протестуя против храма. 
		    		</p>
		    	</div>


		    	<div className={`bestiary-box ${evilDesc18}`}>
						<button class="next-button" onClick={() => setEvilDesc18(!evilDesc18)}></button>
		    		<h2 onClick={() => setEvilDesc18(!evilDesc18)}>Истинное зрение</h2>
		    		<p>
		    			Способность видеть потусторонний мир, легионеров и настоящее устройство феода. Разрушает декорации современности, обнажая контуры вещей. В шотландском фольклоре достигается путем нанесения на глаза специальной мази, разоблачающей магию фей. 
		    		</p>
		    	</div>


		    	<div className={`bestiary-box ${evilDesc19}`}>
						<button class="next-button" onClick={() => setEvilDesc19(!evilDesc19)}></button>
		    		<h2 onClick={() => setEvilDesc19(!evilDesc19)}>Черная мадонна</h2>
		    		<p>
		    			В католичестве мадонна с черным ликом, о которой сказано “не смотрите, что я смугла, ибо солнце опалило меня”. В игре используется примерно как мексиканское синкретическое божество “святая смерть” - символ униженных, оскорбленных и беззащитных.
		    		</p>
		    	</div>


		    	<div className={`bestiary-box ${evilDesc20}`}>
						<button class="next-button" onClick={() => setEvilDesc20(!evilDesc20)}></button>
		    		<h2 onClick={() => setEvilDesc20(!evilDesc20)}>Город бесов</h2>
		    		<p>
		    			Город Екатеринбург - место финальной битвы сквера и храма.
		    		</p>
		    	</div>


		    	<div className={`bestiary-box ${evilDesc21}`}>
						<button class="next-button" onClick={() => setEvilDesc21(!evilDesc21)}></button>
		    		<h2 onClick={() => setEvilDesc21(!evilDesc21)}>Суды над животными</h2>
		    		<p>
		    			Широко распространенная средневековая практика, возрожденная в РФ во время летних митингов, когда в автозаки с удовольствием загружали собак, а в одном из обвинений значилось использование кошки в качестве оружия. 
		    		</p>
		    	</div>


		    	<div className={`bestiary-box ${evilDesc22}`}>
						<button class="next-button" onClick={() => setEvilDesc22(!evilDesc22)}></button>
		    		<h2 onClick={() => setEvilDesc22(!evilDesc22)}>Подменыш</h2>
		    		<p>
		    			В фольклоре старик из племени фей, которого они не хотят кормить, и потому подбрасывают человеческим людям, выкрадывая человеческого ребенка. Подменышами могли считать реальных больных детей или инвалидов, потому что в народных поверьях подброшенные старики фей часто обладают физическими уродствами или не растут как обычные дети.<br/><br/> Подменыша можно разоблачить, изобразив варку пива в яичной скорлупе - это удивит деда, и он заговорит своим настоящим голосом. В игре подменыш используется как аллегория возможности получать мизерные государственные дотации за счет детей.
		    		</p>
		    	</div>


		    	<div className={`bestiary-box ${evilDesc23}`}>
						<button class="next-button" onClick={() => setEvilDesc23(!evilDesc23)}></button>
		    		<h2 onClick={() => setEvilDesc23(!evilDesc23)}>Барин</h2>
		    		<p>
		    			Бесогон и режиссер Никита Михалков 
		    		</p>
		    	</div>


		    	<div className={`bestiary-box ${evilDesc24}`}>
						<button class="next-button" onClick={() => setEvilDesc24(!evilDesc24)}></button>
		    		<h2 onClick={() => setEvilDesc24(!evilDesc24)}>Женщина с неба</h2>
		    		<p>
		    			Первая женщина-космонавт, ныне политик Валентина Терешкова.
		    		</p>
		    	</div>


		    	<div className={`bestiary-box ${evilDesc25}`}>
						<button class="next-button" onClick={() => setEvilDesc25(!evilDesc25)}></button>
		    		<h2 onClick={() => setEvilDesc25(!evilDesc25)}>Мешок</h2>
		    		<p>
		    			Одежда, которую носят женщины - заключенные в игровом феоде и реальной РФ. По слухам, основным промоутером мешков еще в советское время стала Валентина Терешкова, добившаяся введения единой униформы для отбывавших наказание женщин, вместо нарядов, сшитых самими заключенными.
		    		</p>
		    	</div>


		    	<div className={`bestiary-box ${evilDesc26}`}>
						<button class="next-button" onClick={() => setEvilDesc26(!evilDesc26)}></button>
		    		<h2 onClick={() => setEvilDesc26(!evilDesc26)}>Гистрионы</h2>
		    		<p>
		    			В средневековье певцы, музыканты, бродячие актеры, рассказчики. Их неопределенный социальный статус позволял им периодически показывать достаточно крамольные по содержанию представления. В игре - художники, активисты и музыканты, занятые примерно  тем же.
		    		</p>
		    	</div>


		    	<div className={`bestiary-box ${evilDesc27}`}>
						<button class="next-button" onClick={() => setEvilDesc27(!evilDesc27)}></button>
		    		<h2 onClick={() => setEvilDesc27(!evilDesc27)}>Анатомия протеста</h2>
		    		<p>
		    			В реальной РФ - знаменитый пропагандистский фильм, “разоблачающий” всю российскую оппозицию. В игре символизирует успешно усвоенную пропаганду.
		    		</p>
		    	</div>


		    	<div className={`bestiary-box ${evilDesc28}`}>
						<button class="next-button" onClick={() => setEvilDesc28(!evilDesc28)}></button>
		    		<h2 onClick={() => setEvilDesc28(!evilDesc28)}>Ключ от всех дверей</h2>
		    		<p>
		    			Иллюстрация безнадежной попытки Роскомнадзора заблокировать весь интернет и телеграмм в первую очередь, стремясь нейтрализовать неправильных граждан. 
		    		</p>
		    	</div>


		    	<div className={`bestiary-box ${evilDesc29}`}>
						<button class="next-button" onClick={() => setEvilDesc29(!evilDesc29)}></button>
		    		<h2 onClick={() => setEvilDesc29(!evilDesc29)}>Лысый</h2>
		    		<p>
		    			Русский писатель Захар Прилепин. Появляется в сюжете об истинном и ложном благе.
		    		</p>
		    	</div>


		    	<div className={`bestiary-box ${evilDesc30}`}>
						<button class="next-button" onClick={() => setEvilDesc30(!evilDesc30)}></button>
		    		<h2 onClick={() => setEvilDesc30(!evilDesc30)}>Мертвая и живая лоза</h2>
		    		<p>
		    			Символическая интерпретация истинного и ложного понимания веры и блага. Эмоциальный лейтмотив этого выбора лучше всего описывает песня “Плот” Юрия Лозы (!), которая используется как саундтрек к фильму Алексея Балабанова “ГРУЗ 200”.
		    		</p>
		    	</div>


		    	<div className={`bestiary-box ${evilDesc31}`}>
						<button class="next-button" onClick={() => setEvilDesc31(!evilDesc31)}></button>
		    		<h2 onClick={() => setEvilDesc31(!evilDesc31)}>Флагеллянты</h2>
		    		<p>
		    			В средневековье  сектанты, занимающиеся избавлением от грехов и умерщвлением плоти посредством публичного самобичевания. В какой - то степени все граждане РФ. 
		    		</p>
		    	</div>


		    	<div className={`bestiary-box ${evilDesc32}`}>
						<button class="next-button" onClick={() => setEvilDesc32(!evilDesc32)}></button>
		    		<h2 onClick={() => setEvilDesc32(!evilDesc32)}>Эсхатологический настрой</h2>
		    		<p>
		    			Ожидание конца света, перемен и крушения привычного мира, свойственное правоверным католикам, русской оппозиции и владимиру путину
		    		</p>
		    	</div>
		    </div>
	    </div>
	  );

}

export default Bestiary;
