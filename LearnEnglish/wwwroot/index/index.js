function setImgURL_welcomeback() {

    var urlString = 'url(https://majemastoragelive.blob.core.windows.net/learn-english-test/ebook/Grade3/index/img/BtnClose1.png)';
    document.getElementById("closeBtn").style.backgroundImage = urlString;
    document.getElementById('playAudio_song1').setAttribute('data-audio-src', 'https://majemastoragelive.blob.core.windows.net/learn-english-test/ebook/Grade3/WelcomeBack/audio/Hello_How_Are_You_MASTER_v1');
    document.getElementById('playAudio_song2').setAttribute('data-audio-src', 'https://majemastoragelive.blob.core.windows.net/learn-english-test/ebook/Grade3/WelcomeBack/audio/Hello_how_are_you_SINGBACK_MASTER_v1');
    document.getElementById("txtbgColor").setAttribute('data-seekTimeStart', '25');
    document.getElementById("popup1").setAttribute('src', 'https://majemastoragelive.blob.core.windows.net/learn-english-test/ebook/Grade3/index/img/song1.png');
    document.getElementById("popup1").setAttribute('data-imgurl', 'https://majemastoragelive.blob.core.windows.net/learn-english-test/ebook/Grade3/index/img/song1.png');
    var items = [
        ['0', '3.851', 'Hello, how are you?'],
        ['2.9', '06.370', 'Hello, how are you?'],
        ['4.92', '09.620', 'Hello, how are you?'],
        ['8.48', '09.620', ''],
        ['8.48', '10.626', 'I’m great,'],
        ['9.67', '11.738', 'I’m fine,'],
        ['10.79', '12.736', 'I’m ok,'],
        ['11.76', '13.904', 'I’m happy,'],
        ['13.09', '16.836', 'I’m wonderful today.'],
        ['17.89', '18.817', ''],
        ['17.89', '20.606', 'Hello, how are you?'],
        ['19.67', '23.041', 'Hello, how are you?'],
        ['22.11', '25.268', 'Hello, how are you?'],
        ['25.38', '26.324', ''],
        ['25.38', '27.329', 'I’m tired,'],
        ['26.44', '28.356', 'I’m bored,'],
        ['27.45', '29.432', 'I’m ok,'],
        ['28.49', '30.754', 'I’m angry,'],
        ['29.71', '33.729', 'I’m very sad today.'],
        ['34.57', '35.472', ''],
        ['34.57', '37.491', 'Hello, how are you?'],
        ['36.65', '39.39', 'Hello, how are you?'],
        ['38.79', '41.936', 'Hello, how are you?'],
        ['42.06', '42.962', ''],
        ['42.05', '47.224', 'I’m very well today, thank you!']
    ];

    // for (var l = 0; l < items.length; l++) {
    //     var createID = 'line_' + (l + 1);
    //     document.getElementById(createID).setAttribute('data-seekTimeStart', items[l][0]);
    //     document.getElementById(createID).setAttribute('data-seekTimeEnd', items[l][1]);
    //     document.getElementById(createID).innerHTML = items[l][2];
    // }

    for (var l = 0; l < items.length; l++) {
        var createID = 'line_' + (l + 1);
        var ch_element = '<label id="' + createID + '" data-seekTimeStart="' + items[l][0] + '" data-rhymes="true" data-seekTimeEnd="' + items[l][1] + '" class="labelSong songText animated" style="top:54%" data-top="54">' + items[l][2] + '</label>';
        div = document.getElementById("create_songText");
        div.insertAdjacentHTML('beforeend', ch_element);
    }
}

function setImgURL_goodtoknow() {
    var urlString = 'url(https://majemastoragelive.blob.core.windows.net/learn-english-test/ebook/Grade3/index/img/BtnClose2.png)';
    document.getElementById("closeBtn").style.backgroundImage = urlString;
    document.getElementById('playAudio_song1').setAttribute('data-audio-src', 'https://majemastoragelive.blob.core.windows.net/learn-english-test/ebook/Grade3/Goodtoknow/audio/7_days_of_the_week_MASTER_v1');
    document.getElementById('playAudio_song2').setAttribute('data-audio-src', 'https://majemastoragelive.blob.core.windows.net/learn-english-test/ebook/Grade3/Goodtoknow/audio/7_days_of_the_week_SINGBACK_MASTER_v1');
    document.getElementById("txtbgColor").setAttribute('data-seekTimeStart', '39');
    document.getElementById("popup1").setAttribute('src', 'https://majemastoragelive.blob.core.windows.net/learn-english-test/ebook/Grade3/index/img/song2.png');
    document.getElementById("popup1").setAttribute('data-imgurl', 'https://majemastoragelive.blob.core.windows.net/learn-english-test/ebook/Grade3/index/img/song2.png');
    var items = [



        ['0', '05.898', '1-2-3, here we go!'],
        ['5.34', '8.206', 'The week has seven days.'],
        ['7.120', '08.906', '– What?'],
        ['7.99', '10.770', 'Seven days in a week.'],
        ['10.290', '11.350', '– What?'],
        ['11', '15.431', 'Whenever I rap, you rap it back. Come on!'],
        ['14.52', '16.505', 'Let’s go!'],
        ['16.46', '16.45', ''],
        ['16.46', '20.112', 'Monday - Monday'],
        ['19.39', '23.069', 'Tuesday - Tuesday'],
        ['22.17', '25.769', 'Wednesday - Wednesday'],
        ['25.07', '28.659', 'Thursday - Thursday'],
        ['27.75', '31.473', 'Friday - Friday'],
        ['30.57', '34.292', 'Saturday - Saturday'],
        ['33.39', '37.', 'Sunday - Sunday'],
        ['37.228', '37.227', ''],
        ['36.33', '40.004', 'One more time but faster now.'],
        ['39.11', '39.10', ''],
        ['39.11', '41.512', 'Monday - Monday'],
        ['40.61', '42.945', 'Tuesday - Tuesday'],
        ['42.04', '44.368', 'Wednesday - Wednesday'],
        ['43.46', '45.754', 'Thursday - Thursday'],
        ['44.85', '47.060', 'Friday - Friday'],
        ['46.15', '48.602', 'Saturday - Saturday'],
        ['47.7', '50.022', 'Sunday - Sunday'],
        ['49.12', '52.499', 'Seven days in a week. Yeah!'],
        ['51.6', '58.367', 'Let’s do it fast together now. 1 - 2 - 3 - 4'],
        ['57.47', '57.46', ''],
        ['57.47', '63.338', 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.'],
        ['62.42', '64.033', 'Again!'],
        ['63.13', '68.908', 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.'],
        ['68', '69.505', 'Faster!'],
        ['68.61', '73.735', 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.'],
        ['72.85', '74.409', 'Again!'],
        ['73.49', '78.715', 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.'],
        ['77.8', '79.178', 'Faster!'],
        ['78.33', '83.136', 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.'],
        ['82.2', '83.606', 'Faster!'],
        ['82.71', '118.346', 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.']
    ];

    for (var l = 0; l < items.length; l++) {
        var createID = 'line_' + (l + 1);
        var ch_element = '<label id="' + createID + '" data-seekTimeStart="' + items[l][0] + '" data-rhymes="true" data-seekTimeEnd="' + items[l][1] + '" class="labelSong songText animated" style="top:54%" data-top="54">' + items[l][2] + '</label>';
        div = document.getElementById("create_songText");
        div.insertAdjacentHTML('beforeend', ch_element);
    }
}

function setImgURL_wildanimals() {
    var urlString = 'url(https://majemastoragelive.blob.core.windows.net/learn-english-test/ebook/Grade3/index/img/BtnClose3.png)';
    document.getElementById("closeBtn").style.backgroundImage = urlString;
    document.getElementById('playAudio_song1').setAttribute('data-audio-src', 'https://majemastoragelive.blob.core.windows.net/learn-english-test/ebook/Grade3/wildanimals/audio/Wild_animals_MASTER_v2');
    document.getElementById('playAudio_song2').setAttribute('data-audio-src', 'https://majemastoragelive.blob.core.windows.net/learn-english-test/ebook/Grade3/wildanimals/audio/Wild_animals_SINGBACK_MASTER_v2');
    document.getElementById("txtbgColor").setAttribute('data-seekTimeStart', '34');
    document.getElementById("popup1").setAttribute('src', 'https://majemastoragelive.blob.core.windows.net/learn-english-test/ebook/Grade3/index/img/song3.png');
    document.getElementById("popup1").setAttribute('data-imgurl', 'https://majemastoragelive.blob.core.windows.net/learn-english-test/ebook/Grade3/index/img/song3.png');
    var items = [
        ['0', '3.832', '– Stomp like elephants!'],
        ['2.86', '5.817', 'Let’s go to the zoo,'],
        ['4.95', '8.383', 'and stomp like the elephants do.'],
        ['7.45', '11.257', '– Stomp, stomp, stomp, stomp, stomp, stomp!'],
        ['10.25', '13.002', 'Let’s go to the zoo,'],
        ['12.38', '15.739', 'and stomp like the elephants do.'],
        ['15.18', '18.51', '– Stomp, stomp, stomp, stomp, stomp, stomp!'],
        ['19.9', '20.802', ''],
        ['19.9', '22.308', '– Jump like kangaroos!'],
        ['21.34', '24.19', 'Let’s go to the zoo,'],
        ['23.43', '26.859', 'and jump like the kangaroos do.'],
        ['25.96', '29.596', '– Jump, jump, jump, jump, jump, jump!'],
        ['28.74', '31.58', 'Let’s go to the zoo,'],
        ['30.82', '34.214', 'and jump like the kangaroos do.'],
        ['33.32', '37.294', '– Jump, jump, jump, jump, jump, jump!'],
        ['38.34', '39.244', ''],
        ['38.34', '40.682', '– Swing like monkeys!'],
        ['39.78', '42.803', 'Let’s go to the zoo,'],
        ['41.87', '44.788', 'and swing like the monkeys do.'],
        ['43.92', '48.106', '– Swing, swing, swing, swing, swing, swing, swing!'],
        ['47.24', '49.954', 'Let’s go to the zoo,'],
        ['49.12', '52.11', 'and swing like the monkeys do.'],
        ['51.28', '55.605', '– Swing, swing, swing, swing, swing, swing, swing!'],
        ['56.75', '57.651', ''],
        ['56.75', '59.157', '– Waddle like penguins!'],
        ['58.26', '61.005', 'Let’s go to the zoo,'],
        ['60.38', '63.366', 'and waddle like the penguins do.'],
        ['62.43', '66.582', '– Waddle, waddle, waddle, waddle, waddle, waddle, waddle!'],
        ['65.68', '68.362', 'Let’s go to the zoo,'],
        ['67.67', '70.62', 'and waddle like the penguins do.'],
        ['69.75', '73.972', '– Waddle, waddle, waddle, waddle, waddle, waddle, waddle!'],
        ['73.07', '79.242', 'Let’s go to the zoo, and dance like the animals do.'],
        ['80.39', '81.363', ''],
        ['80.39', '120.163', 'Let’s go to the zoo, and dance like the animals do.']
    ];

    for (var l = 0; l < items.length; l++) {
        var createID = 'line_' + (l + 1);
        var ch_element = '<label id="' + createID + '" data-seekTimeStart="' + items[l][0] + '" data-rhymes="true" data-seekTimeEnd="' + items[l][1] + '" class="labelSong songText animated" style="top:54%" data-top="54">' + items[l][2] + '</label>';
        div = document.getElementById("create_songText");
        div.insertAdjacentHTML('beforeend', ch_element);
    }

}

function setImgURL_opposites() {
    var urlString = 'url(https://majemastoragelive.blob.core.windows.net/learn-english-test/ebook/Grade3/index/img/BtnClose4.png)';
    document.getElementById("closeBtn").style.backgroundImage = urlString;
    document.getElementById('playAudio_song1').setAttribute('data-audio-src', 'https://majemastoragelive.blob.core.windows.net/learn-english-test/ebook/Grade3/opposites/audio/Opposites_MASTER_v1');
    document.getElementById('playAudio_song2').setAttribute('data-audio-src', 'https://majemastoragelive.blob.core.windows.net/learn-english-test/ebook/Grade3/opposites/audio/Opposites_SINGBACK_MASTER_v1');
    document.getElementById("txtbgColor").setAttribute('data-seekTimeStart', '27');
    document.getElementById("popup1").setAttribute('src', 'https://majemastoragelive.blob.core.windows.net/learn-english-test/ebook/Grade3/index/img/song4.png');
    document.getElementById("popup1").setAttribute('data-imgurl', 'https://majemastoragelive.blob.core.windows.net/learn-english-test/ebook/Grade3/index/img/song4.png');
    var items = [
        ['0', '5.351', 'Big and small - big and small'],
        ['4.46', '8.628', 'Short and tall - short and tall'],
        ['7.69', '11.819', 'Black and white - black and white'],
        ['10.84', '14.875', 'Heavy and light - heavy and light'],
        ['14.04', '14.935', ''],
        ['14.04', '18.213', 'Good and bad - good and bad'],
        ['17.33', '21.391', 'Happy and sad - happy and sad'],
        ['20.5', '24.546', 'High and low - high and low'],
        ['23.66', '27.405', 'Yes and no - yes and no'],
        ['26.91', '27.80', ''],
        ['26.91', '33.996', 'Opposites, opposites, opposites, opposites, opposites, opposites are not the same.'],
        ['33.78', '34.67', ''],
        ['33.78', '37.408', 'Opposites, opposites, opposites, opposites, opposites, opposites are different.'],
        ['41.27', '42.168', ''],
        ['41.27', '45.495', 'Hot and cold - hot and cold'],
        ['44.63', '48.686', 'Young and old - young and old'],
        ['47.74', '51.693', 'Dirty and clean - dirty and clean'],
        ['50.89', '54.786', 'Red and green - red and green'],
        ['53.96', '54.858', ''],
        ['53.96', '58.173', 'Hard and soft - hard and soft'],
        ['57.32', '61.229', 'On and off - on and off'],
        ['60.44', '64.579', 'Short and long - short and long'],
        ['63.72', '67.697', 'Weak and strong - weak and strong'],
        ['66.8', '67.696', ''],
        ['66.8', '73.993', 'Opposites, opposites, opposites, opposites, opposites, opposites are not the same.'],
        ['73.23', '74.127', ''],
        ['73.23', '80.534', 'Opposites, opposites, opposites, opposites, opposites, opposites are different.']
    ];

    for (var l = 0; l < items.length; l++) {
        var createID = 'line_' + (l + 1);
        var ch_element = '<label id="' + createID + '" data-seekTimeStart="' + items[l][0] + '" data-rhymes="true" data-seekTimeEnd="' + items[l][1] + '" class="labelSong songText animated" style="top:54%" data-top="54">' + items[l][2] + '</label>';
        div = document.getElementById("create_songText");
        div.insertAdjacentHTML('beforeend', ch_element);
    }
}

function setImgURL_afterschool() {
    var urlString = 'url(https://majemastoragelive.blob.core.windows.net/learn-english-test/ebook/Grade3/index/img/BtnClose5.png)';
    document.getElementById("closeBtn").style.backgroundImage = urlString;
    document.getElementById('playAudio_song1').setAttribute('data-audio-src', 'https://majemastoragelive.blob.core.windows.net/learn-english-test/ebook/Grade3/Afterschool/audio/I_know_an_old_lady_MASTER_v1');
    document.getElementById('playAudio_song2').setAttribute('data-audio-src', 'https://majemastoragelive.blob.core.windows.net/learn-english-test/ebook/Grade3/Afterschool/audio/I_know_an_old_lady_SINGBACK_MASTER_v1');
    document.getElementById("txtbgColor").setAttribute('data-seekTimeStart', '62');
    document.getElementById("popup1").setAttribute('src', 'https://majemastoragelive.blob.core.windows.net/learn-english-test/ebook/Grade3/index/img/song5.png');
    document.getElementById("popup1").setAttribute('data-imgurl', 'https://majemastoragelive.blob.core.windows.net/learn-english-test/ebook/Grade3/index/img/song5.png');
    var items = [
        ['0', '6.267', 'I know an old lady, who swallowed a fly.'],
        ['5.57', '9.309', 'I don’t know why she swallowed the fly.'],
        ['9.03', '11.64', 'Perhaps she’ll die?'],
        ['12.59', '13.486', ''],
        ['12.59', '16.691', 'I know an old lady, who swallowed a spider that'],
        ['15.78', '19.438', 'wriggled and jiggled and tickled inside her.'],
        ['18.99', '23.118', 'She swallowed the spider to catch the fly, but'],
        ['22.28', '26.114', 'I don’t know why she swallowed the fly.'],
        ['25.63', '28.257', 'Perhaps she’ll die?'],
        ['29.22', '30.116', ''],
        ['29.22', '33.839', 'I know an old lady, who swallowed a bird.'],
        ['32.09', '36.243', 'Now, how absurd to swallow a bird.'],
        ['35.67', '39.782', 'She swallowed the bird to catch the spider that'],
        ['38.89', '42.778', 'wriggled and jiggled and tickled inside her.'],
        ['42.18', '46.371', 'She swallowed the spider to catch the fly, but'],
        ['45.48', '49.112', 'I don’t know why she swallowed the fly.'],
        ['48.77', '51.889', 'Perhaps she’ll die?'],
        ['52.34', '53.241', ''],
        ['52.34', '56.144', 'I know an old lady, who swallowed a cat.'],
        ['55.25', '59.243', 'Now fancy that, to swallow a cat!'],
        ['58.76', '62.672', 'She swallowed the cat to catch the bird,'],
        ['61.72', '65.842', 'she swallowed the bird to catch the spider that'],
        ['64.98', '69.107', 'wriggled and jiggled and tickled inside her.'],
        ['68.19', '72.283', 'She swallowed the spider to catch the fly, but'],
        ['71.38', '75.35', 'I don’t know why she swallowed the fly.'],
        ['74.79', '78.051', 'Perhaps she’ll die?'],
        ['78.37', '79.273', ''],
        ['78.37', '82.184', 'I know an old lady, who swallowed a dog.'],
        ['81.3', '85.102', 'What a hog, to swallow a dog!'],
        ['84.8', '88.679', 'She swallowed the dog to catch the cat,'],
        ['87.74', '91.607', 'she swallowed the cat to catch the bird,'],
        ['90.69', '94.549', 'she swallowed the bird to catch the spider that'],
        ['93.82', '97.457', 'wriggled and jiggled and tickled inside her.'],
        ['97.15', '101.245', 'She swallowed the spider to catch the fly, but'],
        ['100.3', '104.661', 'I don’t know why she swallowed the fly.'],
        ['103.72', '106.847', 'Perhaps she’ll die?'],
        ['107.28', '108.176', ''],
        ['107.28', '111.079', 'I know an old lady, who swallowed a goat.'],
        ['110.04', '114.302', 'She just opened her throat and swallowed the goat.'],
        ['113.67', '117.594', 'She swallowed the goat to catch the dog,'],
        ['116.67', '120.576', 'she swallowed the dog to catch the cat,'],
        ['119.55', '123.343', 'she swallowed the cat to catch the bird,'],
        ['122.38', '126.245', 'she swallowed the bird to catch the spider'],
        ['125.32', '129.818', 'that wriggled and jiggled and tickled inside her.'],
        ['128.89', '133.055', 'She swallowed the spider to catch the fly, but'],
        ['132.14', '136.413', 'I don’t know why she swallowed the fly.'],
        ['135.49', '138.925', 'Perhaps she’ll die?'],
        ['139.05', '139.945', ''],
        ['139.05', '143.103', 'I know an old lady, who swallowed a cow.'],
        ['142.2', '146.112', 'I don’t know how she swallowed the cow.'],
        ['145.51', '149.457', 'She swallowed the cow to catch the goat,'],
        ['148.52', '152.332', 'she swallowed the goat to catch the dog,'],
        ['151.41', '155.139', 'she swallowed the dog to catch the cat,'],
        ['154.24', '158.041', 'she swallowed the cat to catch the bird,'],
        ['157.11', '161.292', 'she swallowed the bird to catch the spider that'],
        ['160.39', '164.529', 'wriggled and jiggled and tickled inside her.'],
        ['163.62', '167.726', 'She swallowed the spider to catch the fly, but'],
        ['166.79', '171.111', 'I don’t know why she swallowed the fly.'],
        ['170.2', '174.013', 'Perhaps she’ll die?'],
        ['173.8', '174.697', ''],
        ['173.8', '178.204', 'I know an old lady, who swallowed a horse.'],
        ['177.49', '181.938', 'She died? - Of course!']
    ];

    for (var l = 0; l < items.length; l++) {
        var createID = 'line_' + (l + 1);
        var ch_element = '<label id="' + createID + '" data-seekTimeStart="' + items[l][0] + '" data-rhymes="true" data-seekTimeEnd="' + items[l][1] + '" class="labelSong songText animated" style="top:54%" data-top="54">' + items[l][2] + '</label>';
        div = document.getElementById("create_songText");
        div.insertAdjacentHTML('beforeend', ch_element);
    }
}

function setImgURL_lunchtime() {
    var urlString = 'url(https://majemastoragelive.blob.core.windows.net/learn-english-test/ebook/Grade3/index/img/BtnClose6.png)';
    document.getElementById("closeBtn").style.backgroundImage = urlString;
    document.getElementById('playAudio_song1').setAttribute('data-audio-src', 'https://majemastoragelive.blob.core.windows.net/learn-english-test/ebook/Grade3/lunchtime/audio/Today_is_monday_MASTER_v2');
    document.getElementById('playAudio_song2').setAttribute('data-audio-src', 'https://majemastoragelive.blob.core.windows.net/learn-english-test/ebook/Grade3/lunchtime/audio/Today_is_monday_SINGBACK_MASTER_v2');
    document.getElementById("txtbgColor").setAttribute('data-seekTimeStart', '20');
    document.getElementById("popup1").setAttribute('src', 'https://majemastoragelive.blob.core.windows.net/learn-english-test/ebook/Grade3/index/img/song6.png');
    document.getElementById("popup1").setAttribute('data-imgurl', 'https://majemastoragelive.blob.core.windows.net/learn-english-test/ebook/Grade3/index/img/song6.png');
    var items = [
        ['0', '11.530', 'Today is Monday. Today is Monday. On Monday we have meatballs.'],
        ['10.63', '16.224', 'All you hungry children come and eat it up!'],
        ['18.09', '18.991', ''],
        ['18.09', '26.816', 'Today is Tuesday. Today is Tuesday. On Tuesday we have pasta.'],
        ['25.9', '31.724', 'All you hungry children come and eat it up!'],
        ['33.58', '34.474', ''],
        ['33.58', '42.052', 'Today is Wednesday. Today is Wednesday. On Wednesday we have sandwiches.'],
        ['41.37', '47.092', 'All you hungry children come and eat it up!'],
        ['48.94', '49.842', ''],
        ['48.94', '57.074', 'Today is Thursday. Today is Thursday. On Thursday we have chicken.'],
        ['56.72', '62.460', 'All you hungry children come and eat it up!'],
        ['64.16', '65.062', ''],
        ['64.16', '72.755', 'Today is Friday. Today is Friday. On Friday we have fresh fish.'],
        ['72.07', '77.828', 'All you hungry children come and eat it up!'],
        ['79.51', '80.413', ''],
        ['79.51', '88.370', 'Today is Saturday. Today is Saturday. On Saturday we have tacos.'],
        ['87.44', '93.180', 'All you hungry children come and eat it up!'],
        ['95.13', '96.028', ''],
        ['95.13', '103.724', 'Today is Sunday. Today is Sunday. On Sunday we have ice cream.'],
        ['102.8', '108.523', 'All you hungry children come and eat it up!']
    ];
    for (var l = 0; l < items.length; l++) {
        var createID = 'line_' + (l + 1);
        var ch_element = '<label id="' + createID + '" data-seekTimeStart="' + items[l][0] + '" data-rhymes="true" data-seekTimeEnd="' + items[l][1] + '" class="labelSong songText animated" style="top:54%" data-top="54">' + items[l][2] + '</label>';
        div = document.getElementById("create_songText");
        div.insertAdjacentHTML('beforeend', ch_element);
    }
}

function setImgURL_weather() {
    var urlString = 'url(https://majemastoragelive.blob.core.windows.net/learn-english-test/ebook/Grade3/index/img/BtnClose7.png)';
    document.getElementById("closeBtn").style.backgroundImage = urlString;
    document.getElementById('playAudio_song1').setAttribute('data-audio-src', 'https://majemastoragelive.blob.core.windows.net/learn-english-test/ebook/Grade3/weather/audio/Weather_song_MASTER_v1');
    document.getElementById('playAudio_song2').setAttribute('data-audio-src', 'https://majemastoragelive.blob.core.windows.net/learn-english-test/ebook/Grade3/weather/audio/Weather_song_SINGBACK_MASTER_v1');
    document.getElementById("txtbgColor").setAttribute('data-seekTimeStart', '23');
    document.getElementById("popup1").setAttribute('src', 'https://majemastoragelive.blob.core.windows.net/learn-english-test/ebook/Grade3/index/img/song7.png');
    document.getElementById("popup1").setAttribute('data-imgurl', 'https://majemastoragelive.blob.core.windows.net/learn-english-test/ebook/Grade3/index/img/song7.png');
    var items = [
        ['0', '10.663', 'What’s the weather, what’s the weather, what’s the weather like today?'],
        ['9.81', '18.038', 'All together, all together, what’s the weather like today?'],
        ['17.67', '23.458', '– Oh, listen to that sound …'],
        ['22.42', '30.477', 'It is windy. It is windy. It is windy out today.'],
        ['29.58', '38.119', 'Yes, you better, yes, you better use a jacket today.'],
        ['38.6', '39.495', ''],
        ['38.6', '46.782', 'What’s the weather, what’s the weather, what’s the weather like today?'],
        ['45.79', '53.979', 'All together, all together, what’s the weather like today?'],
        ['53.39', '59.530', '– Oh, listen to that sound …'],
        ['58.41', '66.508', 'It is raining. It is raining. It is raining out today.'],
        ['65.56', '73.75', 'Yes, you better, yes, you better use umbrella today.'],
        ['74.63', '75.526', ''],
        ['74.63', '82.768', 'What’s the weather, what’s the weather, what’s the weather like today?'],
        ['81.87', '89.832', 'All together, all together, what’s the weather like today?'],
        ['89.47', '95.408', '– Oh, listen to that sound …'],
        ['94.44', '102.405', 'It is snowing. It is snowing. It is snowing out today.'],
        ['101.64', '109.78', 'Yes, you better, yes, you better put your warm shoes on today.'],
        ['110.61', '111.512', ''],
        ['110.61', '118.755', 'What’s the weather, what’s the weather, what’s the weather like today?'],
        ['117.9', '125.463', 'All together, all together, what’s the weather like today?'],
        ['124.98', '131.439', '– Oh, listen to that sound …'],
        ['130.52', '138.481', 'It is sunny. It is sunny. It is sunny out today.'],
        ['137.63', '146.255', 'Oh, remember, oh remember, put your sunglasses on.']
    ];
    for (var l = 0; l < items.length; l++) {
        var createID = 'line_' + (l + 1);
        var ch_element = '<label id="' + createID + '" data-seekTimeStart="' + items[l][0] + '" data-rhymes="true" data-seekTimeEnd="' + items[l][1] + '" class="labelSong songText animated" style="top:54%" data-top="54">' + items[l][2] + '</label>';
        div = document.getElementById("create_songText");
        div.insertAdjacentHTML('beforeend', ch_element);
    }
}

function setImgURL_partytime() {
    var urlString = 'url(https://majemastoragelive.blob.core.windows.net/learn-english-test/ebook/Grade3/index/img/BtnClose8.png)';
    document.getElementById("closeBtn").style.backgroundImage = urlString;
    document.getElementById('playAudio_song1').setAttribute('data-audio-src', 'https://majemastoragelive.blob.core.windows.net/learn-english-test/ebook/Grade3/partytime/audio/Hokey_Pokey_MASTER_v1');
    document.getElementById('playAudio_song2').setAttribute('data-audio-src', 'https://majemastoragelive.blob.core.windows.net/learn-english-test/ebook/Grade3/partytime/audio/Hokey_Pokey_SINGBACK_MASTER_v1');
    document.getElementById("txtbgColor").setAttribute('data-seekTimeStart', '64');
    document.getElementById("popup1").setAttribute('src', 'https://majemastoragelive.blob.core.windows.net/learn-english-test/ebook/Grade3/index/img/song8.png');
    document.getElementById("popup1").setAttribute('data-imgurl', 'https://majemastoragelive.blob.core.windows.net/learn-english-test/ebook/Grade3/index/img/song8.png');
    var items = [
        ['0', '5.378', 'Put your right hand in,'],
        ['4.48', '7.255', 'put your right hand out,'],
        ['6.3', '9.031', 'put your right hand in'],
        ['8.08', '11.162', 'and shake it all about.'],
        ['10.31', '11.211', ' '],
        ['10.31', '14.865', 'Do the Hokey Pokey and you turn yourself around.'],
        ['13.91', '17.554', 'That’s what it’s all about.'],
        ['16.86', '17.756', ''],
        ['16.86', '19.837', 'Put your left hand in,'],
        ['18.79', '21.613', 'put your left hand out,'],
        ['20.61', '23.389', 'put your left hand in'],
        ['22.34', '25.52', 'and shake it all about.'],
        ['24.52', '25.417', ''],
        ['24.52', '28.97', 'Do the Hokey Pokey and you turn yourself around.'],
        ['28.27', '31.709', 'That’s what it’s all about.'],
        ['31.82', '32.723', ''],
        ['31.82', '46.27', 'Do the Hokey Pokey. Do the Hokey Pokey. Do the Hokey Pokey. That’s what it’s all about.'],
        ['45.68', '46.574', ''],
        ['45.68', '48.35', 'Put your right foot in,'],
        ['47.5', '50.278', 'put your right foot out,'],
        ['49.28', '52.054', 'put your right foot in'],
        ['51.1', '54.286', 'and shake it all about.'],
        ['53.29', '54.184', ''],
        ['53.29', '57.686', 'Do the Hokey Pokey and you turn yourself around.'],
        ['56.94', '60.375', 'That’s what it’s all about.'],
        ['60.03', '60.932', ''],
        ['60.03', '62.658', 'Put your left foot in,'],
        ['61.86', '64.586', 'put your left foot out,'],
        ['63.58', '66.361', 'put your left foot in'],
        ['65.41', '68.543', 'and shake it all about.'],
        ['67.69', '68.593', ''],
        ['67.69', '72.145', 'Do the Hokey Pokey and you turn yourself around.'],
        ['71.14', '74.327', 'That’s what it’s all about.'],
        ['74.82', '75.721', ''],
        ['74.82', '89.217', 'Do the Hokey Pokey. Do the Hokey Pokey. Do the Hokey Pokey. That’s what it’s all about.'],
        ['88.29', '89.191', ''],
        ['88.29', '91.475', 'Put your head in,'],
        ['90.5', '93.251', 'put your head out,'],
        ['92.27', '94.976', 'put your head in'],
        ['94.08', '97.259', 'and shake it all about.'],
        ['96.33', '97.233', ''],
        ['96.33', '100.709', 'Do the Hokey Pokey and you turn yourself around.'],
        ['99.94', '103.347', 'That’s what it’s all about.'],
        ['102.9', '103.803', ''],
        ['102.9', '105.757', 'Put your buttocks in,'],
        ['104.81', '107.558', 'put your buttocks out,'],
        ['106.63', '109.334', 'put your buttocks in'],
        ['108.41', '110.351', 'and shake it all about.'],
        ['110.62', '110.61', ''],
        ['110.62', '115.126', 'Do the Hokey Pokey and you turn yourself around.'],
        ['114.17', '117.840', 'That’s what it’s all about.'],
        ['117.815', '117.814', ' '],
        ['117.815', '132.120', 'Do the Hokey Pokey. Do the Hokey Pokey. Do the Hokey Pokey. That’s what it’s all about.'],
        ['131.62', '131.61', ''],
        ['131.62', '134.448', 'Put your whole self in,'],
        ['133.48', '136.223', 'put your whole self out,'],
        ['135.28', '137.999', 'put your whole self in'],
        ['137.09', '140.257', 'and shake it all about.'],
        ['139.31', '140.205', ''],
        ['139.31', '143.453', 'Do the Hokey Pokey and you turn yourself around.'],
        ['142.86', '146.523', 'That’s what it’s all about.'],
        ['146.48', '147.384', ''],
        ['146.48', '160.855', 'Do the Hokey Pokey. Do the Hokey Pokey. Do the Hokey Pokey. That’s what it’s all about.'],
        ['160.68', '175.061', 'Do the Hokey Pokey. Do the Hokey Pokey. Do the Hokey Pokey. That’s what it’s all about.']
    ];
    for (var l = 0; l < items.length; l++) {
        var createID = 'line_' + (l + 1);
        var ch_element = '<label id="' + createID + '" data-seekTimeStart="' + items[l][0] + '" data-rhymes="true" data-seekTimeEnd="' + items[l][1] + '" class="labelSong songText animated" style="top:54%" data-top="54">' + items[l][2] + '</label>';
        div = document.getElementById("create_songText");
        div.insertAdjacentHTML('beforeend', ch_element);
    }
}

function setImgURL_everyday() {
    var urlString = 'url(https://majemastoragelive.blob.core.windows.net/learn-english-test/ebook/Grade3/index/img/BtnClose9.png)';
    document.getElementById("closeBtn").style.backgroundImage = urlString;
    document.getElementById('playAudio_song1').setAttribute('data-audio-src', 'https://majemastoragelive.blob.core.windows.net/learn-english-test/ebook/Grade3/everyday/audio/When_you_wake_up_in_the_morning_MASTER_v1');
    document.getElementById('playAudio_song2').setAttribute('data-audio-src', 'https://majemastoragelive.blob.core.windows.net/learn-english-test/ebook/Grade3/everyday/audio/When_you_wake_up_in_the_morning_SINGBACK_MASTER_v1');
    document.getElementById("txtbgColor").setAttribute('data-seekTimeStart', '38');
    document.getElementById("popup1").setAttribute('src', 'https://majemastoragelive.blob.core.windows.net/learn-english-test/ebook/Grade3/index/img/song9.png');
    document.getElementById("popup1").setAttribute('data-imgurl', 'https://majemastoragelive.blob.core.windows.net/learn-english-test/ebook/Grade3/index/img/song9.png');
    var items = [
        ['0', '4.094', 'When you wake up in the morning'],
        ['3.12', '5.967', 'it’s a quarter to one,'],
        ['4.93', '9.505', 'and you want to have a little fun.'],
        ['8.4', '11.24', 'You brush your teeth.'],
        ['11.94', '15.195', 'You brush your teeth.'],
        ['16.38', '17.275', ''],
        ['16.38', '19.496', 'When you wake up in the morning'],
        ['18.53', '21.37', 'it’s a quarter to two,'],
        ['20.33', '24.978', 'and you want to have something to do.'],
        ['24.08', '26.105', 'You walk the dog.'],
        ['27.37', '29.938', 'You walk the dog.'],
        ['32.35', '33.250', ''],
        ['32.35', '38.073', 'Every day you want something to do.'],
        ['40.04', '45.723', 'Every day has something new for you.'],
        ['47.23', '48.133', ''],
        ['47.23', '50.215', 'When you wake up in the morning'],
        ['49.33', '51.95', 'it’s a quarter to three,'],
        ['51.03', '55.697', 'and you want to feel a little free.'],
        ['54.57', '57.119', 'You sing a song.'],
        ['58.11', '60.727', 'You sing a song.'],
        ['62.53', '63.432', ''],
        ['62.53', '65.618', 'When you wake up in the morning'],
        ['64.54', '67.387', 'it’s a quarter to four,'],
        ['66.47', '71.169', 'and you want to do something more.'],
        ['70.16', '72.487', 'You bake a cake.'],
        ['73.48', '76.355', 'You bake a cake.'],
        ['78.44', '79.338', ''],
        ['78.44', '83.727', 'Every day you want something to do.'],
        ['86.14', '91.394', 'Every day has something new for you.'],
        ['93.32', '94.220', ''],
        ['93.32', '96.441', 'When you wake up in the morning'],
        ['95.66', '98.124', 'it’s a quarter to five,'],
        ['97.19', '101.87', 'and you want to feel a little alive.'],
        ['101', '102.98', 'You dance around.'],
        ['104.35', '107.057', 'You dance around.'],
        ['108.48', '109.380', ''],
        ['108.48', '110.89', 'You dance around.'],
        ['111.81', '114.689', 'You dance around.']
    ];
    for (var l = 0; l < items.length; l++) {
        var createID = 'line_' + (l + 1);
        var ch_element = '<label id="' + createID + '" data-seekTimeStart="' + items[l][0] + '" data-rhymes="true" data-seekTimeEnd="' + items[l][1] + '" class="labelSong songText animated" style="top:54%" data-top="54">' + items[l][2] + '</label>';
        div = document.getElementById("create_songText");
        div.insertAdjacentHTML('beforeend', ch_element);
    }
}

function setImgURL_thehouse() {
    var urlString = 'url(https://majemastoragelive.blob.core.windows.net/learn-english-test/ebook/Grade3/index/img/BtnClose10.png)';
    document.getElementById("closeBtn").style.backgroundImage = urlString;
    document.getElementById('playAudio_song1').setAttribute('data-audio-src', 'https://majemastoragelive.blob.core.windows.net/learn-english-test/ebook/Grade3/thehouse/audio/There_is_a_kangaroo_in_my_kitchen_MASTER_v1');
    document.getElementById('playAudio_song2').setAttribute('data-audio-src', 'https://majemastoragelive.blob.core.windows.net/learn-english-test/ebook/Grade3/thehouse/audio/There_is_a_kangaroo_in_my_kitchen_SINGBACK_MASTER_v1');
    document.getElementById("txtbgColor").setAttribute('data-seekTimeStart', '23');
    document.getElementById("popup1").setAttribute('src', 'https://majemastoragelive.blob.core.windows.net/learn-english-test/ebook/Grade3/index/img/song10.png');
    document.getElementById("popup1").setAttribute('data-imgurl', 'https://majemastoragelive.blob.core.windows.net/learn-english-test/ebook/Grade3/index/img/song10.png');
    var items = [
        ['0', '13.395', 'There’s a kangaroo in my kitchen,'],
        ['12.54', '15.69', 'there’s a hippo in my hall.'],
        ['15.04', '18.61', 'A giraffe is in my living room,'],
        ['17.63', '20.613', 'he’s a hundred meters tall.'],
        ['20.42', '21.322', ''],
        ['20.42', '23.659', 'My house is full of animals,'],
        ['22.58', '25.694', 'I don’t know what to do.'],
        ['25.15', '28.312', 'I think I’m going crazy,'],
        ['27.66', '30.691', 'I’m living in a zoo.'],
        ['31.4', '32.296', ''],
        ['31.4', '34.634', 'There’s a monkey in my bedroom,'],
        ['33.97', '36.929', 'there’s a lion on the stairs.'],
        ['36.5', '39.672', 'There’s a zebra in my garden,'],
        ['38.75', '42.353', 'sitting in the garden chairs.'],
        ['41.56', '42.457', ''],
        ['41.56', '45.034', 'My house is full of animals,'],
        ['44.11', '47.173', 'I don’t know what to do.'],
        ['46.63', '49.791', 'I think I’m going crazy,'],
        ['49.13', '52.295', 'I’m living in a zoo.'],
        ['55.17', '58.909', 'My house is full of animals,'],
        ['58.06', '60.933', 'I don’t know what to do.'],
        ['60.58', '63.655', 'I think I’m going crazy,'],
        ['63.08', '66.534', 'I’m living in a zoo.']
    ];
    for (var l = 0; l < items.length; l++) {
        var createID = 'line_' + (l + 1);
        var ch_element = '<label id="' + createID + '" data-seekTimeStart="' + items[l][0] + '" data-rhymes="true" data-seekTimeEnd="' + items[l][1] + '" class="labelSong songText animated" style="top:54%" data-top="54">' + items[l][2] + '</label>';
        div = document.getElementById("create_songText");
        div.insertAdjacentHTML('beforeend', ch_element);
    }
}


function song_clearIndexNew() {
    document.getElementById("playAudio_song1").style.display = 'none';
    document.getElementById("playAudio_song1").style.zIndex = '1';
    document.getElementById("playAudio_song2").style.display = 'none';
    document.getElementById("playAudio_song2").style.zIndex = '1';
    document.getElementById("popup1").setAttribute('src', 'https://majemastoragelive.blob.core.windows.net/learn-english-test/ebook/Grade3/index/img/popupSong.png');
    document.getElementById("popup1").setAttribute('data-imgurl', 'https://majemastoragelive.blob.core.windows.net/learn-english-test/ebook/Grade3/index/img/popupSong.png');
}

function txtbgColorIndex() {
    var txtbgColor = $$("txtbgColor");
    txtbgColor.style.display = "none";
    txtbgColor.style.zIndex = -1;

    var myNode = document.getElementById("create_songText");
    myNode.innerHTML = '';
    document.getElementById("txtbgColor").setAttribute('data-seekTimeStart', '1');

}
